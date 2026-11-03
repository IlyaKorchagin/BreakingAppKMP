package com.korchagin.presentation.di

import com.korchagin.presentation.notifications.di.fcmAndroidModule
import org.koin.core.module.Module

fun getAndroidMainModules(): List<Module> = listOf(
    fcmAndroidModule
)