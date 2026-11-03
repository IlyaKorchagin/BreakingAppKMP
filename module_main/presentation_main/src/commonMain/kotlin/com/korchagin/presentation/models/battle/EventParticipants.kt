package com.korchagin.presentation.models.battle

import com.korchagin.domain_main.models.EventParticipantsDomain

data class EventParticipants(
    val timestamp: String,
    val userId: String,
    val name: String,
    val email: String,
    val eventId: String,
    val selectionOrder: Int,
    val selectionPoints: Map<String, Double> = emptyMap(), // judgeId -> points
    val battlePoints: Map<String, Map<String, Int>> = emptyMap(), // round -> judgeId -> points
    var battlePosition: Int
)

fun EventParticipantsDomain.toEventParticipants() = EventParticipants(
    timestamp = timestamp,
    userId = userId,
    name = name,
    email = email,
    eventId = eventId,
    selectionOrder = selectionOrder,
    selectionPoints = selectionPoints.toMap(),
    battlePoints = battlePoints.toMap(),
    battlePosition = battlePosition
)

fun EventParticipants.toEventParticipantsDomain() = EventParticipantsDomain(
    timestamp = timestamp,
    userId = userId,
    name = name,
    email = email,
    eventId = eventId,
    selectionOrder = selectionOrder,
    selectionPoints = selectionPoints,
    battlePoints = battlePoints,
    battlePosition = battlePosition
)

fun EventParticipants.isComplete(
    judges: Set<String>
): Boolean {
    return judges.all { judgeId ->
        (selectionPoints[judgeId] ?: 0.0) > 0.0
    }
}




