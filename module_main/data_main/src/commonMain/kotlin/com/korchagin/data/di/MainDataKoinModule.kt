package com.korchagin.data.di

import com.korchagin.data.repository.UserRepository
import com.korchagin.data.repository.UserRepositotyImplementation
import org.koin.dsl.bind
import org.koin.dsl.module


val mainDataRepositoryModule = module{
    single { UserRepositotyImplementation() }.bind<UserRepository>()

}