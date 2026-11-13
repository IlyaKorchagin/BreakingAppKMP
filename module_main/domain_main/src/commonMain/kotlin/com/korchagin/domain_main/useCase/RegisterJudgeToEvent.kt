package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.judjes.JudgeRepository
import com.korchagin.domain_main.models.EventDomainModel
import com.korchagin.domain_main.models.JudgeDomainModel
import com.korchagin.domain_main.models.toEventDataModel
import com.korchagin.domain_main.models.toJudgeDataModel


class RegisterJudgeToEvent(private val repository: JudgeRepository) {
    suspend fun registerJudgeToEvent(judge: JudgeDomainModel, event: EventDomainModel): Boolean = repository.judgeRegister(judge.toJudgeDataModel(), event.toEventDataModel())
}