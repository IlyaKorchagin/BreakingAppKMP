package org.korchagin.kmp.activity.battle.fragments

import org.korchagin.kmp.activity.battle.fragments.screen.BattleScreen
import team.platforma.extra_nav.component.fragment_component.Fragment

object BattleFragment : Fragment(
    route = "events_fragment",
    fragmentBox = { componentNavigator, fragmentNavigator, paddingValues ->
        BattleScreen(componentNavigator)
    }
)