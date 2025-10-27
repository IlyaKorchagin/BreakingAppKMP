package org.korchagin.kmp.activity.elementDetails.components


import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.app_name
import breakingkmpapp.composeapp.generated.resources.compose_multiplatform
import org.korchagin.kmp.activity.profile.fragments.profile.ElementDetailsFragment
import team.platforma.extra_nav.component.component_of_activity.Component
import team.platforma.extra_nav.ui.SimpleNavIcon


object ElementDetailsComponent : Component(
    route = "element_details_component",
    label = Res.string.app_name,
    icon = { selected ->
        SimpleNavIcon(selected, Res.drawable.compose_multiplatform)
    },
    fragments = listOf(ElementDetailsFragment)
)