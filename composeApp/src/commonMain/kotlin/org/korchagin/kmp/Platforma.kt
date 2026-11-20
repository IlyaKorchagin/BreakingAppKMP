package org.korchagin.kmp

import androidx.compose.runtime.Composable
import dev.gitlive.firebase.storage.Data


@Composable
expect fun GifImage(
    drawable: String,
    onLoaded: () -> Unit = {}
)

expect val currentPlatform: PlatformType
enum class PlatformType {
    ANDROID, JS, IOS
}

expect fun ByteArray.toFirebaseData(): Data
