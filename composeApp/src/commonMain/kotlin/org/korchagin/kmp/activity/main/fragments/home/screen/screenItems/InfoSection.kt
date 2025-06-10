package org.korchagin.kmp.activity.main.fragments.home.screen.screenItems

import androidx.compose.animation.animateContentSize
import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.tween
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.drawWithCache
import androidx.compose.ui.graphics.BlendMode
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.sp
import com.korchagin.presentation.models.PupilModel
import com.korchagin.presentation.models.ElementsTab
import org.korchagin.kmp.helper.setLevel
import org.korchagin.kmp.theme.colors.AppColors
import org.korchagin.kmp.uiElements.RatingProgreesBar

@Composable
fun InfoSection(
    curPupil: PupilModel,
    selectedElementsTab: Int,
    modifier: Modifier = Modifier
) {
    var text = ""
    var rating = 0

    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.SpaceAround,
        modifier = modifier
    ) {
        Text(curPupil.name,
            style = TextStyle(
                textAlign = TextAlign.Center,
                fontSize = 20.sp,
                fontWeight = FontWeight.Bold
            ),
            modifier = Modifier
                .graphicsLayer(alpha = 0.8f)
                .drawWithCache {
                    onDrawWithContent {
                        drawContent()
                        drawRect(
                            Brush.horizontalGradient(
                                listOf(
                                    AppColors.colors().default,
                                    Color.Black
                                )
                            ), blendMode = BlendMode.SrcAtop
                        )
                    }
                })
        /*  Text(
              setStatus(curPupil.status),
              style = TextStyle(
                  textAlign = TextAlign.Center,
                  fontSize = 14.sp,
                  fontWeight = FontWeight.Bold
              )
          )*/
        Text(
            setLevel(curPupil.rating.toInt()),
            style = TextStyle(
                textAlign = TextAlign.Center,
                fontSize = 16.sp,
                fontWeight = FontWeight.Bold
            )
        )

        when (selectedElementsTab) {
            ElementsTab.FREEZE.ordinal -> {
                text = "Рейтинг по фризам: "
                rating = curPupil.freezeRating.toInt()
            }

            ElementsTab.POWER.ordinal -> {
                text = "Рейтинг по PowerMoves: "
                rating = curPupil.powermoveRating.toInt()
            }

            ElementsTab.OFP.ordinal -> {
                text = "Рейтинг по ОФП: "
                rating = curPupil.ofpRating.toInt()
            }

            ElementsTab.STRETCH.ordinal -> {
                text = "Рейтинг по растяжке: "
                rating = curPupil.strechingRating.toInt()
            }
        }

        Text(
            modifier = Modifier.animateContentSize(
                animationSpec = tween(400, easing = FastOutSlowInEasing),
            ),
            text = text,
            style = TextStyle(
                textAlign = TextAlign.Center,
                fontSize = 14.sp,
                fontWeight = FontWeight.Bold
            )
        )
        RatingProgreesBar(progress = rating.toFloat())
    }
}

