package org.korchagin.kmp.activity.main.fragments.bboys.screen

import androidx.compose.animation.core.LinearEasing
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.infiniteRepeatable
import androidx.compose.animation.core.rememberInfiniteTransition
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.itemsIndexed
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.drawBehind
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.drawscope.rotate
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp
import coil3.compose.AsyncImage
import com.korchagin.presentation.constants.LOCK
import com.korchagin.presentation.viewModel.MainViewModel
import kotlinx.coroutines.launch
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.activity.bboysDetails.BboysDetailsActivity
import org.korchagin.kmp.uiElements.ShimmerBrush
import team.platforma.extra_nav.navigator.activity.findNavHost
import team.platforma.extra_nav.navigator.component.api.ComponentNavigator

@OptIn(KoinExperimentalAPI::class)
@Composable
fun BboysScreen(
    componentNavigator: ComponentNavigator
) {
    val mainViewModel = koinViewModel<MainViewModel>()
    val showShimmer = remember { mutableStateOf(true) }
    val bboysList by mainViewModel.bboysList.collectAsState(emptyList())
    val currentPupil by mainViewModel.currentPupil.collectAsState(null)
    val pupil = currentPupil ?: return
    val scope = rememberCoroutineScope()

    val infiniteTransition = rememberInfiniteTransition()
    val rotationValue = infiniteTransition.animateFloat(
        initialValue = 0f,
        targetValue = 360f,
        animationSpec = infiniteRepeatable(
            tween(1000, easing = LinearEasing)
        )
    )
    LazyVerticalGrid(
        columns = GridCells.Fixed(3),
        modifier = Modifier
            .fillMaxSize()
            .background(
                brush = Brush.verticalGradient(
                    colors = listOf(Color.White, Color.LightGray)
                )
            ),
        contentPadding = PaddingValues(
            start = 8.dp,
            end = 8.dp,
            top = 8.dp,
            bottom = 90.dp ),
        verticalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        itemsIndexed(bboysList) { index, bboy ->
            Box(
                modifier = Modifier
                    .border(
                        width = 1.dp,
                        brush = Brush.horizontalGradient(listOf(Color.Black, Color.DarkGray)),
                        shape = RoundedCornerShape(percent = 50)
                    )
            ) {
                AsyncImage(
                    model = if (pupil.rating.toInt() >= bboy.rating.toInt()) bboy.avatar else LOCK,
                    contentDescription = bboy.name,
                    modifier = Modifier
                        .drawBehind {
                            rotate(rotationValue.value) {
                                drawCircle(
                                    Brush.horizontalGradient(
                                        listOf(Color.White, Color.LightGray)
                                    ), style = Stroke(10f)
                                )
                            }
                        }
                        .aspectRatio(1f)
                        .size(130.dp)
                        .padding(2.dp)
                        .clip(CircleShape)
                        .background(
                            ShimmerBrush(
                                targetValue = 1300f,
                                showShimmer = showShimmer.value
                            )
                        )
                        .clickable {
                            scope.launch {
                                   mainViewModel.addBboy(bboy)
                            }
                             if (pupil.rating.toInt() >= bboy.rating.toInt()) findNavHost().navigateToActivity(BboysDetailsActivity)

                        },
                    onSuccess = { showShimmer.value = false },
                    contentScale = ContentScale.Crop
                )
            }
        }
    }
}


