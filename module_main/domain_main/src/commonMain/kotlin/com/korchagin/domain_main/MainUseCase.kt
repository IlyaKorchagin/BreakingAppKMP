package com.korchagin.domain_main

import com.korchagin.domain_main.useCase.CreateNewPupil
import com.korchagin.domain_main.useCase.GetAllPupils
import com.korchagin.domain_main.useCase.GetBboysList
import com.korchagin.domain_main.useCase.GetCoaches
import com.korchagin.domain_main.useCase.GetEventParticipants
import com.korchagin.domain_main.useCase.GetEvents
import com.korchagin.domain_main.useCase.GetFootWorkElements
import com.korchagin.domain_main.useCase.GetFreezeElements
import com.korchagin.domain_main.useCase.GetJudges
import com.korchagin.domain_main.useCase.GetOfpElements
import com.korchagin.domain_main.useCase.GetPowerElements
import com.korchagin.domain_main.useCase.GetPupilById
import com.korchagin.domain_main.useCase.GetSelectionPoints
import com.korchagin.domain_main.useCase.GetStretchElements
import com.korchagin.domain_main.useCase.ObserveParticipants
import com.korchagin.domain_main.useCase.RegisterJudgeToEvent
import com.korchagin.domain_main.useCase.RegisterToEvent
import com.korchagin.domain_main.useCase.SavePupil
import com.korchagin.domain_main.useCase.SendBattleProtocol
import com.korchagin.domain_main.useCase.SetBattleResult
import com.korchagin.domain_main.useCase.SetSelectionResult
import com.korchagin.domain_main.useCase.UnregisterFromEvent
import com.korchagin.domain_main.useCase.UnregisterJudgeToEvent
import com.korchagin.domain_main.useCase.UploadAvatar


data class MainUseCase(
    val getAllPupils: GetAllPupils,
    val getPupilById: GetPupilById,
    val getFreezeElements: GetFreezeElements,
    val getPowerElements: GetPowerElements,
    val getOfpElements: GetOfpElements,
    val getStretchElements: GetStretchElements,
    val getBboysList: GetBboysList,
    val createNewPupil: CreateNewPupil,
    val uploadAvatar: UploadAvatar,
    val savePupil: SavePupil,
    val registerToEvent: RegisterToEvent,
    val getEvents: GetEvents,
    val unregisterFromEvent: UnregisterFromEvent,
    val getCoaches: GetCoaches,
    val getEventParticipants: GetEventParticipants,
    val setBattleProtocol: SendBattleProtocol,
    val getFootWorkElements: GetFootWorkElements,
    val getJudges: GetJudges,
    val registerJudgeToEvent: RegisterJudgeToEvent,
    val unregisterJudgeToEvent: UnregisterJudgeToEvent,
    val setSelectionResult: SetSelectionResult,
    val setBattleResult: SetBattleResult,
    val observeParticipants: ObserveParticipants,
    val getSelectionPoints: GetSelectionPoints
)
