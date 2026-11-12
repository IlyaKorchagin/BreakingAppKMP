package org.korchagin.kmp.activity.userMain

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
import org.korchagin.kmp.activity.bboysDetails.BboysDetailScreen
import org.korchagin.kmp.activity.elementDetails.ElementDetailsScreen
import org.korchagin.kmp.activity.events.EventsRoute
import org.korchagin.kmp.activity.profile.ProfileScreen
import org.korchagin.kmp.activity.userMain.navigation.UserDestination
import org.korchagin.kmp.activity.userMain.navigation.UserScaffold
import org.korchagin.kmp.activity.userMain.homeScreen.HomeScreen
import org.korchagin.kmp.activity.userMain.ratings.screen.RatingsScreen

@OptIn(KoinExperimentalAPI::class)
@Composable
fun UserRoute(
    onLogout: () -> Unit
) {
    val mainViewModel = koinViewModel<MainViewModel>()
    val authViewModel = koinViewModel<AuthViewModel>()
    val scope = rememberCoroutineScope()
    var currentDestination by remember {
        mutableStateOf<UserDestination>(UserDestination.Home)
    }

    var previousDestination by remember {
        mutableStateOf<UserDestination>(UserDestination.Home)
    }

    UserScaffold(
        currentDestination = currentDestination,
        onDestinationSelected = { destination ->
            currentDestination = destination
        },
        onProfileClick = {
            previousDestination = currentDestination
            currentDestination = UserDestination.Profile
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
            UserDestination.Home -> {
                HomeScreen(
                    onElementClick = { element ->
                        mainViewModel.addElement(element)
                        previousDestination = UserDestination.Home
                        currentDestination = UserDestination.ElementDetails
                    }
                )
            }

            UserDestination.Ratings -> RatingsScreen(
                onProfileClick = {
                    previousDestination = UserDestination.Ratings
                    currentDestination = UserDestination.OtherProfile
                }
            )

            UserDestination.Records -> RecordsScreen(
                onProfileClick = {
                    previousDestination = UserDestination.Ratings
                    currentDestination = UserDestination.OtherProfile
                }
            )

            UserDestination.Bboys -> BboysScreen(
                toBboyDetails = {
                    previousDestination = UserDestination.Bboys
                    currentDestination = UserDestination.BboysDetails
                }
            )

            UserDestination.Profile -> ProfileScreen()

            UserDestination.ElementDetails -> ElementDetailsScreen()

            UserDestination.BboysDetails -> BboysDetailScreen()

            UserDestination.OtherProfile -> ProfileScreen()

            UserDestination.Events -> {
                EventsRoute(
                    onExit = {
                        currentDestination = previousDestination
                    }
                )
            }
        }
    }
}