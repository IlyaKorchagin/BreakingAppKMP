package com.korchagin.presentation.models

import com.korchagin.domain_main.models.CoachDomainModel


data class CoachModel(
    val id: String,
    val name: String,
    val nick: String,
    val avatar: String,
    val video: String,
    val description: String
)

fun CoachDomainModel.toCoachModel() = CoachModel(
    id = id,
    name = name,
    nick = nick,
    avatar = avatar,
    video = video,
    description = description
)