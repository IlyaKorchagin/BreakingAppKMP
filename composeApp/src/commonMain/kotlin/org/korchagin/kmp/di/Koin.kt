package org.korchagin.kmp.di


import org.koin.core.context.startKoin
import org.koin.dsl.KoinAppDeclaration
import org.korchagin.kmp.data.di.mainDataRepositoryModule


fun initKoin(config: KoinAppDeclaration? = null) {
    startKoin {
        config?.invoke(this)
        modules(
            getMainModules()
        )
    }
}


fun getMainModules() = listOf(mainDataRepositoryModule)