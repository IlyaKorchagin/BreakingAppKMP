package com.korchagin.presentation.models

import com.korchagin.domain_main.models.ElementDomainModel

data class ElementModel(
    var title: String = "",
    var image: String = "",
    var description: String = "",
    var blockDescription: String = "",
    var progress10: String = "",
    var progress20: String = "",
    var progress30: String = "",
    var progress40: String = "",
    var progress50: String = "",
    var progress60: String = "",
    var progress70: String = "",
    var progress80: String = "",
    var progress90: String = "",
    var progress100: String = "",
    var videoUrl: String = ""
)
fun ElementDomainModel.toElementModel(): ElementModel {
    return ElementModel(
        title = title,
        image = image,
        description = description,
        blockDescription = blockDescription,
        progress10 = progress10,
        progress20 = progress20,
        progress30 = progress30,
        progress40 = progress40,
        progress50 = progress50,
        progress60 = progress60,
        progress70 = progress70,
        progress80 = progress80,
        progress90 = progress90,
        progress100 = progress100,
        videoUrl = videoUrl
    )
}