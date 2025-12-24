package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.UserRepository
import com.korchagin.domain_main.models.EventDomainModel
import com.korchagin.domain_main.models.EventParticipantsDomain
import com.korchagin.domain_main.models.toEventDataModel
import com.korchagin.domain_main.models.toEventParticipantsEntry


class SetBattleResult(private val repository: UserRepository) {
    suspend fun setBattleResults(participants: List<EventParticipantsDomain>, event: EventDomainModel) = repository.setBattleResult(participants.map { it.toEventParticipantsEntry()}, event.toEventDataModel())
}