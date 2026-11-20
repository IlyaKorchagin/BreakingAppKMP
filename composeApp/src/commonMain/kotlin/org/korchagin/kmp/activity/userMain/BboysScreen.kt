package org.korchagin.kmp.activity.userMain

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.itemsIndexed
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil3.compose.AsyncImage
import com.korchagin.presentation.constants.LOCK
import com.korchagin.presentation.models.BboyModel
import com.korchagin.presentation.viewModel.MainViewModel
import kotlinx.coroutines.launch
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.theme.colors.LocalAppColors
import org.korchagin.kmp.uiElements.ShimmerBrush

@OptIn(KoinExperimentalAPI::class)
@Composable
fun BboysScreen(
    toBboyDetails: () -> Unit
) {
    val mainViewModel = koinViewModel<MainViewModel>()

    val bboysList by mainViewModel.bboysList.collectAsState(emptyList())
    val currentPupil by mainViewModel.currentPupil.collectAsState(null)

    val pupil = currentPupil ?: return
    val scope = rememberCoroutineScope()

    val colors = LocalAppColors.current

    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.TopCenter
    ) {
        LazyVerticalGrid(
            columns = GridCells.Fixed(3),
            modifier = Modifier
                .fillMaxSize()
                .widthIn(max = 900.dp),
            contentPadding = PaddingValues(
                start = 12.dp,
                end = 12.dp,
                top = 12.dp,
                bottom = 90.dp
            ),
            verticalArrangement = Arrangement.spacedBy(12.dp),
            horizontalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            itemsIndexed(bboysList) { _, bboy ->

                val isUnlocked = pupil.rating.toInt() >= bboy.rating.toInt()

                BboyCard(
                    bboy = bboy,
                    isUnlocked = isUnlocked,
                    onClick = {
                        if (isUnlocked) {
                            scope.launch {
                                mainViewModel.addBboy(bboy)
                                toBboyDetails()
                            }
                        }
                    }
                )
            }
        }
    }
}

@Composable
private fun BboyCard(
    bboy: BboyModel,
    isUnlocked: Boolean,
    onClick: () -> Unit
) {
    val colors = LocalAppColors.current

    // Отдельное состояние загрузки для каждого аватара
    val showShimmer = remember(bboy.avatar) {
        mutableStateOf(true)
    }

    val accentColor = if (isUnlocked) {
        colors.mainGreen
    } else {
        Color.White.copy(alpha = 0.25f)
    }

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(18.dp))
            .background(Color.White.copy(alpha = 0.08f))
            .border(
                width = 1.dp,
                color = accentColor.copy(alpha = 0.65f),
                shape = RoundedCornerShape(18.dp)
            )
            .clickable(
                enabled = isUnlocked,
                onClick = onClick
            )
            .padding(8.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        AsyncImage(
            model = if (isUnlocked) bboy.avatar else LOCK,
            contentDescription = bboy.name,
            modifier = Modifier
                .size(100.dp)
                .clip(CircleShape)
                .background(
                    ShimmerBrush(
                        targetValue = 1300f,
                        showShimmer = showShimmer.value
                    )
                )
                .border(
                    width = 2.dp,
                    color = accentColor,
                    shape = CircleShape
                ),
            contentScale = ContentScale.Crop,
            onSuccess = {
                showShimmer.value = false
            },
            onError = {
                showShimmer.value = false
            }
        )

        if (isUnlocked) {
            Text(
                text = bboy.name,
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(top = 10.dp),
                color = colors.textDefault,
                fontSize = 13.sp,
                fontWeight = FontWeight.SemiBold,
                textAlign = TextAlign.Center,
                softWrap = true
            )
        }
    }
}
