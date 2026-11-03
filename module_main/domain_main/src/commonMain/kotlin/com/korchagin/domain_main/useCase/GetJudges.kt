package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.user.UserRepository
import com.korchagin.domain_main.models.JudgeDomainModel
import com.korchagin.domain_main.models.toJudgeDomainModel
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map


class GetJudges(private val repository: UserRepository) {
    suspend fun getJudges(): Flow<List<JudgeDomainModel>> = repository.getJudges().map { judge ->
        judge.map { it.toJudgeDomainModel() }
    }
}