package org.korchagin.kmp.theme.global

import androidx.compose.runtime.Composable
import org.korchagin.kmp.theme.colors.AppColors
import team.platforma.multiplatform_material_extension.toolbar.AppToolbarStyle
import team.platforma.multiplatform_material_extension.toolbar.ToolbarStyle

class ToolbarTheme {
    @Composable
    fun light() {
        ToolbarStyle.define(
            toolbarStyle = AppToolbarStyle(
                containerColor = AppColors.colors().primaryColor
            )
        )
    }

    @Composable
    fun dark() {
        ToolbarStyle.define(
            toolbarStyle = AppToolbarStyle(
                containerColor = AppColors.colors().primaryColor
            )
        )
    }
}