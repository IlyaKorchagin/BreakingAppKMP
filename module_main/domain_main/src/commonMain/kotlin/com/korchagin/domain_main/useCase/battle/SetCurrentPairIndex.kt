package com.korchagin.domain_main.useCase.battle

import com.korchagin.data.repository.battle.BattleRepository


class SetCurrentPairIndex(private val repository: BattleRepository) {
    suspend fun setCurrentPairIndex(eventId: String, pairIndex: Int) =
        repository.setCurrentPairIndex(eventId, pairIndex)
}