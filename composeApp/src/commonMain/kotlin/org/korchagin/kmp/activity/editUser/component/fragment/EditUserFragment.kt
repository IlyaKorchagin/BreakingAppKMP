package org.korchagin.kmp.activity.editUser.component.fragment

import org.korchagin.kmp.activity.editUser.component.fragment.screen.EditUserScreen
import team.platforma.extra_nav.component.fragment_component.Fragment


object EditUserFragment : Fragment(
    route = "edit_user_fragment",
    fragmentBox = { componentNavigator, fragmentNavigator, paddingValues ->
        EditUserScreen(componentNavigator)
    }
)