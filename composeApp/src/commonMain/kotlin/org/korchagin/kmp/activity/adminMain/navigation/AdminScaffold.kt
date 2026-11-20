package org.korchagin.kmp.activity.adminMain.navigation

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
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
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.input.nestedscroll.nestedScroll
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
    title: String = currentDestination.title,
    isBackEnabled: Boolean = currentDestination != AdminDestination.Home,
    content: @Composable () -> Unit
) {
    val scrollBehavior = TopAppBarDefaults.enterAlwaysScrollBehavior()
    val colors = LocalAppColors.current

    Scaffold(
        containerColor = Color.Transparent,
        modifier = Modifier
            .fillMaxSize()
            .nestedScroll(scrollBehavior.nestedScrollConnection),

        topBar = {
            TopAppBar(
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = Color.Transparent
                ),
                title = {
                    Text(
                        text = title,
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
                },
                scrollBehavior = scrollBehavior
            )
        }
    ) { innerPadding ->
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