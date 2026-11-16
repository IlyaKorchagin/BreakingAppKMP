package com.korchagin.data.repository.additional

import com.korchagin.data.models.BboyEntry
import com.korchagin.data.models.CoachEntry
import kotlinx.coroutines.flow.Flow

interface AdditionalRepository {
    fun getCoaches(): Flow<List<CoachEntry>>
    fun getBboysList(): Flow<List<BboyEntry>>

    suspend fun saveFcmToken(authUid: String, token: String)
}