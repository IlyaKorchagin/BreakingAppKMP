package com.korchagin.data_auth.repository

import dev.gitlive.firebase.auth.FirebaseAuth

class AuthRepositoryImpl(
    private val auth: FirebaseAuth
): AuthRepository {

    override suspend fun loginUser(email: String, password: String): Result<Unit> = try {
        auth.signInWithEmailAndPassword(email, password).user
        Result.success(Unit)
    }
     catch (e: Exception) {
        Result.failure(e)
    }


    override suspend fun signIn(email: String, password: String): Result<Unit> = try {
        auth.createUserWithEmailAndPassword(email, password).user
        Result.success(Unit)
    } catch (e: Exception) {
        Result.failure(e)
    }

    override suspend  fun signOut() {
       auth.signOut()
    }

    override suspend fun sendPasswordResetEmail(email: String): Result<Unit> = try {
        auth.sendPasswordResetEmail(email)
        Result.success(Unit)
    } catch (e: Exception) {
        Result.failure(e)
    }
}


