package com.korchagin.domain_main

import com.korchagin.domain_main.useCase.*

data class PupilUseCases(
    val getAllPupils: GetAllPupils,
    val getPupilById: GetPupilById,
    val createNewPupil: CreateNewPupil,
    val savePupil: SavePupil,
    val uploadAvatar: UploadAvatar
)

data class ElementUseCases(
    val getFreezeElements: GetFreezeElements,
    val getPowerElements: GetPowerElements,
    val getOfpElements: GetOfpElements,
    val getStretchElements: GetStretchElements,
    val getFootWorkElements: GetFootWorkElements
)

data class EventUseCases(
    val getEvents: GetEvents,
    val getEventParticipants: GetEventParticipants,
    val observeParticipants: ObserveParticipants,
    val registerToEvent: RegisterToEvent,
    val unregisterFromEvent: UnregisterFromEvent
)

data class JudgeUseCases(
    val getJudges: GetJudges,
    val registerJudgeToEvent: RegisterJudgeToEvent,
    val unregisterJudgeToEvent: UnregisterJudgeToEvent
)

data class SelectionUseCases(
    val getSelectionPoints: GetSelectionPoints,
    val setSelectionResult: SetSelectionResult,
    val setCurrentSelectionGroup: SetCurrentSelectionGroup
)

data class BattleUseCases(
    val setBattleProtocol: SendBattleProtocol,
    val setBattleResult: SetBattleResult,
    val setCurrentRound: SetCurrentRound,
    val setCurrentPairIndex: SetCurrentPairIndex
)

data class AdditionalUseCases(
    val getBboysList: GetBboysList,
    val getCoaches: GetCoaches,
    val saveFcmToken: SaveFcmToken
)
