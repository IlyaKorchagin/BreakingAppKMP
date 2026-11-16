package com.korchagin.domain_main

import com.korchagin.domain_main.useCase.additional.GetBboysList
import com.korchagin.domain_main.useCase.additional.GetCoaches
import com.korchagin.domain_main.useCase.additional.SaveFcmToken
import com.korchagin.domain_main.useCase.battle.SendBattleProtocol
import com.korchagin.domain_main.useCase.battle.SetBattleResult
import com.korchagin.domain_main.useCase.battle.SetCurrentPairIndex
import com.korchagin.domain_main.useCase.battle.SetCurrentRound
import com.korchagin.domain_main.useCase.elements.GetFootWorkElements
import com.korchagin.domain_main.useCase.elements.GetFreezeElements
import com.korchagin.domain_main.useCase.elements.GetOfpElements
import com.korchagin.domain_main.useCase.elements.GetPowerElements
import com.korchagin.domain_main.useCase.elements.GetStretchElements
import com.korchagin.domain_main.useCase.events.GetEvents
import com.korchagin.domain_main.useCase.events.RegisterToEvent
import com.korchagin.domain_main.useCase.events.UnregisterFromEvent
import com.korchagin.domain_main.useCase.judges.GetJudges
import com.korchagin.domain_main.useCase.judges.RegisterJudgeToEvent
import com.korchagin.domain_main.useCase.judges.UnregisterJudgeToEvent
import com.korchagin.domain_main.useCase.pupils.CreateNewPupil
import com.korchagin.domain_main.useCase.pupils.GetAllPupils
import com.korchagin.domain_main.useCase.pupils.GetPupilById
import com.korchagin.domain_main.useCase.pupils.SavePupil
import com.korchagin.domain_main.useCase.pupils.UploadAvatar
import com.korchagin.domain_main.useCase.selection.GetSelectionPoints
import com.korchagin.domain_main.useCase.selection.SetCurrentSelectionGroup
import com.korchagin.domain_main.useCase.selection.SetSelectionResult

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
