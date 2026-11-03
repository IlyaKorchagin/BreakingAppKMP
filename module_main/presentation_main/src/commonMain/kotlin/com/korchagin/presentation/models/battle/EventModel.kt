package com.korchagin.presentation.models.battle

import com.korchagin.domain_main.models.EventDomainModel
import kotlin.Int


data class EventModel(
    val id: String,
    val title: String,
    val data: String ,
    val regUrl: String,
    val participants: Map<String,EventParticipants> ,
    val judges: Map<String, Boolean> = emptyMap(),
    val currentSelectionGroup: Int,
    val currentPairIndex: Int
)

fun EventDomainModel.toEventModel() = EventModel(
    id = id,
    title = title,
    data = data,
    regUrl = regUrl,
    participants = participants.mapValues { it.value.toEventParticipants() },
    judges = judges.toMap(),
    currentSelectionGroup = currentSelectionGroup,
    currentPairIndex = currentPairIndex
)

fun EventModel.toEventDomainModel() = EventDomainModel(
    id = id,
    title = title,
    data = data,
    regUrl = regUrl,
    participants = participants.mapValues { it.value.toEventParticipantsDomain() },
    judges = judges,
    currentSelectionGroup = currentSelectionGroup,
    currentPairIndex = currentPairIndex
)
