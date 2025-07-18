package com.korchagin.presentation.models

import androidx.compose.ui.graphics.painter.Painter

data class ImageWithText(
    val image: Painter,
    val text: String
)