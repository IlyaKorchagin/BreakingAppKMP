package org.korchagin.kmp.activity.battle.components

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun BattleHeader(
    round: String,
    pairNumber: Int,
    totalPairs: Int
) {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .shadow(
                elevation = 5.dp,
                shape = RoundedCornerShape(18.dp)
            )
            .clip(RoundedCornerShape(18.dp))
            .background(Color(0xFF263746))
            .border(
                width = 2.dp,
                color = Color(0xFF182630),
                shape = RoundedCornerShape(18.dp)
            )
            .padding(horizontal = 16.dp, vertical = 12.dp)
    ) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column {
                Text(
                    text = "STREET BATTLE",
                    color = Color(0xFF54D6D0),
                    fontSize = 11.sp,
                    fontWeight = FontWeight.ExtraBold,
                    letterSpacing = 2.sp
                )

                Text(
                    text = round.uppercase(),
                    color = Color.White,
                    fontSize = 23.sp,
                    fontWeight = FontWeight.Black
                )
            }

            Column(
                horizontalAlignment = Alignment.End
            ) {
                Text(
                    text = "BATTLE",
                    color = Color(0xFFFFD84D),
                    fontSize = 10.sp,
                    fontWeight = FontWeight.ExtraBold
                )

                Text(
                    text = "$pairNumber / $totalPairs",
                    color = Color.White,
                    fontSize = 21.sp,
                    fontWeight = FontWeight.Black
                )
            }
        }
    }
}