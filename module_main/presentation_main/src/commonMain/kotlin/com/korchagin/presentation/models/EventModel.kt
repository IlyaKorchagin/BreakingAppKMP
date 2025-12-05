package com.korchagin.presentation.models

import com.korchagin.domain_main.models.EventDomainModel


data class EventModel(
    val id: String,
    val title: String,
    val data: String ,
    val regUrl: String,
    val registered: Map<String, Boolean> = emptyMap()
)

fun EventDomainModel.toEventModel() = EventModel(
    id = id,
    title = title,
    data = data,
    regUrl = regUrl,
    registered = registered
)

fun EventModel.toEventDomainModel() = EventDomainModel(
    id = id,
    title = title,
    data = data,
    regUrl = regUrl,
    registered = registered
)
