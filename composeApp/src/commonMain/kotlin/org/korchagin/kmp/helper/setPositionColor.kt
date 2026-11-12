package org.korchagin.kmp.helper

import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import org.korchagin.kmp.theme.colors.LocalAppColors


@Composable
fun setPositionColor(index: Int): Color {
    return when(index){
        0 -> LocalAppColors.current.onePosition
        1 -> LocalAppColors.current.twoPosition
        2 -> LocalAppColors.current.threePosition
        3 -> LocalAppColors.current.fourPosition
        4 -> LocalAppColors.current.fivePosition
        5 -> LocalAppColors.current.sixPosition
        6 -> LocalAppColors.current.sevenPosition
        7 -> LocalAppColors.current.eightPosition
        else -> LocalAppColors.current.ninePosition
    }
}