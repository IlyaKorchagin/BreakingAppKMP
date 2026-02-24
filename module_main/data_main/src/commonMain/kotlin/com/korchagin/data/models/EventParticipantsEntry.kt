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

    val selectionPoints: Map<String, Double> = emptyMap(), // judgeId -> points
    val battlePoints: Map<String, Map<String, Int>> = emptyMap(), // round -> judgeId -> points
    val battlePosition: Int = 0
)



fun List<EventParticipantsEntry>.toSheetRows(): List<List<Any?>> =
    flatMap { participant ->
        participant.battlePoints.orEmpty().map { (round, points) ->
            listOf(
                participant.timestamp,
                participant.user_id,
                participant.name,
                participant.phone,
                participant.event_id,
                participant.selectionPoints.orEmpty(),
                round,
                points,
                participant.battlePosition
            )
        }
    }

