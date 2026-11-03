package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.user.UserRepository
import com.korchagin.domain_main.models.EventParticipantsDomain
import kotlinx.coroutines.flow.map
import com.korchagin.domain_main.models.toEventParticipantsDomain
import kotlinx.coroutines.flow.Flow


class ObserveParticipants(private val repository: UserRepository) {
    suspend fun observeEventParticipants(eventId: String): Flow<List<EventParticipantsDomain>> =
        repository.observeParticipants(eventId).map { list ->
            list.map { it.toEventParticipantsDomain() }
        }
}
