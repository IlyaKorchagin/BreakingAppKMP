package com.korchagin.data.repository.media

import com.korchagin.data.models.CloudinaryUploadResponse
import com.korchagin.data.remote.cloudinary.CloudinaryDataSource

class MediaRepositoryImpl(
    private val cloudinaryDataSource: CloudinaryDataSource
) : MediaRepository {

    override suspend fun uploadAvatar(
        image: ByteArray
    ): CloudinaryUploadResponse {
        return cloudinaryDataSource.uploadImage(image)
    }
}