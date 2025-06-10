package org.korchagin.kmp

import androidx.compose.runtime.Composable


@Composable
actual fun GifImage(drawable: String) {
}

actual val currentPlatform: PlatformType
    get() = PlatformType.IOS
