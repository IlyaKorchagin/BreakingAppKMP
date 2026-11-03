package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.user.UserRepository


class SetCurrentSelectionGroup(private val repository: UserRepository) {
    suspend fun setCurrentSelectionGroup(eventId: String, selectionGroup: Int) =
        repository.setCurrentSelectionGroup(eventId, selectionGroup)
}