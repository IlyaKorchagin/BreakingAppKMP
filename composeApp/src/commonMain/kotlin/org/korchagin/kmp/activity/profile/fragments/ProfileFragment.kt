package org.korchagin.kmp.activity.profile.fragments.profile

import org.korchagin.kmp.activity.profile.fragments.screen.ProfileScreen
import team.platforma.extra_nav.component.fragment_component.Fragment


object ProfileFragment: Fragment(
    route = "profile_fragment",
    fragmentBox = { componentNavigator, fragmentNavigator ->
        ProfileScreen(componentNavigator)
    }
)