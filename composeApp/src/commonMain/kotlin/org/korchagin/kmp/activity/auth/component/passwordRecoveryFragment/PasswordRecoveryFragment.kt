package org.korchagin.kmp.activity.auth.component.passwordRecoveryFragment

import org.korchagin.kmp.activity.auth.component.passwordRecoveryFragment.screen.PasswordRecoveryScreen
import team.platforma.extra_nav.component.fragment_component.Fragment


object PasswordRecoveryFragment: Fragment(
    route = "password_recovery_fragment",
    fragmentBox = { componentNavigator, fragmentNavigator ->
        PasswordRecoveryScreen(componentNavigator, fragmentNavigator)
    }
)