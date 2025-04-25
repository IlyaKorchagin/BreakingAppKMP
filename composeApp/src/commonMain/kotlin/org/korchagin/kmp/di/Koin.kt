package org.korchagin.kmp.di


import com.korchagin.di_main.getMainModules
import org.koin.core.context.startKoin
import org.koin.dsl.KoinAppDeclaration


fun initKoin(config: KoinAppDeclaration? = null) {
    startKoin {
        config?.invoke(this)
        modules(
            getMainModules()
        )
    }
}

