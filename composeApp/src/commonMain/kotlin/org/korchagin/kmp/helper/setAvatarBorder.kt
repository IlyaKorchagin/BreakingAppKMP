package org.korchagin.kmp.helper

import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import com.korchagin.presentation.models.PupilModel
import org.korchagin.kmp.theme.colors.LocalAppColors

@Composable
fun setAvatarBorder(curPupil: PupilModel): List<Color> {
    return when(curPupil.rating.toInt()){
        in 0..9 -> listOf(LocalAppColors.current.startAvatar, LocalAppColors.current.default)
        in 10..19 -> listOf(LocalAppColors.current.startAvatar, LocalAppColors.current.default)
        in 20..29 -> listOf(LocalAppColors.current.startAvatar, LocalAppColors.current.default)
        in 30..39 -> listOf(LocalAppColors.current.startBronze, LocalAppColors.current.bronze)
        in 40..49 -> listOf(LocalAppColors.current.startBronze, LocalAppColors.current.bronze)
        in 50..59 -> listOf(LocalAppColors.current.startBronze, LocalAppColors.current.bronze)
        in 60..69 -> listOf(LocalAppColors.current.startAvatar, LocalAppColors.current.silver)
        in 70..79 -> listOf(LocalAppColors.current.startAvatar, LocalAppColors.current.silver)
        in 80..89 -> listOf(LocalAppColors.current.startGold, LocalAppColors.current.gold)
        in 90..100 -> listOf(LocalAppColors.current.startGold, LocalAppColors.current.gold)
        else -> listOf(LocalAppColors.current.startGold, LocalAppColors.current.gold)
    }
}