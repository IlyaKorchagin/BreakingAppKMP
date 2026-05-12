package org.korchagin.kmp.helper

import androidx.compose.ui.graphics.Color
import org.korchagin.kmp.theme.colors.AppColors

fun setPositionBackgroundColor(index: Int): Color {
    return when(index){
        0 -> AppColors.colors().onePosition
        1 -> AppColors.colors().twoPosition
        2 -> AppColors.colors().threePosition
        3 -> AppColors.colors().fourPosition
        4 -> AppColors.colors().fivePosition
        6 -> AppColors.colors().sixPosition
        7 -> AppColors.colors().sevenPosition
        8 -> AppColors.colors().eightPosition
        9 -> AppColors.colors().ninePosition
        else -> Color.White
    }
}