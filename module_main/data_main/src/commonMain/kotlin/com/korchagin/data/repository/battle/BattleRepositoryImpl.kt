package com.korchagin.data.repository.battle

import com.korchagin.data.models.EventEntry
import com.korchagin.data.models.EventParticipantsEntry
import dev.gitlive.firebase.Firebase
import dev.gitlive.firebase.database.database
import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.plugins.onUpload
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.client.request.setBody
import io.ktor.http.ContentType
import io.ktor.http.contentType

class BattleRepositoryImpl(
    private val client: HttpClient
) : BattleRepository {

    private val eventsDB by lazy {
        Firebase.database.reference("Events")
    }

    override suspend fun sendBattleProtocol(
        participants: List<EventParticipantsEntry>,
        event: EventEntry
    ): Boolean {
        try {
            val sortedParticipants = participants
                .filter { it.battlePosition > 0 }
                .sortedBy { it.battlePosition }

            sortedParticipants.forEach { participant ->
                val lastRoundEntry = participant.battlePoints?.entries?.lastOrNull()

                val payload = mapOf(
                    "name" to participant.name,
                    "selection_points" to "${participant.selectionPoints}",
                    "last_round" to (lastRoundEntry?.key ?: ""),
                    "points" to (lastRoundEntry?.value?.toString() ?: "0"),
                    "battle_position" to "${participant.battlePosition}"
                )

                val responseText = client.post("${event.regUrl}/api/protocol") {
                    contentType(ContentType.Application.Json)
                    header("Accept", "*/*")
                    setBody(payload)

                    onUpload { bytesSentTotal, contentLength ->
                        println("LOG: sent protocol: $bytesSentTotal / $contentLength")
                    }
                }.body<String>()

                println(
                    "Google script response for ${participant.name} = $responseText"
                )
            }

            return true
        } catch (e: Exception) {
            println("Ошибка при записи протокола: $e")
            return false
        }
    }

    override suspend fun setBattlePoints(
        eventId: String,
        usersList: List<String>,
        judgeId: String,
        pointsList: List<Int>,
        round: String
    ) {
        usersList.forEachIndexed { index, userId ->
           eventsDB
                .child(eventId)
                .child("participants")
                .child(userId)
                .child("battlePoints")
                .child(round)
                .child(judgeId)
                .setValue(pointsList[index])
        }
    }

    override suspend fun setBattlePosition(
        eventId: String,
        usersList: List<String>,
        battlePositions: List<Int>
    ) {
        usersList.forEachIndexed { index, userId ->
            eventsDB
                .child(eventId)
                .child("participants")
                .child(userId)
                .child("battlePosition")
                .setValue(battlePositions[index])
        }
    }

    override suspend fun setCurrentRound(
        eventId: String,
        round: String
    ) {
        eventsDB
            .child(eventId)
            .child("currentRound")
            .setValue(round)
    }

    override suspend fun setCurrentPairIndex(
        eventId: String,
        pairIndex: Int
    ) {
        println("set pairIndex - $pairIndex")

        eventsDB
            .child(eventId)
            .child("currentPairIndex")
            .setValue(pairIndex)
    }
}