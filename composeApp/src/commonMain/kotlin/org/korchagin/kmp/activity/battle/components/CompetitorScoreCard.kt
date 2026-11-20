package org.korchagin.kmp.activity.battle.components

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun CompetitorScoreCard(
    name: String,
    accentColor: Color,
    power: Int,
    onPowerChange: (Int) -> Unit,
    musicality: Int,
    onMusicalityChange: (Int) -> Unit,
    creativity: Int,
    onCreativityChange: (Int) -> Unit,
    modifier: Modifier = Modifier
) {

    Card(
        modifier = modifier,
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(
            containerColor = Color(0xFF17232D)
        ),
        border = BorderStroke(
            1.dp,
            accentColor.copy(alpha = 0.4f)
        )
    ) {
        Column(
            modifier = Modifier.padding(10.dp),
            verticalArrangement = Arrangement.spacedBy(2.dp)
        ) {
            Text(
                text = name,
                color = accentColor,
                fontSize = 13.sp,
                fontWeight = FontWeight.Bold
            )

            ProgressSlider(
                progress = power,
                onProgressChange = onPowerChange,
                title = "Сила",
                accentColor = accentColor
            )

            ProgressSlider(
                progress = musicality,
                onProgressChange = onMusicalityChange,
                title = "Музыкальность",
                accentColor = accentColor
            )

            ProgressSlider(
                progress = creativity,
                onProgressChange = onCreativityChange,
                title = "Оригинальность",
                accentColor = accentColor
            )

            DividerLine()

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = "ИТОГО",
                    color = Color(0xFF9EADB9),
                    fontSize = 10.sp
                )

                Text(
                    text = "${power + musicality + creativity}",
                    color = accentColor,
                    fontSize = 20.sp,
                    fontWeight = FontWeight.ExtraBold
                )
            }
        }
    }
}

@Composable
private fun DividerLine() {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .height(1.dp)
            .background(Color(0xFF35434E))
    )
}