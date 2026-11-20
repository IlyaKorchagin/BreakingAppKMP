package org.korchagin.kmp


import android.annotation.SuppressLint
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import coil.compose.AsyncImagePainter
import coil.compose.rememberAsyncImagePainter
import coil.decode.GifDecoder
import coil.request.ImageRequest
import coil.size.Size
import dev.gitlive.firebase.storage.Data


@SuppressLint("DiscouragedApi")
@Composable
actual fun GifImage(
    drawable: String,
    onLoaded: () -> Unit
) {
    val context = LocalContext.current

    val resId = remember(drawable) {
        context.resources.getIdentifier(
            drawable,
            "drawable",
            context.packageName
        )
    }

    if (resId == 0) {
        println("GIF ERROR: Resource not found: $drawable")
        return
    }

    val imageLoader = remember(context) {
        coil.ImageLoader.Builder(context)
            .components {
                add(GifDecoder.Factory())
            }
            .build()
    }

    val request = remember(resId) {
        ImageRequest.Builder(context)
            .data(resId)
            .size(Size.ORIGINAL)
            .crossfade(false)
            .build()
    }

    val painter = rememberAsyncImagePainter(
        model = request,
        imageLoader = imageLoader
    )

    LaunchedEffect(painter.state) {
        if (painter.state is AsyncImagePainter.State.Success) {
            onLoaded()
        }
    }

    Image(
        painter = painter,
        contentDescription = null,
        modifier = Modifier.fillMaxSize(),
        contentScale = ContentScale.Fit
    )
}


actual val currentPlatform: PlatformType
    get() = PlatformType.ANDROID

actual fun ByteArray.toFirebaseData(): Data {
    return Data(this)
}