package com.korchagin.presentation.models.battle

import com.korchagin.domain_main.models.EventParticipantsDomain
import com.korchagin.module_common.Rounds

data class EventParticipants(
    val timestamp: String,
    val userId: String,
    val name: String,
    val email: String,
    val eventId: String,
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
    selectionPoints = selectionPoints,
    battlePoints = battlePoints,
    battlePosition = battlePosition
)

fun EventParticipants.toEventParticipantsDomain() = EventParticipantsDomain(
    timestamp = timestamp,
    userId = userId,
    name = name,
    email = email,
    eventId = eventId,
    selectionPoints = selectionPoints,
    battlePoints = battlePoints,
    battlePosition = battlePosition
)

fun EventParticipants.avgSelectionPoints(): Float =
    if (selectionPoints.isEmpty()) 0f
    else selectionPoints.values.average().toFloat()


