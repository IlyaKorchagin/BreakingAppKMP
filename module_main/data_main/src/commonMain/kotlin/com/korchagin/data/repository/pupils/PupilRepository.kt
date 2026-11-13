package com.korchagin.data.repository.pupils

import com.korchagin.data.models.UserEntry
import com.korchagin.module_common.Response
import kotlinx.coroutines.flow.Flow

interface PupilRepository {
    suspend fun getUsers(): Flow<List<UserEntry>>
    suspend fun getUserById(id: String): Flow<UserEntry>
    suspend fun createNewPupil(
        email: String,
        name: String,
        coach: List<String>,
        authUid: String
    )

    suspend fun updateAvatar(email: String, data: ByteArray): Response<Unit>
    suspend fun updatePupil(newUserEntry: UserEntry): Response<Unit>
    suspend fun updatePupils(newUserEntries: List<UserEntry>): Response<Unit>
}