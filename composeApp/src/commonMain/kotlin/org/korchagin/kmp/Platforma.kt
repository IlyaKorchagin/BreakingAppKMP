package org.korchagin.kmp

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import org.jetbrains.compose.resources.DrawableResource


@Composable
    expect fun GifImage(modifier: Modifier = Modifier, drawable: String)
