package org.korchagin.kmp.activity.events


import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.korchagin.presentation.models.JudgeModel
import com.korchagin.presentation.viewModel.MainViewModel
import kotlinx.coroutines.launch
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.theme.colors.LocalAppColors

@OptIn(KoinExperimentalAPI::class)
@Composable
fun EventsScreen(
    onEventClick: () -> Unit
) {
    val mainViewModel = koinViewModel<MainViewModel>()

    val events by mainViewModel.events.collectAsState()
    val currentPupil by mainViewModel.currentPupil.collectAsState()
    val judges by mainViewModel.judges.collectAsState(null)

    val pupil = currentPupil ?: return
    val judgesList = judges ?: emptyList()

    val scope = rememberCoroutineScope()
    val colors = LocalAppColors.current

    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 16.dp),
        contentPadding = androidx.compose.foundation.layout.PaddingValues(
            top = 12.dp,
            bottom = 90.dp
        ),
        verticalArrangement = Arrangement.spacedBy(14.dp)
    ) {
        items(
            items = events,
            key = { it.id }
        ) { event ->

            // Состояние выбора судьи отдельно для каждого события
            var selectedJudge by remember(event.id) {
                mutableStateOf<JudgeModel?>(null)
            }

            val isRegistered = event.participants.values.any {
                it.userId == pupil.id
            }

            val isJudgeRegistered = selectedJudge?.id in event.judges

            Card(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(20.dp),
                colors = CardDefaults.cardColors(
                    containerColor = colors.defaultBackground.copy(alpha = 0.65f)
                ),
                elevation = CardDefaults.cardElevation(
                    defaultElevation = 3.dp
                )
            ) {
                Column(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(16.dp),
                    verticalArrangement = Arrangement.spacedBy(14.dp)
                ) {

                    // Информация о событии
                    Column(
                        verticalArrangement = Arrangement.spacedBy(5.dp)
                    ) {
                        Text(
                            text = event.title,
                            fontSize = 18.sp,
                            fontWeight = FontWeight.Bold,
                            color = colors.textDefault
                        )

                        Text(
                            text = event.data,
                            fontSize = 14.sp,
                            color = colors.textDefault.copy(alpha = 0.7f)
                        )
                    }

                    // Загрузка участников
                    Button(
                        onClick = {
                            scope.launch {
                                mainViewModel.setCurrentEvent(event.id)
                                onEventClick()
                            }
                        },
                        modifier = Modifier.fillMaxWidth(),
                        shape = RoundedCornerShape(12.dp),
                        colors = ButtonDefaults.buttonColors(
                            containerColor = colors.mainGreen
                        )
                    ) {
                        Text(
                            text = "Участники",
                            fontWeight = FontWeight.SemiBold
                        )
                    }

                    // Регистрация участника
                    OutlinedButton(
                        onClick = {
                            scope.launch {
                                if (isRegistered) {
                                    mainViewModel.unregisterToEvent(event)
                                } else {
                                    mainViewModel.registerToEvent(event)
                                }
                            }
                        },
                        modifier = Modifier.fillMaxWidth(),
                        shape = RoundedCornerShape(12.dp),
                        border = BorderStroke(
                            width = 1.5.dp,
                            color = if (isRegistered) {
                                colors.dislikeColor
                            } else {
                                colors.mainGreen
                            }
                        )
                    ) {
                        Text(
                            text = if (isRegistered) {
                                "Отменить регистрацию"
                            } else {
                                "Зарегистрироваться"
                            },
                            color = if (isRegistered) {
                                colors.dislikeColor
                            } else {
                                colors.mainGreen
                            },
                            fontWeight = FontWeight.SemiBold
                        )
                    }

                    // Разделитель блока судей
                    Text(
                        text = "Судьи",
                        fontSize = 15.sp,
                        fontWeight = FontWeight.Bold,
                        color = colors.textDefault
                    )

                    MaterialSingleDropdown(
                        items = judgesList,
                        selectedItem = selectedJudge,
                        onItemSelected = {
                            selectedJudge = it
                            mainViewModel.setJudge(it)
                        },
                        label = "Выберите судью"
                    )

                    // Регистрация выбранного судьи
                    if (selectedJudge != null) {
                        OutlinedButton(
                            onClick = {
                                scope.launch {
                                    if (isJudgeRegistered) {
                                        mainViewModel.unregisterJudgeFromEvent(
                                            event,
                                            selectedJudge!!
                                        )
                                    } else {
                                        mainViewModel.registerJudgeToEvent(
                                            event,
                                            selectedJudge!!
                                        )
                                    }
                                }
                            },
                            modifier = Modifier.fillMaxWidth(),
                            shape = RoundedCornerShape(12.dp),
                            border = BorderStroke(
                                width = 1.5.dp,
                                color = if (isJudgeRegistered) {
                                    colors.dislikeColor
                                } else {
                                    colors.mainGreen
                                }
                            )
                        ) {
                            Text(
                                text = if (isJudgeRegistered) {
                                    "Убрать судью"
                                } else {
                                    "Назначить судьёй"
                                },
                                color = if (isJudgeRegistered) {
                                    colors.dislikeColor
                                } else {
                                    colors.mainGreen
                                },
                                fontWeight = FontWeight.SemiBold
                            )
                        }
                    }
                }
            }
        }
    }
}



