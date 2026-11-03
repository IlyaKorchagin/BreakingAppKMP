package org.korchagin.kmp

import android.Manifest
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.compose.setContent
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.tooling.preview.Preview
import androidx.core.content.ContextCompat
import com.google.firebase.FirebaseApp
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import org.korchagin.kmp.notifications.NotificationEvent
import team.platforma.apppermissions.PermissionX
import team.platforma.kotlinmultiplatformsharedmodule.MediaPicker

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        Log.d(
            "FCM_TEST",
            "MainActivity onCreate, extras=${intent?.extras}"
        )

        handleNotificationIntent(intent)

        // Остальной существующий код:
        MediaPicker.create(this)
        PermissionX.create(this)
        FirebaseApp.initializeApp(this)

        setContent {
            val notificationEvent by
            MainActivity.notificationEvent.collectAsState()

            RequestNotificationPermission()

            App(
                notificationEvent = notificationEvent,
                onNotificationHandled = {
                    MainActivity.clearNotificationEvent()
                }
            )
        }
    }

    override fun onNewIntent(intent: Intent) {
        super.onNewIntent(intent)
        setIntent(intent)

        Log.d(
            "FCM_TEST",
            "MainActivity onNewIntent, extras=${intent.extras}"
        )

        handleNotificationIntent(intent)
    }

    companion object {
        private val _notificationEvent =
            MutableStateFlow<NotificationEvent?>(null)

        val notificationEvent = _notificationEvent.asStateFlow()

        fun clearNotificationEvent() {
            _notificationEvent.value = null
        }
    }

    private fun handleNotificationIntent(intent: Intent?) {
        val type = intent?.getStringExtra("notification_type")
            ?: intent?.getStringExtra("type")
            ?: return

        val id = intent?.getStringExtra("notification_id")
            ?: intent?.getStringExtra("id")

        _notificationEvent.value = NotificationEvent(
            type = type,
            id = id
        )

        Log.d("FCM_TEST", "Notification clicked: type=$type, id=$id")
    }



}


@Composable
private fun RequestNotificationPermission() {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
        val context = LocalContext.current

        val permissionLauncher = rememberLauncherForActivityResult(
            contract = ActivityResultContracts.RequestPermission()
        ) { isGranted ->
            android.util.Log.d(
                "FCM_TEST",
                "Notification permission granted: $isGranted"
            )
        }

        LaunchedEffect(Unit) {
            val permissionStatus = ContextCompat.checkSelfPermission(
                context,
                Manifest.permission.POST_NOTIFICATIONS
            )

            if (permissionStatus != PackageManager.PERMISSION_GRANTED) {
                permissionLauncher.launch(
                    Manifest.permission.POST_NOTIFICATIONS
                )
            }
        }
    }
}

@Preview
@Composable
fun AppAndroidPreview() {
    App()
}

