package org.korchagin.kmp.activity.battleSelection.fragments

import org.korchagin.kmp.activity.battleSelection.fragments.screen.BattleSelectionScreen
import team.platforma.extra_nav.component.fragment_component.Fragment

object BattleSelectionFragment : Fragment(
    route = "battle_selection_fragment",
    fragmentBox = { componentNavigator, fragmentNavigator, paddingValues ->
        BattleSelectionScreen(componentNavigator)
    }
)