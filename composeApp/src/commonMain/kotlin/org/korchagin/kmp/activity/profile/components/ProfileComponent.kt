package org.korchagin.kmp.activity.profile.components


import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.people
import breakingkmpapp.composeapp.generated.resources.profile_title
import org.korchagin.kmp.activity.profile.fragments.ProfileFragment
import team.platforma.extra_nav.component.component_of_activity.Component
import team.platforma.extra_nav.ui.SimpleNavIcon


object ProfileComponent : Component(
    route = "profile_component",
    label = Res.string.profile_title,
    icon = { selected ->
        SimpleNavIcon(selected, Res.drawable.people)
    },
    fragments = listOf(ProfileFragment)
)