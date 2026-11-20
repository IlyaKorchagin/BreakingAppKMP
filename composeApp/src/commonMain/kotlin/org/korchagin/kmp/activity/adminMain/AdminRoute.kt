package org.korchagin.kmp.activity.adminMain

import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import com.korchagin.presentation_auth.viewModel.AuthViewModel
import kotlinx.coroutines.launch
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.activity.adminMain.navigation.AdminDestination
import org.korchagin.kmp.activity.adminMain.navigation.AdminScaffold
import org.korchagin.kmp.activity.editUser.EditUserScreen
import org.korchagin.kmp.activity.events.EventsRoute
import org.korchagin.kmp.activity.events.navigation.EventsDestination
import org.korchagin.kmp.activity.profile.ProfileScreen

@OptIn(KoinExperimentalAPI::class)
@Composable
fun AdminRoute(
    onLogout: () -> Unit,
) {
    val authViewModel = koinViewModel<AuthViewModel>()
    val scope = rememberCoroutineScope()
    var currentDestination by remember {
        mutableStateOf<AdminDestination>(AdminDestination.Home)
    }

    var previousDestination by remember {
        mutableStateOf<AdminDestination>(AdminDestination.Home)
    }
    val listState = rememberLazyListState()

    var eventsDestination by remember {
        mutableStateOf<EventsDestination>(EventsDestination.Events)
    }

    val isEvents = currentDestination == AdminDestination.Events

    AdminScaffold(
        currentDestination = currentDestination,

        title = if (isEvents) {
            eventsDestination.title
        } else {
            currentDestination.title
        },

        isBackEnabled = if (isEvents) {
            true
        } else {
            currentDestination != AdminDestination.Home
        },

        onBack = {
            if (isEvents) {
                when (eventsDestination) {
                    EventsDestination.Events -> {
                        currentDestination = previousDestination
                    }

                    EventsDestination.Selection -> {
                        eventsDestination = EventsDestination.Events
                    }

                    EventsDestination.Battle -> {
                        eventsDestination = EventsDestination.Selection
                    }
                }
            } else {
                currentDestination = previousDestination
            }
        },
        onProfileClick = {
            previousDestination = currentDestination
            currentDestination = AdminDestination.Profile
        },
        onEventsClick = {
            previousDestination = currentDestination
            currentDestination = AdminDestination.Events
        },
        onLogoutClick = {
            scope.launch {
                authViewModel.logOut()
                onLogout()
            }
        }
    ) {
        when (currentDestination) {
            AdminDestination.Home -> {
                MainAdminScreen(
                    onStudentClick = {
                        previousDestination = currentDestination
                        currentDestination = AdminDestination.EditUser
                    },
                    listState = listState
                )
            }

            AdminDestination.Events -> {
                EventsRoute(
                    currentDestination = eventsDestination,
                    onDestinationChange = {
                        eventsDestination = it
                    }
                )
            }

            AdminDestination.Profile -> ProfileScreen()

            AdminDestination.EditUser -> {
                EditUserScreen()
            }

        }
    }
}