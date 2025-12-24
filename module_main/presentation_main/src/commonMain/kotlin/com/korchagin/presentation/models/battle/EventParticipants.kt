package com.korchagin.presentation.models.battle

import com.korchagin.domain_main.models.EventParticipantsDomain
import com.korchagin.module_common.Rounds

data class EventParticipants(
    val timestamp: String,
    val userId: String,
    val name: String,
    val email: String,
    val eventId: String,
    var selectionPoints: Float,
    val battlePoints: Map<Rounds, Int> = emptyMap(),
    var battlePosition: Int
)

fun EventParticipantsDomain.toEventParticipants() = EventParticipants(
    timestamp = timestamp,
    userId = userId,
    name = name,
    email = email,
    eventId = eventId,
    selectionPoints = 0.0f,
    battlePoints = emptyMap(),
    battlePosition = 0
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

