package org.korchagin.kmp.activity.events.fragments

import org.korchagin.kmp.activity.events.fragments.screen.EventsScreen
import team.platforma.extra_nav.component.fragment_component.Fragment

object EventsFragment : Fragment(
    route = "events_fragment",
    fragmentBox = { componentNavigator, fragmentNavigator, paddingValues ->
        EventsScreen(componentNavigator)
    }
)