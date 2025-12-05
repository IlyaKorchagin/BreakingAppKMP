package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.UserRepository
import com.korchagin.module_common.Response


class UploadAvatar(private val repository: UserRepository) {
    suspend fun uploadAvatar(email: String, avatar: ByteArray): Response<Unit> = repository.updateAvatar(email, avatar)
}