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
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.sp
import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.ratings_freeze_title
import breakingkmpapp.composeapp.generated.resources.ratings_ofp_title
import breakingkmpapp.composeapp.generated.resources.ratings_power_title
import breakingkmpapp.composeapp.generated.resources.ratings_stretch_title
import com.korchagin.presentation.models.ElementsTab
import com.korchagin.presentation.models.PupilModel
import org.jetbrains.compose.resources.stringResource
import org.korchagin.kmp.helper.setLevel
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
            /*modifier = Modifier
                .graphicsLayer(alpha = 0.8f)
                .drawWithCache {
                    onDrawWithContent {
                        drawContent()
                        drawRect(
                            Brush.horizontalGradient(
                                listOf(
                                    AppColors.colors().default,
                                    if (theme.isDark()) Color.White else Color.Black)
                                )
                            ), blendMode = BlendMode.SrcAtop
                        )
                    }
                }*/
        )
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
                text = stringResource(Res.string.ratings_freeze_title)
                rating = curPupil.freezeRating.toInt()
            }

            ElementsTab.POWER.ordinal -> {
                text =  stringResource(Res.string.ratings_power_title)
                rating = curPupil.powermoveRating.toInt()
            }

            ElementsTab.OFP.ordinal -> {
                text =  stringResource(Res.string.ratings_ofp_title)
                rating = curPupil.ofpRating.toInt()
            }

            ElementsTab.STRETCH.ordinal -> {
                text =  stringResource(Res.string.ratings_stretch_title)
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

