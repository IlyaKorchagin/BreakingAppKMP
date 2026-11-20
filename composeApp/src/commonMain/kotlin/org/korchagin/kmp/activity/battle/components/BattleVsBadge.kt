package org.korchagin.kmp.activity.battle.components

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
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
fun BattleVsBadge() {
    Box(
        modifier = Modifier
            .size(46.dp)
            .shadow(4.dp, CircleShape)
            .clip(CircleShape)
            .background(Color(0xFFFFD84D))
            .border(3.dp, Color(0xFF263746), CircleShape),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = "VS",
            color = Color(0xFF263746),
            fontSize = 17.sp,
            fontWeight = FontWeight.Black
        )
    }
}