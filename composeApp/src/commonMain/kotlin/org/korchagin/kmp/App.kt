package org.korchagin.kmp

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.remember
import androidx.compose.ui.graphics.Color
import org.jetbrains.compose.ui.tooling.preview.Preview
import org.korchagin.kmp.navigation.AppNavigator
import org.korchagin.kmp.navigation.AppNavigation
import org.korchagin.kmp.notifications.NotificationEvent
import org.korchagin.kmp.theme.AppTheme

@Composable
@Preview
fun App(
    notificationEvent: NotificationEvent? = null,
    onNotificationHandled: () -> Unit = {}
) {

    val navigator = remember {
        AppNavigator(
            startDestination = AppRoute.SplashScreen
        )
    }

    AppTheme {

        AppNavigation(
            navigator = navigator
        )

        LaunchedEffect(notificationEvent) {

            val event = notificationEvent ?: return@LaunchedEffect

            when (event.type) {

                "event" -> {
                    // Переход на экран событий
                    navigator.navigate(AppRoute.Events)
                }
            }

            onNotificationHandled()
        }
    }
}