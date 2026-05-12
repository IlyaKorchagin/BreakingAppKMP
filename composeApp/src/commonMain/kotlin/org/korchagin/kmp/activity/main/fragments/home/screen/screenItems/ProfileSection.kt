package org.korchagin.kmp.activity.main.fragments.home.screen.screenItems

import androidx.compose.animation.core.LinearEasing
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.infiniteRepeatable
import androidx.compose.animation.core.rememberInfiniteTransition
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.drawBehind
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.drawscope.rotate
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp
import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.people
import coil3.compose.AsyncImage
import com.korchagin.presentation.models.PupilModel
import com.korchagin.presentation.viewModel.MainViewModel
import org.jetbrains.compose.resources.painterResource
import org.korchagin.kmp.helper.setAvatarBorder
import org.korchagin.kmp.theme.colors.AppColors
import org.korchagin.kmp.uiElements.ShimmerBrush


@Composable
fun ProfileSection(curPupil: PupilModel, viewModel: MainViewModel, selectedTabIndex: Int) {
    val infiniteTransition = rememberInfiniteTransition()
    val rotationValue = infiniteTransition.animateFloat(
        initialValue = 0f,
        targetValue = 360f,
        animationSpec = infiniteRepeatable(
            tween(2000, easing = LinearEasing)
        )
    )
    val showShimmer = remember { mutableStateOf(true) }
    Column(modifier = Modifier.fillMaxWidth()) {
        Row(
         //   verticalAlignment = Alignment.CenterVertically,
            modifier = Modifier
                .fillMaxWidth()
                .padding(10.dp)
        ) {
            val avatarBorderColor = setAvatarBorder(curPupil)
            Column(verticalArrangement = Arrangement.Center) {
                //  ImageBorderAnimation(curPupil = curPupil, viewModel = viewModel)
                if (curPupil.avatar.isEmpty()) {
                    Image(
                        painter = painterResource(Res.drawable.people),
                        contentDescription = null,
                        contentScale = ContentScale.Crop,
                        modifier = Modifier.width(64.dp).aspectRatio(1.0f)
                            .clip(CircleShape)
                            .border(3.dp, Color.Gray, CircleShape)
                    )
                } else {
                    AsyncImage(
                        model = curPupil.avatar,
                        contentDescription = null,
                        contentScale = ContentScale.Crop,
                        modifier = Modifier.width(64.dp).aspectRatio(1.0f)
                            .clip(CircleShape)
                            .drawBehind {
                                rotate(rotationValue.value) {
                                    drawCircle(
                                        Brush.horizontalGradient(
                                            avatarBorderColor
                                        ), style = Stroke(10f)
                                    )
                                }
                            }
                            .border(1.dp, AppColors.colors().silver, CircleShape)
                            .background(
                                ShimmerBrush(
                                    targetValue = 1300f,
                                    showShimmer = showShimmer.value
                                )
                            ),
                        onSuccess = { showShimmer.value = false }
                    )
                }
                /* Text(
                     modifier = Modifier
                         .align(Alignment.CenterHorizontally)
                         .padding(vertical = 5.dp),
                     text = "Изменить аватар",
                     fontFamily = FontFamily.Serif,
                     color = Color.Gray,
                     style = TextStyle(
                         textAlign = TextAlign.Center,
                         fontSize = 10.sp,
                         fontWeight = FontWeight.Bold
                     ),
                     textDecoration = TextDecoration.Underline,
                 )*/
            }

            Spacer(modifier = Modifier.width(8.dp))

            InfoSection(curPupil = curPupil, selectedTabIndex)
        }
    }
}