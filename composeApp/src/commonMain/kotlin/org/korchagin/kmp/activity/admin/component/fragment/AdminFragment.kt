package org.korchagin.kmp.activity.admin.component.fragment

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Text
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
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
import com.korchagin.presentation.viewModel.MainViewModel
import org.jetbrains.compose.resources.painterResource
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.activity.editUser.EditUserActivity
import org.korchagin.kmp.helper.setPositionBackgroundColor
import org.korchagin.kmp.helper.setPositionFontSize
import org.korchagin.kmp.helper.setPositionStar
import org.korchagin.kmp.theme.colors.AppColors
import org.korchagin.kmp.uiElements.CustomProgressBar
import org.korchagin.kmp.uiElements.ShimmerBrush
import team.platforma.extra_nav.component.fragment_component.Fragment
import team.platforma.extra_nav.navigator.activity.findNavHost


@OptIn(KoinExperimentalAPI::class)
object AdminFragment : Fragment(
    route = "admin_fragment",
    fragmentBox = { componentNavigator, fragmentNavigator, paddingValues ->
        val mainViewModel = koinViewModel<MainViewModel>()
        val pupilsList by mainViewModel.pupils.collectAsState(emptyList())
        val currentPupil by mainViewModel.currentPupil.collectAsState(null)

        Box(
            modifier = Modifier
                .fillMaxSize(),
            contentAlignment = Alignment.Center
        ) {
            val showShimmer = remember { mutableStateOf(true) }
            LazyColumn(
                modifier = Modifier
                    .widthIn(max = 900.dp)
            ) {
                itemsIndexed(pupilsList.filter { it.coach.contains(currentPupil!!.name) }) { index, pupil ->
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
                                findNavHost().navigateToActivity(EditUserActivity)
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
                                Brush.horizontalGradient(
                                    listOf(
                                        Color.White,
                                        AppColors.colors().progress
                                    )
                                ),
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

                    if (index < pupilsList.size - 1) {
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
}
)