package com.korchagin.presentation.notifications


interface FcmTokenProvider {
    suspend fun getToken(): String
}