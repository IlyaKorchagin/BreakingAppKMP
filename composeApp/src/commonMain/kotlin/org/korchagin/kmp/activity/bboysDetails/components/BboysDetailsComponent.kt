package org.korchagin.kmp.activity.bboysDetails.components


import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.bboys_title
import breakingkmpapp.composeapp.generated.resources.compose_multiplatform
import org.korchagin.kmp.activity.bboysDetails.fragments.BboysDetailsFragment
import team.platforma.extra_nav.component.component_of_activity.Component
import team.platforma.extra_nav.ui.SimpleNavIcon


object BboysDetailsComponent : Component(
    route = "bboys_details_component",
    label = Res.string.bboys_title,
    icon = { selected ->
        SimpleNavIcon(selected, Res.drawable.compose_multiplatform)
    },
    fragments = listOf(BboysDetailsFragment)
)