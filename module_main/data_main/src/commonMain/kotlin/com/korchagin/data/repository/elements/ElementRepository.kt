package com.korchagin.data.repository.elements

import com.korchagin.data.models.ElementEntry
import kotlinx.coroutines.flow.Flow

interface ElementRepository {
    suspend fun getFreezeElements(): Flow<List<ElementEntry>>
    suspend fun getPowerElements(): Flow<List<ElementEntry>>
    suspend fun getOfpElements(): Flow<List<ElementEntry>>
    suspend fun getStretchElements(): Flow<List<ElementEntry>>
    suspend fun getFootWorkElements(): Flow<List<ElementEntry>>
}