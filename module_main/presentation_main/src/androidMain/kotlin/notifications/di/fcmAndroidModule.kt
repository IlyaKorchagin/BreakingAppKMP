package com.korchagin.presentation.notifications.di

import com.korchagin.presentation.notifications.FcmTokenProvider
import com.korchagin.presentation.notifications.FcmTokenProviderImpl
import org.koin.dsl.module


val fcmAndroidModule = module {
    single<FcmTokenProvider> {
        FcmTokenProviderImpl()
    }
}
