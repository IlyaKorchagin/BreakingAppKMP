
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.ui.Modifier
import kotlinx.browser.document
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLIFrameElement


@Composable
actual fun VideoPlayer(modifier: Modifier, url: String) {
    val containerId = "video-player-container"

    LaunchedEffect(url) {
        val root = document.getElementById("root") as? HTMLDivElement
        if (root == null) {
            console.warn("Root not found")
            return@LaunchedEffect
        }

        // Удаляем старый контейнер (если есть)
        document.getElementById(containerId)?.remove()

        // Только если url задан
        if (url.isNotBlank()) {
            val container = document.createElement("div") as HTMLDivElement
            container.id = containerId
            container.style.apply {
                width = "95%"
                height = "360px"
                position = "absolute"
                top = "100px" // можешь менять в зависимости от экрана
                left = "50%"
                transform = "translateX(-50%)"
                zIndex = "1000"
                backgroundColor = "black"
            }


            val iframe = document.createElement("iframe") as HTMLIFrameElement
            iframe.src = "https://www.youtube.com/embed/$url?autoplay=1&mute=1"
            iframe.width = "100%"
            iframe.height = "360"
            iframe.style.border = "none"
            iframe.setAttribute("allowfullscreen", "true")
            iframe.setAttribute(
                "allow",
                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            )

            container.appendChild(iframe)
            root.appendChild(container)
        }
    }

    DisposableEffect(url) {
        onDispose {
            document.getElementById(containerId)?.remove()
        }
    }
}