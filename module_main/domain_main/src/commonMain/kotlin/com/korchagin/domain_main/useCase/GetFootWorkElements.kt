package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.UserRepository
import com.korchagin.domain_main.models.ElementDomainModel
import com.korchagin.domain_main.models.toElementDomainModel
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map


class GetFootWorkElements(private val repository: UserRepository) {
    suspend fun getFootWorkElements(): Flow<List<ElementDomainModel>> = repository.getFootWorkElements().map { elements ->
        elements.map { it.toElementDomainModel() }
    }
}