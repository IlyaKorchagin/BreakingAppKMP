/*
import android.annotation.SuppressLint
import androidx.compose.runtime.Composable
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.viewinterop.AndroidView
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.YouTubePlayer
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.listeners.AbstractYouTubePlayerListener
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.views.YouTubePlayerView

@SuppressLint("SetJavaScriptEnabled")
@Composable
actual fun VideoPlayer(topPadding: Int, url: String) {
    LocalContext.current
    AndroidView(factory = {
        val view = YouTubePlayerView(it)
        view.addYouTubePlayerListener(
            object : AbstractYouTubePlayerListener() {
                override fun onReady(youTubePlayer: YouTubePlayer) {
                    super.onReady(youTubePlayer)
                    youTubePlayer.loadVideo(url, 0f)
                }
            }
        )
        view
    })
}
*/

import android.content.Intent
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.core.net.toUri

@Composable
actual fun VideoPlayer(topPadding: Int, url: String) {

    val context = LocalContext.current

    Button(
        modifier = Modifier
            .padding(top = 16.dp),
        onClick = {
            val intent = Intent(
                Intent.ACTION_VIEW,
                ("https://www.youtube.com/watch?v=$url").toUri()
            )
            context.startActivity(intent)
        }) {
        Text(text = "Посмотреть видео ролик на YouTube")
    }
}

