package org.korchagin.kmp

import androidx.compose.runtime.Composable
import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.platform.LocalWindowInfo
import kotlinx.cinterop.ExperimentalForeignApi

actual object ScreenSizeHandler {
    @OptIn(ExperimentalComposeUiApi::class, ExperimentalForeignApi::class)
    @Composable
    actual fun getScreenSize(): Pair<Int, Int> {
        val density = LocalDensity.current.density
        val screenSize = LocalWindowInfo.current.containerSize
        val screenWidthDp = (screenSize.width / density).toInt()
        val screenHeightDp = (screenSize.height / density).toInt()

        return Pair(screenWidthDp, screenHeightDp)
    }
}