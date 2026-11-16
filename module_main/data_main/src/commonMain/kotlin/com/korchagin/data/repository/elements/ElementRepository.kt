package com.korchagin.data.repository.elements

import com.korchagin.data.models.ElementEntry
import kotlinx.coroutines.flow.Flow

interface ElementRepository {
    fun getFreezeElements(): Flow<List<ElementEntry>>
    fun getPowerElements(): Flow<List<ElementEntry>>
    fun getOfpElements(): Flow<List<ElementEntry>>
    fun getStretchElements(): Flow<List<ElementEntry>>
    fun getFootWorkElements(): Flow<List<ElementEntry>>
}