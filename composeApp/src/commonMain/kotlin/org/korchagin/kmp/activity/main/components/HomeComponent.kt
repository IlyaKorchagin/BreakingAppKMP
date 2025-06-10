package org.korchagin.kmp.activity.main.components



import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.home_title
import breakingkmpapp.composeapp.generated.resources.main
import org.korchagin.kmp.activity.main.fragments.home.HomeFragment
import team.platforma.extra_nav.component.component_of_activity.Component
import team.platforma.extra_nav.ui.SimpleNavIcon


object HomeComponent : Component(
    route = "home_component",
    label = Res.string.home_title,
    icon = { selected ->
        SimpleNavIcon(selected = selected, resource = Res.drawable.main)
    },
    fragments = listOf(HomeFragment)
)