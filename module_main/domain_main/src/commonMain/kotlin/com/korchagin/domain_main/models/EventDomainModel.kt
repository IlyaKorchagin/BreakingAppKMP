package com.korchagin.domain_main.models

import com.korchagin.data.models.EventEntry


data class EventDomainModel(
    val id: String,
    val title: String,
    val data: String,
    val regUrl: String,
    val registered: Map<String, Boolean> = emptyMap()
)

fun EventEntry.toEventDomainModel() = EventDomainModel(
    id = id,
    title = title,
    data = data,
    regUrl = regUrl,
    registered = registered
)

fun EventDomainModel.toEventDataModel() = EventEntry(
    id = id,
    title = title,
    data = data,
    regUrl = regUrl,
    registered = registered
)