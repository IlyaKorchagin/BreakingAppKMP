package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.pupils.PupilRepository


class CreateNewPupil(private val repository: PupilRepository) {
    suspend fun createNewPupil(email: String, name: String, coach: List<String>, authUid: String) = repository.createNewPupil(email, name, coach, authUid)
}