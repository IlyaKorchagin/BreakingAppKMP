package com.korchagin.data.models
@kotlinx.serialization.Serializable
data class ElementEntry(
    var title: String,
    var image: String,
    var description: String,
    var blockDescription: String,
    var progress10: String,
    var progress20: String,
    var progress30: String,
    var progress40: String,
    var progress50: String,
    var progress60: String,
    var progress70: String,
    var progress80: String,
    var progress90: String,
    var progress100: String,
    var videoUrl: String
)