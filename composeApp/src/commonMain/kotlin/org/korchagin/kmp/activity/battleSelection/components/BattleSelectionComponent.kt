package org.korchagin.kmp.activity.battleSelection.components

import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.selection_title
import org.korchagin.kmp.activity.battleSelection.fragments.BattleSelectionFragment
import team.platforma.extra_nav.component.component_of_activity.Component

object BattleSelectionComponent : Component(
    route = "battle_component",
    label = Res.string.selection_title,
    fragments = listOf(BattleSelectionFragment)
)