package org.korchagin.kmp.activity.main.components


import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.rating
import breakingkmpapp.composeapp.generated.resources.ratings_title
import org.korchagin.kmp.activity.main.fragments.ratings.RatingsFragment
import team.platforma.extra_nav.component.component_of_activity.Component
import team.platforma.extra_nav.ui.SimpleNavIcon


object RatingsComponent : Component(
    route = "ratings_component",
    label = Res.string.ratings_title,
    icon = { selected ->
        SimpleNavIcon(selected, Res.drawable.rating)
    },
    fragments = listOf(RatingsFragment)
)