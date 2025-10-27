package com.korchagin.data.repository

import com.korchagin.data.models.BboyEntry
import com.korchagin.data.models.ElementEntry
import com.korchagin.data.models.UserEntry
import com.korchagin.module_common.Response
import kotlinx.coroutines.flow.Flow

interface UserRepository {
    fun getUsers(): Flow<List<UserEntry>>
    fun getUserById(id: String): Flow<UserEntry>
    fun getFreezeElements(): Flow<List<ElementEntry>>
    fun getPowerElements(): Flow<List<ElementEntry>>
    fun getOfpElements(): Flow<List<ElementEntry>>
    fun getStretchElements(): Flow<List<ElementEntry>>
    fun getBboysList(): Flow<List<BboyEntry>>
    suspend fun createNewPupil(email: String, name: String)

    suspend fun updateAvatar(email: String, data: ByteArray):Response<Unit>

    suspend fun updatePupil(newUserEntry: UserEntry): Response<Unit>

    suspend fun updatePupils(newUserEntries: List<UserEntry>): Response<Unit>

}

