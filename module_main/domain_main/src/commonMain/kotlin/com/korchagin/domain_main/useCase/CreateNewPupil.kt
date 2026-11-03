package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.user.UserRepository


class CreateNewPupil(private val repository: UserRepository) {
    suspend fun createNewPupil(email: String, name: String, coach: List<String>, authUid: String) = repository.createNewPupil(email, name, coach, authUid)
}