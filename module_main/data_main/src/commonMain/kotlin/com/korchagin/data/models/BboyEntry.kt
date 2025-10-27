package com.korchagin.data.models

import kotlinx.serialization.SerialName

@kotlinx.serialization.Serializable
data class BboyEntry(
    val name: String,
    val born: String,
    val rating: String,
    val avatar: String,
    val country: String,
    val video: String,
    val description: String,
    @SerialName("shortdescription") val shortDescription: String
)