package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.UserRepository
import com.korchagin.domain_main.models.EventDomainModel
import com.korchagin.domain_main.models.toEventDomainModel
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map


class GetEvents(private val repository: UserRepository) {
    suspend fun getEvents(): Flow<List<EventDomainModel>> = repository.getEvents().map { event ->
        event.map { it.toEventDomainModel() }
    }
}