package com.korchagin.data.repository.selection

import kotlinx.coroutines.flow.Flow

interface SelectionRepository {
    suspend fun setSelectionPoints(
        eventId: String,
        usersList: List<String>,
        judgeId: String,
        pointsList: List<Double>
    )

    fun getSelectionPoints(
        eventId: String,
        pupilId: String,
        judgeId: String
    ): Flow<Double>

    suspend fun setCurrentSelectionGroup(eventId: String, selectionGroup: Int)
}