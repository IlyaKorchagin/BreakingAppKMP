package com.korchagin.presentation.models.battle

data class BattleProtocol(
    val participant: EventParticipants,
    val place: Int,
    val totalPoints: Int,
    val battleHistory: List<String>
)
