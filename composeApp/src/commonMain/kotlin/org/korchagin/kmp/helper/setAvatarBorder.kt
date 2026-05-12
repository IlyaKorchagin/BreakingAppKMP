package org.korchagin.kmp.helper

import androidx.compose.ui.graphics.Color
import com.korchagin.presentation.models.PupilModel
import org.korchagin.kmp.theme.colors.AppColors

fun setAvatarBorder(curPupil: PupilModel): List<Color> {
    return when(curPupil.rating.toInt()){
        in 0..9 -> listOf(AppColors.colors().startAvatar, AppColors.colors().default)
        in 10..19 -> listOf(AppColors.colors().startAvatar, AppColors.colors().default)
        in 20..29 -> listOf(AppColors.colors().startAvatar, AppColors.colors().default)
        in 30..39 -> listOf(AppColors.colors().startBronze, AppColors.colors().bronze)
        in 40..49 -> listOf(AppColors.colors().startBronze, AppColors.colors().bronze)
        in 50..59 -> listOf(AppColors.colors().startBronze, AppColors.colors().bronze)
        in 60..69 -> listOf(AppColors.colors().startAvatar, AppColors.colors().silver)
        in 70..79 -> listOf(AppColors.colors().startAvatar, AppColors.colors().silver)
        in 80..89 -> listOf(AppColors.colors().startGold, AppColors.colors().gold)
        in 90..100 -> listOf(AppColors.colors().startGold, AppColors.colors().gold)
        else -> listOf(AppColors.colors().startGold, AppColors.colors().gold)
    }
}