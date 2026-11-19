package com.korchagin.data.repository.media

import com.korchagin.data.models.CloudinaryUploadResponse

interface MediaRepository {
    suspend fun uploadAvatar(
        image: ByteArray
    ): CloudinaryUploadResponse
}