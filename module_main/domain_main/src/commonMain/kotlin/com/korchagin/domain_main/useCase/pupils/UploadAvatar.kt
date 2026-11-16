package com.korchagin.domain_main.useCase.pupils

import com.korchagin.data.repository.pupils.PupilRepository
import com.korchagin.module_common.Response

class UploadAvatar(private val repository: PupilRepository) {
    suspend fun uploadAvatar(authUid: String, avatar: ByteArray): Response<Unit> = repository.updateAvatar(authUid, avatar)
}