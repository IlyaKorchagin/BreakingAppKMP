package com.korchagin.domain_main.models

import com.korchagin.data.models.BboyEntry


data class BboyDomainModel(
    val name: String,
    val born: String,
    val rating: String,
    val avatar: String,
    val country: String,
    val video: String,
    val videoRutube: String,
    val description: String,
    val shortDescription: String
)

fun BboyEntry.toBboyDomainModel() = BboyDomainModel(
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