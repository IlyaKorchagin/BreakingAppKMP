package org.korchagin.kmp.helper

import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.star_default
import breakingkmpapp.composeapp.generated.resources.star_top_1
import breakingkmpapp.composeapp.generated.resources.star_top_2
import breakingkmpapp.composeapp.generated.resources.star_top_3
import org.jetbrains.compose.resources.DrawableResource

fun setPositionStar(index: Int): DrawableResource {
    return when(index){
        0 -> Res.drawable.star_top_1
        1 -> Res.drawable.star_top_2
        2 -> Res.drawable.star_top_3
        else -> Res.drawable.star_default
    }
}