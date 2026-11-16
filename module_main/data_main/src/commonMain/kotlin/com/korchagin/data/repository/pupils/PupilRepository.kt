package com.korchagin.data.repository.pupils

import com.korchagin.data.models.UserEntry
import com.korchagin.module_common.Response
import kotlinx.coroutines.flow.Flow

interface PupilRepository {
    fun getUsers(): Flow<List<UserEntry>>
    fun getUserById(id: String): Flow<UserEntry>
    suspend fun createNewPupil(
        email: String,
        name: String,
        coach: List<String>,
        authUid: String
    )

    suspend fun updateAvatar(authUid: String, data: ByteArray): Response<Unit>
    suspend fun updatePupil(newUserEntry: UserEntry): Response<Unit>
    suspend fun updatePupils(newUserEntries: List<UserEntry>): Response<Unit>
}