package com.korchagin.domain_main.models

import com.korchagin.data.models.EventParticipantsEntry

data class EventParticipantsDomain(
    val timestamp: String,
    val userId: String,
    val name: String,
    val email: String,
    val eventId: String
)

fun EventParticipantsEntry.toEventParticipantsDomain() = EventParticipantsDomain(
    timestamp = timestamp,
    userId = user_id,
    name = name,
    email = phone,
    eventId = event_id
)

