package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.UserRepository
import com.korchagin.domain_main.models.EventDomainModel
import com.korchagin.domain_main.models.PupilDomainModel
import com.korchagin.domain_main.models.toEventDataModel
import com.korchagin.domain_main.models.toPupilDataModel


class UnregisterFromEvent(private val repository: UserRepository) {
    suspend fun unregisterFromEvent(pupil: PupilDomainModel, event: EventDomainModel): Boolean = repository.unregisterFromEvent(pupil.toPupilDataModel(), event.toEventDataModel())
}