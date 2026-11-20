package org.korchagin.kmp.activity.userMain.ranking

import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.runtime.Composable
import com.korchagin.presentation.models.PupilModel
import com.korchagin.presentation.viewModel.MainViewModel

@Composable
fun RankingTable(
    selected: String,
    pupils: List<PupilModel>,
    mainViewModel: MainViewModel,
    onProfileClick: () -> Unit,
    listState: LazyListState,
    valueProvider: (PupilModel, String) -> Int,
    valueTitle: String,
    maxValue: Int
) {
    if (mainViewModel.checkedState) {
        NewRatingTable(
            selected = selected,
            ratingList = pupils,
            mainViewModel = mainViewModel,
            onProfileClick = onProfileClick,
            listState = listState,
            valueProvider = valueProvider,
            maxValue = maxValue
        )
    } else {
        RatingTable(
            selected = selected,
            pupilsList = pupils,
            mainViewModel = mainViewModel,
            onProfileClick = onProfileClick,
            listState = listState,
            valueProvider = valueProvider,
            valueTitle = valueTitle
        )
    }
}
