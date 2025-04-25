package org.korchagin.kmp.activity.splash.fragments

import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.activity.splash.fragments.screen.SplashScreen
import team.platforma.extra_nav.component.fragment_component.Fragment
import team.platforma.extra_nav.component.fragment_component.FragmentBox

object SplashFragment : Fragment(
    route = "splash_fragment",
    fragmentBox = { componentNavigator, fragmentNavigator ->
        FragmentBox {
            SplashScreen(componentNavigator)
        }
    }
)