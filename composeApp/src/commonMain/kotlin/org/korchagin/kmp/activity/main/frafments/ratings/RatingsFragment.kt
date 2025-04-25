package org.korchagin.kmp.activity.main.frafments.ratings

import org.korchagin.kmp.activity.main.frafments.ratings.screen.RatingsScreen
import team.platforma.extra_nav.component.fragment_component.Fragment


object RatingsFragment: Fragment(
    route = "ratings_fragment",
    fragmentBox = { componentNavigator, fragmentNavigator ->
        RatingsScreen(componentNavigator)}
)