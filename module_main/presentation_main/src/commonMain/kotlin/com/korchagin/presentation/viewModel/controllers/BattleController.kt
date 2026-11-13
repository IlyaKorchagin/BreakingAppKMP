package com.korchagin.presentation.viewModel.controllers

import androidx.compose.runtime.MutableState
import androidx.compose.runtime.mutableStateOf
import com.korchagin.module_common.Rounds
import com.korchagin.presentation.models.battle.BattlePair
import com.korchagin.presentation.models.battle.BattleResult
import com.korchagin.presentation.models.battle.EventModel
import com.korchagin.presentation.models.battle.EventParticipants
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.combine
import kotlinx.coroutines.flow.distinctUntilChanged
import kotlinx.coroutines.flow.map

class BattleController(
    private val currentEvent: Flow<EventModel?>
) {

    // Состояние раундов и пар

    internal val _currentRoundPairs =
        MutableStateFlow<List<BattlePair>>(emptyList())

    val currentRoundPairs = _currentRoundPairs.asStateFlow()

    internal val _currentRound =
        MutableStateFlow(Rounds.SELECTION)

    val currentRound = _currentRound.asStateFlow()

    internal val _firstRound =
        MutableStateFlow(Rounds.TOP32)

    val firstRound = _firstRound.asStateFlow()

    internal val _currentPairIndex =
        MutableStateFlow(0)

    val currentPairIndex = _currentPairIndex.asStateFlow()

    // Результаты баттлов

    internal val _battleResults = mutableListOf<BattleResult>()

    internal val littleFinal: MutableState<Boolean> =
        mutableStateOf(false)

    internal val bigFinal: MutableState<Boolean> =
        mutableStateOf(false)

    // Победитель и финалисты

    internal val _winner =
        MutableStateFlow<EventParticipants?>(null)

    val winner = _winner.asStateFlow()

    internal val _littleFinalParticipants =
        MutableStateFlow<List<EventParticipants>>(emptyList())

    internal val _bigFinalParticipants =
        MutableStateFlow<List<EventParticipants>>(emptyList())

    internal val _bigFinalWinner =
        MutableStateFlow<EventParticipants?>(null)

    internal val _bigFinalLoser =
        MutableStateFlow<EventParticipants?>(null)

    // Локальные оценки

    internal val _battlePoints =
        MutableStateFlow<Map<String, Map<String, Map<String, Int>>>>(
            emptyMap()
        )

    val battlePoints = _battlePoints.asStateFlow()

    // Вычисляемые состояния

    val currentPairIndexForUser: Flow<Int> =
        currentEvent.map { event ->
            event?.currentPairIndex ?: 0
        }

    val isFullBattleRoundComplete: Flow<Boolean> =
        combine(
            currentEvent,
            currentRoundPairs,
            currentRound
        ) { event, pairs, round ->

            if (event == null || pairs.isEmpty()) {
                false
            } else {
                val judgeIds = event.judges.keys

                judgeIds.isNotEmpty() && pairs.all { pair ->
                    val left = event.participants[pair.left.userId]
                    val right = event.participants[pair.right.userId]

                    left != null &&
                            right != null &&
                            left.isBattleComplete(judgeIds, round.name) &&
                            right.isBattleComplete(judgeIds, round.name)
                }
            }
        }.distinctUntilChanged()

    val isCurrentBattleComplete: Flow<Boolean> =
        combine(
            currentEvent,
            currentRoundPairs,
            currentPairIndex,
            currentRound
        ) { event, pairs, pairIndex, round ->

            if (event == null) {
                return@combine false
            }

            val pair = pairs.getOrNull(pairIndex)
                ?: return@combine false

            val judgeIds = event.judges.keys

            if (judgeIds.isEmpty()) {
                return@combine false
            }

            judgeIds.all { judgeId ->
                val leftScore = event.participants[pair.left.userId]
                    ?.battlePoints
                    ?.get(round.name)
                    ?.get(judgeId)

                val rightScore = event.participants[pair.right.userId]
                    ?.battlePoints
                    ?.get(round.name)
                    ?.get(judgeId)

                leftScore != null &&
                        rightScore != null &&
                        leftScore > 0 &&
                        rightScore > 0
            }
        }.distinctUntilChanged()

    private fun EventParticipants.isBattleComplete(
        judges: Set<String>,
        round: String
    ): Boolean {
        return judges.all { judgeId ->
            (battlePoints[round]?.get(judgeId) ?: 0) > 0
        }
    }
}
