package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.UserRepository
import com.korchagin.domain_main.models.ElementDomainModel
import com.korchagin.domain_main.models.toElementDomainModel
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map


class GetPowerElements(private val repository: UserRepository) {
    suspend fun getPowerElements(): Flow<List<ElementDomainModel>> = repository.getPowerElements().map { elements ->
        elements.map { it.toElementDomainModel() }
    }
}