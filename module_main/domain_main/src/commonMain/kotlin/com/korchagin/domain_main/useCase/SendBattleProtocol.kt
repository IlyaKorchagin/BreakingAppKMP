package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.UserRepository
import com.korchagin.domain_main.models.EventDomainModel
import com.korchagin.domain_main.models.EventParticipantsDomain
import com.korchagin.domain_main.models.toEventDataModel
import com.korchagin.domain_main.models.toEventParticipantsEntry


class SendBattleProtocol(private val repository: UserRepository) {
    suspend fun sendBattleProtocol(participants: List<EventParticipantsDomain>, event: EventDomainModel) = repository.sendBattleProtocol(participants.map { it.toEventParticipantsEntry()}, event.toEventDataModel())
}