package com.korchagin.domain_main.di

import com.korchagin.domain_main.AdditionalUseCases
import com.korchagin.domain_main.BattleUseCases
import com.korchagin.domain_main.ElementUseCases
import com.korchagin.domain_main.EventUseCases
import com.korchagin.domain_main.JudgeUseCases
import com.korchagin.domain_main.PupilUseCases
import com.korchagin.domain_main.SelectionUseCases
import com.korchagin.domain_main.useCase.pupils.CreateNewPupil
import com.korchagin.domain_main.useCase.pupils.GetAllPupils
import com.korchagin.domain_main.useCase.additional.GetBboysList
import com.korchagin.domain_main.useCase.additional.GetCoaches
import com.korchagin.domain_main.useCase.events.GetEvents
import com.korchagin.domain_main.useCase.elements.GetFootWorkElements
import com.korchagin.domain_main.useCase.elements.GetFreezeElements
import com.korchagin.domain_main.useCase.judges.GetJudges
import com.korchagin.domain_main.useCase.elements.GetOfpElements
import com.korchagin.domain_main.useCase.elements.GetPowerElements
import com.korchagin.domain_main.useCase.pupils.GetPupilById
import com.korchagin.domain_main.useCase.selection.GetSelectionPoints
import com.korchagin.domain_main.useCase.elements.GetStretchElements
import com.korchagin.domain_main.useCase.judges.RegisterJudgeToEvent
import com.korchagin.domain_main.useCase.events.RegisterToEvent
import com.korchagin.domain_main.useCase.additional.SaveFcmToken
import com.korchagin.domain_main.useCase.pupils.SavePupil
import com.korchagin.domain_main.useCase.battle.SendBattleProtocol
import com.korchagin.domain_main.useCase.battle.SetBattleResult
import com.korchagin.domain_main.useCase.battle.SetCurrentPairIndex
import com.korchagin.domain_main.useCase.battle.SetCurrentRound
import com.korchagin.domain_main.useCase.selection.SetCurrentSelectionGroup
import com.korchagin.domain_main.useCase.selection.SetSelectionResult
import com.korchagin.domain_main.useCase.events.UnregisterFromEvent
import com.korchagin.domain_main.useCase.judges.UnregisterJudgeToEvent
import com.korchagin.domain_main.useCase.pupils.UploadAvatar
import org.koin.dsl.module


val mainDomainModule = module {
    single {
        PupilUseCases(
            getAllPupils = GetAllPupils(repository = get()),
            getPupilById = GetPupilById(repository = get()),
            createNewPupil = CreateNewPupil(repository = get()),
            uploadAvatar = UploadAvatar(mediaRepository = get(), pupilRepository = get()),
            savePupil = SavePupil(repository = get())
        )
    }

    single {
        ElementUseCases(
            getFreezeElements = GetFreezeElements(repository = get()),
            getPowerElements = GetPowerElements(repository = get()),
            getOfpElements = GetOfpElements(repository = get()),
            getStretchElements = GetStretchElements(repository = get()),
            getFootWorkElements = GetFootWorkElements(repository = get())
        )
    }

    single {
        EventUseCases(
            getEvents = GetEvents(repository = get()),
            registerToEvent = RegisterToEvent(repository = get()),
            unregisterFromEvent = UnregisterFromEvent(repository = get())
        )
    }

    single {
        JudgeUseCases(
            getJudges = GetJudges(repository = get()),
            registerJudgeToEvent = RegisterJudgeToEvent(repository = get()),
            unregisterJudgeToEvent = UnregisterJudgeToEvent(repository = get())
        )
    }

    single {
        SelectionUseCases(
            getSelectionPoints = GetSelectionPoints(repository = get()),
            setSelectionResult = SetSelectionResult(repository = get()),
            setCurrentSelectionGroup = SetCurrentSelectionGroup(repository = get())
        )
    }

    single {
        BattleUseCases(
            setBattleProtocol = SendBattleProtocol(repository = get()),
            setBattleResult = SetBattleResult(repository = get()),
            setCurrentRound = SetCurrentRound(repository = get()),
            setCurrentPairIndex = SetCurrentPairIndex(repository = get())
        )
    }

    single {
        AdditionalUseCases(
            getBboysList = GetBboysList(repository = get()),
            getCoaches = GetCoaches(repository = get()),
            saveFcmToken = SaveFcmToken(repository = get())
        )
    }
}