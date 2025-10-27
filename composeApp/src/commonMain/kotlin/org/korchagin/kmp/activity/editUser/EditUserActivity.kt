package org.korchagin.kmp.activity.editUser

import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarColors
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.arrow_left_img
import org.jetbrains.compose.resources.painterResource
import org.jetbrains.compose.resources.stringResource
import org.korchagin.kmp.activity.editUser.component.EditUserComponent
import org.korchagin.kmp.activity.main.components.RatingsComponent
import org.korchagin.kmp.activity.main.fragments.ratings.topBar.TopBarRatingActions
import org.korchagin.kmp.activity.main.topBarComponent.ProfileIcon
import team.platforma.extra_nav.component.activity_component.Activity
import team.platforma.extra_nav.component.activity_component.ActivityScaffold
import team.platforma.extra_nav.navigator.activity.findNavHost

@OptIn(ExperimentalMaterial3Api::class)
object EditUserActivity : Activity(
    route = "edit_user_activity",
    components = listOf(
        EditUserComponent
    ),
    activityScaffold = { components ->

        val topAppBarColors = TopAppBarColors(
            containerColor = Color.Blue,
            titleContentColor = Color.White,
            actionIconContentColor = Color.White,
            navigationIconContentColor = Color.White,
            scrolledContainerColor = Color.Red
        )
        ActivityScaffold(
            topBar = {
                    components.forEach { component ->
                            TopAppBar(
                                navigationIcon = {
                                    Image(
                                        painter = painterResource(Res.drawable.arrow_left_img),
                                        contentDescription = null,
                                        modifier = Modifier.clickable {
                                            findNavHost().navigateBack()
                                        }
                                    )
                                },
                                title = {
                                    Text(text = component.label?.let { stringResource(it) }
                                        ?: "")
                                },
                                colors = topAppBarColors,
                                actions = {
                                    when (component) {
                                        RatingsComponent -> TopBarRatingActions()
                                    }
                                    ProfileIcon()
                                }
                            )
                    }

            },
            components = components
        )
    }
)