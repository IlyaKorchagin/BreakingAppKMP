package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.UserRepository


class CreateNewPupil(private val repository: UserRepository) {
    suspend fun createNewPupil(email: String, name: String) = repository.createNewPupil(email, name)
}