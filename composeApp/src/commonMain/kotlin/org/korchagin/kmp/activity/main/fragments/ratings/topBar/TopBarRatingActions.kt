package org.korchagin.kmp.activity.main.fragments.ratings.topBar

import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Switch
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.korchagin.presentation.viewModel.MainViewModel
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI

@OptIn(KoinExperimentalAPI::class)
@Composable
fun TopBarRatingActions() {
    val mainViewModel = koinViewModel<MainViewModel>()
    Switch(
        modifier = Modifier.padding(horizontal = 8.dp),
        checked = mainViewModel.checkedState,
        onCheckedChange = {
            mainViewModel.changeCheckedState()
        }
    )
}

