package org.korchagin.kmp.activity.events.components

import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.events_title
import org.korchagin.kmp.activity.events.fragments.EventsFragment
import team.platforma.extra_nav.component.component_of_activity.Component

object EventsComponent : Component(
    route = "events_component",
    label = Res.string.events_title,
    fragments = listOf(EventsFragment)
)