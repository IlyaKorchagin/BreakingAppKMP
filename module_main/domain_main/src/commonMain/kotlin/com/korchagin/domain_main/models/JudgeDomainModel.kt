package com.korchagin.domain_main.models

import com.korchagin.data.models.JudgeEntry


data class JudgeDomainModel(
    val id: String,
    val name: String,
    val nick: String,
    val avatar: String,
    val video: String,
    val videoRutube: String,
    val description: String
)

fun JudgeEntry.toJudgeDomainModel() = JudgeDomainModel(
    id = id,
    name = name,
    nick = nick,
    avatar = avatar,
    video = video,
    videoRutube = videoRutube,
    description = description
)

fun JudgeDomainModel.toJudgeDataModel() = JudgeEntry(
    id = id,
    name = name,
    nick = nick,
    avatar = avatar,
    video = video,
    description = description,
    videoRutube = videoRutube
)