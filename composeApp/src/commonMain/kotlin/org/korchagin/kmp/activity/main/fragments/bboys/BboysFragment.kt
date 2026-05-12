package org.korchagin.kmp.activity.main.fragments.bboys

import org.korchagin.kmp.activity.main.fragments.bboys.screen.BboysScreen
import team.platforma.extra_nav.component.fragment_component.Fragment

object BboysFragment : Fragment(
    route = "bboys_fragment",
    fragmentBox = { componentNavigator, fragmentNavigator, paddingValues ->
        BboysScreen(componentNavigator)
    }
)