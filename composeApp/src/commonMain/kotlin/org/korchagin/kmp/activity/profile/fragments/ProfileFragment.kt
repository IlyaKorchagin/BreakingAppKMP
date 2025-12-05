package org.korchagin.kmp.activity.profile.fragments

import org.korchagin.kmp.activity.profile.fragments.screen.ProfileScreen
import team.platforma.extra_nav.component.fragment_component.Fragment

const val USER_AVATAR_KEY = "new_user_avatar"
object ProfileFragment: Fragment(
    route = "profile_fragment",
    fragmentBox = { componentNavigator, fragmentNavigator, paddingValues ->
        ProfileScreen(componentNavigator, fragmentNavigator)
    }
)