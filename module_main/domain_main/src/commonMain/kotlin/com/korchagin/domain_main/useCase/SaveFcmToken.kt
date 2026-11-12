package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.user.UserRepository

class SaveFcmToken(
    private val repository: UserRepository
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