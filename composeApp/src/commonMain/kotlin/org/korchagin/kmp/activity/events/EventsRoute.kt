package org.korchagin.kmp.activity.events

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import org.korchagin.kmp.activity.battle.BattleScreen
import org.korchagin.kmp.activity.battleSelection.BattleSelectionScreen
import org.korchagin.kmp.activity.events.navigation.EventsDestination

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun EventsRoute(
    onExit: () -> Unit
) {
    var currentDestination by remember {
        mutableStateOf<EventsDestination>(EventsDestination.Events)
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Text(currentDestination.title)
                },
                navigationIcon = {
                    IconButton(
                        onClick = {
                            when (currentDestination) {
                                EventsDestination.Events -> onExit()
                                EventsDestination.Selection -> {
                                    currentDestination = EventsDestination.Events
                                }
                                EventsDestination.Battle -> {
                                    currentDestination = EventsDestination.Selection
                                }
                            }
                        }
                    ) {
                        Icon(
                            imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                            contentDescription = "Назад"
                        )
                    }
                }
            )
        }
    ) { innerPadding ->
        androidx.compose.foundation.layout.Box(
            modifier = androidx.compose.ui.Modifier
                .padding(innerPadding)
                .fillMaxSize()
        ) {
            when (currentDestination) {
                EventsDestination.Events -> {
                    EventsScreen(
                        onEventClick = {
                            currentDestination = EventsDestination.Selection
                        }
                    )
                }

                EventsDestination.Selection -> {
                    BattleSelectionScreen(
                        onBack = {
                            currentDestination = EventsDestination.Events
                        },
                        onBattleClick = {
                            currentDestination = EventsDestination.Battle
                        }
                    )
                }

                EventsDestination.Battle -> {
                    BattleScreen(
                        onBack = {
                            currentDestination = EventsDestination.Selection
                        }
                    )
                }
            }
        }
    }
}