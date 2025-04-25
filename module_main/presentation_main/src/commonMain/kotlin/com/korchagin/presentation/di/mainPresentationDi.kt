package com.korchagin.presentation.di

import org.koin.core.module.dsl.singleOf
import org.koin.dsl.module
import com.korchagin.presentation.viewModel.MainViewModel


val mainPresentationModule = module {
    singleOf(::MainViewModel)
}