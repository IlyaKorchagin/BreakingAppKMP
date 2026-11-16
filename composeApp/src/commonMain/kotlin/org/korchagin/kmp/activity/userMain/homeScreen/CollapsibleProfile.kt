package org.korchagin.kmp.activity.userMain.homeScreen

import androidx.compose.animation.core.Spring
import androidx.compose.animation.core.animate
import androidx.compose.animation.core.spring
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.widthIn
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clipToBounds
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.input.nestedscroll.NestedScrollConnection
import androidx.compose.ui.input.nestedscroll.NestedScrollSource
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.unit.Velocity
import androidx.compose.ui.unit.dp
import kotlin.math.roundToInt

@Composable
fun CollapsibleProfile(
    profileHeight: Dp = 150.dp,
    modifier: Modifier = Modifier,
    header: @Composable (Modifier) -> Unit,
    content: @Composable () -> Unit
) {
    val density = LocalDensity.current

    val profileHeightPx = with(density) {
        profileHeight.toPx()
    }

    var profileOffsetPx by remember {
        mutableFloatStateOf(0f)
    }

    val nestedScrollConnection = remember(profileHeightPx) {
        object : NestedScrollConnection {

            // Сворачивание при прокрутке вверх
            override fun onPreScroll(
                available: Offset,
                source: NestedScrollSource
            ): Offset {
                val delta = available.y

                if (delta >= 0f) return Offset.Zero

                val previousOffset = profileOffsetPx

                profileOffsetPx = (previousOffset + delta)
                    .coerceIn(-profileHeightPx, 0f)

                return Offset(
                    x = 0f,
                    y = profileOffsetPx - previousOffset
                )
            }

            // Раскрытие после достижения начала списка
            override fun onPostScroll(
                consumed: Offset,
                available: Offset,
                source: NestedScrollSource
            ): Offset {
                val delta = available.y

                if (delta <= 0f) return Offset.Zero

                val previousOffset = profileOffsetPx

                profileOffsetPx = (previousOffset + delta)
                    .coerceIn(-profileHeightPx, 0f)

                return Offset(
                    x = 0f,
                    y = profileOffsetPx - previousOffset
                )
            }

            // Анимация при отпускании после движения вверх
            override suspend fun onPreFling(
                available: Velocity
            ): Velocity {
                if (available.y >= 0f ||
                    profileOffsetPx == 0f ||
                    profileOffsetPx <= -profileHeightPx
                ) {
                    return Velocity.Zero
                }

                val target = if (
                    available.y < -100f ||
                    profileOffsetPx < -profileHeightPx / 2f
                ) {
                    -profileHeightPx
                } else {
                    0f
                }

                animate(
                    initialValue = profileOffsetPx,
                    targetValue = target,
                    animationSpec = spring(
                        dampingRatio = Spring.DampingRatioNoBouncy,
                        stiffness = Spring.StiffnessMedium
                    )
                ) { value, _ ->
                    profileOffsetPx = value
                }

                return available
            }

            // Анимация раскрытия после прокрутки списка вниз
            override suspend fun onPostFling(
                consumed: Velocity,
                available: Velocity
            ): Velocity {
                if (available.y <= 0f ||
                    profileOffsetPx == 0f ||
                    profileOffsetPx <= -profileHeightPx
                ) {
                    return Velocity.Zero
                }

                animate(
                    initialValue = profileOffsetPx,
                    targetValue = 0f,
                    animationSpec = spring(
                        dampingRatio = Spring.DampingRatioNoBouncy,
                        stiffness = Spring.StiffnessMedium
                    )
                ) { value, _ ->
                    profileOffsetPx = value
                }

                return available
            }
        }
    }

    Box(
        modifier = modifier.fillMaxSize(),
        contentAlignment = Alignment.TopCenter
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .widthIn(max = 900.dp)
                .nestedScroll(nestedScrollConnection)
        ) {
            // Контейнер профиля с изменяемой высотой
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(
                        with(density) {
                            (profileHeightPx + profileOffsetPx)
                                .coerceAtLeast(0f)
                                .toDp()
                        }
                    )
                    .clipToBounds()
            ) {
                header(
                    Modifier
                        .fillMaxWidth()
                        .height(profileHeight)
                        .offset {
                            IntOffset(
                                x = 0,
                                y = profileOffsetPx.roundToInt()
                            )
                        }
                )
            }

            // Основной контент
            content()
        }
    }
}
