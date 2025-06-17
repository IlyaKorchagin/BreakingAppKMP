package org.korchagin.kmp.activity.main.fragments.ratings.screen


import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil3.compose.AsyncImage
import com.korchagin.presentation.models.PupilModel
import com.korchagin.presentation.viewModel.MainViewModel
import org.jetbrains.compose.resources.painterResource
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.activity.profile.ProfileActivity
import org.korchagin.kmp.helper.setPositionBackgroundColor
import org.korchagin.kmp.helper.setPositionColor
import org.korchagin.kmp.helper.setPositionFontSize
import org.korchagin.kmp.helper.setPositionStar
import org.korchagin.kmp.theme.colors.AppColors
import org.korchagin.kmp.uiElements.CustomProgressBar
import org.korchagin.kmp.uiElements.ShimmerBrush
import team.platforma.extra_nav.navigator.activity.findNavHost
import team.platforma.extra_nav.navigator.component.api.ComponentNavigator


@OptIn(KoinExperimentalAPI::class)
@Composable
fun RatingsScreen(
    componentNavigator: ComponentNavigator
) {
    val mainViewModel = koinViewModel<MainViewModel>()
    val pupilsList by mainViewModel.pupils.collectAsState(emptyList())


    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.TopCenter // Центрируем по ширине
    ) {

        if (mainViewModel.checkedState) NewRatingTable(
            ratingList = pupilsList,
            // navController = navController,
            mainViewModel = mainViewModel
        )
        else {
            RatingTable(
                mainViewModel = mainViewModel,
                pupilsList = pupilsList,
                modifier = Modifier
                    .background(color = Color.Black)
            )
        }
    }
}

@Composable
fun NewRatingTable(
    ratingList: List<PupilModel>,
    mainViewModel: MainViewModel,
    modifier: Modifier = Modifier
) {
    val showShimmer = remember { mutableStateOf(true) }
    LazyColumn(
        modifier = modifier
            .widthIn(max = 900.dp)
    ) {
        itemsIndexed(ratingList) { index, pupil ->
            val startBackgroundColor = Color.White
            val endBackgroundColor = setPositionBackgroundColor(index)

            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .background(
                        brush = Brush.horizontalGradient(
                            listOf(
                                startBackgroundColor, endBackgroundColor
                            ), startX = 300.0f
                        )
                    )
                    .padding(5.dp)
                    .clickable {
                        mainViewModel.setClickedPupil(pupil)
                        findNavHost().navigateToActivity(ProfileActivity)
                    },
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceEvenly
            ) {
                //        Log.d("ILYA","(image = ${value.avatar}")
                AsyncImage(
                    model = pupil.avatar,
                    contentDescription = "default crossfade example",
                    modifier = Modifier
                        .size(80.dp)
                        .clip(CircleShape)
                        .background(
                            ShimmerBrush(
                                targetValue = 1300f, showShimmer = showShimmer.value
                            )
                        )
                        .border(3.dp, Color.Gray, CircleShape),
                    onSuccess = { showShimmer.value = false },
                    contentScale = ContentScale.Crop
                )
                Spacer(modifier = Modifier.width(10.dp))
                Column(
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Text(
                        text = pupil.name,
                        letterSpacing = 1.sp,
                        color = Color.Black,
                    )
                    Spacer(modifier = Modifier.height(5.dp))
                    CustomProgressBar(
                        Modifier
                            .clip(shape = RoundedCornerShape(5.dp))
                            .height(25.dp)
                            .border(
                                width = 1.dp,
                                color = Color.Gray,
                                shape = RoundedCornerShape(5.dp)
                            ),
                        Color.White,
                        Brush.horizontalGradient(listOf(Color.White, AppColors.colors().progress)),
                        pupil.rating.toInt(),
                        true
                    )
                    Spacer(modifier = Modifier.height(5.dp))
                    Row(
                        modifier = Modifier.fillMaxSize(),
                        Arrangement.Start,
                        Alignment.CenterVertically
                    ) {
                        val positionImage = setPositionStar(index)
                        val positionSize = setPositionFontSize(index)
                        Image(
                            painter = painterResource(positionImage),
                            contentDescription = null
                        )
                        Spacer(modifier = Modifier.width(5.dp))
                        Text(
                            text = "${index + 1} - место", fontSize = positionSize.sp,
                            color = Color.Black,
                        )
                    }
                }
            }

            if (index < ratingList.size - 1) {
                Column(
                    modifier = Modifier.fillMaxWidth(), horizontalAlignment = Alignment.End
                ) {
                    HorizontalDivider(
                        modifier = Modifier.fillMaxWidth(0.78f),
                        color = Color.LightGray,
                        thickness = 1.dp
                    )
                }
            }
        }
    }
}

@Composable
fun RatingTable(
    pupilsList: List<PupilModel>, modifier: Modifier = Modifier, mainViewModel: MainViewModel
) {
    Column(
        modifier = Modifier
            .widthIn(max = 900.dp)
            .background(color = Color.Black),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Row(
            modifier = Modifier
                .padding(top = 10.dp, bottom = 10.dp)
                .background(color = Color.Black)
                .fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceEvenly
        ) {
            Box(
                modifier = Modifier.width(80.dp), contentAlignment = Alignment.Center
            ) {
                Text(
                    text = "Позиция",
                    fontSize = 14.sp,
                    color = AppColors.colors().textDefault,
                )
            }

            Box(
                modifier = Modifier
                    .padding(start = 10.dp, end = 10.dp)
                    .fillMaxWidth(0.7f),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = "Фамилия и имя",
                    fontSize = 14.sp,
                    color = AppColors.colors().textDefault,
                )
            }

            Box(
                modifier = Modifier.width(100.dp), contentAlignment = Alignment.Center
            ) {
                Text(
                    text = "Рейтинг",
                    fontSize = 14.sp,
                    color = AppColors.colors().textDefault,
                )
            }
        }
        LazyColumn(
            modifier = modifier
        ) {
            itemsIndexed(pupilsList) { index, pupil ->
                Row(
                    modifier = Modifier
                        .background(color = Color.Black)
                        .fillMaxWidth()
                        .clickable {
                            mainViewModel.setClickedPupil(pupil)
                            findNavHost().navigateToActivity(ProfileActivity)
                        },
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.SpaceEvenly
                ) {
                    val color = setPositionColor(index)
                    val fontSize = setPositionFontSize(index)

                    Box(
                        modifier = Modifier.width(80.dp), contentAlignment = Alignment.Center
                    ) {
                        Text(text = "${index + 1}", fontSize = fontSize.sp, color = color)
                    }

                    Box(
                        modifier = Modifier
                            .padding(start = 10.dp, end = 10.dp)
                            .fillMaxWidth(0.7f), contentAlignment = Alignment.Center
                    ) {
                        Text(text = pupil.name, fontSize = fontSize.sp, color = color)
                    }

                    Box(
                        modifier = Modifier.width(100.dp), contentAlignment = Alignment.Center
                    ) {
                        Text(text = "${pupil.rating}", fontSize = fontSize.sp, color = color)
                    }
                }
            }
        }
    }
}

