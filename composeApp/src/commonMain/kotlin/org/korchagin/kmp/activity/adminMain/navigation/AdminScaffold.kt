package org.korchagin.kmp.activity.adminMain.navigation

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.AccountCircle
import androidx.compose.material.icons.filled.Favorite
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.logout
import org.jetbrains.compose.resources.painterResource
import org.korchagin.kmp.theme.colors.LocalAppColors

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun AdminScaffold(
    currentDestination: AdminDestination,
    onProfileClick: () -> Unit,
    onEventsClick: () -> Unit,
    onBack: () -> Unit,
    onLogoutClick: () -> Unit,
    content: @Composable () -> Unit
) {
    val colors = LocalAppColors.current
    val isBackEnabled = currentDestination != AdminDestination.Home
    BoxWithConstraints(
        modifier = Modifier.fillMaxSize()
    ) {

        Scaffold(
            modifier = Modifier.fillMaxSize(),

            topBar = {
                if (currentDestination != AdminDestination.Events) {
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
                            when (currentDestination) {
                                AdminDestination.Home -> {
                                    IconButton(onClick = onEventsClick) {
                                        Icon(
                                            imageVector = Icons.Default.Favorite,
                                            contentDescription = "События"
                                        )
                                    }

                                    IconButton(onClick = onProfileClick) {
                                        Icon(
                                            imageVector = Icons.Filled.AccountCircle,
                                            contentDescription = "Профиль"
                                        )
                                    }
                                }

                                AdminDestination.Profile -> {
                                    IconButton(onClick = onLogoutClick) {
                                        Icon(
                                            painter = painterResource(Res.drawable.logout),
                                            contentDescription = "Выйти"
                                        )
                                    }
                                }

                                else -> Unit
                            }
                        }
                    )
                }
            },
        ) { innerPadding ->
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