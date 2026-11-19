package com.korchagin.domain_main.useCase.pupils

import com.korchagin.data.repository.media.MediaRepository
import com.korchagin.data.repository.pupils.PupilRepository
import com.korchagin.module_common.Response

class UploadAvatar(
    private val mediaRepository: MediaRepository,
    private val pupilRepository: PupilRepository
) {
    suspend operator fun invoke(
        authUid: String,
        image: ByteArray
    ): Response<Unit> {
        val result = mediaRepository.uploadAvatar(image)

        return pupilRepository.updateAvatar(
            authUid = authUid,
            avatarUrl = result.secureUrl,
            publicId = result.publicId
        )
    }
}