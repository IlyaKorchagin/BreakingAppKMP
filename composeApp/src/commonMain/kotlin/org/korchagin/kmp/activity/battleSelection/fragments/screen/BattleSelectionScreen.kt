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
    //val visibleGroups by mainViewModel.visibleGroups.collectAsState()
    //println("Log: visibleGroups - $visibleGroups")


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
            itemsIndexed(eventsParticipants) { index, pupil ->
               /* val sliderValue by mainViewModel
                    .getSelectionPoints(
                        pupil.userId,
                        selectedJudge?.id
                    )
                    .collectAsState(initial = 0.0)*/

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
                          /*  Slider(
                                value = sliderValue.toFloat(),
                                onValueChange = { newValue ->
                                    mainViewModel.setSelectionPoints(
                                        pupil.userId,
                                        newValue
                                    )
                                },
                                valueRange = 0f..10f,
                                steps = 19
                            )*/
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
                Button(onClick = {
                    coroutineScope.launch {
                        mainViewModel.sendSelectionResult()
                        findNavHost().navigateToActivity(BattleActivity)
                    }
                }) {
                    Text(text = "Сформировать сетку")
                }
            }
        }
    }
    /*else {
        LazyColumn(
            modifier = Modifier.fillMaxSize().padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(24.dp)
        ) {
            item {
                Text(
                    text = "Турнирная сетка",
                    style = Typography.text2xl(weights = FontWeights.SemiBold)
                )
            }

            itemsIndexed(visibleGroups) { groupIndex, group ->
                // твоя карточка с 4 участниками
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(20.dp),
                    elevation = CardDefaults.cardElevation(6.dp)
                ) {

                    Column(
                        modifier = Modifier.padding(16.dp),
                        verticalArrangement = Arrangement.spacedBy(12.dp)
                    ) {

                        Text(
                            text = "Батл ${groupIndex + 1}",
                            style = Typography.textLg(
                                weights = FontWeights.SemiBold
                            )
                        )

                        group.forEachIndexed { index, pupil ->

                            Row(
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .background(
                                        color = AppColors.colors().defaultBackground,
                                        shape = RoundedCornerShape(12.dp)
                                    )
                                    .padding(12.dp),
                                verticalAlignment = Alignment.CenterVertically
                            ) {

                                AsyncImage(
                                    model = "",
                                    contentDescription = null,
                                    modifier = Modifier
                                        .size(60.dp)
                                        .clip(CircleShape)
                                        .border(
                                            2.dp,
                                            Color.LightGray,
                                            CircleShape
                                        ),
                                    contentScale = ContentScale.Crop
                                )

                                Spacer(modifier = Modifier.width(12.dp))

                                Column(
                                    modifier = Modifier.weight(1f)
                                ) {

                                    Text(
                                        text = pupil.name,
                                        style = Typography.text2xl(
                                            weights = FontWeights.Regular,
                                        ),
                                        color = AppColors.colors().textDefault
                                    )

                                    Spacer(modifier = Modifier.height(4.dp))

                                    Text(
                                        text = "Участник ${index + 1}",
                                        style = Typography.text2xl(
                                            weights = FontWeights.Regular
                                        ),
                                        color = AppColors.colors().textDefault
                                    )
                                }
                            }
                        }
                    }
                }
            }
        }
    }*/

}


