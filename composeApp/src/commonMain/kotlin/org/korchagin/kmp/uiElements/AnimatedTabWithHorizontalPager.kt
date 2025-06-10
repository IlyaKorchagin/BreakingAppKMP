package org.korchagin.kmp.uiElements

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.Spring
import androidx.compose.animation.core.spring
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.Tab
import androidx.compose.material3.TabRow
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.unit.dp
import com.korchagin.presentation.models.ElementModel
import com.korchagin.presentation.models.Elements
import com.korchagin.presentation.models.ElementsTab
import com.korchagin.presentation.models.ImageWithText
import com.korchagin.presentation.models.PupilModel
import com.korchagin.presentation.models.setProgress
import com.korchagin.presentation.viewModel.MainViewModel
import kotlinx.coroutines.launch
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.activity.main.fragments.home.screen.screenItems.PostSection
import org.korchagin.kmp.helper.setElementImage

@OptIn(ExperimentalFoundationApi::class, KoinExperimentalAPI::class)
@Composable
fun AnimatedTabWithHorizontalPager(
    tabs: List<ImageWithText>,
    onTabSelected: (Int) -> Unit,
    freeze:List<ElementModel>,
    power: List<ElementModel>,
    ofp: List<ElementModel>,
    stretch: List<ElementModel>,
    pupil: PupilModel
) {
    val mainViewModel = koinViewModel<MainViewModel>()
    val pagerState = rememberPagerState(initialPage = mainViewModel.elementTabPosition) {
        tabs.size
    }
    val scope = rememberCoroutineScope()

    TabRow(
        selectedTabIndex = pagerState.currentPage,
    ) {
        tabs.forEachIndexed { index, tab ->
            val selected = index == pagerState.currentPage
            val scale = remember { Animatable(1f) }

            LaunchedEffect(selected) {
                onTabSelected(pagerState.currentPage)
                mainViewModel.elementTabPosition = pagerState.currentPage
                if (selected) {
                    scale.animateTo(1.9f, animationSpec = spring())
                } else {
                    scale.animateTo(1.2f, animationSpec = spring())
                }
            }
            Tab(
                modifier = Modifier
                    .background(Color.White),
                selected = selected,
                onClick = {
                    scope.launch {
                        mainViewModel.elementTabPosition = index
                        onTabSelected(index)
                        pagerState.animateScrollToPage(
                            index,
                            animationSpec = spring(stiffness = Spring.StiffnessLow)
                        )
                    }
                }
            ) {
                Column(
                    modifier = Modifier.padding(4.dp),
                    horizontalAlignment = Alignment.CenterHorizontally

                ) {
                    RoundImage(
                        image = tab.image,
                        modifier = Modifier
                            .size(30.dp)
                            .padding(vertical = 5.dp)
                            .graphicsLayer(scaleX = scale.value, scaleY = scale.value)
                            .border(
                                width = 1.dp,
                                color = if (selected) Color.Black else Color.LightGray,
                                shape = CircleShape
                            )
                    )
                    Text(
                        text = tab.text,
                        color = if (selected)
                            Color.Black
                        else Color.LightGray
                    )
                }
            }
        }
    }

    HorizontalPager(state = pagerState) { page ->
        AnimatedVisibility(
            visible = pagerState.currentPage == page,
            enter = fadeIn(animationSpec = tween(durationMillis = 1200)),
            exit = fadeOut(animationSpec = tween(durationMillis = 1200))
        ) {
            Box(
                contentAlignment = Alignment.Center,
                modifier = Modifier
                    .fillMaxSize()
            ) {
                when (page) {
                    ElementsTab.FREEZE.ordinal -> {
                        val posts: MutableList<Elements> =
                            emptyList<Elements>().toMutableList()

                        freeze.forEach {
                            posts.add(
                                Elements(
                                    icon =
                                        setElementImage(
                                            elementTitle = it.title,
                                            currentPupil = pupil,
                                            info = it
                                        ),
                                    title = it.title,
                                    block_description = it.blockDescription,
                                    progress =
                                        pupil.setProgress(it.title)

                                )
                            )
                        }
                        PostSection(
                            posts = posts,
                            stateElement = freeze,
                          //  navController = navController,
                            modifier = Modifier.fillMaxWidth(),
                            pupil = pupil
                        )
                    }


                    ElementsTab.POWER.ordinal -> {
                        val posts: MutableList<Elements> =
                            emptyList<Elements>().toMutableList()

                        power.forEach {
                            posts.add(
                                Elements(
                                    icon =
                                        setElementImage(
                                            elementTitle = it.title,
                                            currentPupil = pupil,
                                            info = it
                                        ),
                                    title = it.title,
                                    block_description = it.blockDescription,
                                    progress = pupil.setProgress(it.title)
                                )
                            )
                        }
                        PostSection(
                            posts = posts,
                            stateElement = power,
                           // navController = navController,
                            modifier = Modifier.fillMaxWidth(),
                            pupil = pupil
                        )
                    }

                    ElementsTab.OFP.ordinal -> {
                        val posts: MutableList<Elements> =
                            emptyList<Elements>().toMutableList()

                       ofp.forEach {
                            posts.add(
                                Elements(
                                    icon = setElementImage(
                                        elementTitle = it.title,
                                        currentPupil = pupil,
                                        info = it
                                    ),
                                    title = it.title,
                                    block_description = it.blockDescription,
                                    progress = pupil.setProgress(it.title)
                                )
                            )
                        }

                        PostSection(
                            posts = posts,
                            stateElement = ofp,
                           // navController = navController,
                            modifier = Modifier.fillMaxWidth(),
                            pupil = pupil
                        )
                    }

                    ElementsTab.STRETCH.ordinal -> {
                        val posts: MutableList<Elements> =
                            emptyList<Elements>().toMutableList()

                        stretch.forEach {
                            posts.add(
                                Elements(
                                    icon = setElementImage(
                                        elementTitle = it.title,
                                        currentPupil = pupil,
                                        info = it
                                    ),
                                    title = it.title,
                                    block_description = it.blockDescription,
                                    progress = pupil.setProgress(it.title)
                                )
                            )
                        }
                        PostSection(
                            posts = posts,
                            stateElement = stretch,
                           // navController = navController,
                            modifier = Modifier.fillMaxWidth(),
                            pupil = pupil
                        )
                    }
                }
            }
        }
    }
}