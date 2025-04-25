package com.korchagin.domain_main.di

import com.korchagin.domain_main.MainUseCase
import com.korchagin.domain_main.useCase.GetAllPupils
import com.korchagin.domain_main.useCase.GetPupilById
import org.koin.dsl.module

val mainDomainModule = module {
    single {
        MainUseCase(
            getAllPupils = GetAllPupils(repository = get()),
            getPupilById = GetPupilById(repository = get())
        )
    }
    single { GetAllPupils(repository = get()) }
    single { GetPupilById(repository = get()) }
}