package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.selection.SelectionRepository


class SetCurrentSelectionGroup(private val repository: SelectionRepository) {
    suspend fun setCurrentSelectionGroup(eventId: String, selectionGroup: Int) =
        repository.setCurrentSelectionGroup(eventId, selectionGroup)
}