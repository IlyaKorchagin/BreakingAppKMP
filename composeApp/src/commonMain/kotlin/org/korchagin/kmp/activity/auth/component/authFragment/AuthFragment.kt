package org.korchagin.kmp.activity.auth.component.authFragment

import org.korchagin.kmp.activity.auth.component.authFragment.screen.AuthScreen
import team.platforma.extra_nav.component.fragment_component.Fragment


object AuthFragment: Fragment(
    route = "auth_fragment",
    fragmentBox = { componentNavigator, fragmentNavigator ->
        AuthScreen(componentNavigator, fragmentNavigator)
    }
)