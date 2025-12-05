package com.korchagin.data.models

import kotlinx.serialization.Serializable

@Serializable
data class CoachEntry(
    val id: String,
    val name: String,
    val nick: String,
    val avatar: String,
    val video: String,
    val description: String
)