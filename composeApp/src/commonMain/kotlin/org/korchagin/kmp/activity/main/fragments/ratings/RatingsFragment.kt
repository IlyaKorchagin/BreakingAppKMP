package org.korchagin.kmp.activity.main.fragments.ratings

import org.korchagin.kmp.activity.main.fragments.ratings.screen.RatingsScreen
import team.platforma.extra_nav.component.fragment_component.Fragment


object RatingsFragment: Fragment(
    route = "ratings_fragment",
    fragmentBox = { componentNavigator, fragmentNavigator ->
        RatingsScreen(componentNavigator)}
)