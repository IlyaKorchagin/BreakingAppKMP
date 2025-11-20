package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.UserRepository
import com.korchagin.domain_main.models.ElementDomainModel
import com.korchagin.domain_main.models.toElementDomainModel
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map


class GetOfpElements(private val repository: UserRepository) {
    suspend fun getOfpElements(): Flow<List<ElementDomainModel>> = repository.getOfpElements().map { elements ->
        elements.map { it.toElementDomainModel() }
    }
}