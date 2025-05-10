package org.korchagin.kmp.activity.main.frafments.home.screen

import androidx.compose.animation.animateContentSize
import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.drawWithCache
import androidx.compose.ui.graphics.BlendMode
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.compose_multiplatform
import coil3.compose.AsyncImage
import com.korchagin.presentation.models.PupilModel
import com.korchagin.presentation.viewModel.MainViewModel
import org.jetbrains.compose.resources.painterResource
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import team.platforma.extra_nav.navigator.component.api.ComponentNavigator

@OptIn(KoinExperimentalAPI::class)
@Composable
fun HomeScreen(componentNavigator: ComponentNavigator) {
    val mainViewModel = koinViewModel<MainViewModel>()
    val currentPupil by mainViewModel.currentPupil.collectAsState(null)
    val users:List<PupilModel> = currentPupil?.let { listOf(it) } ?: emptyList()
    var selectedTabIndex by remember {
        mutableIntStateOf(ElementsTab.FREEZE.ordinal)
    }
    LazyColumn {
        itemsIndexed(users) { index, user ->
            ProfileSection(user, mainViewModel, selectedTabIndex)
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(16.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                println("avatar: ${users[index].avatar}")
                if (users[index].avatar.isEmpty()) {
                    Image(
                        painter = painterResource(Res.drawable.compose_multiplatform),
                        contentDescription = null,
                        modifier = Modifier.width(64.dp).aspectRatio(1.0f)
                    )
                } else {
                    AsyncImage(
                        model = users[index].avatar,
                        contentDescription = null,
                        modifier = Modifier.width(64.dp).aspectRatio(1.0f)
                    )
                }
                Text(text = users[index].name)
                Spacer(modifier = Modifier.width(16.dp))
                Text(text = "Рейтинг: ${users[index].rating}")
            }
        }
    }
}

@Composable
fun ProfileSection(curPupil: PupilModel, viewModel: MainViewModel, selectedTabIndex: Int) {

    Column(modifier = Modifier.fillMaxWidth()) {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            modifier = Modifier
                .fillMaxWidth()
                .padding(10.dp)
        ) {
            Column(verticalArrangement = Arrangement.Center) {
              //  ImageBorderAnimation(curPupil = curPupil, viewModel = viewModel)
                if (curPupil.avatar.isEmpty()) {
                    Image(
                        painter = painterResource(Res.drawable.compose_multiplatform),
                        contentDescription = null,
                        modifier = Modifier.width(64.dp).aspectRatio(1.0f)
                    )
                } else {
                    AsyncImage(
                        model = curPupil.avatar,
                        contentDescription = null,
                        modifier = Modifier.width(64.dp).aspectRatio(1.0f)
                    )
                }
                Text(
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
                )
            }

            Spacer(modifier = Modifier.width(4.dp))

            InfoSection(curPupil = curPupil, selectedTabIndex)
        }
    }
}

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
                                    Color.DarkGray,
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
        CustomProgressBar1(progress = rating.toFloat())
    }
}

@Composable
fun CustomProgressBar1(progress: Float) {
    val animatedProgress = remember { Animatable(0f) }

    LaunchedEffect(key1 = progress) {
        animatedProgress.animateTo(progress, animationSpec = tween(durationMillis = 1500))
    }
    Column(
        modifier = Modifier
            .padding(vertical = 4.dp)
            .border(
                width = 1.dp,
                color = Color.Gray,
                shape = RoundedCornerShape(15.dp)
            )
            .fillMaxWidth(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Box(
            modifier = Modifier
                .clip(RoundedCornerShape(15.dp))
                .height(30.dp)
                .background(Color.White)
                .width(300.dp)
        ) {
            Box(
                modifier = Modifier
                    .clip(RoundedCornerShape(15.dp))
                    .height(30.dp)
                    .background(
                        Brush.horizontalGradient(listOf(Color.White, Color.Green))
                    )
                    .fillMaxWidth(animatedProgress.value / 100f)
            )
            Text(
                text = "$progress %",
                modifier = Modifier.align(Alignment.Center),
                fontSize = 15.sp,
                fontWeight = FontWeight.Bold,
                color = Color.Black
            )
        }

    }
}

fun setLevel(rating: Int): String {
    return when (rating) {
        in 0..9 -> "Уровень - 0"
        in 10..19 -> "Уровень - 1"
        in 20..29 -> "Уровень - 2"
        in 30..39 -> "Уровень - 3"
        in 40..49 -> "Уровень - 4"
        in 50..59 -> "Уровень - 5"
        in 60..69 -> "Уровень - 6"
        in 70..79 -> "Уровень - 7"
        in 80..89 -> "Уровень - 8"
        in 90..99 -> "Уровень - 9"
        else -> "Уровень - 10"
    }
}

enum class ElementsTab {
    FREEZE, POWER, OFP, STRETCH
}


