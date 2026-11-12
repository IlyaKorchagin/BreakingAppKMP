package com.korchagin.presentation.notifications

import android.util.Log
import com.google.firebase.messaging.FirebaseMessaging
import kotlinx.coroutines.tasks.await

class FcmTokenProviderImpl : FcmTokenProvider {

    override suspend fun getToken(): String {
        return try {
            val token = FirebaseMessaging
                .getInstance()
                .token
                .await()
            Log.d("FCM_TEST", "FCM token: $token")
            Log.e("FCM_TEST", "Token received, length=${token.length}")
            token
        } catch (e: Exception) {
            Log.e("FCM_TEST", "Failed to get token", e)
            throw e
        }
    }
}