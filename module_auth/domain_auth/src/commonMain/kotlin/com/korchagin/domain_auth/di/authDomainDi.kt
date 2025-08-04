package com.korchagin.domain_auth.di

import com.korchagin.domain_auth.AuthUseCase
import com.korchagin.domain_auth.useCase.Auth
import org.koin.dsl.module

val authDomainModule = module {
    single {
        AuthUseCase(
            logIn = Auth(repository = get()),
            logOut = Auth(repository = get()),
            signIn = Auth(repository = get()),
            resetPassword = Auth(repository = get())
        )
    }

}