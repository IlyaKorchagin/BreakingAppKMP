package org.korchagin.kmp.activity.userMain.ranking

import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.runtime.Composable
import com.korchagin.presentation.constants.RATING
import com.korchagin.presentation.models.getProgress

@Composable
fun RatingsScreen(
    onProfileClick: () -> Unit,
    listState: LazyListState
) {
    RankingScreen(
        elements = RATING_ELEMENTS,
        initialSelected = RATING,
        onProfileClick = onProfileClick,
        listState = listState,
        valueTitle = "Рейтинг",
        valueProvider = { pupil, element ->
            pupil.getProgress(element).toInt()
        }
    )
}
