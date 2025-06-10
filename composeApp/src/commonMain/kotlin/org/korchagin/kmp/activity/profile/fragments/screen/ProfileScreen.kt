package org.korchagin.kmp.activity.profile.fragments.screen

import VideoPlayer
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.drawWithCache
import androidx.compose.ui.graphics.BlendMode
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.em
import androidx.compose.ui.unit.sp
import coil3.compose.AsyncImage
import com.korchagin.presentation.viewModel.MainViewModel
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.theme.colors.AppColors
import org.korchagin.kmp.uiElements.ShimmerBrush
import org.korchagin.kmp.uiElements.StyledTextScreen
import org.korchagin.kmp.uiElements.calculateAge
import team.platforma.extra_nav.navigator.component.api.ComponentNavigator

@OptIn(KoinExperimentalAPI::class)
@Composable
fun ProfileScreen(componentNavigator: ComponentNavigator) {
    val mainViewModel = koinViewModel<MainViewModel>()
    val currentPupil by mainViewModel.currentPupil.collectAsState(null)
    val pupil = currentPupil ?: return
    val showShimmer = remember { mutableStateOf(true) }
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(
                brush = Brush.verticalGradient(
                    colors = listOf(Color.Gray, Color.White),
                    startY = 0f,
                    endY = 300f
                )
            )
            .verticalScroll(rememberScrollState())

    ) {

        /*if (showDialog) {
            ExitAlertDialog(
                onConfirmExit = {
                    viewModel.signOut()
                    navController.navigate(Screen.LogInScreen.route) {
                        popUpTo(Screen.LogInScreen.route) {
                            inclusive = true
                        }
                    }
                },
                onDismiss = { showDialog = false }
            )
        }*/
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(vertical = 16.dp)
        ) {
            Spacer(modifier = Modifier.width(8.dp))
            Box(
                modifier = Modifier
                    .border(
                        width = 3.dp,
                        brush = Brush.horizontalGradient(
                            listOf(
                                Color.Black,
                                AppColors.colors().silver
                            )
                        ),
                        shape = RoundedCornerShape(percent = 50)
                    )
            ) {
                AsyncImage(
                    model = pupil.avatar,
                    contentDescription = "default crossfade example",
                    modifier = Modifier
                        .size(150.dp)
                        .clip(CircleShape)
                        .background(
                            ShimmerBrush(
                                targetValue = 1300f,
                                showShimmer = showShimmer.value
                            )
                        ),
                    onSuccess = { showShimmer.value = false },
                    contentScale = ContentScale.Crop
                )
            }
            Column {
                Box(
                    modifier = Modifier
                        .fillMaxSize()
                        .wrapContentSize(Alignment.Center)
                ) {
                    Text(
                        text = pupil.name,
                        letterSpacing = 0.1.em,
                        fontFamily = FontFamily.Serif,
                        style = TextStyle(
                            textAlign = TextAlign.Center,
                            fontSize = 20.sp,
                            fontWeight = FontWeight.Bold
                        ),
                        textDecoration = TextDecoration.Underline,
                        modifier = Modifier
                            .graphicsLayer(alpha = 0.99f)
                            .padding(8.dp)
                            .drawWithCache {
                                onDrawWithContent {
                                    drawContent()
                                    drawRect(
                                        Brush.horizontalGradient(
                                            listOf(
                                                Color.Black,
                                                AppColors.colors().bronze
                                            )
                                        ), blendMode = BlendMode.SrcAtop
                                    )
                                }
                            }
                    )
                }
                StyledTextScreen(
                    title = "Возраст: ",
                    description = if (pupil.born.isNotEmpty()) calculateAge(pupil.born).toString()
                    else "не указано"
                )
                StyledTextScreen(title = "Дата рождения: ", description = pupil.born)
                StyledTextScreen(title = "Страна: ", description = pupil.country)
                StyledTextScreen(title = "Город: ", description = pupil.city)
            }

        }

        VideoPlayer(
            modifier = Modifier,
            url = pupil.video
        )

    }
}
