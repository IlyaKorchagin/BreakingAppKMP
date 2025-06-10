package org.korchagin.kmp.helper

import androidx.compose.ui.graphics.Color
import org.korchagin.kmp.theme.colors.AppColors

fun setPositionColor(index: Int): Color {
    return when(index){
        0 -> AppColors.colors().onePosition
        1 -> AppColors.colors().twoPosition
        2 -> AppColors.colors().threePosition
        3 -> AppColors.colors().fourPosition
        4 -> AppColors.colors().fivePosition
        5 -> AppColors.colors().sixPosition
        6 -> AppColors.colors().sevenPosition
        7 -> AppColors.colors().eightPosition
        8 -> AppColors.colors().ninePosition
        9 -> AppColors.colors().tenPosition
        else -> Color.White
    }
}