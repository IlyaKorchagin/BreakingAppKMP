package org.korchagin.kmp.activity.profile.fragments.profile

import org.korchagin.kmp.activity.elementDetails.fragments.screen.ElementDetailsScreen
import team.platforma.extra_nav.component.fragment_component.Fragment


object ElementDetailsFragment: Fragment(
    route = "event_details_fragment",
    fragmentBox = { componentNavigator, fragmentNavigator, paddingValues ->
        ElementDetailsScreen(componentNavigator)
    }
)