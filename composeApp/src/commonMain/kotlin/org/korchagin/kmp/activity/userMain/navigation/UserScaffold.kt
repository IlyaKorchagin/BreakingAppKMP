package org.korchagin.kmp.activity.userMain.navigation

import androidx.compose.foundation.background
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
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.unit.dp
import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.logout
import org.jetbrains.compose.resources.painterResource
import org.korchagin.kmp.activity.userMain.ranking.TopBarRatingActions
import org.korchagin.kmp.theme.colors.LocalAppColors

private val userDestinations = listOf(
    UserDestination.Home,
    UserDestination.Ratings,
    UserDestination.Records,
    UserDestination.Bboys,
    UserDestination.Events
)

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun UserScaffold(
    currentDestination: UserDestination,
    onDestinationSelected: (UserDestination) -> Unit,
    onProfileClick: () -> Unit,
    onBack: () -> Unit,
    onLogoutClick: () -> Unit,
    title: String = currentDestination.title,
    isBackEnabled: Boolean = currentDestination !in setOf(
        UserDestination.Home,
        UserDestination.Records,
        UserDestination.Ratings,
        UserDestination.Bboys,
        UserDestination.Events
    ),
    content: @Composable () -> Unit
) {
    val scrollBehavior = TopAppBarDefaults.pinnedScrollBehavior()
    val colors = LocalAppColors.current

    BoxWithConstraints(
        modifier = Modifier.fillMaxSize()
    ) {
        // Определяем ориентацию доступного пространства
        val isLandscape = maxWidth > maxHeight

        val isMainDestination = currentDestination in userDestinations
        val showBottomBar = !isLandscape && isMainDestination
        val showBackButton = !isMainDestination

        Scaffold(
            containerColor = Color.Transparent,
            modifier = Modifier
                .fillMaxSize()
                .nestedScroll(scrollBehavior.nestedScrollConnection),

            topBar = {
                TopAppBar(
                    colors = TopAppBarDefaults.topAppBarColors(
                        containerColor = Color.Transparent,
                        scrolledContainerColor = Color.Transparent,
                        navigationIconContentColor = colors.textDefault,
                        titleContentColor = colors.textDefault,
                        actionIconContentColor = colors.textDefault
                    ),
                    title = {
                        Text(
                            text = title,
                            color = colors.textDefault
                        )
                    },
                    navigationIcon = {
                        if (showBackButton) {
                            IconButton(onClick = onBack) {
                                Icon(
                                    imageVector = Icons.AutoMirrored.Filled.ArrowBack,
                                    contentDescription = "Назад"
                                )
                            }
                        }
                    },
                    actions = {
                        when (currentDestination) {
                            UserDestination.Home -> {
                                IconButton(
                                    onClick = onProfileClick
                                ) {
                                    Icon(
                                        imageVector = Icons.Filled.AccountCircle,
                                        contentDescription = "Профиль"
                                    )
                                }
                            }

                            UserDestination.Profile -> {
                                IconButton(
                                    onClick = onLogoutClick
                                ) {
                                    Icon(
                                        painter = painterResource(Res.drawable.logout),
                                        contentDescription = "Выйти"
                                    )
                                }
                            }

                            UserDestination.Ratings, UserDestination.Records -> {
                                TopBarRatingActions()
                            }

                            else -> {}
                        }
                    },
                    scrollBehavior = scrollBehavior
                )
            },
            bottomBar = {
                if (showBottomBar) {
                    NavigationBar(
                        containerColor = colors.defaultBackground.copy(alpha = 0.35f),
                        tonalElevation = 0.dp
                    ) {
                        userDestinations.forEach { destination ->
                            NavigationBarItem(
                                selected = currentDestination == destination,
                                onClick = { onDestinationSelected(destination) },
                                icon = {
                                    Icon(
                                        painterResource(destination.icon),
                                        contentDescription = destination.title
                                    )
                                },
                                label = { Text(destination.title) }
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
                    NavigationRail(
                        containerColor = colors.defaultBackground.copy(alpha = 0.35f)
                    ) {
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
                        .background(
                            brush = Brush.verticalGradient(
                                colors = listOf(
                                    colors.backgroundGradientStart.copy(alpha = 0.25f),
                                    colors.backgroundGradientEnd.copy(alpha = 0.25f)
                                )
                            )
                        )
                ) {
                    content()
                }
            }
        }
    }
}