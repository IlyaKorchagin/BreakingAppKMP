package org.korchagin.kmp.activity.userMain.ranking

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.korchagin.presentation.models.PupilModel
import com.korchagin.presentation.viewModel.MainViewModel
import org.korchagin.kmp.helper.setPositionColor
import org.korchagin.kmp.helper.setPositionFontSize
import org.korchagin.kmp.theme.colors.LocalAppColors

@Composable
fun RatingTable(
    selected: String,
    pupilsList: List<PupilModel>,
    mainViewModel: MainViewModel,
    modifier: Modifier = Modifier,
    onProfileClick: () -> Unit,
    listState: LazyListState,
    valueProvider: (PupilModel, String) -> Int,
    valueTitle: String
) {
    val colors = LocalAppColors.current

    Column(
        modifier = Modifier
            .fillMaxHeight()
            .widthIn(max = 900.dp)
            .padding(horizontal = 12.dp)
    ) {
        // Заголовок таблицы
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 8.dp, vertical = 12.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Box(
                modifier = Modifier.width(54.dp),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = "Место",
                    fontSize = 12.sp,
                    color = Color.White.copy(alpha = 0.65f),
                    fontWeight = FontWeight.Medium
                )
            }

            Text(
                text = "Фамилия и имя",
                modifier = Modifier
                    .weight(1f)
                    .padding(start = 12.dp),
                fontSize = 12.sp,
                color = Color.White.copy(alpha = 0.65f),
                fontWeight = FontWeight.Medium
            )

            Box(
                modifier = Modifier.width(76.dp),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = valueTitle,
                    fontSize = 12.sp,
                    color = Color.White.copy(alpha = 0.65f),
                    fontWeight = FontWeight.Medium
                )
            }
        }

        LazyColumn(
            modifier = modifier.fillMaxWidth(),
            state = listState,
            verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            itemsIndexed(
                items = pupilsList,
                key = { _, pupil -> pupil.name }
            ) { index, pupil ->

                val positionColor = setPositionColor(index)
                val fontSize = setPositionFontSize(index)
                val value = valueProvider(pupil, selected)

                val medalColor = when (index) {
                    0 -> Color(0xFFFFC107)
                    1 -> Color(0xFFB0BEC5)
                    2 -> Color(0xFFCD7F32)
                    else -> colors.mainGreen
                }

                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .clip(RoundedCornerShape(16.dp))
                        .background(Color.White.copy(alpha = 0.10f))
                        .clickable {
                            mainViewModel.setClickedPupil(pupil)
                            onProfileClick()
                        }
                        .padding(horizontal = 10.dp, vertical = 13.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    // Позиция
                    Box(
                        modifier = Modifier.width(44.dp),
                        contentAlignment = Alignment.Center
                    ) {
                        Box(
                            modifier = Modifier
                                .clip(CircleShape)
                                .background(medalColor.copy(alpha = 0.16f))
                                .padding(horizontal = 10.dp, vertical = 7.dp),
                            contentAlignment = Alignment.Center
                        ) {
                            Text(
                                text = "${index + 1}",
                                fontSize = fontSize.sp,
                                color = medalColor,
                                fontWeight = FontWeight.Bold
                            )
                        }
                    }

                    Spacer(modifier = Modifier.width(10.dp))

                    // Имя
                    Text(
                        text = pupil.name,
                        modifier = Modifier.weight(1f),
                        fontSize = 14.sp,
                        color = Color.White,
                        fontWeight = FontWeight.Medium
                    )

                    Spacer(modifier = Modifier.width(8.dp))

                    // Рейтинг / рекорд
                    Box(
                        modifier = Modifier
                            .width(68.dp)
                            .clip(RoundedCornerShape(10.dp))
                            .background(colors.mainGreen.copy(alpha = 0.18f))
                            .padding(vertical = 8.dp),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(
                            text = value.toString(),
                            fontSize = 15.sp,
                            color = colors.mainGreen,
                            fontWeight = FontWeight.Bold
                        )
                    }
                }
            }
        }
    }
}
