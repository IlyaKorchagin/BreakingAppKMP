package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.UserRepository
import com.korchagin.domain_main.models.EventDomainModel
import com.korchagin.domain_main.models.JudgeDomainModel
import com.korchagin.domain_main.models.PupilDomainModel
import com.korchagin.domain_main.models.toEventDataModel
import com.korchagin.domain_main.models.toJudgeDataModel
import com.korchagin.domain_main.models.toPupilDataModel


class UnregisterJudgeToEvent(private val repository: UserRepository) {
    suspend fun unregisterJudgeToEvent(judge: JudgeDomainModel, event: EventDomainModel): Boolean = repository.judgeUnregister(judge.toJudgeDataModel(), event.toEventDataModel())
}