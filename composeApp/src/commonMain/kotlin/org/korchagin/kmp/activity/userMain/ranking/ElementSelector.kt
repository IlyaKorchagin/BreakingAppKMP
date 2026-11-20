package org.korchagin.kmp.activity.userMain.ranking

import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowDropDown
import androidx.compose.material.icons.filled.Check
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.rotate
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import org.korchagin.kmp.helper.setElementTitle
import org.korchagin.kmp.theme.colors.LocalAppColors
import team.platforma.infoteam.theme.typography.FontWeights
import team.platforma.infoteam.theme.typography.Typography


@Composable
fun ElementSelector(
    elements: List<String>,
    selected: String,
    onSelect: (String) -> Unit
) {
    var expanded by remember { mutableStateOf(false) }

    val colors = LocalAppColors.current
    val shape = RoundedCornerShape(14.dp)

    val arrowRotation by animateFloatAsState(
        targetValue = if (expanded) 180f else 0f,
        label = "selectorArrow"
    )

    Box(
        modifier = Modifier.fillMaxWidth()
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .clip(shape)
                .background(
                    colors.mainGreen.copy(alpha = 0.10f)
                )
                .border(
                    width = 1.5.dp,
                    color = colors.mainGreen.copy(alpha = 0.65f),
                    shape = shape
                )
                .clickable { expanded = true }
                .padding(horizontal = 16.dp, vertical = 13.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(
                text = setElementTitle(selected),
                modifier = Modifier.weight(1f),
                style = Typography.text3xl(
                    weights = FontWeights.SemiBold
                ),
                color = colors.textDefault
            )

            Icon(
                imageVector = Icons.Default.ArrowDropDown,
                contentDescription = if (expanded) "Свернуть список" else "Открыть список",
                tint = colors.mainGreen,
                modifier = Modifier
                    .size(28.dp)
                    .rotate(arrowRotation)
            )
        }

        DropdownMenu(
            expanded = expanded,
            onDismissRequest = { expanded = false },
            modifier = Modifier
                .fillMaxWidth(0.95f)
                .background(MaterialTheme.colorScheme.surface)
        ) {
            elements.forEach { item ->
                val isSelected = item == selected

                DropdownMenuItem(
                    text = {
                        Text(
                            text = setElementTitle(item),
                            style = Typography.text3xl(
                                weights = if (isSelected) {
                                    FontWeights.SemiBold
                                } else {
                                    FontWeights.Medium
                                }
                            ),
                            color = if (isSelected) {
                                colors.mainGreen
                            } else {
                                colors.textDefault
                            }
                        )
                    },
                    trailingIcon = {
                        if (isSelected) {
                            Icon(
                                imageVector = Icons.Default.Check,
                                contentDescription = null,
                                tint = colors.mainGreen
                            )
                        }
                    },
                    modifier = Modifier.background(
                        if (isSelected) {
                            colors.mainGreen.copy(alpha = 0.10f)
                        } else {
                            Color.Transparent
                        }
                    ),
                    onClick = {
                        onSelect(item)
                        expanded = false
                    }
                )
            }
        }
    }
}

