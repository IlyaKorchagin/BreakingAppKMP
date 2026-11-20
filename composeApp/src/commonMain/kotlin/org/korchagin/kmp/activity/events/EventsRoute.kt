package org.korchagin.kmp.activity.events

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import org.korchagin.kmp.activity.battle.BattleScreen
import org.korchagin.kmp.activity.battleSelection.BattleSelectionScreen
import org.korchagin.kmp.activity.events.navigation.EventsDestination

@Composable
fun EventsRoute(
    currentDestination: EventsDestination,
    onDestinationChange: (EventsDestination) -> Unit
) {
    Box(
        modifier = Modifier.fillMaxSize()
    ) {
        when (currentDestination) {

            EventsDestination.Events -> {
                EventsScreen(
                    onEventClick = {
                        onDestinationChange(EventsDestination.Selection)
                    }
                )
            }

            EventsDestination.Selection -> {
                BattleSelectionScreen(
                    onBack = {
                        onDestinationChange(EventsDestination.Events)
                    },
                    onBattleClick = {
                        onDestinationChange(EventsDestination.Battle)
                    }
                )
            }

            EventsDestination.Battle -> {
                BattleScreen(
                    onBack = {
                        onDestinationChange(EventsDestination.Selection)
                    }
                )
            }
        }
    }
}