package org.korchagin.kmp.activity.splash

import com.korchagin.presentation.viewModel.MainViewModel
import org.koin.compose.koinInject
import org.korchagin.kmp.activity.splash.components.SplashComponent
import team.platforma.extra_nav.component.activity_component.Activity
import team.platforma.extra_nav.component.activity_component.ActivityScaffold

object SplashActivity : Activity(
    route = "auth_activity",
    components = listOf(SplashComponent),
    activityScaffold = { components ->
        val viewModel = koinInject<MainViewModel>()
        ActivityScaffold(
            components = components,

        )
    }
)