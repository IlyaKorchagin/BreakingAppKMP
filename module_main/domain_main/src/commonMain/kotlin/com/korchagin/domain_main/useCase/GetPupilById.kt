package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.UserRepository
import com.korchagin.domain_main.models.PupilDomainModel
import com.korchagin.domain_main.models.toPupilDomainModel
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map


class GetPupilById(private val repository: UserRepository) {
    suspend fun getAllPupils(email: String): Flow<PupilDomainModel> =
        repository.getUserById(email).map { pupil ->
            pupil.toPupilDomainModel()
        }
}