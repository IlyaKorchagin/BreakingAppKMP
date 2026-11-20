package org.korchagin.kmp.activity.profile

import VideoPlayer
import androidx.compose.foundation.Image
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
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.camera_img
import breakingkmpapp.composeapp.generated.resources.people
import coil3.compose.AsyncImage
import com.korchagin.presentation.viewModel.MainViewModel
import io.github.vinceglb.filekit.dialogs.FileKitType
import io.github.vinceglb.filekit.dialogs.compose.rememberFilePickerLauncher
import io.github.vinceglb.filekit.readBytes
import kotlinx.coroutines.launch
import org.jetbrains.compose.resources.painterResource
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
fun ProfileScreen() {
    val mainViewModel = koinViewModel<MainViewModel>()
    val currentPupil by mainViewModel.currentPupil.collectAsState(null)
    val clickedPupil by mainViewModel.clickedPupil.collectAsState(null)

    val pupil = clickedPupil ?: currentPupil ?: return
    val colors = LocalAppColors.current

    var showShimmer by remember { mutableStateOf(true) }

    val isOwnProfile =
        clickedPupil?.id == currentPupil?.id || clickedPupil == null

    val scope = rememberCoroutineScope()

    val filePicker = rememberFilePickerLauncher(
        type = FileKitType.Image,
        title = "Выберите аватар"
    ) { file ->
        file?.let {
            scope.launch {
                val bytes = it.readBytes()
                mainViewModel.uploadNewUserAvatar(
                    authUid = pupil.authUid,
                    bytes = bytes
                )
            }
        }
    }

    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.TopCenter
    ) {
        LazyColumn(
            modifier = Modifier
                .fillMaxWidth()
                .widthIn(max = 900.dp),
            contentPadding = androidx.compose.foundation.layout.PaddingValues(
                horizontal = 16.dp,
                vertical = 16.dp
            ),
            verticalArrangement = androidx.compose.foundation.layout.Arrangement.spacedBy(16.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            item {
                Column(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Box(
                        modifier = Modifier.size(144.dp)
                    ) {
                        Box(
                            modifier = Modifier
                                .fillMaxSize()
                                .border(
                                    width = 3.dp,
                                    color = colors.silver,
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
                            if (pupil.avatar.isEmpty()) {
                                Image(
                                    painter = painterResource(Res.drawable.people),
                                    contentDescription = null,
                                    contentScale = ContentScale.Crop,
                                    modifier = Modifier.fillMaxSize()
                                )
                            } else {
                                AsyncImage(
                                    model = pupil.avatar,
                                    contentDescription = pupil.name,
                                    contentScale = ContentScale.Crop,
                                    modifier = Modifier.fillMaxSize(),
                                    onSuccess = {
                                        showShimmer = false
                                    }
                                )
                            }
                        }

                        if (isOwnProfile) {
                            Box(
                                modifier = Modifier
                                    .align(Alignment.BottomEnd)
                                    .size(36.dp)
                                    .clip(CircleShape)
                                    .background(colors.defaultBackground)
                                    .border(
                                        1.dp,
                                        colors.silver,
                                        CircleShape
                                    )
                                    .clickable {
                                        filePicker.launch()
                                    },
                                contentAlignment = Alignment.Center
                            ) {
                                Icon(
                                    painter = painterResource(Res.drawable.camera_img),
                                    contentDescription = "Изменить аватар",
                                    tint = colors.textDefault,
                                    modifier = Modifier.size(19.dp)
                                )
                            }
                        }
                    }

                    Spacer(Modifier.height(14.dp))

                    Text(
                        text = pupil.name,
                        color = colors.textDefault,
                        fontSize = 24.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Serif,
                        textAlign = TextAlign.Center
                    )
                }
            }

            item {
                Column(
                    modifier = Modifier
                        .fillMaxWidth()
                        .clip(RoundedCornerShape(18.dp))
                        .background(
                            colors.defaultBackground.copy(alpha = 0.75f)
                        )
                        .border(
                            1.dp,
                            colors.mainGreen.copy(alpha = 0.5f),
                            RoundedCornerShape(18.dp)
                        )
                        .padding(vertical = 12.dp, horizontal = 8.dp),
                    verticalArrangement = androidx.compose.foundation.layout.Arrangement.spacedBy(8.dp)
                ) {
                    if (pupil.nick.isNotEmpty()) {
                        StyledTextScreen(
                            title = "Ник:",
                            description = pupil.nick
                        )
                    }

                    StyledTextScreen(
                        title = "Возраст:",
                        description = if (pupil.born.isNotEmpty()) {
                            calculateAge(pupil.born, false)
                        } else {
                            "Не указано"
                        }
                    )

                    if (pupil.born.isNotEmpty()) {
                        StyledTextScreen(
                            title = "Дата рождения:",
                            description = pupil.born
                        )
                    }

                    if (pupil.breakingStart.isNotEmpty()) {
                        StyledTextScreen(
                            title = "В брейке:",
                            description = calculateAge(pupil.breakingStart, true)
                        )
                    }

                    if (pupil.country.isNotEmpty()) {
                        StyledTextScreen(
                            title = "Страна:",
                            description = pupil.country
                        )
                    }

                    if (pupil.city.isNotEmpty()) {
                        StyledTextScreen(
                            title = "Город:",
                            description = pupil.city
                        )
                    }

                    if (pupil.role == "user") {
                        StyledTextScreen(
                            title = "Тренер:",
                            description = pupil.coach
                        )
                    }
                }
            }

            if (pupil.video.isNotEmpty() || pupil.videoRutube.isNotEmpty()) {
                item {
                    if (currentPlatform == PlatformType.JS) {
                        Spacer(Modifier.height(390.dp))
                    }

                    VideoPlayer(
                        topPadding = 0,
                        url = pupil.video,
                        urlRutube = pupil.videoRutube
                    )
                }
            }

            if (isOwnProfile) {
                item {
                    Column(
                        modifier = Modifier
                            .fillMaxWidth()
                            .clip(RoundedCornerShape(18.dp))
                            .background(
                                colors.defaultBackground.copy(alpha = 0.75f)
                            )
                            .border(
                                1.dp,
                                colors.mainGreen.copy(alpha = 0.5f),
                                RoundedCornerShape(18.dp)
                            )
                            .padding(16.dp)
                    ) {
                        Text(
                            modifier = Modifier.fillMaxWidth(),
                            text = "Задание от тренера",
                            color = colors.mainGreen,
                            fontSize = 20.sp,
                            fontWeight = FontWeight.Bold,
                            textAlign = TextAlign.Center
                        )

                        Spacer(Modifier.height(12.dp))

                        Text(
                            modifier = Modifier.fillMaxWidth(),
                            text = pupil.currentTask.ifEmpty {
                                "Пока заданий нет"
                            },
                            color = colors.textDefault,
                            fontSize = 15.sp,
                            fontWeight = FontWeight.SemiBold
                        )
                    }
                }
            }
        }
    }
}