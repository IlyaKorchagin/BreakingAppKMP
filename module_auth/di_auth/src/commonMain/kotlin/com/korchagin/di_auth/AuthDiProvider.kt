package com.korchagin.di_auth

import com.korchagin.data_auth.di.authDataRepositoryModule
import com.korchagin.domain_auth.di.authDomainModule
import com.korchagin.presentation_auth.di.authPresentationModule


fun getAuthModules() = listOf(
    authPresentationModule, authDataRepositoryModule, authDomainModule
)