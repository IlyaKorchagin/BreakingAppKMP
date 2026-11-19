package notifications.di

import com.korchagin.presentation.notifications.FcmTokenProvider
import notifications.FcmTokenProviderImpl
import org.koin.dsl.module


val fcmJsModule = module {
    single<FcmTokenProvider> {
        FcmTokenProviderImpl()
    }
}
