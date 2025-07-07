package org.korchagin.kmp.activity.splash.components

import org.korchagin.kmp.activity.splash.fragments.SplashFragment
import team.platforma.extra_nav.component.component_of_activity.Component

object SplashComponent : Component(
    route = "splash_component",
    fragments = listOf(SplashFragment)
)