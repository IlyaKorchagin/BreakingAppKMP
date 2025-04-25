package org.korchagin.kmp.activity.splash.fragments.screen

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.ui.Modifier
import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.break_splash1
import breakingkmpapp.composeapp.generated.resources.break_splash2
import breakingkmpapp.composeapp.generated.resources.break_splash3
import breakingkmpapp.composeapp.generated.resources.break_splash4
import breakingkmpapp.composeapp.generated.resources.break_splash5
import kotlinx.coroutines.delay
import org.jetbrains.compose.resources.DrawableResource
import org.jetbrains.compose.resources.painterResource
import org.korchagin.kmp.GifImage
import org.korchagin.kmp.activity.main.MainActivity
import team.platforma.extra_nav.navigator.activity.GlobalNavigation
import team.platforma.extra_nav.navigator.component.api.ComponentNavigator

@Composable
fun SplashScreen(componentNavigator: ComponentNavigator) {
    LaunchedEffect(Unit) {
        delay(3000) // время показа .gif
        GlobalNavigation.navigateToActivity(MainActivity)
    }
    val gifNames = listOf("break_splash1", "break_splash2", "break_splash3")
    val randomGifName = gifNames.random()


    Box(modifier = Modifier.fillMaxSize()) {
        GifImage(
            modifier = Modifier.fillMaxSize(),
            drawable = randomGifName
        )
        }
}



fun Int.getSplashGif(): DrawableResource {
    return when(this){
        0 -> Res.drawable.break_splash1
        1 -> Res.drawable.break_splash2
        2 -> Res.drawable.break_splash3
        3 -> Res.drawable.break_splash4
        else -> Res.drawable.break_splash5
    }
}