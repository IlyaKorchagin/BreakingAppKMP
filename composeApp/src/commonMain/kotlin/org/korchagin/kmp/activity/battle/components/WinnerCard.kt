package org.korchagin.kmp.activity.battle.components

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.togetherWith
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun WinnerCard(
    winnerName: String,
    leftScore: Int,
    rightScore: Int
) {
    val isDraw = leftScore == rightScore

    val winnerColor = when {
        isDraw -> Color(0xFFFFD84D)
        leftScore > rightScore -> Color(0xFF3299F2)
        else -> Color(0xFFFF654F)
    }

    Box(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(18.dp))
            .background(Color.White)
            .border(
                width = 2.dp,
                color = winnerColor,
                shape = RoundedCornerShape(18.dp)
            )
            .padding(12.dp)
    ) {
        Column(
            modifier = Modifier.fillMaxWidth(),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(6.dp)
        ) {
            Text(
                text = if (isDraw) "⚡ DRAW ⚡" else "🏆 WINNER 🏆",
                color = winnerColor,
                fontSize = 13.sp,
                fontWeight = FontWeight.Black,
                letterSpacing = 2.sp
            )

            AnimatedContent(
                targetState = winnerName,
                transitionSpec = {
                    fadeIn() togetherWith fadeOut()
                },
                label = "winner_animation"
            ) { name ->
                Text(
                    text = name,
                    color = Color(0xFF263746),
                    fontSize = 21.sp,
                    fontWeight = FontWeight.Black,
                    textAlign = TextAlign.Center
                )
            }

        }
    }
}