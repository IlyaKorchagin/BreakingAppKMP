package org.korchagin.kmp.activity.main.topBarComponent

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp
import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.people
import coil3.compose.AsyncImage
import com.korchagin.presentation.viewModel.MainViewModel
import org.jetbrains.compose.resources.painterResource
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.activity.profile.ProfileActivity
import org.korchagin.kmp.uiElements.ShimmerBrush
import team.platforma.extra_nav.navigator.activity.findNavHost

@OptIn(KoinExperimentalAPI::class)
@Composable
fun ProfileIcon() {
    val mainViewModel = koinViewModel<MainViewModel>()
    val currentPupil by mainViewModel.currentPupil.collectAsState(null)
    val pupil = currentPupil ?: return
    val showShimmer = remember { mutableStateOf(true) }

    if (pupil.avatar.isEmpty()) {
        Image(
            painter = painterResource(Res.drawable.people),
            contentDescription = null,
            contentScale = ContentScale.Crop,
            modifier = Modifier.width(46.dp).aspectRatio(1.0f)
                .clip(CircleShape)
                .border(3.dp, Color.Gray, CircleShape)
                .clickable {
                    mainViewModel.setClickedPupil(null)
                    findNavHost().navigateToActivity(ProfileActivity) }
        )
    } else {
        AsyncImage(
            model = pupil.avatar,
            contentDescription = "default crossfade example",
            modifier = Modifier
                .size(46.dp)
                .clip(CircleShape)
                .background(
                    ShimmerBrush(
                        targetValue = 1300f, showShimmer = showShimmer.value
                    )
                )
                .border(3.dp, Color.Gray, CircleShape)
                .clickable { findNavHost().navigateToActivity(ProfileActivity) },
            onSuccess = { showShimmer.value = false },
            contentScale = ContentScale.Crop
        )
    }
}