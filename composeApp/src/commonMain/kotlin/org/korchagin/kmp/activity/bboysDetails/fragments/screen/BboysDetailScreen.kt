package org.korchagin.kmp.activity.bboysDetails.fragments.screen

import VideoPlayer
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.ClickableText
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.drawWithCache
import androidx.compose.ui.graphics.BlendMode
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.em
import androidx.compose.ui.unit.sp
import coil3.compose.AsyncImage
import com.korchagin.presentation.viewModel.MainViewModel
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.theme.colors.AppColors
import org.korchagin.kmp.uiElements.ShimmerBrush
import org.korchagin.kmp.uiElements.StyledTextScreen
import org.korchagin.kmp.uiElements.calculateAge
import team.platforma.extra_nav.navigator.component.api.ComponentNavigator


@OptIn(KoinExperimentalAPI::class)
@Composable
fun BboysDetailScreen(
    componentNavigator: ComponentNavigator,
) {
    val mainViewModel = koinViewModel<MainViewModel>()
    val bboy = mainViewModel.bboy
    val showShimmer = remember { mutableStateOf(true) }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(
                brush = Brush.verticalGradient(
                    colors = listOf(Color.Gray, Color.White),
                    startY = 0f,
                    endY = 300f
                )
            )
            .verticalScroll(rememberScrollState())

    ) {
        //       Log.d("ILYA", "element = $bboy")

        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(vertical = 16.dp)
        ) {
            Spacer(modifier = Modifier.width(8.dp))
            Box(
                modifier = Modifier
                    .border(
                        width = 3.dp,
                        brush = Brush.horizontalGradient(listOf(Color.Black, AppColors.colors().silver)),
                        shape = RoundedCornerShape(percent = 50)
                    )
            ) {
                AsyncImage(
                    model = bboy.avatar,
                    contentDescription = "default crossfade example",
                    modifier = Modifier
                        .size(150.dp)
                        .clip(CircleShape)
                        .background(
                            ShimmerBrush(
                                targetValue = 1300f,
                                showShimmer = showShimmer.value
                            )
                        ),
                    onSuccess = { showShimmer.value = false },
                    contentScale = ContentScale.Crop
                )
            }
            Column {
                Box(
                    modifier = Modifier
                        .fillMaxSize()
                        .wrapContentSize(Alignment.Center)
                ) {
                    Text(
                        text = bboy.name,
                        letterSpacing = 0.1.em,
                        fontFamily = FontFamily.Serif,
                        style = TextStyle(
                            textAlign = TextAlign.Center,
                            fontSize = 20.sp,
                            fontWeight = FontWeight.Bold
                        ),
                        textDecoration = TextDecoration.Underline,
                        modifier = Modifier
                            .graphicsLayer(alpha = 0.99f)
                            .padding(8.dp)
                            .drawWithCache {
                                onDrawWithContent {
                                    drawContent()
                                    drawRect(
                                        Brush.horizontalGradient(
                                            listOf(
                                                Color.Black,
                                                AppColors.colors().bronze
                                            )
                                        ), blendMode = BlendMode.SrcAtop
                                    )
                                }
                            }
                    )
                }
                StyledTextScreen(
                    title = "Возраст: ",
                    description = if (bboy.born.isNotEmpty()) calculateAge(bboy.born).toString()
                    else "не указано"
                )
                StyledTextScreen(title = "Дата рождения: ", description = bboy.born)
                StyledTextScreen(title = "Страна: ", description = bboy.country)
            }

        }

        VideoPlayer(
            modifier = Modifier,
            url = bboy.video
        )

        ExpandableTextField(
            shortDescription = bboy.shortDescription,
            fullDescription = bboy.description
        )

    }
}

@Composable
fun ExpandableTextField(shortDescription: String, fullDescription: String) {
    var expanded by remember { mutableStateOf(false) }

    val text = if (expanded) {
        buildAnnotatedString {
            append("$fullDescription\n")
            withStyle(
                SpanStyle(
                    fontSize = 10.sp,
                    fontWeight = FontWeight.Bold
                )
            ) {
                append("\n     Нажмите здесь, чтобы увидеть короткое описание.")
            }
        }
    } else {
        buildAnnotatedString {
            append("$shortDescription\n")
            withStyle(
                SpanStyle(
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Bold
                )
            ) {
                append("\n     Нажмите здесь, чтобы увидеть полное описание.")
            }
        }
    }

    val title = if (expanded) {
        "Полное описание."
    } else {
        "Краткое описание."
    }

    Text(
        text = title,
        style = MaterialTheme.typography.titleLarge,
        fontFamily = FontFamily.Serif,
        textDecoration = TextDecoration.Underline,
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 8.dp),
        textAlign = TextAlign.Center
    )

    Text(
        modifier = Modifier
            .padding(horizontal = 16.dp, vertical = 8.dp)
            .border(
                2.dp,
                brush = Brush.horizontalGradient(listOf(Color.Black, Color.LightGray)),
                shape = RoundedCornerShape(4.dp)
            )
            .border(2.dp, Color.Gray, shape = RoundedCornerShape(4.dp))
            .padding(8.dp)
            .clickable { expanded = !expanded },
        text = text,
        style = TextStyle(
            color = Color.Black,
            fontSize = if (expanded) 14.sp else 18.sp

        )
    )
}

