package com.korchagin.presentation.models

import com.korchagin.domain_main.models.EventParticipantsDomain

data class EventParticipants(
    val timestamp: String,
    val userId: String,
    val name: String,
    val email: String,
    val eventId: String
)

fun EventParticipantsDomain.toEventParticipants() = EventParticipants(
    timestamp = timestamp,
    userId = userId,
    name = name,
    email = email,
    eventId = eventId
)

