package org.korchagin.kmp.activity.battle.components

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp
import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.people
import coil3.compose.AsyncImage
import org.jetbrains.compose.resources.painterResource

@Composable
private fun BattleAvatar(
    avatar: String,
    name: String,
    accentColor: Color,
    modifier: Modifier = Modifier
) {
    var imageLoaded by remember(avatar) {
        mutableStateOf(false)
    }

    var imageError by remember(avatar) {
        mutableStateOf(false)
    }

    Box(
        modifier = modifier
            .size(100.dp)
            .shadow(
                elevation = 5.dp,
                shape = RoundedCornerShape(26.dp)
            )
            .clip(RoundedCornerShape(26.dp))
            .background(accentColor)
            .border(
                width = 3.dp,
                color = Color(0xFF25313D),
                shape = RoundedCornerShape(26.dp)
            )
            .padding(6.dp),
        contentAlignment = Alignment.Center
    ) {
        Box(
            modifier = Modifier
                .fillMaxSize()
                .clip(RoundedCornerShape(20.dp))
                .background(Color.White)
        ) {
            if (avatar.isNotBlank() && !imageError) {
                AsyncImage(
                    model = avatar,
                    contentDescription = name,
                    modifier = Modifier.fillMaxSize(),
                    contentScale = ContentScale.Crop,
                    onSuccess = {
                        imageLoaded = true
                    },
                    onError = {
                        imageError = true
                    }
                )
            }

            if (!imageLoaded || imageError || avatar.isBlank()) {
                Image(
                    painter = painterResource(Res.drawable.people),
                    contentDescription = name,
                    modifier = Modifier.fillMaxSize(),
                    contentScale = ContentScale.Crop
                )
            }
        }
    }
}