package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.UserRepository
import kotlinx.coroutines.flow.Flow


class GetSelectionPoints(private val repository: UserRepository) {
    fun getSelectionPoints(
        eventId: String,
        pupilId: String,
        judgeId: String
    ): Flow<Double> = repository.getSelectionPoints(eventId, pupilId, judgeId)
}