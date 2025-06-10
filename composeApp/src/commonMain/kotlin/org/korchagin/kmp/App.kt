package org.korchagin.kmp

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.graphics.Color
import androidx.navigation.compose.rememberNavController
import org.jetbrains.compose.ui.tooling.preview.Preview
import org.korchagin.kmp.activity.auth.AuthActivity
import org.korchagin.kmp.activity.bboysDetails.BboysDetailsActivity
import org.korchagin.kmp.activity.elementDetails.ElementDetailsActivity
import org.korchagin.kmp.activity.main.MainActivity
import org.korchagin.kmp.activity.profile.ProfileActivity
import org.korchagin.kmp.activity.splash.SplashActivity
import org.korchagin.kmp.theme.colors.AppColorsTheme
import org.korchagin.kmp.theme.global.NavViewStyle
import org.korchagin.kmp.theme.global.ToolbarTheme
import team.platforma.extra_nav.navigator.activity.GlobalNavigator
import team.platforma.multiplatform_material_extension.ui.theme.isDark
import team.platforma.multiplatform_material_extension.ui.theme.rememberTheme


@Composable
@Preview
fun App() {
    val navHostController = rememberNavController()
    val globalNavigator = remember { GlobalNavigator(navHostController) }

    val theme = rememberTheme(autoSwitch = true)
    val toolbarTheme = ToolbarTheme()
    val navViewStyle = NavViewStyle()

    val colors = AppColorsTheme()


    if (theme.isDark()) {
        colors.dark()
        toolbarTheme.dark()
        navViewStyle.dark()

    } else {
        colors.light()
        toolbarTheme.light()
        navViewStyle.light()
    }

    MaterialTheme(
        colorScheme = if (theme.isDark()) darkColorScheme().copy(
            primary = Color(0xFF41C4C4),
            background = Color(0xFF000000)
        ) else lightColorScheme().copy(
            primary = Color(0xFF41C4C4),
            background = Color(0xFFF7F7F7)
        )
    ) {
        val activityList = listOf(
            MainActivity,
            SplashActivity,
            ProfileActivity,
            ElementDetailsActivity,
            BboysDetailsActivity,
            AuthActivity
        )
        globalNavigator.setupNavHost(
            activities = activityList,
            startActivity = SplashActivity
        )
    }
}
