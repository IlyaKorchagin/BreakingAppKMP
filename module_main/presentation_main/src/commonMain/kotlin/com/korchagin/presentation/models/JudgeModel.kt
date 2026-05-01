package com.korchagin.presentation.models

import com.korchagin.domain_main.models.JudgeDomainModel


data class JudgeModel(
    val id: String,
    val name: String,
    val nick: String,
    val avatar: String,
    val video: String,
    val videoRutube: String,
    val description: String
)

fun JudgeDomainModel.toJudgeModel() = JudgeModel(
    id = id,
    name = name,
    nick = nick,
    avatar = avatar,
    video = video,
    videoRutube = videoRutube,
    description = description
)

fun JudgeModel.toJudgeDomainModel() = JudgeDomainModel(
    id = id,
    name = name,
    nick = nick,
    avatar = avatar,
    video = video,
    videoRutube = videoRutube,
    description = description
)