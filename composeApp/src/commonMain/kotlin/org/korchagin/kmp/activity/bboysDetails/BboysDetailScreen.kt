package org.korchagin.kmp.activity.bboysDetails

import VideoPlayer
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil3.compose.AsyncImage
import com.korchagin.presentation.viewModel.MainViewModel
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.PlatformType
import org.korchagin.kmp.currentPlatform
import org.korchagin.kmp.theme.colors.LocalAppColors
import org.korchagin.kmp.uiElements.ShimmerBrush
import org.korchagin.kmp.uiElements.StyledTextScreen
import org.korchagin.kmp.uiElements.calculateAge


@OptIn(KoinExperimentalAPI::class)
@Composable
fun BboysDetailScreen() {
    val mainViewModel = koinViewModel<MainViewModel>()
    val bboy = mainViewModel.bboy
    val colors = LocalAppColors.current

    var showShimmer by remember { mutableStateOf(true) }

    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.TopCenter
    ) {
        LazyColumn(
            modifier = Modifier
                .widthIn(max = 900.dp)
                .fillMaxWidth(),
            horizontalAlignment = Alignment.CenterHorizontally,
            contentPadding = androidx.compose.foundation.layout.PaddingValues(
                horizontal = 16.dp,
                vertical = 16.dp
            ),
            verticalArrangement = androidx.compose.foundation.layout.Arrangement.spacedBy(16.dp)
        ) {
            item {
                Column(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Box(
                        modifier = Modifier
                            .size(200.dp)
                            .border(
                                width = 3.dp,
                                brush = Brush.linearGradient(
                                    listOf(
                                        colors.mainGreen,
                                        colors.silver
                                    )
                                ),
                                shape = CircleShape
                            )
                            .padding(5.dp)
                            .clip(CircleShape)
                            .background(
                                ShimmerBrush(
                                    targetValue = 1300f,
                                    showShimmer = showShimmer
                                )
                            )
                    ) {
                        AsyncImage(
                            model = bboy.avatar,
                            contentDescription = bboy.name,
                            modifier = Modifier
                                .fillMaxSize()
                                .clip(CircleShape),
                            contentScale = ContentScale.Crop,
                            onSuccess = {
                                showShimmer = false
                            }
                        )
                    }

                    Spacer(Modifier.height(16.dp))

                    Text(
                        text = bboy.name,
                        fontSize = 24.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Serif,
                        textAlign = TextAlign.Center,
                        color = colors.textDefault
                    )
                }
            }

            item {
                Column(
                    modifier = Modifier
                        .fillMaxWidth()
                        .clip(RoundedCornerShape(18.dp))
                        .background(colors.defaultBackground.copy(alpha = 0.75f))
                        .border(
                            1.dp,
                            colors.mainGreen.copy(alpha = 0.5f),
                            RoundedCornerShape(18.dp)
                        )
                        .padding(16.dp),
                    verticalArrangement = androidx.compose.foundation.layout.Arrangement.spacedBy(14.dp)
                ) {
                    StyledTextScreen(
                        title = "Возраст",
                        description = if (bboy.born.isNotEmpty()) {
                            calculateAge(bboy.born, false)
                        } else {
                            "Не указано"
                        }
                    )

                    StyledTextScreen(
                        title = "Дата рождения",
                        description = bboy.born.ifEmpty { "Не указано" }
                    )

                    StyledTextScreen(
                        title = "Страна",
                        description = bboy.country.ifEmpty { "Не указано" }
                    )
                }
            }

            item {
                if (currentPlatform == PlatformType.JS) {
                    Spacer(Modifier.height(370.dp))
                }

                VideoPlayer(
                    topPadding = 0,
                    url = bboy.video,
                    urlRutube = bboy.videoRutube
                )
            }

            item {
                ExpandableTextField(
                    shortDescription = bboy.shortDescription,
                    fullDescription = bboy.description
                )
            }
        }
    }
}

@Composable
fun ExpandableTextField(
    shortDescription: String,
    fullDescription: String
) {
    var expanded by remember { mutableStateOf(false) }
    val colors = LocalAppColors.current

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(18.dp))
            .background(colors.defaultBackground.copy(alpha = 0.75f))
            .border(
                1.dp,
                colors.mainGreen.copy(alpha = 0.5f),
                RoundedCornerShape(18.dp)
            )
            .clickable { expanded = !expanded }
            .padding(16.dp)
    ) {
        Text(
            text = if (expanded) "Полное описание" else "Краткое описание",
            modifier = Modifier.fillMaxWidth(),
            fontSize = 19.sp,
            fontWeight = FontWeight.Bold,
            color = colors.mainGreen,
            textAlign = TextAlign.Center
        )

        Spacer(Modifier.height(12.dp))

        Text(
            text = if (expanded) fullDescription else shortDescription,
            fontSize = 15.sp,
            color = colors.textDefault,
            lineHeight = 22.sp
        )

        Spacer(Modifier.height(12.dp))

        Text(
            text = if (expanded) {
                "Свернуть описание ↑"
            } else {
                "Читать полностью ↓"
            },
            modifier = Modifier.fillMaxWidth(),
            fontSize = 13.sp,
            fontWeight = FontWeight.SemiBold,
            color = colors.mainGreen,
            textAlign = TextAlign.Center
        )
    }
}