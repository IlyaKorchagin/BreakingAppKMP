package org.korchagin.kmp.activity.main.fragments.home.screen

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.widthIn
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.runtime.snapshotFlow
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.airflare
import breakingkmpapp.composeapp.generated.resources.baby
import breakingkmpapp.composeapp.generated.resources.freeze_title
import breakingkmpapp.composeapp.generated.resources.ofp_title
import breakingkmpapp.composeapp.generated.resources.power_move_title
import breakingkmpapp.composeapp.generated.resources.pushups
import breakingkmpapp.composeapp.generated.resources.stretch_title
import breakingkmpapp.composeapp.generated.resources.twin
import com.korchagin.presentation.models.ElementsTab
import com.korchagin.presentation.models.ImageWithText
import com.korchagin.presentation.viewModel.MainViewModel
import org.jetbrains.compose.resources.painterResource
import org.jetbrains.compose.resources.stringResource
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.activity.main.fragments.home.screen.screenItems.ProfileSection
import org.korchagin.kmp.uiElements.AnimatedTabWithHorizontalPager
import team.platforma.extra_nav.navigator.component.api.ComponentNavigator

@OptIn(KoinExperimentalAPI::class)
@Composable
fun HomeScreen(componentNavigator: ComponentNavigator) {
    val mainViewModel = koinViewModel<MainViewModel>()
    // 🔁 Вызов обновления данных
    LaunchedEffect(Unit) {
        // Небольшая задержка — даёт layout завершиться
        kotlinx.coroutines.delay(100)
        mainViewModel.loadData()
    }
    val currentPupil by mainViewModel.currentPupil.collectAsState(null)
    val freezeElements by mainViewModel.freezeElements.collectAsState(null)
    val powerElements by mainViewModel.powerElements.collectAsState(null)
    val ofpElements by mainViewModel.ofpElements.collectAsState(null)
    val stretchElements by mainViewModel.stretchElements.collectAsState(null)
    val pupil = currentPupil ?: return
    val freezes = freezeElements ?: return
    val powerMoves = powerElements ?: return
    val ofp = ofpElements ?: return
    val stretch = stretchElements ?: return
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
            text = stringResource(
                Res.string.stretch_title
            ),
        )
    )
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.TopCenter // Центрируем по ширине
    ) {
        Column(
            modifier = Modifier
                .widthIn(max = 900.dp) // Ограничиваем максимальную ширину
        ) {

            ProfileSection(
                pupil,
                mainViewModel,
                selectedTabIndex
            )

            AnimatedTabWithHorizontalPager(
                freeze = freezes,
                power = powerMoves,
                ofp = ofp,
                stretch = stretch,
                pupil = pupil,
                //   navController = navController,
                tabs = imageWithTexts,
                onTabSelected = { selectedTabIndex = it },
            )
        }
    }
}





