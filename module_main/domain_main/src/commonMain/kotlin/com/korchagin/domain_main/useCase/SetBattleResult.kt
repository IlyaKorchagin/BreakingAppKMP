package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.UserRepository


class SetBattleResult(private val repository: UserRepository) {
    suspend fun setBattleResult(usersList: List<String>, pointsList: List<Int>, eventId: String , judgeId: String, round: String) =
        repository.setBattlePoints(
            eventId = eventId,
            usersList = usersList,
            judgeId = judgeId,
            pointsList = pointsList,
            round = round)

    suspend fun setBattlePosition(eventId: String, usersList: List<String>, battlePositions: List<Int>) =
        repository.setBattlePosition(eventId, usersList, battlePositions)
}