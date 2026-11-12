package org.korchagin.kmp

import android.app.Application
import org.koin.android.ext.koin.androidContext
import org.korchagin.kmp.di.initKoin
import org.korchagin.kmp.di.initKoinAndroid

class MyApplication: Application() {
    override fun onCreate() {
        super.onCreate()
        initKoinAndroid(this@MyApplication)
    }
}