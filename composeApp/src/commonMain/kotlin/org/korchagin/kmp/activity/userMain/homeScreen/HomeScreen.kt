package org.korchagin.kmp.activity.userMain.homeScreen

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.airflare
import breakingkmpapp.composeapp.generated.resources.baby
import breakingkmpapp.composeapp.generated.resources.footwork
import breakingkmpapp.composeapp.generated.resources.footwork_title
import breakingkmpapp.composeapp.generated.resources.freeze_title
import breakingkmpapp.composeapp.generated.resources.ofp_title
import breakingkmpapp.composeapp.generated.resources.power_move_title
import breakingkmpapp.composeapp.generated.resources.pushups
import breakingkmpapp.composeapp.generated.resources.stretch_title
import breakingkmpapp.composeapp.generated.resources.twin
import com.korchagin.presentation.models.ElementModel
import com.korchagin.presentation.models.ElementsTab
import com.korchagin.presentation.models.HomeUiState
import com.korchagin.presentation.models.ImageWithText
import com.korchagin.presentation.viewModel.MainViewModel
import kotlinx.coroutines.delay
import org.jetbrains.compose.resources.painterResource
import org.jetbrains.compose.resources.stringResource
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.activity.userMain.homeScreen.screenItems.ProfileSection
import org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager
import kotlin.time.Duration.Companion.milliseconds

@OptIn(KoinExperimentalAPI::class)
@Composable
fun HomeScreen(
    onElementClick: (ElementModel) -> Unit
) {
    val mainViewModel = koinViewModel<MainViewModel>()
    // 🔁 Вызов обновления данных
    LaunchedEffect(Unit) {
        // Небольшая задержка — даёт layout завершиться
        delay(100.milliseconds)
        mainViewModel.loadData()
    }


    val homeState by mainViewModel.homeUiState.collectAsState()

    var selectedTabIndex by remember {
        mutableIntStateOf(ElementsTab.FREEZE.ordinal)
    }
    val imageWithTexts = listOf(
        ImageWithText(
            image = painterResource(Res.drawable.baby),
            text = stringResource(Res.string.freeze_title)
        ),
        ImageWithText(
            image = painterResource(Res.drawable.airflare),
            text = stringResource(Res.string.power_move_title)
        ),
        ImageWithText(
            image = painterResource(Res.drawable.pushups),
            text = stringResource(Res.string.ofp_title)
        ),
        ImageWithText(
            image = painterResource(Res.drawable.twin),
            text = stringResource(Res.string.stretch_title),
        ),
        ImageWithText(
            image = painterResource(Res.drawable.footwork),
            text = stringResource(Res.string.footwork_title),
        )

    )

    when (val state = homeState) {

        HomeUiState.Loading -> {
            Box(
                modifier = Modifier.fillMaxSize(),
                contentAlignment = Alignment.Center
            ) {
                CircularProgressIndicator()
            }
        }

        is HomeUiState.Content -> {

            CollapsibleProfile(
                profileHeight = 150.dp,

                header = { modifier ->
                    ProfileSection(
                        curPupil = state.pupil,
                        selectedTabIndex = selectedTabIndex,
                        modifier = modifier
                    )
                },

                content = {
                    AnimatedTabWithHorizontalPager(
                        freeze = state.freezes,
                        power = state.powerMoves,
                        ofp = state.ofp,
                        stretch = state.stretch,
                        footWork = state.footWork,
                        pupil = state.pupil,
                        tabs = imageWithTexts,
                        onTabSelected = {
                            selectedTabIndex = it
                        },
                        onElementClick = onElementClick
                    )
                }
            )
        }
    }
}





