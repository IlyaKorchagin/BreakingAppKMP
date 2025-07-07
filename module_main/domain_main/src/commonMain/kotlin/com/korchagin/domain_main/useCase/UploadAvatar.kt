package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.UserRepository


class UploadAvatar(private val repository: UserRepository) {
    suspend fun uploadAvatar(email: String, avatar: ByteArray) = repository.updateAvatar(email, avatar)
}