package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.battle.BattleRepository
import com.korchagin.domain_main.models.EventDomainModel
import com.korchagin.domain_main.models.EventParticipantsDomain
import com.korchagin.domain_main.models.toEventDataModel
import com.korchagin.domain_main.models.toEventParticipantsEntry


class SendBattleProtocol(private val repository: BattleRepository) {
    suspend fun sendBattleProtocol(participants: List<EventParticipantsDomain>, event: EventDomainModel) = repository.sendBattleProtocol(participants.map { it.toEventParticipantsEntry()}, event.toEventDataModel())
}