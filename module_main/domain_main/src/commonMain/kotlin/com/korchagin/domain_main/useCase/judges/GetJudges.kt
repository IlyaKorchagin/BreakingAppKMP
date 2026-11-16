package com.korchagin.domain_main.useCase.judges

import com.korchagin.data.repository.judjes.JudgeRepository
import com.korchagin.domain_main.models.JudgeDomainModel
import com.korchagin.domain_main.models.toJudgeDomainModel
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map

class GetJudges(private val repository: JudgeRepository) {
    fun getJudges(): Flow<List<JudgeDomainModel>> = repository.getJudges().map { judge ->
        judge.map { it.toJudgeDomainModel() }
    }
}