package org.korchagin.kmp.activity.main.fragments.home

import org.korchagin.kmp.activity.main.fragments.home.screen.HomeScreen
import team.platforma.extra_nav.component.fragment_component.Fragment

object HomeFragment : Fragment(
    route = "home_fragment",
    fragmentBox = { componentNavigator, fragmentNavigator, paddingValues ->
        HomeScreen(componentNavigator)
    }
)