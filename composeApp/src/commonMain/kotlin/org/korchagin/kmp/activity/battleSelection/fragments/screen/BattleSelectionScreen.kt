package org.korchagin.kmp.activity.battleSelection.fragments.screen

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Slider
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil3.compose.AsyncImage
import com.korchagin.presentation.models.battle.EventParticipants
import com.korchagin.presentation.models.battle.isComplete
import com.korchagin.presentation.models.getProgress
import com.korchagin.presentation.viewModel.MainViewModel
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.launch
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.activity.battle.BattleActivity
import org.korchagin.kmp.helper.setPositionBackgroundColor
import org.korchagin.kmp.theme.colors.AppColors
import org.korchagin.kmp.uiElements.ShimmerBrush
import team.platforma.extra_nav.navigator.activity.findNavHost
import team.platforma.extra_nav.navigator.component.api.ComponentNavigator
import team.platforma.infoteam.theme.typography.FontWeights
import team.platforma.infoteam.theme.typography.Typography


@OptIn(KoinExperimentalAPI::class)
@Composable
fun BattleSelectionScreen(componentNavigator: ComponentNavigator) {

    val mainViewModel = koinViewModel<MainViewModel>()
    val pupilsList by mainViewModel.pupils.collectAsState(emptyList())
    val eventsParticipants by mainViewModel.currentEventParticipants.collectAsState()
    val selectedJudge by mainViewModel.selectedJudge.collectAsState(null)
    val coroutineScope = rememberCoroutineScope()
    val showShimmer = remember { mutableStateOf(true) }
    val currentEvent by mainViewModel.currentEvent.collectAsState(initial = null)
    val group by mainViewModel.currentSelectionGroup.collectAsState(emptyList())
    val groups by mainViewModel.allSelectionGroups.collectAsState(emptyList())
    val isCurrentSelectionGroupComplete by mainViewModel.isCurrentSelectionGroupComplete.collectAsState(
        false
    )
    val isLastGroup by mainViewModel.isLastSelectionGroup
        .collectAsState(false)
    val isSelectionFinished by mainViewModel.isSelectionFinished
        .collectAsState(false)


    if (selectedJudge != null) {
        LazyColumn(
            modifier = Modifier.fillMaxSize(),
            verticalArrangement = Arrangement.spacedBy(16.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            item {
                Text(
                    modifier = Modifier.padding(16.dp),
                    text = "Отбор. Количество участников ${eventsParticipants.size}",
                    style = Typography.text2xl(weights = FontWeights.SemiBold)
                )
            }
            println("group - $group")
            itemsIndexed(group) { index, pupil ->
                val sliderValue =
                    currentEvent
                        ?.participants
                        ?.get(pupil.userId)
                        ?.selectionPoints
                        ?.get(selectedJudge?.id)
                        ?.toFloat()
                        ?: 0f

                val startBackgroundColor = Color.White
                val endBackgroundColor = setPositionBackgroundColor(index)
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .background(
                            brush = Brush.horizontalGradient(
                                listOf(
                                    startBackgroundColor, endBackgroundColor
                                ), startX = 300.0f
                            )
                        )
                        .padding(5.dp),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.SpaceEvenly
                ) {
                    //        Log.d("ILYA","(image = ${value.avatar}")
                    AsyncImage(
                        model = "",
                        contentDescription = "default crossfade example",
                        modifier = Modifier
                            .size(80.dp)
                            .clip(CircleShape)
                            .background(
                                ShimmerBrush(
                                    targetValue = 1300f, showShimmer = showShimmer.value
                                )
                            )
                            .border(3.dp, Color.Gray, CircleShape),
                        onSuccess = { showShimmer.value = false },
                        contentScale = ContentScale.Crop
                    )
                    Spacer(modifier = Modifier.width(10.dp))
                    Column(
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Text(
                            text = pupil.name,
                            letterSpacing = 1.sp,
                            color = Color.Black,
                        )
                        Spacer(modifier = Modifier.height(5.dp))

                        Column {
                            Slider(
                                value = sliderValue,
                                onValueChange = { newValue ->
                                    mainViewModel.setSelectionPoints(
                                        pupil.userId,
                                        newValue
                                    )
                                },
                                valueRange = 0f..10f,
                                steps = 19
                            )


                            // Row с подписями
                            Row(
                                modifier = Modifier
                                    .fillMaxWidth(),
                                // .padding(horizontal = 8.dp),
                                horizontalArrangement = Arrangement.SpaceBetween
                            ) {
                                for (i in 0..10) {
                                    Text(
                                        text = i.toString(),
                                        style = Typography.textXs(weights = FontWeights.SemiBold)
                                    )
                                }
                            }
                        }

                    }

                    if (index < pupilsList.size - 1) {
                        Column(
                            modifier = Modifier.fillMaxWidth(), horizontalAlignment = Alignment.End
                        ) {
                            HorizontalDivider(
                                modifier = Modifier.fillMaxWidth(0.78f),
                                color = Color.LightGray,
                                thickness = 1.dp
                            )
                        }
                    }
                }
            }
            item {

                if (isCurrentSelectionGroupComplete) {
                    println("isLastGroup = $isLastGroup")

                    Button(
                        onClick = {
                            coroutineScope.launch {
                                mainViewModel.sendSelectionResult()   // сохранить оценки текущей 4-ки
                                if (isLastGroup) {
                                    findNavHost()
                                        .navigateToActivity(BattleActivity)
                                }
                                else {
                                    mainViewModel.nextSelectionGroup()    // перейти к следующей
                                }
                            }
                        }
                    ) {
                        if (isLastGroup) Text("Сформировать сетку")
                        else
                            Text("Следующая четверка")
                    }
                }

            }

        }
    } else {
        LaunchedEffect(isSelectionFinished) {
            if (isSelectionFinished) {

                findNavHost()
                    .navigateToActivity(BattleActivity)

            }
        }
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {


            itemsIndexed(groups) { index, group ->


                val isCurrent =
                    index == currentEvent?.currentSelectionGroup


                val isFinished =
                    group.all { participant ->
                        participant.isComplete(
                            currentEvent?.judges?.keys ?: emptySet()
                        )
                    }


                if (!isFinished || isCurrent) {

                    Card(
                        modifier = Modifier
                            .fillMaxWidth()
                            .border(
                                width = if (isCurrent) 3.dp else 0.dp,
                                color = if (isCurrent)
                                    Color.Green
                                else
                                    Color.Transparent,
                                shape = RoundedCornerShape(20.dp)
                            ),
                        shape = RoundedCornerShape(20.dp),
                        elevation = CardDefaults.cardElevation(6.dp)
                    ) {


                        Column(
                            modifier = Modifier.padding(12.dp)
                        ) {


                            Text(
                                text = "Группа ${index + 1}",
                                style = Typography.textLg(
                                    weights = FontWeights.SemiBold
                                )
                            )


                            Spacer(
                                Modifier.height(8.dp)
                            )


                            group.forEach { pupil ->


                                Row(
                                    modifier = Modifier
                                        .fillMaxWidth()
                                        .padding(vertical = 6.dp),
                                    verticalAlignment = Alignment.CenterVertically
                                ) {


                                    Text(
                                        text = pupil.name,
                                        modifier = Modifier.weight(1f)
                                    )


                                    val score =
                                        pupil.selectionPoints.values.sum()


                                    Text(
                                        text = if(score > 0)
                                            score.toString()
                                        else
                                            "-"
                                    )

                                }
                            }
                        }
                    }
                }
            }
        }
    }

}


