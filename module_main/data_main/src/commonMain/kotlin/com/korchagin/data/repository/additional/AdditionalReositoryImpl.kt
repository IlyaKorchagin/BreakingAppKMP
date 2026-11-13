package com.korchagin.data.repository.additional

import com.korchagin.data.models.BboyEntry
import com.korchagin.data.models.CoachEntry
import dev.gitlive.firebase.Firebase
import dev.gitlive.firebase.database.database
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.channelFlow

class AdditionalRepositoryImpl : AdditionalRepository {

    private val coachesDB by lazy {
        Firebase.database.reference("Coach")
    }

    private val bboysDB by lazy {
        Firebase.database.reference("Bio")
    }

    private val fcmTokensDB by lazy {
        Firebase.database.reference("FcmTokens")
    }

    override suspend fun getCoaches(): Flow<List<CoachEntry>> = channelFlow {
        coachesDB.valueEvents.collect { coach ->
            val coaches = coach.children.mapNotNull {
                try {
                    println("LOG: ${it.value}")
                    it.value<CoachEntry>()
                } catch (e: Exception) {
                    println("Error decoding coaches: ${e.message}")
                    null
                }
            }
            send(coaches)
        }
    }

    override suspend fun getBboysList(): Flow<List<BboyEntry>> = channelFlow {
        bboysDB.valueEvents.collect { bboys ->
            val bboysElements = bboys.children.mapNotNull {
                try {
                    it.value<BboyEntry>()
                } catch (e: Exception) {
                    println("Error decoding user: ${e.message}")
                    null
                }
            }
            send(bboysElements)
        }
    }

    override suspend fun saveFcmToken(
        authUid: String,
        token: String
    ) {
        try {
            fcmTokensDB
                .child(authUid)
                .child("token")
                .setValue(token)

            println("✅ FCM token saved for user: $authUid")
        } catch (e: Exception) {
            println("❌ Failed to save FCM token: ${e.message}")
            throw e
        }
    }
}