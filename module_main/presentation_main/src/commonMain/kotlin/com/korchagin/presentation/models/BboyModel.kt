package com.korchagin.presentation.models

import com.korchagin.domain_main.models.BboyDomainModel


data class BboyModel(
    val name: String = "",
    val born: String = "",
    val rating: String = "",
    val avatar: String = "",
    val country: String = "",
    val video: String = "",
    val videoRutube: String = "",
    val description: String = "",
    val shortDescription: String = ""
)

fun BboyDomainModel.toBboyModel() = BboyModel(
    name = name,
    born = born,
    rating = rating,
    avatar = avatar,
    country = country,
    video = video,
    videoRutube = videoRutube,
    description = description,
    shortDescription = shortDescription
)