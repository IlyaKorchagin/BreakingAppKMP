package org.korchagin.kmp.activity.splash.fragments.screen

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.ui.Modifier
import kotlinx.coroutines.delay
import org.korchagin.kmp.GifImage
import org.korchagin.kmp.PlatformType
import org.korchagin.kmp.activity.main.MainActivity
import org.korchagin.kmp.currentPlatform
import team.platforma.extra_nav.navigator.activity.GlobalNavigation
import team.platforma.extra_nav.navigator.component.api.ComponentNavigator

@Composable
fun SplashScreen(componentNavigator: ComponentNavigator) {
    LaunchedEffect(Unit) {
        delay(3000) // время показа .gif
        GlobalNavigation.navigateToActivity(MainActivity)
    }
    val gifNames = listOf("break_splash1", "break_splash2", "break_splash3", "break_splash4", "break_splash5")
    val randomGifName = gifNames.random()
    val gifUrl =
        "https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/Logo%2Fbreak_splash1.gif?alt=media&token=7086ff5c-a41e-4740-8358-f31a2d4c53b6"

    Box(modifier = Modifier.fillMaxSize()) {
        when (currentPlatform) {
            PlatformType.JS -> {
                GifImage(
                    drawable = gifUrl
                )
            }
            else -> {
                GifImage(randomGifName)
            }
        }

    }
}
