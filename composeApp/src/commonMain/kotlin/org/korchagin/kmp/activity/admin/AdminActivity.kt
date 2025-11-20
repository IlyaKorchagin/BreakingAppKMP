package org.korchagin.kmp.activity.admin

import androidx.compose.foundation.Image
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarColors
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.app_logo
import org.jetbrains.compose.resources.painterResource
import org.jetbrains.compose.resources.stringResource
import org.korchagin.kmp.activity.admin.component.AdminComponent
import org.korchagin.kmp.activity.main.components.RatingsComponent
import org.korchagin.kmp.activity.main.fragments.ratings.topBar.TopBarRatingActions
import org.korchagin.kmp.activity.main.topBarComponent.EventIcon
import org.korchagin.kmp.activity.main.topBarComponent.ProfileIcon
import team.platforma.extra_nav.component.activity_component.Activity
import team.platforma.extra_nav.component.activity_component.ActivityScaffold

@OptIn(ExperimentalMaterial3Api::class)
object AdminActivity : Activity(
    route = "admin_activity",
    components = listOf(
        AdminComponent
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
                                title = {
                                    Row(verticalAlignment = Alignment.CenterVertically) {
                                        Image(
                                            painter = painterResource(Res.drawable.app_logo),
                                            contentDescription = null,
                                            modifier = Modifier
                                                .size(46.dp)
                                                .clip(CircleShape)
                                                .border(3.dp, Color.Gray, CircleShape)
                                        )
                                        Text(
                                            modifier = Modifier.padding(start = 8.dp),
                                            text = component.label?.let { stringResource(it) }
                                                ?: "")

                                    }
                                },
                                colors = topAppBarColors,
                                actions = {
                                    when (component) {
                                        RatingsComponent -> TopBarRatingActions()
                                    }
                                    EventIcon()
                                    Spacer(modifier = Modifier.padding(horizontal = 4.dp))
                                    ProfileIcon()
                                }
                            )
                    }

            },
            components = components
        )
    }
)