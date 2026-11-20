package org.korchagin.kmp.activity.elementDetails

import VideoPlayer
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.widthIn
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.korchagin.presentation.viewModel.MainViewModel
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.PlatformType
import org.korchagin.kmp.currentPlatform


@OptIn(ExperimentalFoundationApi::class, KoinExperimentalAPI::class)
@Composable
fun ElementDetailsScreen() {
    val mainViewModel = koinViewModel<MainViewModel>()
    val element = mainViewModel.element

    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.TopCenter
    ) {
        Column(
            modifier = Modifier.widthIn(max = 900.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            VideoPlayer(
                topPadding = 16,
                url = element.videoUrl,
                urlRutube = element.videoRutube
            )

            if (currentPlatform == PlatformType.JS) {
                Spacer(modifier = Modifier.height(450.dp))
            }

            DescriptionSection(
                element = element,
                rating = mainViewModel.elementRating / 10
            )
        }
    }
}