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
import com.korchagin.presentation.models.JudgeResult
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
fun BattleScreen(
    componentNavigator: ComponentNavigator
) {

    val mainViewModel = koinViewModel<MainViewModel>()

    val showShimmer = remember { mutableStateOf(true) }

    // ---------------------------------------------------------
    // SCORE STATE
    // ---------------------------------------------------------

    var firstBboyPower by remember { mutableStateOf(0) }
    var secondBboyPower by remember { mutableStateOf(0) }

    var firstBboyMusicality by remember { mutableStateOf(0) }
    var secondBboyMusicality by remember { mutableStateOf(0) }

    var firstBboyCreativity by remember { mutableStateOf(0) }
    var secondBboyCreativity by remember { mutableStateOf(0) }


    // ---------------------------------------------------------
    // BATTLE STATE
    // ---------------------------------------------------------

    val pairs by mainViewModel.currentRoundPairs.collectAsState()

    val currentPairIndex by
    mainViewModel.currentPairIndex.collectAsState(initial = 0)

    val currentPairIndexForUser by
    mainViewModel.currentPairIndexForUser.collectAsState(initial = 0)

    val isCurrentBattleComplete by
    mainViewModel.isCurrentBattleComplete.collectAsState(initial = false)

    val isFullBattleRoundComplete by
    mainViewModel.isFullBattleRoundComplete.collectAsState(false)


    // ---------------------------------------------------------
    // OTHER STATE
    // ---------------------------------------------------------

    val winner by
    mainViewModel.winner.collectAsState()

    val eventsParticipants by
    mainViewModel.currentEventParticipants.collectAsState()

    val isSelectionComplete by
    mainViewModel.isSelectionComplete.collectAsState(false)

    val selectedJudge by
    mainViewModel.selectedJudge.collectAsState(null)


    // ---------------------------------------------------------
    // START FIRST ROUND
    // ---------------------------------------------------------

    LaunchedEffect(isSelectionComplete) {

        if (isSelectionComplete) {

            println("Все оценки проставлены! Стартуем первый раунд")

            mainViewModel.startFirstRound(
                eventsParticipants
            )
        }
    }


    // ---------------------------------------------------------
    // RESET SLIDERS WHEN PAIR CHANGES
    // ---------------------------------------------------------

    LaunchedEffect(currentPairIndex) {

        firstBboyPower = 0
        firstBboyMusicality = 0
        firstBboyCreativity = 0

        secondBboyPower = 0
        secondBboyMusicality = 0
        secondBboyCreativity = 0
    }


    // ---------------------------------------------------------
    // WAIT FOR SELECTION
    // ---------------------------------------------------------

    if (!isSelectionComplete) {

        CircularProgressIndicator()

        return
    }


    // ---------------------------------------------------------
    // JUDGE
    // ---------------------------------------------------------

    if (selectedJudge != null) {

        // Нет пар
        if (pairs.isEmpty()) {

            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(16.dp),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.Center
            ) {

                Text(
                    text = "Победитель - ${winner?.name}",
                    style = Typography.text3xl(
                        weights = FontWeights.SemiBold
                    )
                )

                Spacer(
                    modifier = Modifier.height(24.dp)
                )

                Button(
                    modifier = Modifier.fillMaxWidth(),
                    onClick = {
                        mainViewModel.finishEvent()
                    }
                ) {

                    Text("Соревнования завершены")
                }
            }

            return
        }


        // -----------------------------------------------------
        // CURRENT PAIR
        // -----------------------------------------------------

        val pair = pairs.getOrNull(currentPairIndex)


        if (pair != null) {

            LazyColumn(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(16.dp),

                verticalArrangement =
                    Arrangement.spacedBy(16.dp),

                horizontalAlignment =
                    Alignment.CenterHorizontally
            ) {

                item {

                    // -------------------------------------------------
                    // ROUND TITLE
                    // -------------------------------------------------

                    Text(
                        text = getRoundTitle(
                            mainViewModel.currentRound.value.name
                        ),

                        style = Typography.text3xl(
                            weights = FontWeights.SemiBold
                        )
                    )


                    Spacer(
                        modifier = Modifier.height(16.dp)
                    )


                    // -------------------------------------------------
                    // PAIR NUMBER
                    // -------------------------------------------------

                    Text(
                        text =
                            "Пара ${currentPairIndex + 1} из ${pairs.size}",

                        style = Typography.text3xl(
                            weights = FontWeights.SemiBold
                        )
                    )


                    Spacer(
                        modifier = Modifier.height(16.dp)
                    )


                    // -------------------------------------------------
                    // PARTICIPANTS
                    // -------------------------------------------------

                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        verticalAlignment = Alignment.CenterVertically
                    ) {

                        Box(
                            modifier = Modifier.weight(1f),
                            contentAlignment = Alignment.Center
                        ) {
                            PupilImage(
                                url = "",
                                showShimmer = showShimmer,
                                participants = pair.left,
                                color = Color(0xFF1976D2)
                            )
                        }

                        Text(
                            text = "VS",
                            modifier = Modifier.padding(horizontal = 12.dp),
                            style = Typography.text3xl(FontWeights.SemiBold)
                                .copy(
                                    color = AppColors.colors().primaryColor
                                )
                        )

                        Box(
                            modifier = Modifier.weight(1f),
                            contentAlignment = Alignment.Center
                        ) {
                            PupilImage(
                                url = "",
                                showShimmer = showShimmer,
                                participants = pair.right,
                                color = Color(0xFFD32F2F)
                            )
                        }
                    }


                    Spacer(
                        modifier = Modifier.height(24.dp)
                    )


                    // -------------------------------------------------
                    // SCORES
                    // -------------------------------------------------

                    Row(
                        modifier = Modifier.fillMaxWidth(),

                        verticalAlignment =
                            Alignment.CenterVertically,

                        horizontalArrangement =
                            Arrangement.SpaceBetween
                    ) {

                        Column(
                            Modifier.weight(1f)
                        ) {

                            ProgressSlider(
                                progress = firstBboyPower,
                                onProgressChange = {
                                    firstBboyPower = it
                                },
                                title = "Сила"
                            )


                            ProgressSlider(
                                progress = firstBboyMusicality,
                                onProgressChange = {
                                    firstBboyMusicality = it
                                },
                                title = "Музыкальность"
                            )


                            ProgressSlider(
                                progress = firstBboyCreativity,
                                onProgressChange = {
                                    firstBboyCreativity = it
                                },
                                title = "Оригинальность"
                            )
                        }


                        Column(
                            Modifier.weight(1f)
                        ) {

                            ProgressSlider(
                                progress = secondBboyPower,
                                onProgressChange = {
                                    secondBboyPower = it
                                },
                                title = "Сила"
                            )


                            ProgressSlider(
                                progress = secondBboyMusicality,
                                onProgressChange = {
                                    secondBboyMusicality = it
                                },
                                title = "Музыкальность"
                            )


                            ProgressSlider(
                                progress = secondBboyCreativity,
                                onProgressChange = {
                                    secondBboyCreativity = it
                                },
                                title = "Оригинальность"
                            )
                        }
                    }


                    Spacer(
                        modifier = Modifier.height(24.dp)
                    )


                    // -------------------------------------------------
                    // CURRENT BATTLE STATUS
                    // -------------------------------------------------

                    if (!isCurrentBattleComplete) {

                        Button(
                            modifier = Modifier.fillMaxWidth(),
                            onClick = {
                                val pairId = listOf(
                                    pair.left.userId,
                                    pair.right.userId
                                )
                                    .sorted()
                                    .joinToString("_")

                                val result = BattleResult(
                                    pairId = pairId,
                                    left = pair.left,
                                    right = pair.right,
                                    leftScore =
                                        firstBboyPower +
                                                firstBboyMusicality +
                                                firstBboyCreativity,
                                    rightScore =
                                        secondBboyPower +
                                                secondBboyMusicality +
                                                secondBboyCreativity
                                )

                                mainViewModel.addBattleResult(result)
                            }
                        ) {
                            Text("Готово")
                        }

                    } else {
                        if (!isFullBattleRoundComplete) {
                            Button(
                                modifier = Modifier.fillMaxWidth(),
                                onClick = {
                                    mainViewModel.nextPair()
                                }
                            ) {
                                Text("Следующая пара")
                            }
                        }
                        else{
                            Button(
                                modifier = Modifier.fillMaxWidth(),
                                onClick = {
                                    mainViewModel.buildNextRound()
                                }
                            ) {
                                Text("Следующий раунд")
                            }
                        }
                    }
                }
            }

        } else {

            CircularProgressIndicator()
        }

    } else {

        // =========================================================
        // SPECTATOR / USER
        // =========================================================

        val pair =
            pairs.getOrNull(currentPairIndexForUser)


        if (pair != null) {

            val judgeResults =
                mainViewModel.getJudgeResults(pair)


            LazyColumn(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(16.dp),

                verticalArrangement =
                    Arrangement.spacedBy(16.dp)
            ) {

                item {

                    Text(
                        text =
                            getRoundTitle(
                                mainViewModel.currentRound.value.name
                            ),

                        style =
                            Typography.text3xl(
                                weights =
                                    FontWeights.SemiBold
                            )
                    )


                    Spacer(
                        modifier =
                            Modifier.height(8.dp)
                    )


                    Text(
                        text =
                            "Пара ${currentPairIndexForUser + 1} из ${pairs.size-1}",

                        style =
                            Typography.text3xl(
                                weights =
                                    FontWeights.SemiBold
                            )
                    )


                    Spacer(
                        modifier =
                            Modifier.height(16.dp)
                    )


                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        verticalAlignment = Alignment.CenterVertically
                    ) {

                        Box(
                            modifier = Modifier.weight(1f),
                            contentAlignment = Alignment.Center
                        ) {
                            PupilImage(
                                url = "",
                                showShimmer = showShimmer,
                                participants = pair.left,
                                color = Color(0xFF1976D2)
                            )
                        }

                        Text(
                            text = "VS",
                            modifier = Modifier.padding(horizontal = 12.dp),
                            style = Typography.text3xl(FontWeights.SemiBold)
                                .copy(
                                    color = AppColors.colors().primaryColor
                                )
                        )

                        Box(
                            modifier = Modifier.weight(1f),
                            contentAlignment = Alignment.Center
                        ) {
                            PupilImage(
                                url = "",
                                showShimmer = showShimmer,
                                participants = pair.right,
                                color = Color(0xFFD32F2F)
                            )
                        }
                    }


                    Spacer(
                        modifier =
                            Modifier.height(24.dp)
                    )


                    Text(
                        text = "Решение судей",

                        style =
                            Typography.text3xl(
                                weights =
                                    FontWeights.SemiBold
                            )
                    )
                }


                item {
                    JudgeResultsRow(
                        judgeResults = judgeResults,
                        left = pair.left,
                        right = pair.right
                    )
                }


                if (judgeResults.isEmpty()) {

                    item {

                        Text(
                            text =
                                "Ожидаем решения судей...",

                            style =
                                Typography.text3xl(
                                    weights =
                                        FontWeights.SemiBold
                                )
                        )
                    }
                }
            }

        } else {

            CircularProgressIndicator()
        }
    }
}

private fun getRoundTitle(round: String): String {
    return when (round) {

        Rounds.TOP32.name ->
            "TOP 32"

        Rounds.TOP16.name ->
            "TOP 16"

        Rounds.TOP8.name ->
            "TOP 8"

        Rounds.TOP4.name ->
            "TOP 4"

        Rounds.BIG_FINAL.name ->
            "Большой финал"

        Rounds.LITTLE_FINAL.name ->
            "Малый финал"

        else ->
            round
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
    participants: EventParticipants,
    color: Color
) {
    Column(
        horizontalAlignment = Alignment.CenterHorizontally
    ) {

        if (url.isBlank()) {
            Image(
                painter = painterResource(Res.drawable.people),
                contentDescription = participants.name,
                modifier = Modifier
                    .size(128.dp)
                    .clip(CircleShape)
            )
        } else {
            AsyncImage(
                model = url,
                contentDescription = null,
                modifier = Modifier
                    .size(128.dp)
                    .clip(CircleShape)
                    .background(Color.Gray),
                onSuccess = {
                    showShimmer.value = false
                },
                onError = {
                    showShimmer.value = false
                }
            )
        }

        Spacer(
            modifier = Modifier.height(8.dp)
        )

        // Имя участника
        Box(
            modifier = Modifier
                .height(45.dp)
                .background(color),
            contentAlignment = Alignment.Center
        ) {
            Text(
                text = participants.name,
                color = Color.White,
                fontWeight = FontWeight.Bold,
                fontSize = 16.sp,
                textAlign = TextAlign.Center,
                modifier = Modifier.padding(horizontal = 8.dp)
            )
        }
    }
}

@Composable
fun JudgeResultsRow(
    judgeResults: List<JudgeResult>,
    left: EventParticipants,
    right: EventParticipants
) {
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceEvenly
    ) {
        judgeResults.forEach { judgeResult ->

            val leftWin = judgeResult.winnerId == left.userId
            val rightWin = judgeResult.winnerId == right.userId

            Column(
                modifier = Modifier.weight(1f),
                horizontalAlignment = Alignment.CenterHorizontally
            ) {

                // Имя судьи
                Text(
                    text = judgeResult.judgeName,
                    fontWeight = FontWeight.Bold,
                    fontSize = 16.sp,
                    textAlign = TextAlign.Center
                )

                Spacer(
                    modifier = Modifier.height(8.dp)
                )

                // Оценка
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 4.dp)
                        .height(45.dp)
                        .background(
                            when {
                                leftWin -> Color(0xFF1976D2)
                                rightWin -> Color(0xFFD32F2F)
                                else -> Color.Gray
                            }
                        ),
                    contentAlignment = Alignment.Center
                ){} /*{
                    Text(
                        text = when {
                            leftWin -> left.name
                            rightWin -> right.name
                            else -> "Ничья"
                        },
                        color = Color.White,
                        fontWeight = FontWeight.Bold,
                        textAlign = TextAlign.Center
                    )
                }*/
            }
        }
    }
}


