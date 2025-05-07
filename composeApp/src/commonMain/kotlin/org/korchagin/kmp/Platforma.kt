package org.korchagin.kmp

import androidx.compose.runtime.Composable


@Composable
expect fun GifImage(drawable: String)

expect val currentPlatform: PlatformType

enum class PlatformType {
    ANDROID, JS, IOS
}
