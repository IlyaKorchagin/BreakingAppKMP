package org.korchagin.kmp

import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.window.CanvasBasedWindow
import dev.gitlive.firebase.Firebase
import dev.gitlive.firebase.FirebaseOptions
import dev.gitlive.firebase.initialize
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.renderComposable
import org.jetbrains.skiko.wasm.onWasmReady
import org.korchagin.kmp.di.initKoin

@OptIn(ExperimentalComposeUiApi::class)
fun main() {
    Firebase.initialize(
        options = FirebaseOptions(
            projectId = "goodfootbreaking",
            applicationId = "1:562023826894:web:673fcd6506381387ae579f",
            apiKey = "AIzaSyBfjWARdMqCo7UZXoY5dDafJFJOazqv-QE",
            databaseUrl = "https://goodfootbreaking.firebaseio.com"
        )
    )
    onWasmReady {
        initKoin()
        // После инициализации запускаем CanvasBasedWindow
        CanvasBasedWindow(canvasElementId = "ComposeTarget") {
            App()
        }
    }
}

