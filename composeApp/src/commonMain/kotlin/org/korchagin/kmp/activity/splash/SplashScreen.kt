package org.korchagin.kmp.activity.splash

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shadow
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp
import com.korchagin.presentation.viewModel.MainViewModel
import com.korchagin.presentation_auth.viewModel.AuthViewModel
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.filterNotNull
import kotlinx.coroutines.flow.first
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.GifImage


@OptIn(KoinExperimentalAPI::class)
@Composable
fun SplashScreen(
    onAdminClick: () -> Unit,
    onUserClick: () -> Unit,
    onAuthClick: () -> Unit
) {
    val authViewModel = koinViewModel<AuthViewModel>()
    val mainViewModel = koinViewModel<MainViewModel>()

    val currentUser by authViewModel.authState.collectAsState(null)

    var gifLoaded by remember { mutableStateOf(false) }
    var visible by remember { mutableStateOf(true) }
    var removed by remember { mutableStateOf(false) }

    val gifNames = listOf("break_splash1")
    val randomGifName = remember { gifNames.random() }

    LaunchedEffect(gifLoaded) {
        if (!gifLoaded) return@LaunchedEffect

        // GIF успешно загружена — начинаем отсчёт
        delay(3000)

        // Плавно скрываем GIF
        visible = false

        // Ждём окончания fadeOut
        delay(500)
        removed = true

        // Переходим на нужный экран
        if (currentUser != null) {
            println("currentUser: ${currentUser!!.email}")

            mainViewModel.loadCurrentUser(
                currentUser = currentUser!!.email!!
            )

            val pupil = mainViewModel.currentPupil
                .filterNotNull()
                .first()

            println("currentUser role: ${pupil.role}")

            if (pupil.role == "admin") {
                onAdminClick()
            } else {
                onUserClick()
            }
        } else {
            mainViewModel.loadCoachesList()
            onAuthClick()
        }
    }

    if (!removed) {
        AnimatedVisibility(
            visible = visible,
            exit = fadeOut(
                animationSpec = tween(durationMillis = 1000)
            )
        ) {

            Box(
                modifier = Modifier.fillMaxSize(),
                contentAlignment = Alignment.Center
            ) {
                // Название приложения, пока GIF загружается
                AnimatedVisibility(
                    visible = !gifLoaded,
                    exit = fadeOut(animationSpec = tween(500))
                ) {
                    Text(
                        text = "BreakingApp",
                        fontSize = 38.sp,
                        fontWeight = FontWeight.ExtraBold,
                        color = Color.White,
                        letterSpacing = 2.sp,
                        style = TextStyle(
                            shadow = Shadow(
                                color = Color.Black.copy(alpha = 0.45f),
                                offset = Offset(3f, 3f),
                                blurRadius = 8f
                            )
                        )
                    )
                }

                // GIF
                GifImage(
                    drawable = randomGifName,
                    onLoaded = {
                        gifLoaded = true
                    }
                )
            }

        }
    }
}
