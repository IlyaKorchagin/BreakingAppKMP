package org.korchagin.kmp.helper

import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import org.korchagin.kmp.theme.colors.LocalAppColors

@Composable
fun setPositionBackgroundColor(index: Int): Color {
    return when(index){
        0 -> LocalAppColors.current.onePosition
        1 -> LocalAppColors.current.twoPosition
        2 -> LocalAppColors.current.threePosition
        3 -> LocalAppColors.current.fourPosition
        4 -> LocalAppColors.current.fivePosition
        6 -> LocalAppColors.current.sixPosition
        7 -> LocalAppColors.current.sevenPosition
        8 -> LocalAppColors.current.eightPosition
        9 -> LocalAppColors.current.ninePosition
        else -> Color.White
    }
}