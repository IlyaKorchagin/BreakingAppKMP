package org.korchagin.kmp.activity.main.fragments.home.screen.screenItems

import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil3.compose.AsyncImage
import com.korchagin.presentation.constants.LOCK
import com.korchagin.presentation.models.ElementModel
import com.korchagin.presentation.models.Elements
import com.korchagin.presentation.models.PupilModel
import com.korchagin.presentation.models.getProgress
import com.korchagin.presentation.models.setProgress
import com.korchagin.presentation.models.setRecord
import com.korchagin.presentation.viewModel.MainViewModel
import kotlinx.coroutines.launch
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.activity.battle.fragments.screen.ProgressSlider
import org.korchagin.kmp.activity.elementDetails.ElementDetailsActivity
import org.korchagin.kmp.helper.setElementColor
import org.korchagin.kmp.helper.setElementTitle
import org.korchagin.kmp.theme.colors.AppColors
import org.korchagin.kmp.uiElements.CustomProgressBar
import org.korchagin.kmp.uiElements.ShimmerBrush
import team.platforma.extra_nav.navigator.activity.findNavHost
import team.platforma.infoteam.theme.typography.FontWeights

@OptIn(KoinExperimentalAPI::class)
@ExperimentalFoundationApi
@Composable
fun PostSection(
    posts: List<Elements>,
    stateElement: List<ElementModel>,
    modifier: Modifier = Modifier,
    pupil: PupilModel,
    editMode: Boolean = false,
) {
    val mainViewModel = koinViewModel<MainViewModel>()
    val showShimmer = remember { mutableStateOf(true) }
    val scope = rememberCoroutineScope()
    LazyColumn(
        modifier = modifier
            .fillMaxSize()
    ) {
        itemsIndexed(posts) { index, value ->
            var progress by remember { mutableStateOf(value.progress ?: 0f) }
            var record by remember { mutableStateOf(value.record) }
            val startBackgroundColor = Color.White
            val endBackgroundColor = setElementColor(value.title)
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .background(
                        brush = Brush.horizontalGradient(
                            listOf(
                                startBackgroundColor,
                                endBackgroundColor
                            ),
                            startX = 300.0f
                        )
                    )
                    .padding(5.dp),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceEvenly
            ) {
                val borderColor = setElementColor(value.title)

                AsyncImage(
                    model = value.icon,
                    /*   model = ImageRequest.Builder(LocalContext.current)
                           .data(value.icon)
                           .crossfade(true)
                           .build(),*/
                    contentDescription = "default crossfade example",
                    modifier = Modifier
                        .size(80.dp)
                        .clip(CircleShape)
                        .background(
                            ShimmerBrush(
                                targetValue = 1300f,
                                showShimmer = showShimmer.value
                            )
                        )
                        .border(3.dp, borderColor, CircleShape)
                        .clickable {
                            scope.launch {
                                mainViewModel.addElement(stateElement[index])
                                mainViewModel.addElementRating(
                                    pupil.getProgress(
                                        stateElement[index].title
                                    ).toInt()
                                )

                            }
                            if (value.icon != LOCK) findNavHost().navigateToActivity(
                                ElementDetailsActivity
                            )
                        },
                    onSuccess = { showShimmer.value = false },
                    contentScale = ContentScale.Crop
                )
                Spacer(modifier = Modifier.width(10.dp))
                Column(
                    modifier = Modifier
                        .fillMaxWidth()
                ) {
                    // --- Название элемента --->
                    Text(
                        text = setElementTitle(value.title),
                        color = Color.Black,
                        letterSpacing = 1.sp
                    )
                    // <--- Название элемента ---

                    if (!editMode) {
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
                            Brush.horizontalGradient(
                                listOf(
                                    Color.White,
                                    AppColors.colors().progress
                                )
                            ),
                            progress.toInt(),
                            true
                        )
                    } else {
                        Spacer(modifier = Modifier.height(5.dp))
                        ProgressSlider(progress.toInt(), {
                            progress = it.toFloat()
                            pupil.setProgress(value.title, progress.toInt())
                            mainViewModel.updateClickedPupil(pupil)
                        }, "")
                    }

                    if (!editMode && value.icon == LOCK) {
                        Spacer(modifier = Modifier.height(5.dp))
                        Text(
                            text = value.block_description,
                            color = Color.Black,
                            fontSize = 12.sp
                        )
                    }
                    if (value.record != 0) {
                        Spacer(modifier = Modifier.height(5.dp))
                        Row(modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically) {
                            Text(
                                text = "Рекорд = $record",
                                style = team.platforma.infoteam.theme.typography.Typography.textLg(FontWeights.SemiBold)
                                    .copy(color = Color.Black)
                            )
                            ProgressSlider(record, {
                                record = it
                                pupil.setRecord(value.title, record)
                                mainViewModel.updateClickedPupil(pupil)
                            }, "")
                        }
                    }
                }


            }

            if (index < posts.size - 1) {
                Column(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalAlignment = Alignment.End
                ) {
                    HorizontalDivider(
                        modifier = Modifier.fillMaxWidth(0.78f),
                        thickness = 1.dp,
                        color = Color.LightGray
                    )
                }
            }
        }
    }
}
