package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.additional.AdditionalRepository

class SaveFcmToken(
    private val repository: AdditionalRepository
) {
    suspend operator fun invoke(
        authUid: String,
        token: String
    ) {
        repository.saveFcmToken(
            authUid = authUid,
            token = token
        )
    }
}