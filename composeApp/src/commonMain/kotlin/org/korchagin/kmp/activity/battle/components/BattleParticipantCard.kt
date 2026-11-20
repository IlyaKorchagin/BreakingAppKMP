package org.korchagin.kmp.activity.battle.components

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil3.compose.AsyncImage
import com.korchagin.presentation.models.battle.EventParticipants
import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.people
import org.jetbrains.compose.resources.painterResource

@Composable
fun BattleParticipantCard(
    participant: EventParticipants,
    accentColor: Color,
    modifier: Modifier = Modifier
) {
    val cardShape = RoundedCornerShape(22.dp)

    Column(
        modifier = modifier
            .shadow(
                elevation = 5.dp,
                shape = cardShape
            )
            .clip(cardShape)
            .background(Color.White)
            .border(
                width = 2.dp,
                color = accentColor,
                shape = cardShape
            )
            .padding(horizontal = 8.dp, vertical = 12.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Spacer(Modifier.height(12.dp))

        // Мультяшная рамка с реальным аватаром
        Box(
            modifier = Modifier
                .size(96.dp)
                .shadow(4.dp, CircleShape)
                .clip(CircleShape)
                .background(accentColor)
                .border(4.dp, Color.White, CircleShape)
                .padding(5.dp)
                .clip(CircleShape)
                .background(Color(0xFFE8EAED)),
            contentAlignment = Alignment.Center
        ) {
            if (participant.avatar.isNotBlank()) {
                AsyncImage(
                    model = participant.avatar,
                    contentDescription = participant.name,
                    modifier = Modifier.fillMaxWidth(),
                    contentScale = ContentScale.Crop
                )
            } else {
                Image(
                    painter = painterResource(Res.drawable.people),
                    contentDescription = participant.name,
                    modifier = Modifier.size(54.dp),
                    contentScale = ContentScale.Crop
                )
            }
        }

        Spacer(Modifier.height(12.dp))

        Text(
            text = participant.name,
            color = Color(0xFF263746),
            fontSize = 15.sp,
            fontWeight = FontWeight.Black,
            textAlign = TextAlign.Center,
            maxLines = 2,
            minLines = 1
        )
    }
}