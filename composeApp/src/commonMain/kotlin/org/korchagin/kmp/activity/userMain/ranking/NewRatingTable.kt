package org.korchagin.kmp.activity.userMain.ranking

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
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
import com.korchagin.presentation.models.PupilModel
import com.korchagin.presentation.viewModel.MainViewModel
import org.jetbrains.compose.resources.painterResource
import org.korchagin.kmp.helper.setPositionFontSize
import org.korchagin.kmp.helper.setPositionStar
import org.korchagin.kmp.theme.colors.LocalAppColors
import org.korchagin.kmp.uiElements.ShimmerBrush

@Composable
fun NewRatingTable(
    selected: String,
    ratingList: List<PupilModel>,
    mainViewModel: MainViewModel,
    modifier: Modifier = Modifier,
    onProfileClick: () -> Unit,
    listState: LazyListState,
    valueProvider: (PupilModel, String) -> Int,
    maxValue: Int
) {
    LazyColumn(
        state = listState,
        modifier = modifier.fillMaxWidth()
    ) {
        itemsIndexed(
            items = ratingList,
            key = { _, pupil -> pupil.name }
        ) { index, pupil ->

            val value = valueProvider(pupil, selected)
            val position = index + 1

            val medalColor = when (position) {
                1 -> Color(0xFFFFC107)
                2 -> Color(0xFFB0BEC5)
                3 -> Color(0xFFCD7F32)
                else -> LocalAppColors.current.mainGreen
            }

            val showShimmer = remember(pupil.avatar) {
                mutableStateOf(true)
            }

            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(18.dp))
                    .background(Color.White.copy(alpha = 0.65f))
                    .border(
                        width = if (index < 3) 2.dp else 1.dp,
                        color = medalColor.copy(alpha = 0.65f),
                        shape = RoundedCornerShape(18.dp)
                    )
                    .clickable {
                        mainViewModel.setClickedPupil(pupil)
                        onProfileClick()
                    }
                    .padding(10.dp),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.SpaceEvenly
            ) {
                AsyncImage(
                    model = pupil.avatar,
                    contentDescription = pupil.name,
                    modifier = Modifier
                        .size(80.dp)
                        .clip(CircleShape)
                        .background(
                            ShimmerBrush(
                                targetValue = 1300f,
                                showShimmer = showShimmer.value
                            )
                        )
                        .border(3.dp, medalColor, CircleShape),
                    onSuccess = {
                        showShimmer.value = false
                    },
                    contentScale = ContentScale.Crop
                )

                Spacer(Modifier.width(10.dp))

                Column(
                    modifier = Modifier.weight(1f)
                ) {
                    Text(
                        text = pupil.name,
                        letterSpacing = 1.sp,
                        color = Color(0xFF263238),
                        fontWeight = FontWeight.Bold,
                        fontSize = 16.sp
                    )

                    Spacer(Modifier.height(5.dp))

                    val progress = (value.toFloat() / maxValue)
                        .coerceIn(0f, 1f)

                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .height(25.dp)
                            .clip(RoundedCornerShape(8.dp))
                            .background(Color.White.copy(alpha = 0.7f))
                            .border(
                                1.dp,
                                Color.Gray.copy(alpha = 0.4f),
                                RoundedCornerShape(8.dp)
                            )
                    ) {
                        Box(
                            modifier = Modifier
                                .fillMaxWidth(progress)
                                .height(25.dp)
                                .clip(RoundedCornerShape(8.dp))
                                .background(
                                    Brush.horizontalGradient(
                                        listOf(
                                            Color.White,
                                            LocalAppColors.current.progress
                                        )
                                    )
                                )
                        )

                        Text(
                            text = value.toString(),
                            modifier = Modifier
                                .align(Alignment.CenterEnd)
                                .padding(end = 8.dp),
                            color = Color(0xFF263238),
                            fontSize = 12.sp,
                            fontWeight = FontWeight.Bold
                        )
                    }

                    Spacer(Modifier.height(5.dp))

                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.Start,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        val positionImage = setPositionStar(index)
                        val positionSize = setPositionFontSize(index)

                        Image(
                            painter = painterResource(positionImage),
                            contentDescription = null
                        )

                        Spacer(Modifier.width(5.dp))

                        Text(
                            text = "${index + 1} - место",
                            fontSize = positionSize.sp,
                            color = Color(0xFF263238),
                            fontWeight = FontWeight.SemiBold
                        )

                        if (pupil.currentPosition != pupil.newPosition) {
                            Spacer(Modifier.weight(1f))

                            val isUp = pupil.newPosition < pupil.currentPosition

                            Image(
                                painter = painterResource(
                                    if (isUp) Res.drawable.position_up
                                    else Res.drawable.position_down
                                ),
                                contentDescription = null,
                                modifier = Modifier.size(24.dp)
                            )

                            Text(
                                text = if (isUp) {
                                    "${pupil.currentPosition - pupil.newPosition}"
                                } else {
                                    "${pupil.newPosition - pupil.currentPosition}"
                                },
                                color = if (isUp) {
                                    LocalAppColors.current.mainGreen
                                } else {
                                    Color.Red
                                },
                                style = TextStyle(
                                    fontWeight = FontWeight.Bold,
                                    fontSize = 16.sp
                                )
                            )

                            Spacer(Modifier.width(16.dp))
                        }
                    }
                }
            }
        }
    }
}
