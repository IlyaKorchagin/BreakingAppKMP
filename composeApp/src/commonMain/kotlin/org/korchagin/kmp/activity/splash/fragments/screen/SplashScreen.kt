package org.korchagin.kmp.activity.splash.fragments.screen

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import com.korchagin.presentation.viewModel.MainViewModel
import com.korchagin.presentation_auth.viewModel.AuthViewModel
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.filterNotNull
import kotlinx.coroutines.flow.first
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.GifImage
import org.korchagin.kmp.PlatformType
import org.korchagin.kmp.activity.admin.AdminActivity
import org.korchagin.kmp.activity.auth.AuthActivity
import org.korchagin.kmp.activity.main.MainActivity
import org.korchagin.kmp.currentPlatform
import team.platforma.extra_nav.navigator.activity.findNavHost
import team.platforma.extra_nav.navigator.component.api.ComponentNavigator

/*
@OptIn(KoinExperimentalAPI::class)
@Composable
fun SplashScreen(componentNavigator: ComponentNavigator) {
    val authViewModel = koinViewModel<AuthViewModel>()
    val mainViewModel = koinViewModel<MainViewModel>()
    val currentUser by authViewModel.authState.collectAsState(null)

    val visible = remember { mutableStateOf(true) }

    LaunchedEffect(Unit) {
        delay(3000) // время показа .gif

        visible.value = false // начинаем fadeOut
        delay(1000)
        if (currentUser != null) {
            println("currentUser: ${currentUser!!.email}")
            mainViewModel.loadCurrentUser(currentUser = currentUser!!.email!!)
            delay(200)
            val pupil = mainViewModel.currentPupil
                .filterNotNull()
                .first()

            println("currentUser role: ${pupil.role}")

            if (pupil.role == "admin")
                findNavHost().navigateToActivitySingleTop(AdminActivity)
            else
                findNavHost().navigateToActivitySingleTop(MainActivity)

        } else {
            mainViewModel.loadCoachesList()
            findNavHost().navigateToActivitySingleTop(AuthActivity)
        }
    }
    val gifNames =
        listOf("break_splash1", "break_splash2", "break_splash3", "break_splash4", "break_splash5")
    val randomGifName = gifNames.random()
    val gifUrl =
        "https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/Logo%2Fbreak_splash1.gif?alt=media&token=7086ff5c-a41e-4740-8358-f31a2d4c53b6"

    AnimatedVisibility(
        visible = visible.value,
        exit = fadeOut(animationSpec = tween(durationMillis = 1000))
    ) {
        Box(modifier = Modifier.fillMaxSize().background(Color.White)) {
            when (currentPlatform) {
                PlatformType.JS -> {
                    GifImage(drawable = gifUrl)
                }

                else -> {
                    GifImage(randomGifName)
                }
            }
        }
    }
}
*/
@OptIn(KoinExperimentalAPI::class)
@Composable
fun SplashScreen(componentNavigator: ComponentNavigator) {
    val authViewModel = koinViewModel<AuthViewModel>()
    val mainViewModel = koinViewModel<MainViewModel>()
    val currentUser by authViewModel.authState.collectAsState(null)

    val visible = remember { mutableStateOf(true) }
    val removed = remember { mutableStateOf(false) } // новое состояние

    LaunchedEffect(Unit) {
        delay(3000) // время показа GIF
        visible.value = false // начинаем fadeOut
        delay(1000) // ждём завершения анимации
        removed.value = true // полностью убираем слой

        if (currentUser != null) {
            println("currentUser: ${currentUser!!.email}")
            mainViewModel.loadCurrentUser(currentUser = currentUser!!.email!!)
            delay(200)
            val pupil = mainViewModel.currentPupil
                .filterNotNull()
                .first()

            println("currentUser role: ${pupil.role}")

            if (pupil.role == "admin")
                findNavHost().navigateToActivitySingleTop(AdminActivity)
            else
                findNavHost().navigateToActivitySingleTop(MainActivity)

        } else {
            mainViewModel.loadCoachesList()
            findNavHost().navigateToActivitySingleTop(AuthActivity)
        }
    }

    val gifNames =
        listOf("break_splash1", "break_splash2", "break_splash3", "break_splash4", "break_splash5")
    val randomGifName = gifNames.random()
    val gifUrl =
        "https://firebasestorage.googleapis.com/v0/b/goodfootbreaking.appspot.com/o/Logo%2Fbreak_splash1.gif?alt=media&token=7086ff5c-a41e-4740-8358-f31a2d4c53b6"

    // Показываем Box только если он ещё не удалён
    if (!removed.value) {
        AnimatedVisibility(
            visible = visible.value,
            exit = fadeOut(animationSpec = tween(durationMillis = 1000))
        ) {
            Box(modifier = Modifier.fillMaxSize().background(Color.White)) {
                when (currentPlatform) {
                    PlatformType.JS -> GifImage(drawable = gifUrl)
                    else -> GifImage(randomGifName)
                }
            }
        }
    }
}
