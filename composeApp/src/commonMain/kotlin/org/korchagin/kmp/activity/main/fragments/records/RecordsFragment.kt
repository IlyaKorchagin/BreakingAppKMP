package org.korchagin.kmp.activity.main.fragments.records

import org.korchagin.kmp.activity.main.fragments.records.screen.RecordsScreen
import team.platforma.extra_nav.component.fragment_component.Fragment


object RecordsFragment: Fragment(
    route = "records_fragment",
    fragmentBox = { componentNavigator, fragmentNavigator, paddingValues ->
        RecordsScreen()}
)