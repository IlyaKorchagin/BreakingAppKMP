package org.korchagin.kmp.activity.main.components


import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.hall_of_fame_title
import breakingkmpapp.composeapp.generated.resources.heart
import org.korchagin.kmp.activity.main.fragments.bboys.BboysFragment
import team.platforma.extra_nav.component.component_of_activity.Component
import team.platforma.extra_nav.ui.SimpleNavIcon


object BboysComponent : Component(
    route = "bboys_component",
    label = Res.string.hall_of_fame_title,
    icon = { selected ->
        SimpleNavIcon(selected, Res.drawable.heart)
    },
    fragments = listOf(BboysFragment)
)