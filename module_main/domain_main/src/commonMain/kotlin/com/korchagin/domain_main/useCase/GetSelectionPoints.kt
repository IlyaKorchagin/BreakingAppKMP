package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.selection.SelectionRepository
import kotlinx.coroutines.flow.Flow


class GetSelectionPoints(private val repository: SelectionRepository) {
    fun getSelectionPoints(
        eventId: String,
        pupilId: String,
        judgeId: String
    ): Flow<Double> = repository.getSelectionPoints(eventId, pupilId, judgeId)
}