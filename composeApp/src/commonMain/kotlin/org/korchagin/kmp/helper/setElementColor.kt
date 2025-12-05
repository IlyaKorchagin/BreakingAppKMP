package org.korchagin.kmp.helper

import androidx.compose.ui.graphics.Color

import com.korchagin.presentation.constants.*
import org.korchagin.kmp.theme.colors.AppColors

fun setElementColor(elementTitle: String): Color {
    return when (elementTitle) {
        BABY, SHOULDER, HEAD, BACKSPIN, TURTLEMOVE, HEADSPIN, WINDMILL, BUTTERFLY, FOLD, TWINE,
        SHOULDERS, PUSHUPS, SITUPS, BRIDGE -> AppColors.colors().easy
        TURTLE, HEAD_HOLLOWBACK, SWIPES, MUCHMILL, WEB, WOLF, CRICKET, FLARE, NINETYNINE, HALO, HANDSTAND, FINGERS, ANGLE, HAND_WALK, HAND_TOUCH_LEGS -> AppColors.colors().medium
        CHAIR, ONE_HAND, INVERT, HOLLOWBACK, ELBOW, ELBOW_AIRFLARE, AIRFLARE, JACKHAMMER, UFO, HORIZONT, PRESS_TO_HANDSTAND, HAND_JUMP  -> AppColors.colors().hard
        else -> Color.Black
    }
}