package org.korchagin.kmp.activity.splash.fragments.screen

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import com.korchagin.presentation.viewModel.MainViewModel
import com.korchagin.presentation_auth.viewModel.AuthViewModel
import kotlinx.coroutines.delay
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.GifImage
import org.korchagin.kmp.PlatformType
import org.korchagin.kmp.activity.auth.AuthActivity
import org.korchagin.kmp.activity.main.MainActivity
import org.korchagin.kmp.currentPlatform
import team.platforma.extra_nav.navigator.activity.findNavHost
import team.platforma.extra_nav.navigator.component.api.ComponentNavigator

@OptIn(KoinExperimentalAPI::class)
@Composable
fun SplashScreen(componentNavigator: ComponentNavigator) {
    val authViewModel = koinViewModel<AuthViewModel>()
    val mainViewModel = koinViewModel<MainViewModel>()
    val currentUser by authViewModel.authState.collectAsState()
    LaunchedEffect(Unit) {
        delay(3000) // время показа .gif
        if (currentUser != null) {
            println("currentUser: ${currentUser!!.email}")
            mainViewModel.loadCurrentUser(currentUser = currentUser!!.email!!)
            findNavHost().navigateToActivitySingleTop(MainActivity)
        }
        else findNavHost().navigateToActivitySingleTop(AuthActivity)
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
