package com.korchagin.data.di

import com.korchagin.data.client.provideHttpClient
import com.korchagin.data.repository.UserRepository
import com.korchagin.data.repository.UserRepositotyImplementation
import org.koin.dsl.bind
import org.koin.dsl.module


val mainDataRepositoryModule = module{
    single { UserRepositotyImplementation(get()) }.bind<UserRepository>()
    single { provideHttpClient() }
}