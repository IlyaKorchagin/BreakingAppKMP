package org.korchagin.kmp.theme.global

import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import team.platforma.extra_nav.ui.style.NavigationItemStyle
import team.platforma.extra_nav.ui.style.NavigationStyle
import team.platforma.extra_nav.ui.style.SimpleNavigationStyle

class NavViewStyle {
    @Composable
    fun light() {
        SimpleNavigationStyle.define(
            bottomNavStyle = NavigationStyle(
                background = Color(0xFFFFFFFF),
                insertBottomPadding = false
            ),
            navRailStyle = NavigationStyle(
                background = Color(0xFFFFFFFF),
                verticalMargin = 8.dp,
                shape = RoundedCornerShape(4.dp)
            ),
            navigationItemStyle = NavigationItemStyle(
                selectedIcon = Color(0xFF41C4C4),
                selectedLabel = Color(0xFF41C4C4),
                defaultIcon = Color(0xFF76767A),
                defaultLabel = Color(0xFF76767A),
                shape = RoundedCornerShape(8.dp),
            )
        )
    }

    @Composable
    fun dark() {
        SimpleNavigationStyle.define(
            bottomNavStyle = NavigationStyle(
                background = Color(0xFF222224),
                insertBottomPadding = false
            ),
            navRailStyle = NavigationStyle(
                background = Color(0xFF222224),
                verticalMargin = 8.dp,
                shape = RoundedCornerShape(4.dp)
            ),
            navigationItemStyle = NavigationItemStyle(
                selectedIcon = Color(0xFF41C4C4),
                selectedLabel = Color(0xFF41C4C4),
                defaultIcon = Color(0xFFBCBCBF),
                defaultLabel = Color(0xFFBCBCBF),
                shape = RoundedCornerShape(8.dp)
            )
        )
    }
}