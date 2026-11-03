package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.user.UserRepository
import com.korchagin.domain_main.models.EventDomainModel
import com.korchagin.domain_main.models.JudgeDomainModel
import com.korchagin.domain_main.models.toEventDataModel
import com.korchagin.domain_main.models.toJudgeDataModel


class UnregisterJudgeToEvent(private val repository: UserRepository) {
    suspend fun unregisterJudgeToEvent(judge: JudgeDomainModel, event: EventDomainModel): Boolean = repository.judgeUnregister(judge.toJudgeDataModel(), event.toEventDataModel())
}