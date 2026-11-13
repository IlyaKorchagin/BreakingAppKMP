package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.pupils.PupilRepository
import com.korchagin.domain_main.models.PupilDomainModel
import com.korchagin.domain_main.models.toPupilDataModel
import com.korchagin.module_common.Response


class SavePupil(private val repository: PupilRepository) {
   // suspend fun savePupil(pupil: PupilDomainModel): Response<Unit> = repository.updatePupil(pupil.toPupilDataModel())
    suspend fun savePupil(pupils: List<PupilDomainModel>): Response<Unit> = repository.updatePupils(pupils.map { it.toPupilDataModel()})
}