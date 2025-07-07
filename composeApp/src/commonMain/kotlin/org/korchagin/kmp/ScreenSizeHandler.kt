package org.korchagin.kmp

import androidx.compose.runtime.Composable

expect object ScreenSizeHandler {
    @Composable
    fun getScreenSize(): Pair<Int, Int>
}