package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.UserRepository
import com.korchagin.domain_main.models.ElementDomainModel
import com.korchagin.domain_main.models.toElementDomainModel
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map


class GetStretchElements(private val repository: UserRepository) {
    fun getStretchElements(): Flow<List<ElementDomainModel>> = repository.getStretchElements().map { elements ->
        elements.map { it.toElementDomainModel() }
    }
}