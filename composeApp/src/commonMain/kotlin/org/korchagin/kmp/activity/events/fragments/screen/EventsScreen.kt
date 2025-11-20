package org.korchagin.kmp.activity.events.fragments.screen

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.korchagin.presentation.viewModel.MainViewModel
import kotlinx.coroutines.launch
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.theme.colors.AppColors
import team.platforma.extra_nav.navigator.component.api.ComponentNavigator


@OptIn(KoinExperimentalAPI::class)
@Composable
fun EventsScreen(componentNavigator: ComponentNavigator) {
    val mainViewModel = koinViewModel<MainViewModel>()
    val events by mainViewModel.events.collectAsState(emptyList())
    val currentPupil by mainViewModel.currentPupil.collectAsState()
    val pupil = currentPupil ?: return
    val coroutineScope = rememberCoroutineScope()

    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        items(events) { event ->
            println("event ${event.title}: ${event.registered}")

            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 4.dp),
                shape = RoundedCornerShape(6.dp),
                elevation = CardDefaults.cardElevation(defaultElevation = 4.dp)
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(16.dp),
                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                ) {

                    Column(modifier = Modifier.weight(1f)) {
                        Text(text = event.title,
                            style = TextStyle(
                                fontSize = 16.sp,
                                fontWeight = FontWeight.Bold,
                                color = AppColors.colors().primaryColor
                            )
                        )
                        Text(text = event.data,
                            modifier = Modifier.padding(top = 4.dp),
                            style = TextStyle(
                                fontSize = 14.sp,
                                fontWeight = FontWeight.Bold,
                                color = AppColors.colors().primaryColor
                            ))
                    }

                    OutlinedButton(
                        onClick = {
                            coroutineScope.launch {
                                if (event.registered.contains(pupil.id)) mainViewModel.unregisterToEvent(event)
                                else mainViewModel.registerToEvent(event)
                            }
                        },
                        border = BorderStroke(
                            3.dp,
                            color = if (event.registered.contains(pupil.id)) AppColors.colors().dislikeColor
                            else AppColors.colors().mainGreen
                        )
                    ) {
                        Text(
                            text = if (event.registered.contains(pupil.id)) "Unregister" else "Register",
                            style = TextStyle(
                                fontSize = 16.sp,
                                fontWeight = FontWeight.Bold,
                                color = if (event.registered.contains(pupil.id)) AppColors.colors().dislikeColor
                                else AppColors.colors().mainGreen
                            )
                        )
                    }
                }
            }


            /*Row(
                modifier = Modifier.fillMaxWidth()
                    .padding(4.dp)
                    .clip(CircleShape)
                    .border(
                        BorderStroke(
                            1.dp,
                            AppColors.colors().primaryColor
                        )
                    ),
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {

                Column(
                    modifier = Modifier.weight(1f)
                ) {
                    Text(
                        text = event.title,
                        maxLines = Int.MAX_VALUE
                    )
                    Text(
                        text = event.data,
                        maxLines = Int.MAX_VALUE
                    )
                }

                OutlinedButton(
                    onClick = {
                        coroutineScope.launch {
                            if (event.registered.contains(pupil.id)) mainViewModel.unregisterToEvent(event)
                            else mainViewModel.registerToEvent(event)
                        }
                    },
                    border = BorderStroke(3.dp,if (event.registered.contains(pupil.id)) AppColors.colors().dislikeColor else AppColors.colors().likeColor)
                ) {
                    Text(
                        text = if (event.registered.contains(pupil.id)) "Unregister" else "Register",
                        color = if (event.registered.contains(pupil.id)) AppColors.colors().dislikeColor else AppColors.colors().likeColor
                    )
                }
            }*/
        }

    }

}