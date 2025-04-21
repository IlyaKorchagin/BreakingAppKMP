package org.korchagin.kmp

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import org.jetbrains.compose.ui.tooling.preview.Preview
import org.korchagin.kmp.screens.Ratings


@Composable
@Preview
fun App() {
    MaterialTheme {
       Ratings()
    }
}
