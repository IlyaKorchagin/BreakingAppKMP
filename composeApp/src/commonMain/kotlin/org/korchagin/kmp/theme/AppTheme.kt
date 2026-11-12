package org.korchagin.kmp.theme

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.remember
import org.korchagin.kmp.theme.colors.AppColorsTheme
import org.korchagin.kmp.theme.colors.LocalAppColors

@Composable
fun AppTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit
) {
    // Получаем палитру приложения
    val appColorsTheme = remember {
        AppColorsTheme()
    }

    // Выбираем цвета в зависимости от темы
    val appColors = remember(darkTheme) {
        if (darkTheme) {
            appColorsTheme.dark()
        } else {
            appColorsTheme.light()
        }
    }

    // Настраиваем стандартную Material 3 палитру
    val materialColorScheme = if (darkTheme) {
        darkColorScheme(
            primary = appColors.primaryColor,
            onPrimary = appColors.textOnPrimary,
            secondary = appColors.mainGreen,
            background = appColors.defaultBackground,
            onBackground = appColors.textDefault,
            surface = appColors.defaultBackground,
            onSurface = appColors.textDefault,
            error = appColors.dislikeColor
        )
    } else {
        lightColorScheme(
            primary = appColors.primaryColor,
            onPrimary = appColors.textOnPrimary,
            secondary = appColors.mainGreen,
            background = appColors.defaultBackground,
            onBackground = appColors.textDefault,
            surface = appColors.defaultBackground,
            onSurface = appColors.textDefault,
            error = appColors.dislikeColor
        )
    }

    CompositionLocalProvider(
        LocalAppColors provides appColors
    ) {
        MaterialTheme(
            colorScheme = materialColorScheme,
            content = content
        )
    }
}