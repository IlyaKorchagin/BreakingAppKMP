package org.korchagin.kmp

import androidx.compose.runtime.Composable
import androidx.compose.ui.platform.LocalConfiguration

actual object ScreenSizeHandler {
    @Composable
    actual fun getScreenSize(): Pair<Int, Int> {
        val displayMetrics = android.util.DisplayMetrics()
        android.view.WindowManager.LayoutParams().apply {
            width = displayMetrics.widthPixels
        }
        return LocalConfiguration.current.screenWidthDp to LocalConfiguration.current.screenHeightDp

    }
}