package org.korchagin.kmp.activity.main.components


import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.rating
import breakingkmpapp.composeapp.generated.resources.records
import breakingkmpapp.composeapp.generated.resources.records_title
import org.korchagin.kmp.activity.main.fragments.records.RecordsFragment
import team.platforma.extra_nav.component.component_of_activity.Component
import team.platforma.extra_nav.ui.SimpleNavIcon


object RecordsComponent : Component(
    route = "records_component",
    label = Res.string.records_title,
    icon = { selected ->
        SimpleNavIcon(selected, Res.drawable.records)
    },
    fragments = listOf(RecordsFragment)
)