package com.korchagin.data.repository.judjes

import com.korchagin.data.models.EventEntry
import com.korchagin.data.models.JudgeEntry
import kotlinx.coroutines.flow.Flow

interface JudgeRepository {
    suspend fun getJudges(): Flow<List<JudgeEntry>>
    suspend fun judgeRegister(judge: JudgeEntry, event: EventEntry): Boolean
    suspend fun judgeUnregister(judge: JudgeEntry, event: EventEntry): Boolean
}