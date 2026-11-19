package notifications

import com.korchagin.presentation.notifications.FcmTokenProvider

class FcmTokenProviderImpl : FcmTokenProvider {
    override suspend fun getToken(): String? = null
}