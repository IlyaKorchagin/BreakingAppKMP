package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.user.UserRepository


class SetCurrentPairIndex(private val repository: UserRepository) {
    suspend fun setCurrentPairIndex(eventId: String, pairIndex: Int) =
        repository.setCurrentPairIndex(eventId, pairIndex)
}