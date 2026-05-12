package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.UserRepository
import com.korchagin.domain_main.models.EventDomainModel
import com.korchagin.domain_main.models.EventParticipantsDomain
import com.korchagin.domain_main.models.toEventDataModel
import kotlinx.coroutines.flow.map
import com.korchagin.domain_main.models.toEventParticipantsDomain
import kotlinx.coroutines.flow.Flow


class GetEventParticipants(private val repository: UserRepository) {
    suspend fun getEventParticipants(event: EventDomainModel): Flow<List<EventParticipantsDomain>> =
        repository.getEventParticipants(event.toEventDataModel()).map { list ->
            list.map { it.toEventParticipantsDomain() }
        }
}
