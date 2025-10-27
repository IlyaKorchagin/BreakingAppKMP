package org.korchagin.kmp.activity.auth.component


import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.app_name
import breakingkmpapp.composeapp.generated.resources.compose_multiplatform
import org.korchagin.kmp.activity.auth.component.authFragment.AuthFragment
import org.korchagin.kmp.activity.auth.component.passwordRecoveryFragment.PasswordRecoveryFragment
import org.korchagin.kmp.activity.auth.component.registrationFragment.RegistrationFragment
import team.platforma.extra_nav.component.component_of_activity.Component
import team.platforma.extra_nav.ui.SimpleNavIcon


object AuthComponent : Component(
    route = "auth_component",
    label = Res.string.app_name,
    icon = { selected ->
        SimpleNavIcon(selected, Res.drawable.compose_multiplatform)
    },
    fragments = listOf(AuthFragment, RegistrationFragment, PasswordRecoveryFragment)
)