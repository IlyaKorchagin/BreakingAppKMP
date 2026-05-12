package org.korchagin.kmp.activity.battle.components

import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.battle_title
import org.korchagin.kmp.activity.battle.fragments.BattleFragment
import team.platforma.extra_nav.component.component_of_activity.Component

object BattleComponent : Component(
    route = "battle_component",
    label = Res.string.battle_title,
    fragments = listOf(BattleFragment)
)