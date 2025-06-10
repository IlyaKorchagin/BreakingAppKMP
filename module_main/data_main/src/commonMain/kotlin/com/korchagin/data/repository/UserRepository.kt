package com.korchagin.data.repository

import com.korchagin.data.models.BboyEntry
import com.korchagin.data.models.ElementEntry
import com.korchagin.data.models.PupilEntry
import kotlinx.coroutines.flow.Flow

interface UserRepository {
    fun getUsers(): Flow<List<PupilEntry>>
    fun getUserById(id: String): Flow<PupilEntry>
    fun getFreezeElements(): Flow<List<ElementEntry>>
    fun getPowerElements(): Flow<List<ElementEntry>>
    fun getOfpElements(): Flow<List<ElementEntry>>
    fun getStretchElements(): Flow<List<ElementEntry>>
    fun getBboysList(): Flow<List<BboyEntry>>

    suspend fun createNewPupil(email: String, name: String)
}

