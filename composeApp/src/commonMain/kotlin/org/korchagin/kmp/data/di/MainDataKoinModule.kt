package org.korchagin.kmp.data.di

import org.koin.dsl.bind
import org.koin.dsl.module
import org.korchagin.kmp.data.repository.UserRepository
import org.korchagin.kmp.data.repository.UserRepositotyImplementation


val mainDataRepositoryModule = module{
    single { UserRepositotyImplementation() }.bind<UserRepository>()

}