package org.korchagin.kmp

import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import dev.gitlive.firebase.storage.Data
import kotlinx.browser.document
import org.khronos.webgl.Uint8Array
import org.khronos.webgl.set
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


actual fun ByteArray.toFirebaseData(): Data {
    val uint8Array = Uint8Array(this.size)
    for (i in indices) {
        uint8Array[i] = (this[i].toInt() and 0xFF).toByte()
    }
    return Data(uint8Array)
}