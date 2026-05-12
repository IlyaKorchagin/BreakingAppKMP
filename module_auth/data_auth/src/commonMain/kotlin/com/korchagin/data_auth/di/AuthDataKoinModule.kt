package com.korchagin.data_auth.di

import com.korchagin.data_auth.repository.AuthRepository
import com.korchagin.data_auth.repository.AuthRepositoryImpl
import dev.gitlive.firebase.Firebase
import dev.gitlive.firebase.auth.auth
import org.koin.dsl.bind
import org.koin.dsl.module


val authDataRepositoryModule = module{
    // Внедрение самого FirebaseAuth
    single { Firebase.auth }

    // Внедрение репозитория, передаём FirebaseAuth
    single { AuthRepositoryImpl(get()) } bind AuthRepository::class


}