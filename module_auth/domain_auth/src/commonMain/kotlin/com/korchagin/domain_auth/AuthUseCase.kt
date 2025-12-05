package com.korchagin.domain_auth

import com.korchagin.domain_auth.useCase.Auth


data class AuthUseCase(
    val logIn: Auth,
    val logOut: Auth,
    val signIn: Auth,
    val resetPassword: Auth
)
