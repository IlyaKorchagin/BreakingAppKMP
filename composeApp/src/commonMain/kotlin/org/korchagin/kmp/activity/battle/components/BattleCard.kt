package org.korchagin.kmp.activity.battle.components

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.korchagin.presentation.models.battle.EventParticipants

@Composable
fun BattleCard(
    leftParticipant: EventParticipants,
    rightParticipant: EventParticipants,
    leftScore: Int,
    rightScore: Int,
    roundTitle: String,
    status: String,
    modifier: Modifier = Modifier,
    onClick: () -> Unit = {}
) {
    val cardShape = RoundedCornerShape(28.dp)

    val dark = Color(0xFF25313D)
    val teal = Color(0xFF01A2A6)
    val orange = Color(0xFFFF7545)
    val yellow = Color(0xFFFFD84D)

    Card(
        modifier = modifier
            .fillMaxWidth()
            .shadow(
                elevation = 7.dp,
                shape = cardShape,
                ambientColor = dark.copy(alpha = 0.15f),
                spotColor = dark.copy(alpha = 0.2f)
            )
            .clip(cardShape)
            .background(
                Brush.linearGradient(
                    colors = listOf(
                        Color(0xFFFFFFFF),
                        Color(0xFFF0F1F3),
                        Color(0xFFE5E8EB)
                    )
                )
            )
            .border(
                width = 2.dp,
                color = dark,
                shape = cardShape
            )
            .clickable(onClick = onClick),
        shape = cardShape,
        colors = CardDefaults.cardColors(
            containerColor = Color.Transparent
        ),
        elevation = CardDefaults.cardElevation(
            defaultElevation = 0.dp
        )
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {

            // Верхняя плашка
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                BattleLabel(
                    text = roundTitle.uppercase(),
                    background = dark,
                    textColor = Color.White
                )

                BattleLabel(
                    text = status.uppercase(),
                    background = yellow,
                    textColor = dark
                )
            }

            Spacer(Modifier.height(22.dp))

            // Участники и VS
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically
            ) {
                BattleParticipantCard(
                    participant = leftParticipant,
                    accentColor = teal,
                    modifier = Modifier.weight(1f)
                )

                Box(
                    modifier = Modifier
                        .padding(horizontal = 5.dp)
                        .size(58.dp)
                        .shadow(
                            elevation = 5.dp,
                            shape = CircleShape
                        )
                        .background(yellow, CircleShape)
                        .border(
                            width = 3.dp,
                            color = dark,
                            shape = CircleShape
                        ),
                    contentAlignment = Alignment.Center
                ) {
                    Text(
                        text = "VS",
                        color = dark,
                        fontSize = 19.sp,
                        fontWeight = FontWeight.Black
                    )
                }

                BattleParticipantCard(
                    participant = rightParticipant,
                    accentColor = orange,
                    modifier = Modifier.weight(1f)
                )
            }

            Spacer(Modifier.height(20.dp))

            // Счёт
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(18.dp))
                    .background(dark)
                    .padding(vertical = 12.dp, horizontal = 20.dp),
                horizontalArrangement = Arrangement.Center,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = leftScore.toString(),
                    color = teal,
                    fontSize = 30.sp,
                    fontWeight = FontWeight.Black
                )

                Text(
                    text = "  :  ",
                    color = Color.White,
                    fontSize = 25.sp,
                    fontWeight = FontWeight.Bold
                )

                Text(
                    text = rightScore.toString(),
                    color = orange,
                    fontSize = 30.sp,
                    fontWeight = FontWeight.Black
                )
            }

            Spacer(Modifier.height(14.dp))

            // Нижняя декоративная плашка
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.Center,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = "⚡",
                    fontSize = 20.sp
                )

                Spacer(Modifier.width(8.dp))

                Text(
                    text = "LET'S BATTLE!",
                    color = dark,
                    fontSize = 14.sp,
                    fontWeight = FontWeight.Black,
                    letterSpacing = 2.sp
                )

                Spacer(Modifier.width(8.dp))

                Text(
                    text = "★",
                    color = orange,
                    fontSize = 20.sp
                )
            }
        }
    }
}

@Composable
private fun BattleLabel(
    text: String,
    background: Color,
    textColor: Color
) {
    Box(
        modifier = Modifier
            .clip(RoundedCornerShape(10.dp))
            .background(background)
            .border(
                width = 1.5.dp,
                color = Color(0xFF25313D),
                shape = RoundedCornerShape(10.dp)
            )
            .padding(
                horizontal = 12.dp,
                vertical = 7.dp
            ),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = text,
            color = textColor,
            fontSize = 10.sp,
            fontWeight = FontWeight.Black,
            letterSpacing = 1.sp
        )
    }
}