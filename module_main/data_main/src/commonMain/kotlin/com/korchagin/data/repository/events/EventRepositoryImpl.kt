package com.korchagin.data.repository.events

import com.korchagin.data.models.EventEntry
import com.korchagin.data.models.EventParticipantsEntry
import com.korchagin.data.models.UserEntry
import com.korchagin.data.utils.toLocalDateOrNull
import dev.gitlive.firebase.Firebase
import dev.gitlive.firebase.database.database
import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.plugins.onUpload
import io.ktor.client.request.post
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.setBody
import io.ktor.http.ContentType
import io.ktor.http.contentType
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.channelFlow
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.flow.flow
import kotlinx.datetime.Clock
import kotlinx.datetime.TimeZone
import kotlinx.datetime.todayIn

class EventRepositoryImpl(
    private val client: HttpClient
) : EventRepository {

    private val eventsDB by lazy {
        Firebase.database.reference("Events")
    }

    private val today = Clock.System.todayIn(TimeZone.currentSystemDefault())

    override suspend fun getEvents(): Flow<List<EventEntry>> = channelFlow {
        eventsDB.valueEvents.collect { snapshot ->
            val events = snapshot.children.mapNotNull {
                try {
                    it.value<EventEntry>()
                } catch (e: Exception) {
                    null
                }
            }.filter { event ->
                val eventDate = event.data.toLocalDateOrNull()
                eventDate != null && eventDate >= today
            }

            println("Log: repo events - $events")
            send(events)
        }
    }

    private suspend fun getNextSelectionOrder(event: EventEntry): Int {
        val orderRef = eventsDB
            .child(event.title)
            .child("nextSelectionOrder")

        val snapshot = orderRef.valueEvents.first()
        val currentOrder = snapshot.value?.toString()?.toIntOrNull() ?: 1

        orderRef.setValue(currentOrder + 1)

        return currentOrder
    }

    override suspend fun registerToEvent(
        pupil: UserEntry,
        event: EventEntry
    ): Boolean {
        val eventRef = eventsDB.child(event.title)
            .child("participants")
            .child(pupil.id)

        val snapshot = eventRef.valueEvents.first()

        if (snapshot.value != null) {
            println("⚠ Пользователь уже зарегистрирован")
            return false
        }

        val selectionOrder = getNextSelectionOrder(event)

        val participant = EventParticipantsEntry(
            user_id = pupil.id,
            name = pupil.name,
            event_id = event.id,
            phone = pupil.email,
            timestamp = "",
            selectionOrder = selectionOrder,
            battlePoints = emptyMap(),
            selectionPoints = emptyMap(),
            battlePosition = 0
        )

        val payload = mapOf(
            "user_id" to pupil.id,
            "name" to pupil.name,
            "phone" to pupil.email,
            "event_id" to "event_id",
            "action" to "register",
        )

        val responseText = client.post("${event.regUrl}/api/register") {
            contentType(ContentType.Application.Json)
            header("Accept", "*/*")

            setBody(payload)

            onUpload { bytesSentTotal, contentLength ->
                println("sent: $bytesSentTotal / $contentLength")
            }
        }.body<String>()

        println("Google script response = $responseText")

        eventRef.setValue(participant)

        return true
    }

    override suspend fun unregisterFromEvent(
        pupil: UserEntry,
        event: EventEntry
    ): Boolean {
        val eventRoot = eventsDB.child(event.title)
        val participantsRef = eventRoot.child("participants")
        val eventRef = participantsRef.child(pupil.id)

        val snapshot = eventRef.valueEvents.first()

        if (snapshot.value == null) {
            println("⚠ Пользователь не был зарегистрирован")
            return false
        }

        val participant = snapshot.value<EventParticipantsEntry>()
        val removedOrder = participant.selectionOrder

        eventRef.removeValue()

        val participantsSnapshot = participantsRef.valueEvents.first()

        participantsSnapshot.children.forEach { child ->
            val user = child.value<EventParticipantsEntry>()

            if (user.selectionOrder > removedOrder) {
                participantsRef
                    .child(child.key!!)
                    .child("selectionOrder")
                    .setValue(user.selectionOrder - 1)
            }
        }

        println("🗑 Пользователь ${pupil.name} удалён, порядок сдвинут")

        return true
    }

    override suspend fun getEventParticipants(
        event: EventEntry
    ): Flow<List<EventParticipantsEntry>> = flow {
        try {
            val participants: List<EventParticipantsEntry> =
                client.get("${event.regUrl}/api/register").body()

            println("load participants - $participants")
            emit(participants)
        } catch (e: Exception) {
            println("Ошибка при загрузке участников: $e")
            emit(emptyList())
        }
    }

    override suspend fun observeParticipants(
        eventId: String
    ): Flow<List<EventParticipantsEntry>> = channelFlow {
        eventsDB
            .child(eventId)
            .child("participants")
            .valueEvents
            .collect { snapshot ->
                val users = snapshot.children.mapNotNull { child ->
                    try {
                        child.value<EventParticipantsEntry>()
                    } catch (e: Exception) {
                        println("Error decoding user ${child.key}: ${e.message}")
                        null
                    }
                }

                println("users - $users")
                send(users)
            }
    }
}