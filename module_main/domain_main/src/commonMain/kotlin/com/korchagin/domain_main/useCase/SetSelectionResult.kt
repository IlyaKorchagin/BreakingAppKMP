package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.UserRepository
import com.korchagin.domain_main.models.EventDomainModel
import com.korchagin.domain_main.models.EventParticipantsDomain
import com.korchagin.domain_main.models.toEventDataModel
import com.korchagin.domain_main.models.toEventParticipantsEntry


class SetSelectionResult(private val repository: UserRepository) {
    suspend fun setSelectionResults(usersList: List<String>, pointsList: List<Double>, eventId: String , judgeId: String) =
        repository.setSelectionPoints(
            eventId = eventId,
            usersList = usersList,
            judgeId = judgeId,
            pointsList = pointsList)
}