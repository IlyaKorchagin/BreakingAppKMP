package com.korchagin.data_auth.repository

interface AuthRepository {
    suspend fun loginUser(email: String, password: String):Result<Unit>
    suspend fun signIn(email: String, password: String):Result<Unit>

    suspend fun signOut()
    suspend fun sendPasswordResetEmail(email: String): Result<Unit>
}