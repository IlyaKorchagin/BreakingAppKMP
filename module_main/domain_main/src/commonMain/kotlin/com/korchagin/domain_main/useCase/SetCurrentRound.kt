package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.user.UserRepository


class SetCurrentRound(private val repository: UserRepository) {
    suspend fun setCurrentRound(eventId: String, round: String) =
        repository.setCurrentRound(eventId, round)
}