package org.korchagin.kmp.helper

import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.*
import com.korchagin.presentation.models.ElementModel
import org.jetbrains.compose.resources.DrawableResource

fun setDescriptionText(index: Int, element: ElementModel): String {
    return when(index){
        0 -> element.progress10
        1 -> element.progress20
        2 -> element.progress30
        3 -> element.progress40
        4 -> element.progress50
        5 -> element.progress60
        6 -> element.progress70
        7 -> element.progress80
        8 -> element.progress90
        9 -> element.progress100
        else -> element.progress10
    }
}

fun setDescriptionImage(index: Int): DrawableResource {
    return when(index){
        0 -> Res.drawable.percent10
        1 -> Res.drawable.percent20
        2 -> Res.drawable.percent30
        3 -> Res.drawable.percent40
        4 -> Res.drawable.percent50
        5 -> Res.drawable.percent60
        6 -> Res.drawable.percent70
        7 -> Res.drawable.percent80
        8 -> Res.drawable.percent90
        9 -> Res.drawable.percent100
        else -> Res.drawable.percent10
    }

}