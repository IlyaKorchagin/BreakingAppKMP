package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.UserRepository
import com.korchagin.domain_main.models.PupilDomainModel
import com.korchagin.domain_main.models.toPupilDomainModel
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map


class GetAllPupils(private val repository: UserRepository) {
    suspend fun getAllPupils(): Flow<List<PupilDomainModel>> = repository.getUsers().map { pupil ->
        pupil.map { it.toPupilDomainModel() }
    }
}