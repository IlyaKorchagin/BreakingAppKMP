package com.korchagin.domain_main.models

import com.korchagin.data.models.EventEntry


data class EventDomainModel(
    val id: String,
    val title: String,
    val data: String,
    val regUrl: String,
    val participants: Map<String, EventParticipantsDomain> = emptyMap(),
    val judges: Map<String, Boolean> = emptyMap()
)

fun EventEntry.toEventDomainModel() = EventDomainModel(
    id = id,
    title = title,
    data = data,
    regUrl = regUrl,
    participants = participants.mapValues { it.value.toEventParticipantsDomain() },
    judges = judges
)

fun EventDomainModel.toEventDataModel() = EventEntry(
    id = id,
    title = title,
    data = data,
    regUrl = regUrl,
    participants = participants.mapValues { it.value.toEventParticipantsEntry() },
    judges = judges
)