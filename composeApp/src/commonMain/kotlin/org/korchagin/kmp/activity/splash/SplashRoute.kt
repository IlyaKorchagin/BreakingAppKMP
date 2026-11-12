package org.korchagin.kmp.activity.splash

import androidx.compose.runtime.Composable

@Composable
fun SplashRoute(
    onAdminClick: () -> Unit,
    onUserClick: () -> Unit,
    onAuthClick: () -> Unit
) {
    SplashScreen(
        onAdminClick = onAdminClick,
        onUserClick = onUserClick,
        onAuthClick = onAuthClick
    )
}