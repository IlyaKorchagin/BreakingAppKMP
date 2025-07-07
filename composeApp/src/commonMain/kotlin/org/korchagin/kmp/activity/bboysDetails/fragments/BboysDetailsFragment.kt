package org.korchagin.kmp.activity.bboysDetails.fragments

import org.korchagin.kmp.activity.bboysDetails.fragments.screen.BboysDetailScreen
import team.platforma.extra_nav.component.fragment_component.Fragment


object BboysDetailsFragment: Fragment(
    route = "bboys_details_fragment",
    fragmentBox = { componentNavigator, fragmentNavigator, paddingValues ->
        BboysDetailScreen(componentNavigator)
    }
)