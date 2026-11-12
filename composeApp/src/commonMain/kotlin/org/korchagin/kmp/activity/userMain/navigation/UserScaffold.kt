package org.korchagin.kmp.activity.userMain.navigation

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.AccountCircle
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.NavigationRail
import androidx.compose.material3.NavigationRailItem
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.logout
import org.jetbrains.compose.resources.painterResource
import org.korchagin.kmp.theme.colors.LocalAppColors

private val userDestinations = listOf(
    UserDestination.Home,
    UserDestination.Ratings,
    UserDestination.Records,
    UserDestination.Bboys
)

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun UserScaffold(
    currentDestination: UserDestination,
    onDestinationSelected: (UserDestination) -> Unit,
    onProfileClick: () -> Unit,
    onBack: () -> Unit,
    onLogoutClick: () -> Unit,
    content: @Composable () -> Unit
) {
    val colors = LocalAppColors.current
    val isBackEnabled = currentDestination in setOf(
        UserDestination.Profile,
        UserDestination.ElementDetails
    )
    BoxWithConstraints(
        modifier = Modifier.fillMaxSize()
    ) {
        // Определяем ориентацию доступного пространства
        val isLandscape = maxWidth > maxHeight

        Scaffold(
            modifier = Modifier.fillMaxSize(),

            topBar = {
                TopAppBar(
                    title = {
                        Text(
                            text = currentDestination.title,
                            color = colors.textDefault
                        )
                    },
                    navigationIcon = {
                        if (isBackEnabled) {
                            IconButton(onClick = onBack) {
                                Icon(
                                    imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                                    contentDescription = "Назад"
                                )
                            }
                        }
                    },
                    actions = {
                        if (currentDestination != UserDestination.Profile) {
                            // Переход в профиль
                            IconButton(
                                onClick = onProfileClick
                            ) {
                                Icon(
                                    imageVector = Icons.Filled.AccountCircle,
                                    contentDescription = "Профиль"
                                )
                            }
                        } else {
                            // Выход из аккаунта — только на экране профиля
                            IconButton(
                                onClick = onLogoutClick
                            ) {
                                Icon(
                                    painter = painterResource(Res.drawable.logout),
                                    contentDescription = "Выйти"
                                )
                            }
                        }
                    }
                )
            },

            bottomBar = {
                if (!isLandscape && !isBackEnabled) {
                    NavigationBar {
                        userDestinations.forEach { destination ->
                            NavigationBarItem(
                                selected = currentDestination == destination,
                                onClick = {
                                    onDestinationSelected(destination)
                                },
                                icon = {
                                    Text(destination.title.take(1))
                                },
                                label = {
                                    Text(destination.title)
                                }
                            )
                        }
                    }
                }
            }
        ) { innerPadding ->

            if (isLandscape) {
                Row(
                    modifier = Modifier
                        .fillMaxSize()
                        .padding(innerPadding)
                ) {
                    NavigationRail {
                        userDestinations.forEach { destination ->
                            NavigationRailItem(
                                selected = currentDestination == destination,
                                onClick = {
                                    onDestinationSelected(destination)
                                },
                                icon = {
                                    Text(destination.title.take(1))
                                },
                                label = {
                                    Text(destination.title)
                                }
                            )
                        }
                    }

                    Box(
                        modifier = Modifier.fillMaxSize()
                    ) {
                        content()
                    }
                }
            } else {
                Box(
                    modifier = Modifier
                        .fillMaxSize()
                        .padding(innerPadding)
                ) {
                    content()
                }
            }
        }
    }
}