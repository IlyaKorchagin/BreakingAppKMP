package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.pupils.PupilRepository
import com.korchagin.module_common.Response


class UploadAvatar(private val repository: PupilRepository) {
    suspend fun uploadAvatar(email: String, avatar: ByteArray): Response<Unit> = repository.updateAvatar(email, avatar)
}