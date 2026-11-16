package com.korchagin.domain_main.useCase.additional

import com.korchagin.data.repository.additional.AdditionalRepository
import com.korchagin.domain_main.models.CoachDomainModel
import com.korchagin.domain_main.models.toCoachDomainModel
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map


class GetCoaches(private val repository: AdditionalRepository) {
    fun getCoaches(): Flow<List<CoachDomainModel>> = repository.getCoaches().map { coach ->
        coach.map { it.toCoachDomainModel() }
    }
}