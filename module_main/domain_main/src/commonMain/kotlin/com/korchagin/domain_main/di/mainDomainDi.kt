package com.korchagin.domain_main.di

import com.korchagin.domain_main.MainUseCase
import com.korchagin.domain_main.useCase.CreateNewPupil
import com.korchagin.domain_main.useCase.GetAllPupils
import com.korchagin.domain_main.useCase.GetBboysList
import com.korchagin.domain_main.useCase.GetFreezeElements
import com.korchagin.domain_main.useCase.GetOfpElements
import com.korchagin.domain_main.useCase.GetPowerElements
import com.korchagin.domain_main.useCase.GetPupilById
import com.korchagin.domain_main.useCase.GetStretchElements
import org.koin.dsl.module

val mainDomainModule = module {
    single {
        MainUseCase(
            getAllPupils = GetAllPupils(repository = get()),
            getPupilById = GetPupilById(repository = get()),
            getFreezeElements = GetFreezeElements(repository = get()),
            getPowerElements = GetPowerElements(repository = get()),
            getOfpElements = GetOfpElements(repository = get()),
            getStretchElements = GetStretchElements(repository = get()),
            getBboysList = GetBboysList(repository = get()),
            createNewPupil = CreateNewPupil(repository = get()),
        )
    }
}