package org.korchagin.kmp.activity.battle.fragments.screen

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.Button
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Slider
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
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
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.people
import coil3.compose.AsyncImage
import com.korchagin.module_common.Rounds
import com.korchagin.presentation.models.battle.BattleResult
import com.korchagin.presentation.models.battle.EventParticipants
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
    val showShimmer = remember { mutableStateOf(true) }

    var firstBboyPower by remember { mutableStateOf(0) }
    var secondBboyPower by remember { mutableStateOf(0) }

    var firstBboyMusicality by remember { mutableStateOf(0) }
    var secondBboyMusicality by remember { mutableStateOf(0) }

    var firstBboyCreativity by remember { mutableStateOf(0) }
    var secondBboyCreativity by remember { mutableStateOf(0) }

    val pairs by mainViewModel.currentRoundPairs.collectAsState()

    var currentPairIndex by remember { mutableStateOf(0) }

    val winner by mainViewModel.winner.collectAsState()
    val eventsParticipants by mainViewModel.currentEventParticipants.collectAsState()
    val isSelectionComplete by mainViewModel.isSelectionComplete.collectAsState()

    LaunchedEffect(Unit){
        println("🔥 POLLING  First STARTED")
        mainViewModel.startPollingSelection()
    }

    LaunchedEffect(isSelectionComplete) {
        if (isSelectionComplete) {
            println("Все оценки проставлены! Стартуем первый раунд")
            mainViewModel.startNextRound(eventsParticipants, true)
        }
    }

    if(isSelectionComplete) {
        if (pairs.isNotEmpty()) {

            if (currentPairIndex < pairs.size) {
                val pair = pairs[currentPairIndex]
                LaunchedEffect(currentPairIndex) {
                    firstBboyPower = 0
                    firstBboyMusicality = 0
                    firstBboyCreativity = 0

                    secondBboyPower = 0
                    secondBboyMusicality = 0
                    secondBboyCreativity = 0
                }

                LazyColumn(
                    modifier = Modifier
                        .fillMaxSize()
                        .padding(16.dp),
                    verticalArrangement = Arrangement.spacedBy(16.dp),
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    item {
                        Text(
                            text = when (mainViewModel.currentRound.value) {
                                Rounds.TOP32 -> "TOP 32"
                                Rounds.TOP16 -> "TOP 16"
                                Rounds.TOP8 -> "TOP 8"
                                Rounds.TOP4 -> "TOP 4"
                                Rounds.BIG_FINAL -> "Большой финал"
                                Rounds.LITTLE_FINAL -> "Малый финал"
                            },
                            style = Typography.text3xl(weights = FontWeights.SemiBold)
                        )

                        // --- Шапка с фотками ---
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.SpaceEvenly
                        ) {
                            PupilImage("", showShimmer, pair.left)

                            Text(
                                text = "VS",
                                style = Typography.text3xl(FontWeights.SemiBold)
                                    .copy(color = AppColors.colors().primaryColor)
                            )

                            PupilImage("", showShimmer, pair.right)
                        }

                        // --- Слайдеры для левого и правого ---
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            Column(Modifier.weight(1f)) {
                                ProgressSlider(firstBboyPower, { firstBboyPower = it }, "Сила")
                                ProgressSlider(
                                    firstBboyMusicality,
                                    { firstBboyMusicality = it },
                                    "Музыкальность"
                                )
                                ProgressSlider(
                                    firstBboyCreativity,
                                    { firstBboyCreativity = it },
                                    "Оригинальность"
                                )
                            }

                            Column(Modifier.weight(1f)) {
                                ProgressSlider(secondBboyPower, { secondBboyPower = it }, "Сила")
                                ProgressSlider(
                                    secondBboyMusicality,
                                    { secondBboyMusicality = it },
                                    "Музыкальность"
                                )
                                ProgressSlider(
                                    secondBboyCreativity,
                                    { secondBboyCreativity = it },
                                    "Оригинальность"
                                )
                            }
                        }

                        Spacer(Modifier.height(24.dp))

                        Button(
                            modifier = Modifier.fillMaxWidth(),
                            onClick = {
                                val result = BattleResult(
                                    left = pair.left,
                                    right = pair.right,
                                    leftScore = firstBboyPower + firstBboyMusicality + firstBboyCreativity,
                                    rightScore = secondBboyPower + secondBboyMusicality + secondBboyCreativity
                                )

                                   mainViewModel.addBattleResult(result)
                                currentPairIndex++
                            }
                        ) {
                            Text("Готово")
                        }
                    }
                }
            } else {
                Button(
                    modifier = Modifier.fillMaxWidth(),
                    onClick = {
                        mainViewModel.buildNextRound()
                        currentPairIndex = 0
                    }
                ) {
                    Text("Следующий круг")
                }
            }

        } else {
            Column {
                Text(text = "Победитель - ${winner?.name}")
                Button(
                    modifier = Modifier.fillMaxWidth(),
                    onClick = {
                        //   mainViewModel.finishEvent()
                    }
                ) {
                    Text("Соревнования завершены")
                }

            }
        }
    }
    else{
        CircularProgressIndicator()
    }
    /*else {
        println("wait judges decisions")
        CircularProgressIndicator()
        Text("Ждём решения судей")
    }*/


    /*if (!eventsParticipants.isEmpty()) {
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            items(createBattlePairs(eventsParticipants)) {
                // шапка с фотками
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.SpaceEvenly
                ) {
                    PupilImage("", showShimmer, it.left)

                    Text(
                        text = "Vs",
                        style = Typography.text3xl(FontWeights.SemiBold)
                            .copy(color = AppColors.colors().primaryColor)
                    )

                    PupilImage("", showShimmer, it.right)
                }
                //-Шапка с фотками


                // Слайдеры
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.SpaceBetween
                ) {
                    Column(
                        modifier = Modifier.weight(1f),
                        verticalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        ProgressSlider(
                            firstBboyPower,
                            onProgressChange = { firstBboyPower = it },
                            "Сила"
                        )
                        ProgressSlider(
                            firstBboyMusicality,
                            onProgressChange = { firstBboyMusicality = it },
                            "Музыкальность"
                        )
                        ProgressSlider(
                            firstBboyCreativity,
                            onProgressChange = { firstBboyCreativity = it },
                            "Оригинальность"
                        )


                    }
                    Column(
                        modifier = Modifier.weight(1f),
                        verticalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        ProgressSlider(
                            secondBboyPower,
                            onProgressChange = { secondBboyPower = it },
                            "Сила"
                        )
                        ProgressSlider(
                            secondBboyMusicality,
                            onProgressChange = { secondBboyMusicality = it },
                            "Музыкальность"
                        )
                        ProgressSlider(
                            secondBboyCreativity,
                            onProgressChange = { secondBboyCreativity = it },
                            "Оригинальность"
                        )

                    }
                }


            }

        }*/
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
            style = TextStyle(
                textAlign = TextAlign.Center,
                fontSize = 16.sp,
                fontWeight = FontWeight.Bold
            )
        )
    }
}


@Composable
fun PupilImage(
    url: String,
    showShimmer: MutableState<Boolean>,
    participants: EventParticipants
) {
    Column(horizontalAlignment = Alignment.CenterHorizontally) {
        if (url.isBlank()) {
            Image(
                painter = painterResource(Res.drawable.people),
                contentDescription = participants.name,
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
        Text(text = participants.name)
    }
}


