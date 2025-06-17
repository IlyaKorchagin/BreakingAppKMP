package org.korchagin.kmp.activity.auth.component.registrationFragment

import org.korchagin.kmp.activity.auth.component.registrationFragment.screen.RegistrationScreen
import team.platforma.extra_nav.component.fragment_component.Fragment


object RegistrationFragment: Fragment(
    route = "registration_fragment",
    fragmentBox = { componentNavigator, fragmentNavigator ->
        RegistrationScreen(componentNavigator, fragmentNavigator)
    }
)