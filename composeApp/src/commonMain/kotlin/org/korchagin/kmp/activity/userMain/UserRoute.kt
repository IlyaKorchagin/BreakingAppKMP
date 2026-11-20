package org.korchagin.kmp.activity.userMain

import androidx.compose.foundation.lazy.rememberLazyListState
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
import org.korchagin.kmp.activity.events.navigation.EventsDestination
import org.korchagin.kmp.activity.profile.ProfileScreen
import org.korchagin.kmp.activity.userMain.homeScreen.HomeScreen
import org.korchagin.kmp.activity.userMain.navigation.UserDestination
import org.korchagin.kmp.activity.userMain.navigation.UserScaffold
import org.korchagin.kmp.activity.userMain.ranking.RatingsScreen
import org.korchagin.kmp.activity.userMain.ranking.RecordsScreen

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
    val ratingslistState = rememberLazyListState()
    val recordslistState = rememberLazyListState()

    var eventsDestination by remember {
        mutableStateOf<EventsDestination>(EventsDestination.Events)
    }


    UserScaffold(
        title = if (currentDestination == UserDestination.Events) {
            eventsDestination.title
        } else {
            currentDestination.title
        },

        isBackEnabled = currentDestination != UserDestination.Home,

        currentDestination = currentDestination,
        onDestinationSelected = { destination ->
            currentDestination = destination
        },
        onProfileClick = {
            previousDestination = currentDestination
            currentDestination = UserDestination.Profile
        },
        onBack = {
            when (currentDestination) {
                UserDestination.Events -> {
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
                }

                else -> {
                    currentDestination = previousDestination
                }
            }
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
                },
                listState = ratingslistState
            )

            UserDestination.Records -> RecordsScreen(
                onProfileClick = {
                    previousDestination = UserDestination.Records
                    currentDestination = UserDestination.OtherProfile
                },
                listState = recordslistState
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
                    currentDestination = eventsDestination,
                    onDestinationChange = {
                        eventsDestination = it
                    }
                )
            }
        }
    }
}