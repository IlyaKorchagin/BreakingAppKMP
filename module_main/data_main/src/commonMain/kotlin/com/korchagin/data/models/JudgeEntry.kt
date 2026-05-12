package com.korchagin.data.models

import kotlinx.serialization.Serializable

@Serializable
data class JudgeEntry(
    val id: String,
    val name: String,
    val nick: String,
    val avatar: String,
    val video: String,
    val videoRutube: String,
    val description: String
)