package org.korchagin.kmp

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import org.jetbrains.compose.web.css.height
import org.jetbrains.compose.web.css.keywords.auto
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.width
import org.jetbrains.compose.web.dom.Img


@Composable
actual fun GifImage(modifier: Modifier, drawable: String) {
    println("drawable: $drawable")
    val gifUri = "/composeResources/drawable/$drawable.gif"

    Img(
        src = gifUri,
        alt = "",
        attrs = {
            style {
                width(100.percent)
                height(auto)
            }
        }
    )
}