package org.korchagin.kmp

import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import kotlinx.browser.document
import org.w3c.dom.HTMLImageElement

@Composable
actual fun GifImage(drawable: String) {

    DisposableEffect(drawable) {
        val img = document.createElement("img") as HTMLImageElement
        img.src = drawable
        img.style.width = "50%"
        img.style.height = "50%"
        img.style.position = "absolute"
        img.style.top = "50%"
        img.style.left = "50%"
        img.style.transform = "translate(-50%, -50%)"
        img.style.zIndex = "999"

        val root = document.getElementById("root")
        root?.appendChild(img)

        onDispose {
            root?.removeChild(img)
        }
    }
}

actual val currentPlatform: PlatformType
    get() = PlatformType.JS



