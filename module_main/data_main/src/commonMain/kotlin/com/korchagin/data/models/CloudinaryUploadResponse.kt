package com.korchagin.data.models

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class CloudinaryUploadResponse(
    @SerialName("secure_url")
    val secureUrl: String,

    @SerialName("public_id")
    val publicId: String,

    val format: String,
    val bytes: Long
)