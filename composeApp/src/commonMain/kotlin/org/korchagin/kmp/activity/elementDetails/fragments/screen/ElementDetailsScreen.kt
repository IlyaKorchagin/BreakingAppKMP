package org.korchagin.kmp.activity.elementDetails.fragments.screen


import VideoPlayer
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.korchagin.presentation.models.ElementModel
import com.korchagin.presentation.viewModel.MainViewModel
import org.jetbrains.compose.resources.painterResource
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.PlatformType
import org.korchagin.kmp.currentPlatform
import org.korchagin.kmp.helper.setDescriptionImage
import org.korchagin.kmp.helper.setDescriptionText
import team.platforma.extra_nav.navigator.component.api.ComponentNavigator

@OptIn(ExperimentalFoundationApi::class, KoinExperimentalAPI::class)
@Composable
fun ElementDetailsScreen(
    componentNavigator: ComponentNavigator
) {
    val mainViewModel = koinViewModel<MainViewModel>()
    val element = mainViewModel.element
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.TopCenter // Центрируем по ширине
    ) {

        Column(
            modifier = Modifier
                .widthIn(max = 900.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            println("element = $element")

            VideoPlayer(topPadding = 100, url = element.videoUrl)

            if (currentPlatform == PlatformType.JS) {
                Spacer(modifier = Modifier.height(450.dp))
            }
            DescriptionSection(
                element = element,
                rating = mainViewModel.elementRating / 10,
            )
        }
    }
}

@ExperimentalFoundationApi
@Composable
fun DescriptionSection(
    element: ElementModel,
    rating: Int,
    modifier: Modifier = Modifier
) {
    LazyColumn(
        modifier = modifier
            .fillMaxSize()
    ) {
        items(10) { index ->
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(8.dp)
                    .background(
                        brush = if (rating >= index + 1) Brush.horizontalGradient(
                            listOf(
                                Color.White,
                                Color.Green
                            ), startX = 350f
                        ) else Brush.horizontalGradient(
                            listOf(Color.White, Color.LightGray),
                            startX = 350f
                        ), shape = CircleShape
                    )
                    .border(3.dp, Color.Gray, CircleShape),
                verticalAlignment = Alignment.CenterVertically
            ) {

                Image(
                    painter = painterResource(setDescriptionImage(index)),
                    contentDescription = "",
                    modifier = Modifier
                        .width(80.dp)
                        .height(80.dp)
                        .padding(10.dp)
                )
                Text(
                    modifier = Modifier
                        .fillMaxWidth(1f)
                        .padding(5.dp),
                    text = setDescriptionText(index, element),
                    color = Color.Black,
                    fontSize = 16.sp,
                    letterSpacing = 1.sp
                )
            }
        }


    }
}

