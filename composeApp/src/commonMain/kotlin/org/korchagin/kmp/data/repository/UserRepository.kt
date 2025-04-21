package org.korchagin.kmp.data.repository

import kotlinx.coroutines.flow.Flow
import org.korchagin.kmp.data.models.PupilEntry

interface UserRepository {
    fun getUsers(): Flow<List<PupilEntry>>
    fun getUserById(id: String): Flow<PupilEntry?>
}

