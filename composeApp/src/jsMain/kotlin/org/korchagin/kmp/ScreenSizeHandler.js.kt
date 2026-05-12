package org.korchagin.kmp

import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import kotlinx.browser.window
import kotlinx.coroutines.delay
import org.w3c.dom.events.Event

actual object ScreenSizeHandler {
    @Composable
    actual fun getScreenSize(): Pair<Int, Int> {
        val screenSize = remember { mutableStateOf(Pair(0, 0)) }
        LaunchedEffect(Unit) {
            delay(50)
            screenSize.value = Pair(window.innerWidth, window.innerHeight)
        }
        DisposableEffect(Unit) {
            val listener: (Event) -> Unit = {
                screenSize.value = Pair(window.innerWidth, window.innerHeight)
            }
            window.addEventListener("resize", listener)
            onDispose {
                window.removeEventListener("resize", listener)
            }
        }
        return screenSize.value
    }
}