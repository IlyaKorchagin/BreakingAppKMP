package com.korchagin.data.models

import kotlinx.serialization.Serializable

@Serializable
data class EventEntry(
    val id: String,
    val title: String,
    val data: String,
    val regUrl: String,
    val participants: Map<String, EventParticipantsEntry> = emptyMap(),
    val judges: Map<String, Boolean> = emptyMap()
)
