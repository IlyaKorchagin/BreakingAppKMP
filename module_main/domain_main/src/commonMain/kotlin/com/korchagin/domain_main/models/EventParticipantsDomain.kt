package com.korchagin.domain_main.models

import com.korchagin.data.models.EventParticipantsEntry

data class EventParticipantsDomain(
    val timestamp: String,
    val userId: String,
    val name: String,
    val email: String,
    val eventId: String,
   /* var selectionPoints: Float,
    val battlePoints: Map<Rounds, Int> = emptyMap(),*/
    val selectionPoints: Map<String, Double> = emptyMap(), // judgeId -> points
    val battlePoints: Map<String, Map<String, Int>> = emptyMap(), // round -> judgeId -> points
    var battlePosition: Int
)

fun EventParticipantsEntry.toEventParticipantsDomain() = EventParticipantsDomain(
    timestamp = timestamp,
    userId = user_id,
    name = name,
    email = phone,
    eventId = event_id,
    selectionPoints = selectionPoints,
    battlePoints = battlePoints,
    battlePosition = battlePosition
)

fun EventParticipantsDomain.toEventParticipantsEntry() = EventParticipantsEntry(
    timestamp = timestamp,
    user_id = userId,
    name = name,
    phone = email,
    event_id = eventId,
    selectionPoints = selectionPoints,
    battlePoints = battlePoints,
    battlePosition = battlePosition
)


