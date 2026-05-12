package org.korchagin.kmp

import androidx.compose.runtime.Composable
import dev.gitlive.firebase.storage.Data


@Composable
actual fun GifImage(drawable: String) {
}

actual val currentPlatform: PlatformType
    get() = PlatformType.IOS

actual fun ByteArray.toFirebaseData(): Data {
    TODO("Not yet implemented")
}