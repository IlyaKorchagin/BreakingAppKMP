package com.korchagin.data.models

import kotlinx.serialization.Serializable

@Serializable
data class EventParticipantsEntry(
    val timestamp: String,
    val user_id: String,
    val name: String,
    val phone: String,
    val event_id: String
)

