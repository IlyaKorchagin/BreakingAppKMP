package org.korchagin.kmp.di

import com.korchagin.di_auth.getAuthModules
import com.korchagin.di_main.getMainModules
import com.korchagin.presentation.notifications.di.fcmAndroidModule
import org.koin.android.ext.koin.androidContext
import org.koin.core.context.startKoin
import org.koin.dsl.KoinAppDeclaration

fun initKoinAndroid(
    app: android.app.Application,
    config: KoinAppDeclaration? = null
) {
    startKoin {
        androidContext(app)
        config?.invoke(this)

        modules(
            getMainModules() +
                    getAuthModules() +
                    fcmAndroidModule
        )
    }
}

