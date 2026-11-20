package org.korchagin.kmp.activity.userMain.ranking

import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.runtime.Composable
import com.korchagin.presentation.constants.WINDMILL
import com.korchagin.presentation.models.getRecord

@Composable
fun RecordsScreen(
    onProfileClick: () -> Unit,
    listState: LazyListState
) {
    RankingScreen(
        elements = RECORD_ELEMENTS,
        initialSelected = WINDMILL,
        onProfileClick = onProfileClick,
        listState = listState,
        valueTitle = "Рекорд",
        valueProvider = { pupil, element ->
            pupil.getRecord(element)
        }
    )
}
