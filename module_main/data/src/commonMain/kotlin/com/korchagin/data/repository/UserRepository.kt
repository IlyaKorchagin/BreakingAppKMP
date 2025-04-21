package com.korchagin.data.repository

import com.korchagin.data.models.PupilEntry
import kotlinx.coroutines.flow.Flow

interface UserRepository {
    fun getUsers(): Flow<List<PupilEntry>>
    fun getUserById(id: String): Flow<PupilEntry?>
}

