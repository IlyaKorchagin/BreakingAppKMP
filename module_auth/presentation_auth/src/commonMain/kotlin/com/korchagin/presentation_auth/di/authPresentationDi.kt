package com.korchagin.presentation_auth.di

import com.korchagin.domain_auth.AuthUseCase
import com.korchagin.presentation_auth.viewModel.AuthViewModel
import dev.gitlive.firebase.Firebase
import dev.gitlive.firebase.auth.auth
import org.koin.compose.viewmodel.dsl.viewModel
import org.koin.dsl.module


val authPresentationModule = module {
    single { Firebase.auth }
    factory { AuthUseCase(get(), get(), get(), get()) }
    viewModel { AuthViewModel(get(), get(), get()) }
}