package com.korchagin.presentation.models.battle

data class BattleResult(
    val pairId: String,
    val left: EventParticipants,
    val right: EventParticipants,
    val leftScore: Int,
    val rightScore: Int
) {
    val winner: EventParticipants
        get() = if (leftScore >= rightScore) left else right

    val looser: EventParticipants
        get() = if (leftScore >= rightScore) right else left
}

