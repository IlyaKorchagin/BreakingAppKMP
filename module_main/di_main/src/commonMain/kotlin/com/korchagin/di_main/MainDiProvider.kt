package com.korchagin.di_main

import com.korchagin.data.di.mainDataRepositoryModule
import com.korchagin.domain_main.di.mainDomainModule
import com.korchagin.presentation.di.mainPresentationModule


fun getMainModules() = listOf(
    mainPresentationModule, mainDataRepositoryModule, mainDomainModule
)