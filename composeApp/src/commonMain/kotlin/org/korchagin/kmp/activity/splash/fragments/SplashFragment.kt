package org.korchagin.kmp.activity.splash.fragments

import org.korchagin.kmp.activity.splash.fragments.screen.SplashScreen
import team.platforma.extra_nav.component.fragment_component.Fragment

object SplashFragment : Fragment(
    route = "splash_fragment",
    fragmentBox = { componentNavigator, fragmentNavigator, paddingValues ->
        SplashScreen(componentNavigator)
    }
)