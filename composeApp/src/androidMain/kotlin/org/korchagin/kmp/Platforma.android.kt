package org.korchagin.kmp


import android.annotation.SuppressLint
import android.graphics.ImageDecoder
import android.os.Build
import android.os.Build.VERSION.SDK_INT
import androidx.compose.foundation.Image
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import coil.compose.rememberAsyncImagePainter
import coil.decode.GifDecoder
import coil.decode.ImageDecoderDecoder
import coil.request.ImageRequest
import coil.size.Size
import org.jetbrains.compose.resources.DrawableResource


@SuppressLint("DiscouragedApi")
@Composable
actual fun GifImage(modifier: Modifier, drawable: String) {
    val context = LocalContext.current
    // Get the drawable resource ID using the provided gifName
    val resId = context.resources.getIdentifier(drawable, "drawable", context.packageName)

    val imageLoader = coil.ImageLoader.Builder(context)
        .components {
            if (Build.VERSION.SDK_INT >= 28) {
                add(ImageDecoderDecoder.Factory()) // For API >= 28
            } else {
                add(GifDecoder.Factory()) // For older APIs
            }
        }
        .build()

    // Construct the URI for the drawable resource
    val resourceUri = "android.resource://${context.packageName}/$resId"

    // Image composable with Coil
    Image(
        modifier = modifier,
        contentScale = ContentScale.FillWidth,
        painter = rememberAsyncImagePainter(
            model = ImageRequest.Builder(context)
                .data(resourceUri) // Use the resource URI format
                .size(Size.ORIGINAL) // Optional: Load the original size of the image
                .crossfade(true) // Optional: Enable crossfade transition
                .build(),
            imageLoader = imageLoader
        ),
        contentDescription = null
    )
}