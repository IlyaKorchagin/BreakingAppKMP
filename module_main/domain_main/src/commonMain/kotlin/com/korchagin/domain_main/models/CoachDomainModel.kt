package com.korchagin.domain_main.models

import com.korchagin.data.models.CoachEntry


data class CoachDomainModel(
    val id: String,
    val name: String,
    val nick: String,
    val avatar: String,
    val video: String,
    val description: String
)

fun CoachEntry.toCoachDomainModel() = CoachDomainModel(
    id = id,
    name = name,
    nick = nick,
    avatar = avatar,
    video = video,
    description = description
)