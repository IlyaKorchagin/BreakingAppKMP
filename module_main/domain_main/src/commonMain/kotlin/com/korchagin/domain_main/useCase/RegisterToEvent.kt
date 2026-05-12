package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.UserRepository
import com.korchagin.domain_main.models.EventDomainModel
import com.korchagin.domain_main.models.PupilDomainModel
import com.korchagin.domain_main.models.toEventDataModel
import com.korchagin.domain_main.models.toPupilDataModel


class RegisterToEvent(private val repository: UserRepository) {
    suspend fun registerToEvent(pupil: PupilDomainModel, event: EventDomainModel): Boolean = repository.registerToEvent(pupil.toPupilDataModel(), event.toEventDataModel())
}