package org.korchagin.kmp.activity.adminMain

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import com.korchagin.presentation.viewModel.MainViewModel
import com.korchagin.presentation_auth.viewModel.AuthViewModel
import kotlinx.coroutines.launch
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.activity.adminMain.navigation.AdminDestination
import org.korchagin.kmp.activity.adminMain.navigation.AdminScaffold
import org.korchagin.kmp.activity.editUser.EditUserScreen
import org.korchagin.kmp.activity.events.EventsRoute
import org.korchagin.kmp.activity.profile.ProfileScreen

@OptIn(KoinExperimentalAPI::class)
@Composable
fun AdminRoute(
    onLogout: () -> Unit,
) {
    val mainViewModel = koinViewModel<MainViewModel>()
    val authViewModel = koinViewModel<AuthViewModel>()
    val scope = rememberCoroutineScope()
    var currentDestination by remember {
        mutableStateOf<AdminDestination>(AdminDestination.Home)
    }

    var previousDestination by remember {
        mutableStateOf<AdminDestination>(AdminDestination.Home)
    }

    AdminScaffold(
        currentDestination = currentDestination,
        onProfileClick = {
            previousDestination = currentDestination
            currentDestination = AdminDestination.Profile
        },
        onEventsClick = {
            previousDestination = currentDestination
            currentDestination = AdminDestination.Events
        },
        onBack = {
            currentDestination = previousDestination
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
                    }
                )
            }

            AdminDestination.Events -> {
                EventsRoute(
                    onExit = {
                        currentDestination = previousDestination
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