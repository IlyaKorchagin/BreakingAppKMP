package com.korchagin.data.repository.battle

import com.korchagin.data.models.EventEntry
import com.korchagin.data.models.EventParticipantsEntry

interface BattleRepository {
    suspend fun sendBattleProtocol(
        participants: List<EventParticipantsEntry>,
        event: EventEntry
    ): Boolean

    suspend fun setBattlePoints(
        eventId: String,
        usersList: List<String>,
        judgeId: String,
        pointsList: List<Int>,
        round: String
    )

    suspend fun setBattlePosition(
        eventId: String,
        usersList: List<String>,
        battlePositions: List<Int>
    )

    suspend fun setCurrentRound(eventId: String, round: String)
    suspend fun setCurrentPairIndex(eventId: String, pairIndex: Int)
}