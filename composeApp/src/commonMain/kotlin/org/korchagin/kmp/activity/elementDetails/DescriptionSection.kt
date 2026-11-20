package org.korchagin.kmp.activity.elementDetails

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.korchagin.presentation.models.ElementModel
import org.jetbrains.compose.resources.painterResource
import org.korchagin.kmp.helper.setDescriptionImage
import org.korchagin.kmp.helper.setDescriptionText
import org.korchagin.kmp.theme.colors.LocalAppColors

@Composable
fun DescriptionSection(
    element: ElementModel,
    rating: Int,
    modifier: Modifier = Modifier
) {
    val colors = LocalAppColors.current

    LazyColumn(
        modifier = modifier.fillMaxSize(),
        contentPadding = PaddingValues(
            horizontal = 16.dp,
            vertical = 12.dp
        ),
        verticalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        items(10) { index ->
            val isUnlocked = rating >= index + 1

            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(18.dp))
                    .background(
                        colors.defaultBackground.copy(
                            alpha = if (isUnlocked) 0.85f else 0.55f
                        )
                    )
                    .border(
                        width = 1.dp,
                        color = if (isUnlocked) {
                            colors.mainGreen.copy(alpha = 0.8f)
                        } else {
                            colors.textDefault.copy(alpha = 0.15f)
                        },
                        shape = RoundedCornerShape(18.dp)
                    )
                    .padding(12.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Box(
                    modifier = Modifier
                        .size(64.dp)
                        .clip(CircleShape)
                        .background(
                            if (isUnlocked) {
                                colors.mainGreen.copy(alpha = 0.15f)
                            } else {
                                colors.textDefault.copy(alpha = 0.08f)
                            }
                        ),
                    contentAlignment = Alignment.Center
                ) {
                    Image(
                        painter = painterResource(setDescriptionImage(index)),
                        contentDescription = null,
                        modifier = Modifier
                            .fillMaxSize()
                            .padding(8.dp)
                    )
                }

                Spacer(Modifier.width(14.dp))

                Text(
                    modifier = Modifier.weight(1f),
                    text = setDescriptionText(index, element),
                    color = colors.textDefault.copy(
                        alpha = if (isUnlocked) 1f else 0.65f
                    ),
                    fontSize = 15.sp,
                    letterSpacing = 0.3.sp
                )

                if (isUnlocked) {
                    Icon(
                        imageVector = Icons.Default.CheckCircle,
                        contentDescription = "Открыто",
                        tint = colors.mainGreen,
                        modifier = Modifier.size(22.dp)
                    )
                }
            }
        }
    }
}