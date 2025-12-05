package com.korchagin.domain_auth.useCase

import com.korchagin.data_auth.repository.AuthRepository

class Auth(private val repository: AuthRepository) {
    suspend fun logIn(email: String, password: String): Result<Unit> {
       return repository.loginUser(email, password)
    }
    suspend fun logOut() = repository.signOut()
    suspend fun signIn(email: String, password: String): Result<Unit> {
     return repository.signIn(email, password)}
    suspend fun resetPassword(email: String): Result<Unit> {
        return repository.sendPasswordResetEmail(email)
    }
}