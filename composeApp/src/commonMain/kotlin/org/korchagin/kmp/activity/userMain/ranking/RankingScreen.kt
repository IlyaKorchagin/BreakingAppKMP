package org.korchagin.kmp.activity.userMain.ranking

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.korchagin.presentation.models.PupilModel
import com.korchagin.presentation.viewModel.MainViewModel
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI

@OptIn(KoinExperimentalAPI::class)
@Composable
fun RankingScreen(
    elements: List<String>,
    initialSelected: String,
    onProfileClick: () -> Unit,
    listState: LazyListState,
    valueProvider: (PupilModel, String) -> Int,
    valueTitle: String
) {
    val mainViewModel = koinViewModel<MainViewModel>()
    val pupilsList by mainViewModel.pupils.collectAsState(emptyList())

    var selected by remember { mutableStateOf(initialSelected) }

    val sortedPupils = remember(pupilsList, selected, valueProvider) {
        pupilsList.sortedByDescending { pupil ->
            valueProvider(pupil, selected)
        }
    }

    val maxValue = remember(sortedPupils, selected, valueProvider) {
        sortedPupils.maxOfOrNull { pupil ->
            valueProvider(pupil, selected)
        }?.coerceAtLeast(1) ?: 1
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 16.dp, vertical = 12.dp)
    ) {
        ElementSelector(
            elements = elements,
            selected = selected,
            onSelect = { selected = it }
        )

        Spacer(modifier = Modifier.height(12.dp))

        RankingTable(
            selected = selected,
            pupils = sortedPupils,
            mainViewModel = mainViewModel,
            onProfileClick = onProfileClick,
            listState = listState,
            valueProvider = valueProvider,
            valueTitle = valueTitle,
            maxValue = maxValue
        )
    }
}
