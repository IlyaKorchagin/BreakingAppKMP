package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.battle.BattleRepository


class SetCurrentRound(private val repository: BattleRepository) {
    suspend fun setCurrentRound(eventId: String, round: String) =
        repository.setCurrentRound(eventId, round)
}