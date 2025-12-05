package org.korchagin.kmp.activity.auth

import org.korchagin.kmp.activity.auth.component.AuthComponent
import team.platforma.extra_nav.component.activity_component.Activity
import team.platforma.extra_nav.component.activity_component.ActivityScaffold


object AuthActivity : Activity(
    route = "auth_activity",
    components = listOf(
        AuthComponent
    ),
    activityScaffold = { components ->
        ActivityScaffold(
            components = components
        )
    }
)