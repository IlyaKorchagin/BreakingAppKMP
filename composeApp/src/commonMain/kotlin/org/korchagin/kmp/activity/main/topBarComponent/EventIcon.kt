package org.korchagin.kmp.activity.main.topBarComponent

import androidx.compose.foundation.Image
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp
import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.star_top_1
import org.jetbrains.compose.resources.painterResource
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.activity.events.EventsActivity
import team.platforma.extra_nav.navigator.activity.findNavHost

@OptIn(KoinExperimentalAPI::class)
@Composable
fun EventIcon() {
    Image(
        painter = painterResource(Res.drawable.star_top_1),
        contentDescription = null,
        contentScale = ContentScale.Crop,
        modifier = Modifier.width(46.dp).aspectRatio(1.0f)
            .clip(CircleShape)
            .border(3.dp, Color.Gray, CircleShape)
            .clickable {
                findNavHost().navigateToActivity(EventsActivity)
            }
    )

}