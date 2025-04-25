package org.korchagin.kmp.activity.main.frafments.home

import org.korchagin.kmp.activity.main.frafments.home.screen.HomeScreen
import team.platforma.extra_nav.component.fragment_component.Fragment

object HomeFragment : Fragment(
    route = "home_fragment",
    fragmentBox = { componentNavigator, fragmentNavigator ->
        HomeScreen(componentNavigator)
    }
)