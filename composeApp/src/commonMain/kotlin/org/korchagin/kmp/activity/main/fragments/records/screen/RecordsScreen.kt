package org.korchagin.kmp.activity.main.fragments.records.screen


import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowDropDown
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.position_down
import breakingkmpapp.composeapp.generated.resources.position_up
import coil3.compose.AsyncImage
import com.korchagin.presentation.constants.AIRFLARE
import com.korchagin.presentation.constants.BACKSPIN
import com.korchagin.presentation.constants.CRICKET
import com.korchagin.presentation.constants.ELBOW_AIRFLARE
import com.korchagin.presentation.constants.FLARE
import com.korchagin.presentation.constants.HALO
import com.korchagin.presentation.constants.HANDSTAND
import com.korchagin.presentation.constants.HAND_JUMP
import com.korchagin.presentation.constants.HAND_TOUCH_LEGS
import com.korchagin.presentation.constants.HAND_WALK
import com.korchagin.presentation.constants.HEADSPIN
import com.korchagin.presentation.constants.HORIZONT
import com.korchagin.presentation.constants.INVERT
import com.korchagin.presentation.constants.JACKHAMMER
import com.korchagin.presentation.constants.MUCHMILL
import com.korchagin.presentation.constants.NINETYNINE
import com.korchagin.presentation.constants.ONE_HAND
import com.korchagin.presentation.constants.PRESS_TO_HANDSTAND
import com.korchagin.presentation.constants.PUSHUPS
import com.korchagin.presentation.constants.UFO
import com.korchagin.presentation.constants.WEB
import com.korchagin.presentation.constants.WINDMILL
import com.korchagin.presentation.constants.WOLF
import com.korchagin.presentation.models.PupilModel
import com.korchagin.presentation.models.getRecord
import com.korchagin.presentation.viewModel.MainViewModel
import org.jetbrains.compose.resources.painterResource
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.activity.profile.ProfileActivity
import org.korchagin.kmp.helper.setElementTitle
import org.korchagin.kmp.helper.setPositionBackgroundColor
import org.korchagin.kmp.helper.setPositionColor
import org.korchagin.kmp.helper.setPositionFontSize
import org.korchagin.kmp.helper.setPositionStar
import org.korchagin.kmp.theme.colors.AppColors
import org.korchagin.kmp.uiElements.ShimmerBrush
import team.platforma.extra_nav.navigator.activity.findNavHost
import team.platforma.infoteam.theme.typography.FontWeights
import team.platforma.infoteam.theme.typography.Typography


@OptIn(KoinExperimentalAPI::class)


@Composable
fun RecordsScreen() {
    val mainViewModel = koinViewModel<MainViewModel>()
    val pupilsList by mainViewModel.pupils.collectAsState(emptyList<PupilModel>())
    var selected by remember { mutableStateOf(WINDMILL) }


    val ELEMENTS = listOf(
        // Freeze
        ONE_HAND, INVERT,

        // PowerMove
        BACKSPIN, HEADSPIN, WINDMILL, MUCHMILL, HALO, FLARE, WOLF, WEB, CRICKET,
        AIRFLARE, NINETYNINE, UFO, ELBOW_AIRFLARE, JACKHAMMER,

        //OFP
        PUSHUPS, HANDSTAND, HAND_JUMP, HAND_TOUCH_LEGS, HAND_WALK,
        HORIZONT, PRESS_TO_HANDSTAND,
    )

    val sortedPupils: List<PupilModel> = remember(pupilsList, selected) {
        pupilsList.sortedByDescending { pupil: PupilModel -> pupil.getRecord(selected) }
    }


    Column(
        modifier = Modifier.fillMaxSize()
    ) {
        ElementSelector(ELEMENTS, selected) { selectedItem ->
            selected = selectedItem
        }
        if (mainViewModel.checkedState) NewRatingTable(
            selected = selected,
            ratingList = sortedPupils,
            mainViewModel = mainViewModel
        )
        else {
            RatingTable(
                selected = selected,
                mainViewModel = mainViewModel,
                pupilsList = sortedPupils
            )
        }
    }
}

@Composable
fun NewRatingTable(
    selected: String,
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

                    Text(
                        text = "Рекорд = ${pupil.getRecord(selected)}",
                        style = Typography.textLg(FontWeights.SemiBold)
                            .copy(color = Color.Black)
                    )
                    Spacer(modifier = Modifier.height(5.dp))
                    /*Row(
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
                    }*/
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
                        if(pupil.currentPosition != pupil.newPosition) {
                            Spacer(modifier = Modifier.weight(1f))
                            Image(
                                painter = if (pupil.newPosition < pupil.currentPosition) painterResource(Res.drawable.position_up)
                                else painterResource(Res.drawable.position_down),
                                contentDescription = null,
                                modifier = Modifier.size(24.dp)
                            )
                            Text(
                                text = if (pupil.newPosition < pupil.currentPosition) "${pupil.currentPosition - pupil.newPosition}"
                                else "${pupil.newPosition - pupil.currentPosition}",
                                color = if (pupil.newPosition < pupil.currentPosition) AppColors.colors().mainGreen
                                else  Color.Red,
                                style = TextStyle(
                                    fontWeight = FontWeight.Medium,
                                    fontSize = 16.sp
                                )

                            )
                            Spacer(modifier = Modifier.width(16.dp))
                        }
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
    selected: String,
    pupilsList: List<PupilModel>, modifier: Modifier = Modifier, mainViewModel: MainViewModel
) {
    Column(
        modifier = Modifier
            .fillMaxHeight()
            .widthIn(max = 900.dp)
            .background(color = Color.Black),
        verticalArrangement = Arrangement.Top
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
                    color = Color.White,
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
                    color = Color.White,
                )
            }

            Box(
                modifier = Modifier.width(100.dp), contentAlignment = Alignment.Center
            ) {
                Text(
                    text = "Рейтинг",
                    fontSize = 14.sp,
                    color = Color.White,
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
                        Text(text = "${pupil.getRecord(selected)}", fontSize = fontSize.sp, color = color)
                    }
                }
            }
        }
    }
}

@Composable
fun ElementSelector(
    elements: List<String>,
    selected: String,
    onSelect: (String) -> Unit
) {
    var expanded by remember { mutableStateOf(false) }

    Box(modifier = Modifier.fillMaxWidth()) {
        // Селектор с рамкой и стрелкой
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .background(
                    MaterialTheme.colorScheme.surface.copy(alpha = 0.8f), // полупрозрачный фон
                    shape = MaterialTheme.shapes.medium
                ) .border(
                    width = 3.dp,
                    color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.5f),
                )
                .clickable { expanded = true }
                .padding(horizontal = 16.dp, vertical = 12.dp)
        ) {
            Text(
                text = setElementTitle(selected),
                modifier = Modifier.align(Alignment.CenterStart)
            )

            // Стрелка вниз справа
            Icon(
                imageVector = Icons.Default.ArrowDropDown,// замените на вашу стрелку
                contentDescription = null,
                modifier = Modifier.align(Alignment.CenterEnd)
            )
        }

        // DropdownMenu с шириной родителя
        DropdownMenu(
            expanded = expanded,
            onDismissRequest = { expanded = false },
            modifier = Modifier
                .padding(bottom = 16.dp)
        ) {
            elements.forEach { item ->
                DropdownMenuItem(
                    text = { Text(text = setElementTitle(item),
                        style = Typography.text3xl(weights = FontWeights.SemiBold)) },
                    onClick = {
                        onSelect(item)
                        expanded = false
                    }
                )
            }
        }
    }
}
