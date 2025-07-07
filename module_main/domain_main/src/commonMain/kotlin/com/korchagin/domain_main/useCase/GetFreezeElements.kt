package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.UserRepository
import com.korchagin.domain_main.models.ElementDomainModel
import com.korchagin.domain_main.models.toElementDomainModel
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map


class GetFreezeElements(private val repository: UserRepository) {
    fun getFreezeElements(): Flow<List<ElementDomainModel>> = repository.getFreezeElements().map { elements ->
        elements.map { it.toElementDomainModel() }
    }
}