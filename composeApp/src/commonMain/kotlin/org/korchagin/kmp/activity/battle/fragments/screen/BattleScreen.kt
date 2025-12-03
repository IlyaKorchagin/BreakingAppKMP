package org.korchagin.kmp.activity.battle.fragments.screen

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.Slider
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.MutableState
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.people
import coil3.compose.AsyncImage
import com.korchagin.presentation.viewModel.MainViewModel
import org.jetbrains.compose.resources.painterResource
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.theme.colors.AppColors
import team.platforma.extra_nav.navigator.component.api.ComponentNavigator
import team.platforma.infoteam.theme.typography.FontWeights
import team.platforma.infoteam.theme.typography.Typography


@OptIn(KoinExperimentalAPI::class)
@Composable
fun BattleScreen(componentNavigator: ComponentNavigator) {
    val mainViewModel = koinViewModel<MainViewModel>()
    // val events by mainViewModel.events.collectAsState(emptyList())
    val currentPupil by mainViewModel.currentPupil.collectAsState()
    //   val pupil = currentPupil ?: return
    val showShimmer = remember { mutableStateOf(true) }
    // val coroutineScope = rememberCoroutineScope()
    var firstBboyPower by remember { mutableStateOf(0) }
    var secondBboyPower by remember { mutableStateOf(0) }

    var firstBboyMusicality by remember { mutableStateOf(0) }
    var secondBboyMusicality by remember { mutableStateOf(0) }

    var firstBboyCreativity by remember { mutableStateOf(0) }
    var secondBboyCreativity by remember { mutableStateOf(0) }

    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        item {
            // шапка с фотками
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceEvenly
            ) {
                PupilImage("", showShimmer)

                Text(
                    text = "Vs",
                    style = Typography.text3xl(FontWeights.SemiBold)
                        .copy(color = AppColors.colors().primaryColor)
                )

                PupilImage("", showShimmer)
            }
            //-Шапка с фотками


            // Слайдеры
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Column(modifier = Modifier.weight(1f),
                    verticalArrangement = Arrangement.spacedBy(8.dp)) {
                    ProgressSlider(firstBboyPower, onProgressChange = { firstBboyPower = it }, "Сила")
                    ProgressSlider(firstBboyMusicality, onProgressChange = { firstBboyMusicality = it }, "Музыкальность")
                    ProgressSlider(firstBboyCreativity, onProgressChange = { firstBboyCreativity = it }, "Оригинальность")


                }
                Column(modifier = Modifier.weight(1f),
                    verticalArrangement = Arrangement.spacedBy(8.dp))  {
                    ProgressSlider(secondBboyPower, onProgressChange = { secondBboyPower = it }, "Сила")
                    ProgressSlider(secondBboyMusicality, onProgressChange = { secondBboyMusicality = it }, "Музыкальность")
                    ProgressSlider(secondBboyCreativity, onProgressChange = { secondBboyCreativity = it }, "Оригинальность")

                }
            }


        }

    }

}

@Composable
fun ProgressSlider(
    progress: Int,
    onProgressChange: (Int) -> Unit,
    title: String
) {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 8.dp),
        contentAlignment = Alignment.Center
    ) {

        Slider(
            value = progress / 100f,
            onValueChange = {
                onProgressChange((it * 100).toInt())
            },
            modifier = Modifier.fillMaxWidth()
        )

        Text(
            text = "$title ${progress}%",
            style = Typography.textLg(weights = FontWeights.SemiBold)
                .copy(color = Color.White)
        )
    }
}


@Composable
fun PupilImage(url: String, showShimmer: MutableState<Boolean>) {
    if (url.isBlank()) {
        Image(
            painter = painterResource(Res.drawable.people),
            contentDescription = null,
            modifier = Modifier.size(128.dp).clip(CircleShape)
        )
    } else {
        AsyncImage(
            model = url,
            contentDescription = null,
            modifier = Modifier
                .size(128.dp)
                .clip(CircleShape)
                .background(
                    Color.Gray
                ),
            onSuccess = { showShimmer.value = false },
            onError = { showShimmer.value = false }
        )
    }
}