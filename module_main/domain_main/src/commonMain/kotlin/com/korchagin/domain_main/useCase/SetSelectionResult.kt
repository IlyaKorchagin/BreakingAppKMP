package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.selection.SelectionRepository


class SetSelectionResult(private val repository: SelectionRepository) {
    suspend fun setSelectionResults(usersList: List<String>, pointsList: List<Double>, eventId: String , judgeId: String) =
        repository.setSelectionPoints(
            eventId = eventId,
            usersList = usersList,
            judgeId = judgeId,
            pointsList = pointsList)
}