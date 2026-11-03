package com.korchagin.presentation.viewModel

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.korchagin.domain_main.MainUseCase
import com.korchagin.module_common.Rounds
import com.korchagin.presentation.models.BboyModel
import com.korchagin.presentation.models.CoachModel
import com.korchagin.presentation.models.ElementModel
import com.korchagin.presentation.models.JudgeModel
import com.korchagin.presentation.models.JudgeResult
import com.korchagin.presentation.models.PupilModel
import com.korchagin.presentation.models.battle.BattlePair
import com.korchagin.presentation.models.battle.BattleResult
import com.korchagin.presentation.models.battle.EventModel
import com.korchagin.presentation.models.battle.EventParticipants
import com.korchagin.presentation.models.battle.isComplete
import com.korchagin.presentation.models.battle.toEventDomainModel
import com.korchagin.presentation.models.battle.toEventModel
import com.korchagin.presentation.models.battle.toEventParticipantsDomain
import com.korchagin.presentation.models.toBboyModel
import com.korchagin.presentation.models.toCoachModel
import com.korchagin.presentation.models.toElementModel
import com.korchagin.presentation.models.toJudgeDomainModel
import com.korchagin.presentation.models.toJudgeModel
import com.korchagin.presentation.models.toPupilDomainModel
import com.korchagin.presentation.models.toPupilModel
import com.korchagin.presentation.notifications.FcmTokenProvider
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.combine
import kotlinx.coroutines.flow.distinctUntilChanged
import kotlinx.coroutines.flow.flowOf
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.stateIn
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.joinAll
import kotlinx.coroutines.launch
import kotlin.math.roundToInt

class MainViewModel(
    private val mainUseCase: MainUseCase,
    private val fcmTokenProvider: FcmTokenProvider,
) : ViewModel() {

    private val singletonMainScope = CoroutineScope(Dispatchers.Main + SupervisorJob())

    //--- Pupils case --->

    private val _pupils = MutableStateFlow<List<PupilModel>>(emptyList())
    val pupils: StateFlow<List<PupilModel>> = _pupils

    private val _currentPupil = MutableStateFlow<PupilModel?>(null)
    val currentPupil: StateFlow<PupilModel?> = _currentPupil

    private val _clickedPupil = MutableStateFlow<PupilModel?>(null)
    var clickedPupil: StateFlow<PupilModel?> = _clickedPupil

    fun updateClickedPupil(updatedPupil: PupilModel) {
        _clickedPupil.value = updatedPupil
    }

    fun setClickedPupil(pupil: PupilModel?) {
        _clickedPupil.value = pupil
    }

    private val _coaches = MutableStateFlow<List<CoachModel>>(emptyList())
    val coaches: StateFlow<List<CoachModel>> = _coaches

    private val _judges = MutableStateFlow<List<JudgeModel>>(emptyList())
    val judges: StateFlow<List<JudgeModel>> = _judges

    private val _selectedJudge = MutableStateFlow<JudgeModel?>(null)
    var selectedJudge: StateFlow<JudgeModel?> = _selectedJudge

    fun setJudge(judge: JudgeModel?) {
        _selectedJudge.value = judge
    }

    var tmpPupils: List<PupilModel> = emptyList()

    private val _freezeElements = MutableStateFlow<List<ElementModel>>(emptyList())
    val freezeElements: StateFlow<List<ElementModel>> = _freezeElements

    private val _powerElements = MutableStateFlow<List<ElementModel>>(emptyList())
    val powerElements: StateFlow<List<ElementModel>> = _powerElements

    private val _ofpElements = MutableStateFlow<List<ElementModel>>(emptyList())
    val ofpElements: StateFlow<List<ElementModel>> = _ofpElements

    private val _stretchElements = MutableStateFlow<List<ElementModel>>(emptyList())
    val stretchElements: StateFlow<List<ElementModel>> = _stretchElements

    private val _footWorkElements = MutableStateFlow<List<ElementModel>>(emptyList())
    val footWorkElements: StateFlow<List<ElementModel>> = _footWorkElements

    fun loadCurrentUser(currentUser: String) {
        singletonMainScope.launch {
            mainUseCase.getPupilById.getAllPupils(currentUser).collect {
                _currentPupil.value = it.toPupilModel()
            }
        }
    }

    fun loadCoachesList() {
        singletonMainScope.launch {
            mainUseCase.getCoaches.getCoaches().collect { coachesList ->
                _coaches.value = coachesList
                    .map { it.toCoachModel() }
            }
        }
    }

    //<--- Pupils case ---


    //--- Hall of Fame case --->

    private val _bboysList = MutableStateFlow<List<BboyModel>>(emptyList())
    val bboysList: StateFlow<List<BboyModel>> = _bboysList

    var bboy by mutableStateOf(BboyModel())
        private set

    fun addBboy(bboy: BboyModel) {
        this.bboy = bboy
    }

    //<--- Hall of Fame case --->


    //--- Battle case --->

    private val _events = MutableStateFlow<List<EventModel>>(emptyList())
    val events: StateFlow<List<EventModel>> = _events

    private val _currentEventId = MutableStateFlow<String?>(null)
    val currentEventId = _currentEventId.asStateFlow()

    private val _currentRoundPairs = MutableStateFlow<List<BattlePair>>(emptyList())

    val currentRoundPairs: StateFlow<List<BattlePair>> = _currentRoundPairs

    fun setCurrentEvent(eventId: String) {
        _currentEventId.value = eventId
    }

    // 1. Текущий EventModel как Flow
    private val currentEventFlow: Flow<EventModel?> = combine(
        events,
        _currentEventId
    ) { eventList, currentId ->
        eventList.firstOrNull { it.id == currentId }
            ?: eventList.firstOrNull()
    }

    // 2. Список участников как StateFlow
    val currentEventParticipants: StateFlow<List<EventParticipants>> =
        currentEventFlow
            .map { event: EventModel? ->
                event?.participants?.values?.toList() ?: emptyList()
            }
            .stateIn(
                scope = viewModelScope,
                started = SharingStarted.Eagerly,
                initialValue = emptyList()
            )


    fun setSelectionPoints(participantId: String, point: Float) {
        val judgeId = selectedJudge.value?.id ?: return
        val eventId = _currentEventId.value ?: return

        _events.value = _events.value.map { event ->

            if (event.id != eventId) return@map event

            val updatedParticipants = event.participants.toMutableMap()

            val participant = updatedParticipants[participantId] ?: return@map event

            val updatedSelectionPoints = participant.selectionPoints
                .toMutableMap()
                .apply {
                    put(judgeId, point.toDouble())
                }

            updatedParticipants[participantId] =
                participant.copy(selectionPoints = updatedSelectionPoints)

            event.copy(participants = updatedParticipants)
        }
    }

    fun getSelectionPoints(
        pupilId: String,
        judgeId: String?
    ): Flow<Double> {


        val eventId = _currentEventId.value ?: return flowOf(0.0)
        val safeJudgeId = judgeId ?: return flowOf(0.0)

        return mainUseCase
            .getSelectionPoints
            .getSelectionPoints(eventId, pupilId, safeJudgeId)

    }


    val currentEvent =
        combine(events, _currentEventId) { list, id ->
            list.firstOrNull { it.id == id }
        }
            .distinctUntilChanged()

    val currentSelectionGroup =
        currentEvent
            .map { event ->
                val participants = event
                    ?.participants
                    ?.values
                    ?.toList()
                    ?: emptyList()

                val groupNumber = event?.currentSelectionGroup ?: 0

                participants
                    .sortedBy { it.selectionOrder }
                    .chunked(4)
                    .getOrNull(groupNumber)
                    ?: emptyList()
            }

    val allSelectionGroups =
        currentEvent
            .map { event ->

                val participants = event
                    ?.participants
                    ?.values
                    ?.sortedBy { it.selectionOrder }
                    ?: emptyList()

                participants.chunked(4)

            }


    val isLastSelectionGroup =
        currentEvent.map { event ->

            if (event == null) {
                false
            } else {

                val totalGroups =
                    event.participants.values
                        .size
                        .let { count ->
                            (count + 3) / 4
                        }

                event.currentSelectionGroup >= totalGroups - 1
            }

        }


    fun nextSelectionGroup() {
        val eventId = _currentEventId.value ?: return

        val event = _events.value
            .firstOrNull { it.id == eventId }
            ?: return

        val nextGroup = event.currentSelectionGroup + 1

        _events.value = _events.value.map {
            if (it.id == eventId) {
                it.copy(
                    currentSelectionGroup = nextGroup
                )
            } else {
                it
            }
        }
        singletonMainScope.launch {
            mainUseCase.setCurrentSelectionGroup.setCurrentSelectionGroup(eventId, nextGroup)
        }
    }

    fun sendSelectionResult() {
        val judgeId = _selectedJudge.value?.id ?: return
        val eventId = _currentEventId.value ?: return

        val event = _events.value.firstOrNull { it.id == eventId } ?: return

        val group = event.participants.values
            .sortedBy { it.selectionOrder }
            .chunked(4)
            .getOrNull(event.currentSelectionGroup)
            ?: return

        singletonMainScope.launch {
            mainUseCase.setSelectionResult.setSelectionResults(
                usersList = group.map { it.userId },
                pointsList = group.map {
                    it.selectionPoints[judgeId] ?: 0.0
                },
                eventId = eventId,
                judgeId = judgeId
            )
        }
    }


    fun EventParticipants.isBattleComplete(judges: Set<String>, round: String): Boolean {
        // Проверяем, что для каждого судьи есть оценка на указанном круге
        return judges.all { judgeId ->
            (battlePoints[round]?.containsKey(judgeId) == true) &&
                    (battlePoints[round]?.get(judgeId) ?: 0) > 0
        }
    }


    val isSelectionComplete =
        currentEvent
            .map { event ->
                event?.participants?.values?.all { p ->
                    p.isComplete(event.judges.keys)
                } ?: false
            }
            .distinctUntilChanged()

    val isSelectionFinished =
        currentEvent.map { event ->

            if (event == null) {
                false
            } else {

                val judgeIds = event.judges.keys

                event.participants.values.all { participant ->

                    participant.selectionPoints.keys.containsAll(judgeIds) &&
                            participant.selectionPoints.values.all { point ->
                                point > 0
                            }

                }
            }

        }

    val isCurrentSelectionGroupComplete =
        combine(
            currentEvent,
            currentSelectionGroup,
            selectedJudge
        ) { event, group, judge ->

            if (event == null || group.isEmpty() || judge == null) {
                false
            } else {

                group.all { participant ->

                    val updatedParticipant =
                        event.participants[participant.userId]

                    val point =
                        updatedParticipant
                            ?.selectionPoints
                            ?.get(judge.id)

                    point != null && point > 0
                }
            }

        }
            .distinctUntilChanged()
    val isFullBattleRoundComplete: Flow<Boolean> =
        combine(
            currentEvent,
            currentRoundPairs
        ) { event, pairs ->

            if (event == null || pairs.isEmpty()) {
                false
            } else {

                val round = _currentRound.value.name
                val judgeIds = event.judges.keys

                if (judgeIds.isEmpty()) {
                    false
                } else {

                    pairs.all { pair ->

                        val left = event.participants[pair.left.userId]
                        val right = event.participants[pair.right.userId]

                        if (left == null || right == null) {
                            false
                        } else {

                            left.isBattleComplete(
                                judges = judgeIds,
                                round = round
                            ) &&
                                    right.isBattleComplete(
                                        judges = judgeIds,
                                        round = round
                                    )
                        }
                    }
                }
            }
        }
            .distinctUntilChanged()

    fun getJudgeResults(
        pair: BattlePair
    ): List<JudgeResult> {

        val round = _currentRound.value.name

        val event = _events.value
            .firstOrNull { it.id == _currentEventId.value }
            ?: return emptyList()

        return event.judges.keys.mapNotNull { judgeId ->

            val leftScore =
                pair.left.battlePoints[round]
                    ?.get(judgeId)

            val rightScore =
                pair.right.battlePoints[round]
                    ?.get(judgeId)

            // Судья еще не проголосовал
            if (leftScore == null || rightScore == null) {
                return@mapNotNull null
            }

            JudgeResult(
                judgeName = getJudgeName(judgeId),
                winnerId = if (leftScore > rightScore) {
                    pair.left.userId
                } else {
                    pair.right.userId
                }
            )
        }
    }

    private fun getJudgeName(judgeId: String): String {
        return judges.value
            .firstOrNull { it.id == judgeId }
            ?.nick
            ?: judgeId
    }

    private val _winner = MutableStateFlow<EventParticipants?>(null)
    val winner = _winner.asStateFlow()

    private val _currentRound = MutableStateFlow(Rounds.SELECTION)
    val currentRound = _currentRound.asStateFlow()

    fun setCurrentRound(round: String) {
        val eventId = _currentEventId.value ?: return

        singletonMainScope.launch {
            mainUseCase.setCurrentRound.setCurrentRound(eventId, round)
        }
    }

    private val _firstRound = MutableStateFlow(Rounds.TOP32)
    val firstRound = _firstRound.asStateFlow()

    private val _battleResults = mutableListOf<BattleResult>()

    private val littleFinal = mutableStateOf(false)
    private val bigFinal = mutableStateOf(false)


    private val _currentPairIndex = MutableStateFlow(0)
    val currentPairIndex = _currentPairIndex.asStateFlow()

    val currentPairIndexForUser: Flow<Int> =
        currentEvent
            .map { event ->
                event?.currentPairIndex ?: 0
            }


    private val _battlePoints =
        MutableStateFlow<Map<String, Map<String, Map<String, Int>>>>(emptyMap())
    val battlePoints = _battlePoints.asStateFlow()

    fun setBattlePoints(pairId: String, judgeId: String, leftScore: Int, rightScore: Int) {
        _battlePoints.update { current ->
            val pairMap = current[pairId]?.toMutableMap() ?: mutableMapOf()

            // Обновляем баллы для левого участника
            val leftMap = pairMap["left"]?.toMutableMap() ?: mutableMapOf()
            leftMap[judgeId] = leftScore
            pairMap["left"] = leftMap

            // Обновляем баллы для правого участника
            val rightMap = pairMap["right"]?.toMutableMap() ?: mutableMapOf()
            rightMap[judgeId] = rightScore
            pairMap["right"] = rightMap

            current + (pairId to pairMap)
        }
    }

    fun addBattleResult(result: BattleResult) {

        val judgeId = _selectedJudge.value?.id ?: return
        val eventId = _currentEventId.value ?: return
        val round = _currentRound.value.name

        if (!littleFinal.value) {
            _battleResults.add(result)
        }

        singletonMainScope.launch {

            mainUseCase.setBattleResult.setBattleResult(
                usersList = listOf(
                    result.left.userId,
                    result.right.userId
                ),
                pointsList = listOf(
                    result.leftScore,
                    result.rightScore
                ),
                eventId = eventId,
                judgeId = judgeId,
                round = round
            )


            // Локально обновляем battlePoints
            _events.update { events ->

                events.map { event ->

                    if (event.id != eventId) {
                        return@map event
                    }

                    val updatedParticipants =
                        event.participants.toMutableMap()

                    // LEFT
                    val leftParticipant =
                        updatedParticipants[result.left.userId]

                    if (leftParticipant != null) {

                        val updatedBattlePoints =
                            leftParticipant.battlePoints
                                .toMutableMap()

                        val roundPoints =
                            updatedBattlePoints[round]
                                ?.toMutableMap()
                                ?: mutableMapOf()

                        roundPoints[judgeId] = result.leftScore

                        updatedBattlePoints[round] = roundPoints

                        updatedParticipants[result.left.userId] =
                            leftParticipant.copy(
                                battlePoints = updatedBattlePoints
                            )
                    }

                    // RIGHT
                    val rightParticipant =
                        updatedParticipants[result.right.userId]

                    if (rightParticipant != null) {

                        val updatedBattlePoints =
                            rightParticipant.battlePoints
                                .toMutableMap()

                        val roundPoints =
                            updatedBattlePoints[round]
                                ?.toMutableMap()
                                ?: mutableMapOf()

                        roundPoints[judgeId] = result.rightScore

                        updatedBattlePoints[round] = roundPoints

                        updatedParticipants[result.right.userId] =
                            rightParticipant.copy(
                                battlePoints = updatedBattlePoints
                            )
                    }

                    event.copy(
                        participants = updatedParticipants
                    )
                }
            }

            // Локальный battlePoints тоже можно оставить
            setBattlePoints(
                pairId = result.pairId,
                judgeId = judgeId,
                leftScore = result.leftScore,
                rightScore = result.rightScore
            )
        }
    }
    fun setCurrentPairIndex(index: Int) {

        val eventId = _currentEventId.value ?: return

        singletonMainScope.launch {
            mainUseCase.setCurrentPairIndex.setCurrentPairIndex(
                eventId = eventId,
                pairIndex = index
            )
        }
    }
    fun nextPair() {

        _currentPairIndex.value += 1

        if (_currentPairIndex.value >= _currentRoundPairs.value.size) {
            return
        }

        println("next pair - ${_currentPairIndex.value}")
        setCurrentPairIndex(_currentPairIndex.value)
    }

    val isCurrentBattleComplete: Flow<Boolean> =
        combine(
            currentEvent,
            currentRoundPairs,
            currentPairIndex
        ) { event, pairs, pairIndex ->

            if (event == null) {
                return@combine false
            }

            val pair = pairs.getOrNull(pairIndex)
                ?: return@combine false

            val round = _currentRound.value.name

            // ВСЕ судьи события
            val judgeIds = event.judges.keys

            if (judgeIds.isEmpty()) {
                return@combine false
            }

            // Каждый судья должен поставить оценки ОБОИМ участникам
            judgeIds.all { judgeId ->

                val leftScore =
                    event.participants[pair.left.userId]
                        ?.battlePoints
                        ?.get(round)
                        ?.get(judgeId)

                val rightScore =
                    event.participants[pair.right.userId]
                        ?.battlePoints
                        ?.get(round)
                        ?.get(judgeId)

                leftScore != null &&
                        rightScore != null &&
                        leftScore > 0 &&
                        rightScore > 0
            }

        }
            .distinctUntilChanged()


   /* fun startNextRound(
        participants: List<EventParticipants>,
        firstRound: Boolean
    ) {
        val countParticipants = participants.size

        _currentRound.value = when {
            countParticipants >= 32 -> Rounds.TOP32
            countParticipants >= 16 -> Rounds.TOP16
            countParticipants >= 8 -> Rounds.TOP8
            countParticipants >= 4 -> Rounds.TOP4
            else -> if (!littleFinal.value) Rounds.BIG_FINAL
            else Rounds.LITTLE_FINAL
        }

        if (firstRound) {
            _firstRound.value = _currentRound.value
        }

        setCurrentRound(_currentRound.value.name)

        if (!littleFinal.value || !bigFinal.value) {
            val qualifiedParticipants = when (_currentRound.value) {
                Rounds.TOP32 -> participants
                    .sortedByDescending { it.selectionPoints.values.sum() }
                    .take(32)

                Rounds.TOP16 -> participants
                    .sortedByDescending { it.selectionPoints.values.sum() }
                    .take(16)

                Rounds.TOP8 -> participants
                    .sortedByDescending { it.selectionPoints.values.sum() }
                    .take(8)

                Rounds.TOP4 -> participants
                    .sortedByDescending { it.selectionPoints.values.sum() }
                    .take(4)

                else -> participants
            }

            _currentRoundPairs.value =
                if (firstRound) {
                    createFirstBattlePairs(qualifiedParticipants)
                } else {
                    createBattlePairs(qualifiedParticipants)
                }
        }
    }*/

    fun startFirstRound(
        participants: List<EventParticipants>
    ) {
        val round = when {
            participants.size >= 32 -> Rounds.TOP32
            participants.size >= 16 -> Rounds.TOP16
            participants.size >= 8 -> Rounds.TOP8
            participants.size >= 4 -> Rounds.TOP4
            else -> Rounds.BIG_FINAL
        }

        _currentRound.value = round
        _firstRound.value = round

        setCurrentRound(round.name)

        val qualified = participants
            .sortedByDescending {
                it.selectionPoints.values.sum()
            }
            .take(
                when (round) {
                    Rounds.TOP32 -> 32
                    Rounds.TOP16 -> 16
                    Rounds.TOP8 -> 8
                    Rounds.TOP4 -> 4
                    else -> participants.size
                }
            )

        _currentRoundPairs.value =
            createFirstBattlePairs(qualified)

        _currentPairIndex.value = 0
        setCurrentPairIndex(0)
    }

    private val _littleFinalParticipants =
        MutableStateFlow<List<EventParticipants>>(emptyList())

    private val _bigFinalParticipants =
        MutableStateFlow<List<EventParticipants>>(emptyList())

    private val _bigFinalWinner =
        MutableStateFlow<EventParticipants?>(null)

    private val _bigFinalLoser =
        MutableStateFlow<EventParticipants?>(null)

    /*fun buildNextRound() {

        println("=================================")
        println("BUILD NEXT ROUND")

        val winners = _battleResults.map { it.winner }
        val losers = _battleResults.map { it.looser }

        println("ROUND = ${_currentRound.value.name}")

        winners.forEach {
            println("WINNER = ${it.name}")
        }

        losers.forEach {
            println("LOSER = ${it.name}")
        }

        when (_currentRound.value) {

            // ---------------------------------------------
            // TOP32 -> TOP16
            // TOP16 -> TOP8
            // TOP8 -> TOP4
            // ---------------------------------------------

            Rounds.TOP32,
            Rounds.TOP16,
            Rounds.TOP8 -> {

                val nextRound = when (_currentRound.value) {

                    Rounds.TOP32 -> Rounds.TOP16
                    Rounds.TOP16 -> Rounds.TOP8
                    Rounds.TOP8 -> Rounds.TOP4

                    else -> return
                }

                _currentRound.value = nextRound

                setCurrentRound(nextRound.name)

                _currentRoundPairs.value =
                    createBattlePairs(winners)

                _currentPairIndex.value = 0
                setCurrentPairIndex(0)

                _battleResults.clear()

                println("NEXT ROUND = ${nextRound.name}")
                println("PAIRS = ${_currentRoundPairs.value.size}")
            }


            // ---------------------------------------------
            // TOP4 -> BIG FINAL
            // ---------------------------------------------

            Rounds.TOP4 -> {

                println("TOP4 COMPLETE")

                if (winners.size != 2 || losers.size != 2) {
                    println(
                        "ERROR: TOP4 должен дать 2 победителей и 2 проигравших"
                    )
                    return
                }

                // Сохраняем участников малого финала
                _littleFinalParticipants.value = losers

                println(
                    "LITTLE FINAL PARTICIPANTS = " +
                            losers.map { it.name }
                )

                // Запускаем большой финал
                _currentRound.value = Rounds.BIG_FINAL

                setCurrentRound(
                    Rounds.BIG_FINAL.name
                )

                _currentRoundPairs.value =
                    createBattlePairs(winners)

                _currentPairIndex.value = 0

                setCurrentPairIndex(0)

                _battleResults.clear()

                println(
                    "BIG FINAL PARTICIPANTS = " +
                            winners.map { it.name }
                )
            }


            // ---------------------------------------------
            // BIG FINAL -> LITTLE FINAL
            // ---------------------------------------------

            Rounds.BIG_FINAL -> {

                println("BIG FINAL COMPLETE")

                if (winners.size != 1 || losers.size != 1) {
                    println(
                        "ERROR: BIG FINAL должен дать 1 победителя и 1 проигравшего"
                    )
                    return
                }

                // Сохраняем 1 и 2 место
                _bigFinalWinner.value = winners.first()
                _bigFinalLoser.value = losers.first()

                println(
                    "1 PLACE = ${winners.first().name}"
                )

                println(
                    "2 PLACE = ${losers.first().name}"
                )

                // Запускаем малый финал
                val littleFinalParticipants =
                    _littleFinalParticipants.value

                if (littleFinalParticipants.size != 2) {
                    println(
                        "ERROR: нет двух участников малого финала"
                    )
                    return
                }

                _currentRound.value =
                    Rounds.LITTLE_FINAL

                setCurrentRound(
                    Rounds.LITTLE_FINAL.name
                )

                _currentRoundPairs.value =
                    createBattlePairs(
                        littleFinalParticipants
                    )

                _currentPairIndex.value = 0

                setCurrentPairIndex(0)

                _battleResults.clear()

                println(
                    "LITTLE FINAL PARTICIPANTS = " +
                            littleFinalParticipants.map { it.name }
                )
            }


            // ---------------------------------------------
            // LITTLE FINAL -> FINISH
            // ---------------------------------------------

            Rounds.LITTLE_FINAL -> {

                println("LITTLE FINAL COMPLETE")

                if (winners.size != 1 || losers.size != 1) {
                    println(
                        "ERROR: LITTLE FINAL должен дать 1 победителя и 1 проигравшего"
                    )
                    return
                }

                val thirdPlace = winners.first()
                val fourthPlace = losers.first()

                val firstPlace =
                    _bigFinalWinner.value

                val secondPlace =
                    _bigFinalLoser.value

                println("1 PLACE = ${firstPlace?.name}")
                println("2 PLACE = ${secondPlace?.name}")
                println("3 PLACE = ${thirdPlace.name}")
                println("4 PLACE = ${fourthPlace.name}")

                _winner.value = firstPlace

                _currentRoundPairs.value = emptyList()

                _battleResults.clear()

                // Теперь можно завершать соревнование
                finishEvent()
            }

            else -> {
                println(
                    "BUILD NEXT ROUND: unsupported round = " +
                            _currentRound.value
                )
            }
        }
    }*/

    fun buildNextRound() {

        println("=================================")
        println("BUILD NEXT ROUND")

        val winners = _battleResults.map { it.winner }
        val losers = _battleResults.map { it.looser }

        println("ROUND = ${_currentRound.value.name}")

        winners.forEach {
            println("WINNER = ${it.name}")
        }

        losers.forEach {
            println("LOSER = ${it.name}")
        }

        when (_currentRound.value) {

            // ---------------------------------------------
            // TOP32 -> TOP16
            // TOP16 -> TOP8
            // TOP8 -> TOP4
            // ---------------------------------------------

            Rounds.TOP32,
            Rounds.TOP16,
            Rounds.TOP8 -> {

                val nextRound = when (_currentRound.value) {

                    Rounds.TOP32 -> Rounds.TOP16
                    Rounds.TOP16 -> Rounds.TOP8
                    Rounds.TOP8 -> Rounds.TOP4

                    else -> return
                }

                _currentRound.value = nextRound

                setCurrentRound(nextRound.name)

                _currentRoundPairs.value =
                    createBattlePairs(winners)

                _currentPairIndex.value = 0
                setCurrentPairIndex(0)

                _battleResults.clear()

                println("NEXT ROUND = ${nextRound.name}")
                println("PAIRS = ${_currentRoundPairs.value.size}")
            }


            // ---------------------------------------------
            // TOP4 -> LITTLE FINAL
            // ---------------------------------------------

            Rounds.TOP4 -> {

                println("TOP4 COMPLETE")

                if (winners.size != 2 || losers.size != 2) {
                    println(
                        "ERROR: TOP4 должен дать 2 победителей и 2 проигравших"
                    )
                    return
                }

                // Победители TOP4 будут играть большой финал
                _bigFinalParticipants.value = winners

                // Проигравшие TOP4 играют малый финал
                _littleFinalParticipants.value = losers

                println(
                    "BIG FINAL PARTICIPANTS = " +
                            winners.map { it.name }
                )

                println(
                    "LITTLE FINAL PARTICIPANTS = " +
                            losers.map { it.name }
                )

                // Сначала запускаем МАЛЫЙ ФИНАЛ
                _currentRound.value = Rounds.LITTLE_FINAL

                setCurrentRound(
                    Rounds.LITTLE_FINAL.name
                )

                _currentRoundPairs.value =
                    createBattlePairs(losers)

                _currentPairIndex.value = 0
                setCurrentPairIndex(0)

                _battleResults.clear()

                println(
                    "START LITTLE FINAL = " +
                            losers.map { it.name }
                )
            }


            // ---------------------------------------------
            // LITTLE FINAL -> BIG FINAL
            // ---------------------------------------------

            Rounds.LITTLE_FINAL -> {

                println("LITTLE FINAL COMPLETE")

                if (winners.size != 1 || losers.size != 1) {
                    println(
                        "ERROR: LITTLE FINAL должен дать 1 победителя и 1 проигравшего"
                    )
                    return
                }

                println(
                    "3 PLACE = ${winners.first().name}"
                )

                println(
                    "4 PLACE = ${losers.first().name}"
                )

                // Теперь запускаем большой финал
                val bigFinalParticipants =
                    _bigFinalParticipants.value

                if (bigFinalParticipants.size != 2) {
                    println(
                        "ERROR: нет двух участников большого финала"
                    )
                    return
                }

                _currentRound.value = Rounds.BIG_FINAL

                setCurrentRound(
                    Rounds.BIG_FINAL.name
                )

                _currentRoundPairs.value =
                    createBattlePairs(
                        bigFinalParticipants
                    )

                _currentPairIndex.value = 0
                setCurrentPairIndex(0)

                _battleResults.clear()

                println(
                    "START BIG FINAL = " +
                            bigFinalParticipants.map { it.name }
                )
            }


            // ---------------------------------------------
            // BIG FINAL -> FINISH
            // ---------------------------------------------

            Rounds.BIG_FINAL -> {

                println("BIG FINAL COMPLETE")

                if (winners.size != 1 || losers.size != 1) {
                    println(
                        "ERROR: BIG FINAL должен дать 1 победителя и 1 проигравшего"
                    )
                    return
                }

                val firstPlace = winners.first()
                val secondPlace = losers.first()


                println(
                    "1 PLACE = ${firstPlace.name}"
                )

                println(
                    "2 PLACE = ${secondPlace.name}"
                )


                _winner.value = firstPlace

                _currentRoundPairs.value = emptyList()

                _battleResults.clear()

                // Теперь можно завершать соревнование
                finishEvent()
            }

            else -> {
                println(
                    "BUILD NEXT ROUND: unsupported round = " +
                            _currentRound.value
                )
            }
        }
    }



    fun createFirstBattlePairs(
        list: List<EventParticipants>
    ): List<BattlePair> {

        val sorted = list.sortedByDescending {
            it.selectionPoints.values.sum()
        }

        val pairs = mutableListOf<BattlePair>()

        val half = sorted.size / 2

        for (i in 0 until half) {

            val blue = sorted[sorted.size - 1 - i]
            val red = sorted[i]

            pairs += BattlePair(
                left = blue,   // слева, синий
                right = red    // справа, красный
            )
        }

        return pairs
    }

    fun createBattlePairs(list: List<EventParticipants>): List<BattlePair> {
        val pairs = mutableListOf<BattlePair>()

        // Берём по 2 участника подряд
        for (i in list.indices step 2) {
            if (i + 1 < list.size) {
                pairs += BattlePair(list[i], list[i + 1])
            }
        }
        println("Log: pairs - $pairs")
        return pairs
    }

    fun finishEvent() {
        val currentRound = _firstRound.value ?: return

        // Извлекаем участников из события, используя ID текущего события
        val event = _events.value.firstOrNull { it.id == _currentEventId.value } ?: return
        val participants = event.participants.values.toList()

        // Сортировка по приоритету раунда
        val roundPriority = mapOf(
            "BIG_FINAL" to 1,
            "LITTLE_FINAL" to 2,
            "TOP 8" to 3,
            "TOP 16" to 4,
            "TOP 32" to 5
            // добавьте другие раунды, если они есть
        )

        // Сортируем участников сначала по приоритету раунда, затем по сумме баллов
        val sortedParticipants = participants
            .sortedWith { participant1, participant2 ->
                // Сортируем по приоритету раунда
                val round1Priority =
                    roundPriority[participant1.battlePoints.keys.first()] ?: Int.MAX_VALUE
                val round2Priority =
                    roundPriority[participant2.battlePoints.keys.first()] ?: Int.MAX_VALUE

                // Если раунды одинаковые, сортируем по сумме баллов за этот раунд
                if (round1Priority == round2Priority) {
                    val roundScores1 =
                        participant1.battlePoints[currentRound.name]?.values?.sum()?.toDouble()
                            ?: 0.0
                    val roundScores2 =
                        participant2.battlePoints[currentRound.name]?.values?.sum()?.toDouble()
                            ?: 0.0
                    roundScores2.compareTo(roundScores1)  // Сортируем по убыванию
                } else {
                    round1Priority.compareTo(round2Priority)  // Сортируем по приоритету раунда
                }
            }
            .mapIndexed { index, participant ->
                // Обновляем позицию участника
                participant.copy(battlePosition = index + 1)
            }

        // Диагностика: выводим информацию о том, как сортируются участники
        sortedParticipants.forEach { participant ->
            println("Participant: ${participant.name}, Position: ${participant.battlePosition}, Round: ${currentRound.name}, Scores: ${participant.battlePoints[currentRound.name]}")
        }

        // Обновляем участников в событии с новыми позициями
        _events.value = _events.value.map { event ->
            if (event.id == _currentEventId.value) {
                // Обновляем участников с новыми позициями
                event.copy(participants = sortedParticipants.associateBy { it.userId })
            } else {
                event
            }
        }

        // Извлекаем ID участников и их позиции
        val usersList = sortedParticipants.map { it.userId }
        val battlePositions = sortedParticipants.map { it.battlePosition }

        // Передаем обновленные позиции в метод setBattlePosition
        singletonMainScope.launch {
            mainUseCase.setBattleResult.setBattlePosition(
                eventId = event.id,
                usersList = usersList,
                battlePositions = battlePositions
            )
        }

        // Отправляем результаты в событие
        event.let { sendFinishEvent(it) }
    }


    fun sendFinishEvent(event: EventModel) {
        singletonMainScope.launch {
            mainUseCase.setBattleProtocol.sendBattleProtocol(
                event.participants.values.map { it.toEventParticipantsDomain() },
                event.toEventDomainModel()
            )
        }
    }

    fun finishEvent(event: EventModel) {
        singletonMainScope.launch {
            mainUseCase.setBattleProtocol.sendBattleProtocol(
                event.participants.values.map { it.toEventParticipantsDomain() },
                event.toEventDomainModel()
            )
        }
    }

//<--- Battle Case ---

    //--- UI state --->

    private val _userAvatarOnLoading: MutableStateFlow<Boolean> = MutableStateFlow(false)
    val userAvatarOnLoading: StateFlow<Boolean> = _userAvatarOnLoading

    private val _screenWidth = MutableStateFlow(379)
    val screenWidth: StateFlow<Int> = _screenWidth

    fun setScreenWidth(width: Int) {
        _screenWidth.value = width
    }

    private val _screenHeight = MutableStateFlow(640)
    val screenHeight: StateFlow<Int> = _screenHeight

    fun setScreenHeight(height: Int) {
        _screenHeight.value = height
    }

    var elementTabPosition by mutableStateOf(0)

    var element by mutableStateOf(ElementModel())
        private set
    var elementRating by mutableStateOf(0)
        private set

    var checkedState by mutableStateOf(true)
        private set

    fun changeCheckedState() {
        checkedState = !checkedState
    }

    fun addElement(currentElement: ElementModel) {
        element = currentElement
    }

    fun addElementRating(rating: Int) {
        elementRating = rating
    }

    fun uploadNewUserAvatar(email: String, bytes: ByteArray) {
        _userAvatarOnLoading.value = true
        println(" uploadNewUserAvatar bytes: $bytes")
        singletonMainScope.launch {
            mainUseCase.uploadAvatar.uploadAvatar(email, bytes)
                .onSuccess { data, code ->
                    _userAvatarOnLoading.value = false
                }.onFail { message, code ->
                    _userAvatarOnLoading.value = false
                }.onException { message, code ->
                    _userAvatarOnLoading.value = false
                }
        }
    }

    //<--- UI state --->


    init {
        loadData()
    }


    //--- Culc pupil rating case--->

    fun culcPupilRating() {
        _clickedPupil.value?.let { pupil ->
            // Растяжка
            val stretchRating = (pupil.twine + pupil.fold + pupil.butterfly + pupil.shoulders) / 4.0
            pupil.strechingRating = stretchRating.let { (it * 100).roundToInt() / 100.0 }

            // Подкачка
            val ofpRating =
                (pupil.angle + pupil.bridge + pupil.finger + pupil.handstand + pupil.horizont + pupil.pushUps + pupil.pressUpHandstand + pupil.sitUps + pupil.handJump + pupil.handWalk + pupil.handTouchLegs + pupil.turtleToHandstand) / 12.0
            pupil.ofpRating = ofpRating.let { (it * 100).roundToInt() / 100.0 }

            // Стойки
            val freezeRating =
                ((pupil.babyfrezze * 0.5 + pupil.turtlefrezze * 0.75 + pupil.shoulderfrezze * 0.5 + pupil.headfrezze * 0.5 + pupil.headhollowbackfrezze * 0.75 + pupil.hollowbackfrezze + pupil.invertfrezze + pupil.onehandfrezze + pupil.chairfrezze + pupil.elbowfrezze + pupil.airBabyfrezze) / 9).let { (it * 100).roundToInt() / 100.0 }
            pupil.freezeRating = freezeRating.let { (it * 100).roundToInt() / 100.0 }

            // Powermove
            val powerMoveRating =
                (pupil.airflare + pupil.backspin * 0.2 + pupil.cricket * 0.6 + pupil.elbowairflare + pupil.flare * 0.8 + pupil.jackhammer * 0.8 + pupil.halo * 0.8 + pupil.headspin * 0.4 + pupil.munchmill * 0.7 + pupil.double * 0.8 + pupil.grabmill * 0.7 + pupil.superman * 0.7 + pupil.tombstone * 0.8 + pupil.windmillToHandstand + pupil.ninetyNine + pupil.swipes * 0.6 + pupil.turtle * 0.4 + pupil.ufo + pupil.web * 0.5 + pupil.windmill * 0.4 + pupil.wolf * 0.8) / 14
            pupil.powermoveRating = powerMoveRating.let { (it * 100).roundToInt() / 100.0 }

            // Общий рейтинг
            pupil.rating =
                ((pupil.freezeRating + pupil.ofpRating * 0.6 + pupil.strechingRating * 0.4 + pupil.powermoveRating * 2) / 4).let { (it * 100).roundToInt() / 100.0 }

            recalculateAllPositions()

        }
    }

    fun recalculateAllPositions() {

        tmpPupils = _pupils.value.toMutableList()

        tmpPupils.forEach { println("LOG: ${it.name} curPos: ${it.currentPosition} newPos: ${it.newPosition}") }

        _pupils.value = _pupils.value.map { pupil ->
            pupil.copy(currentPosition = pupil.newPosition)
        }

        _clickedPupil.value?.let { it.currentPosition = it.newPosition }

        //    _pupils.value.forEach { println("${it.name} curPos: ${it.currentPosition} newPos: ${it.newPosition}") }


        val allPupils = _pupils.value.toMutableList()

        // Добавляем (или обновляем) отредактированного ученика
        _clickedPupil.value?.let { updated ->
            val existingIndex = allPupils.indexOfFirst { it.id == updated.id }
            if (existingIndex != -1) {
                allPupils[existingIndex] = updated
            } else {
                allPupils.add(updated)
            }
        }

        // Сортировка по рейтингу (по убыванию)
        val sorted = allPupils.sortedByDescending { it.rating }

        // sorted.forEach { println("${it.name} curPos: ${it.currentPosition} newPos: ${it.newPosition}") }


        // Присваиваем новую позицию каждому
        val updatedList = sorted.mapIndexed { index, pupil ->
            pupil.copy(newPosition = index + 1)
        }

        //   updatedList.forEach { println("update ${it.name} curPos: ${it.currentPosition} newPos: ${it.newPosition}") }


        // Обновляем список
        _pupils.value = updatedList

    }

    fun updatePositionsAndSave() {
        culcPupilRating()
        val changedUsers = emptyList<PupilModel>().toMutableList()
        // val changedUsers = _pupils.value.filter { it.newPosition != it.currentPosition }
        val tmpMap = tmpPupils.associateBy { it.id }

        _pupils.value.forEach { pupil ->
            val tmp = tmpMap[pupil.id]
            if (tmp != null) {
                println("LOG: Change - ${pupil.name} newPosition: ${pupil.newPosition} | TMP - ${tmp.name} curPosition: ${tmp.newPosition}")
                if (pupil.newPosition != tmp.newPosition || tmp.newPosition != tmp.currentPosition) {
                    changedUsers.add(pupil)
                }
            }
        }
        if (changedUsers.isEmpty()) changedUsers.add(clickedPupil.value!!)

        changedUsers.forEach { println("LOG: ChangeUsers - ${it.name} current Position: ${it.currentPosition} newPosition: ${it.newPosition}") }
        // Сохраняем пользователя (вызов suspend, надо запускать в coroutine)
        singletonMainScope.launch {
            mainUseCase.savePupil.savePupil(changedUsers.map { it.toPupilDomainModel() })  // Преобразуй в нужный формат
            //    _clickedPupil.value?.let { mainUseCase.savePupil.savePupil(it.toPupilDomainModel()) }

        }
    }
    //<--- Culc pupil rating case---

    //--- Registration to Battle Case --->

    fun registerToEvent(event: EventModel) {
        singletonMainScope.launch {
            _currentPupil.value?.let {
                mainUseCase.registerToEvent.registerToEvent(
                    it.toPupilDomainModel(),
                    event.toEventDomainModel()
                )
            }  // Преобразуй в нужный формат
        }
    }

    fun unregisterToEvent(event: EventModel) {
        singletonMainScope.launch {
            _currentPupil.value?.let {
                mainUseCase.unregisterFromEvent.unregisterFromEvent(
                    it.toPupilDomainModel(),
                    event.toEventDomainModel()
                )
            }  // Преобразуй в нужный формат
        }
    }

    fun registerJudgeToEvent(event: EventModel, judge: JudgeModel) {
        singletonMainScope.launch {
            mainUseCase.registerJudgeToEvent.registerJudgeToEvent(
                judge.toJudgeDomainModel(),
                event.toEventDomainModel()
            )
        }
    }

    fun unregisterJudgeFromEvent(event: EventModel, judge: JudgeModel) {
        singletonMainScope.launch {
            mainUseCase.unregisterJudgeToEvent.unregisterJudgeToEvent(
                judge.toJudgeDomainModel(),
                event.toEventDomainModel()
            )
        }
    }


    //<--- Registration to Battle Case ---

    suspend fun saveCurrentFcmToken(authUid: String) {
        try {
            println("FCM_DEBUG: requesting token")

            val token = fcmTokenProvider.getToken()

            println("FCM_DEBUG: token received")

            mainUseCase.saveFcmToken(
                authUid = authUid,
                token = token
            )

            println("FCM_DEBUG: token saved successfully")
        } catch (e: Exception) {
            println("FCM_DEBUG: failed to save token: ${e.message}")
            throw e
        }
    }
    fun loadData() {
        singletonMainScope.launch {

            val eventsList = singletonMainScope.launch {
                mainUseCase.getEvents.getEvents().collect { eventsList ->
                    val newList = eventsList.map { it.toEventModel() }

                    println("EQUALS: ${newList == _events.value}") // 👈 ключ
                    println("REF: ${newList === _events.value}")   // на всякий

                    _events.value = newList
                    println("Log: events change - ${_events.value}")
                }
            }

            val pupils = singletonMainScope.launch {
                mainUseCase.getAllPupils.getAllPupils().collect { pupilsList ->
                    _pupils.value = pupilsList
                        .map { it.toPupilModel() }
                        .sortedByDescending { it.rating }
                }
            }

            val freezeElements = singletonMainScope.launch {
                mainUseCase.getFreezeElements.getFreezeElements().collect { freezeElements ->
                    _freezeElements.value = freezeElements
                        .map { it.toElementModel() }
                }
            }

            val powerElements = singletonMainScope.launch {
                mainUseCase.getPowerElements.getPowerElements().collect { powerElements ->
                    _powerElements.value = powerElements
                        .map { it.toElementModel() }
                }
            }

            val ofpElements = singletonMainScope.launch {
                mainUseCase.getOfpElements.getOfpElements().collect { ofpElements ->
                    _ofpElements.value = ofpElements
                        .map { it.toElementModel() }
                }
            }

            val stretchElements = singletonMainScope.launch {
                mainUseCase.getStretchElements.getStretchElements().collect { stretchElements ->
                    _stretchElements.value = stretchElements
                        .map { it.toElementModel() }
                }
            }

            val footWorkElements = singletonMainScope.launch {
                mainUseCase.getFootWorkElements.getFootWorkElements().collect { footWorkElements ->
                    _footWorkElements.value = footWorkElements
                        .map { it.toElementModel() }
                }
            }

            val bboysList = singletonMainScope.launch {
                mainUseCase.getBboysList.getBboysList().collect { bboysList ->
                    _bboysList.value = bboysList
                        .map { it.toBboyModel() }
                        .sortedBy { it.rating.toInt() }
                }
            }

            val judgesList = singletonMainScope.launch {
                mainUseCase.getJudges.getJudges().collect { judgesList ->
                    _judges.value = judgesList
                        .map { it.toJudgeModel() }
                }
            }

            val list = listOf(
                eventsList,
                pupils,
                freezeElements,
                powerElements,
                ofpElements,
                stretchElements,
                footWorkElements,
                bboysList,
                judgesList
            )
            val collection: Collection<Job> = list
            collection.joinAll()
        }
    }
}