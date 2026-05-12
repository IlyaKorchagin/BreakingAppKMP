package org.korchagin.kmp.activity.main

import androidx.compose.foundation.Image
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarColors
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.navigation.NavBackStackEntry
import androidx.navigation.NavHostController
import androidx.navigation.compose.currentBackStackEntryAsState
import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.app_logo
import com.korchagin.presentation.viewModel.MainViewModel
import org.jetbrains.compose.resources.painterResource
import org.jetbrains.compose.resources.stringResource
import org.koin.compose.koinInject
import org.korchagin.kmp.ScreenSizeHandler.getScreenSize
import org.korchagin.kmp.activity.main.components.BboysComponent
import org.korchagin.kmp.activity.main.components.HomeComponent
import org.korchagin.kmp.activity.main.components.RatingsComponent
import org.korchagin.kmp.activity.main.components.RecordsComponent
import org.korchagin.kmp.activity.main.fragments.ratings.topBar.TopBarRatingActions
import org.korchagin.kmp.activity.main.topBarComponent.ProfileIcon
import team.platforma.extra_nav.component.activity_component.Activity
import team.platforma.extra_nav.component.activity_component.ActivityScaffold
import team.platforma.extra_nav.ui.SimpleBottomNavigationBar
import team.platforma.extra_nav.ui.SimpleNavigationRail


@OptIn(ExperimentalMaterial3Api::class)
object MainActivity : Activity(
    route = "main_activity",
    components = listOf(
        HomeComponent, RatingsComponent, RecordsComponent, BboysComponent
    ),
    activityScaffold = { components ->

        var navigator by remember { mutableStateOf<NavHostController?>(null) }

        var backStack by remember { mutableStateOf<NavBackStackEntry?>(null) }

        if (navigator != null) {
            val backStackEntry by navigator!!.currentBackStackEntryAsState()
            backStack = backStackEntry
        }

        val screenWidth = getScreenSize().first
        val screenHeight = getScreenSize().second
        var isLargeScreen =
            screenWidth > screenHeight
        val viewModel = koinInject<MainViewModel>()

        val topAppBarColors = TopAppBarColors(
            containerColor = Color.Blue,
            titleContentColor = Color.White,
            actionIconContentColor = Color.White,
            navigationIconContentColor = Color.White,
            scrolledContainerColor = Color.Red
        )

        LaunchedEffect(
            screenWidth,
            screenHeight
        ) { // Здесь можно обрабатывать изменение размеров экрана
            isLargeScreen = screenWidth > screenHeight
            viewModel.setScreenWidth(screenWidth)
            viewModel.setScreenHeight(screenHeight)
        }

        ActivityScaffold(
            topBar = {
                if (backStack != null) {
                    components.forEach { component ->
                        if (component.route == backStack!!.destination.route) {
                            TopAppBar(
                                title = {
                                    Row(verticalAlignment = Alignment.CenterVertically) {
                                        Image(
                                            painter = painterResource(Res.drawable.app_logo),
                                            contentDescription = null,
                                            modifier = Modifier
                                                .size(46.dp)
                                                .clip(CircleShape)
                                                .border(3.dp, Color.Gray, CircleShape)
                                        )
                                        Text(
                                            modifier = Modifier.padding(start = 8.dp),
                                            text = component.label?.let { stringResource(it) }
                                                ?: "")

                                    }
                                },
                                colors = topAppBarColors,
                                actions = {
                                    when (component) {
                                        RatingsComponent -> TopBarRatingActions()
                                    }
                                    ProfileIcon()
                                }
                            )
                        }
                    }
                }
            },
            components = components,
            bottomBar = { componentNavigator ->
                navigator = componentNavigator.host()
                SimpleBottomNavigationBar(
                    components = components,
                    componentNavigator = componentNavigator
                )
            },
            navRail = { componentNavigator ->
                navigator = componentNavigator.host()
                SimpleNavigationRail(
                    components = components,
                    componentNavigator = componentNavigator,
                    /* mobile = when (getDeviceType()) {
                         DeviceType.Phone -> true
                         DeviceType.Tablet, DeviceType.Desktop -> false
                     }*/
                )
            },
            showNavRail = isLargeScreen
        )
    }
)