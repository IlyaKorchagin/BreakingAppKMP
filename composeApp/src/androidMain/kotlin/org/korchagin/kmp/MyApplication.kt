package org.korchagin.kmp

import android.app.Application
import org.koin.android.ext.koin.androidContext
import org.korchagin.kmp.di.initKoin

class MyApplication: Application() {
    override fun onCreate() {
        super.onCreate()
        initKoin {
            androidContext(this@MyApplication)
        }
    }
}