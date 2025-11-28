package com.korchagin.data.repository

import com.korchagin.data.models.BboyEntry
import com.korchagin.data.models.CoachEntry
import com.korchagin.data.models.ElementEntry
import com.korchagin.data.models.EventEntry
import com.korchagin.data.models.UserEntry
import com.korchagin.module_common.Response
import kotlinx.coroutines.flow.Flow

interface UserRepository {
    suspend fun getEvents(): Flow<List<EventEntry>>
    suspend fun getCoaches(): Flow<List<CoachEntry>>
    suspend fun getUsers(): Flow<List<UserEntry>>
    suspend fun getUserById(id: String): Flow<UserEntry>
    suspend fun getFreezeElements(): Flow<List<ElementEntry>>
    suspend fun getPowerElements(): Flow<List<ElementEntry>>
    suspend fun getOfpElements(): Flow<List<ElementEntry>>
    suspend fun getStretchElements(): Flow<List<ElementEntry>>
    suspend fun getBboysList(): Flow<List<BboyEntry>>
    suspend fun createNewPupil(email: String, name: String, coach: List<String>)

    suspend fun updateAvatar(email: String, data: ByteArray):Response<Unit>

    suspend fun updatePupil(newUserEntry: UserEntry): Response<Unit>

    suspend fun updatePupils(newUserEntries: List<UserEntry>): Response<Unit>

    suspend fun registerToEvent(pupil: UserEntry, event: EventEntry): Boolean

    suspend fun unregisterFromEvent(pupil: UserEntry, event: EventEntry): Boolean

}

