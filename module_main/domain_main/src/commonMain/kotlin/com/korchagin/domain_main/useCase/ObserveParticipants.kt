package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.events.EventRepository
import com.korchagin.domain_main.models.EventParticipantsDomain
import com.korchagin.domain_main.models.toEventParticipantsDomain
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map


class ObserveParticipants(private val repository: EventRepository) {
    suspend fun observeEventParticipants(eventId: String): Flow<List<EventParticipantsDomain>> =
        repository.observeParticipants(eventId).map { list ->
            list.map { it.toEventParticipantsDomain() }
        }
}
