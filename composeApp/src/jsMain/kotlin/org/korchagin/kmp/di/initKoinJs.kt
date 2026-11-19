package org.korchagin.kmp.di

import com.korchagin.di_auth.getAuthModules
import com.korchagin.di_main.getMainModules
import notifications.di.fcmJsModule
import org.koin.core.context.startKoin
import org.koin.dsl.KoinAppDeclaration


fun initKoinJs(config: KoinAppDeclaration? = null) {
    startKoin {
        config?.invoke(this)

        modules(
            getMainModules() +
                    getAuthModules() +
                    fcmJsModule
        )
    }
}