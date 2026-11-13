package com.korchagin.data.repository.judjes

import com.korchagin.data.models.EventEntry
import com.korchagin.data.models.JudgeEntry
import dev.gitlive.firebase.Firebase
import dev.gitlive.firebase.database.database
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.channelFlow
import kotlinx.coroutines.flow.first

class JudgeRepositoryImpl : JudgeRepository {

    private val judgesDB by lazy {
        Firebase.database.reference("Judges")
    }

    private val eventsDB by lazy {
        Firebase.database.reference("Events")
    }

    override suspend fun getJudges(): Flow<List<JudgeEntry>> = channelFlow {
        judgesDB.valueEvents.collect { judge ->
            val judges = judge.children.mapNotNull {
                try {
                    println("LOG: ${it.value}")
                    it.value<JudgeEntry>()
                } catch (e: Exception) {
                    println("Error decoding coaches: ${e.message}")
                    null
                }
            }

            send(judges)
        }
    }

    override suspend fun judgeRegister(
        judge: JudgeEntry,
        event: EventEntry
    ): Boolean {
        val eventRef = eventsDB.child(event.title)
            .child("judges")
            .child(judge.id)

        val snapshot = eventRef.valueEvents.first()

        if (snapshot.value != null) {
            println("⚠ Пользователь уже зарегистрирован")
            return false
        }

        eventRef.setValue(true)

        return true
    }

    override suspend fun judgeUnregister(
        judge: JudgeEntry,
        event: EventEntry
    ): Boolean {
        val eventRef = eventsDB.child(event.title)
            .child("judges")
            .child(judge.id)

        val snapshot = eventRef.valueEvents.first()

        if (snapshot.value == null) {
            println("⚠ Пользователь не был зарегистрирован")
            return false
        }

        return try {
            eventRef.removeValue()
            println("🗑 Пользователь ${judge.name} отписан от события ${event.title}")
            true
        } catch (e: Exception) {
            println("❌ Ошибка при удалении из Firebase: ${e.message}")
            false
        }
    }
}