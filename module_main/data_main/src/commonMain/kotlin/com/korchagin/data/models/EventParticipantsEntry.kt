package com.korchagin.data.models

import com.korchagin.module_common.Rounds
import kotlinx.serialization.Serializable

@Serializable
data class EventParticipantsEntry(
    val timestamp: String,
    val user_id: String,
    val name: String,
    val phone: String,
    val event_id: String,
    val selectionPoints: Int = 0,
    val battlePoints: Map<Rounds, Int> = emptyMap(),
    val battlePosition: Int = 0
)

fun List<EventParticipantsEntry>.toSheetRows(): List<List<Any>> =
    flatMap { participant ->
        participant.battlePoints.map { (round, points) ->
            listOf(
                participant.timestamp,
                participant.user_id,
                participant.name,
                participant.phone,
                participant.event_id,
                participant.selectionPoints,
                round.name,          // или round.round
                points,
                participant.battlePosition
            )
        }
    }

