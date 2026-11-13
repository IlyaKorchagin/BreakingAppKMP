package com.korchagin.presentation.viewModel

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.korchagin.domain_main.AdditionalUseCases
import com.korchagin.domain_main.BattleUseCases
import com.korchagin.domain_main.ElementUseCases
import com.korchagin.domain_main.EventUseCases
import com.korchagin.domain_main.JudgeUseCases
import com.korchagin.domain_main.PupilUseCases
import com.korchagin.domain_main.SelectionUseCases
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
import com.korchagin.presentation.models.battle.toEventDomainModel
import com.korchagin.presentation.models.battle.toEventParticipantsDomain
import com.korchagin.presentation.models.toCoachModel
import com.korchagin.presentation.models.toJudgeDomainModel
import com.korchagin.presentation.models.toPupilDomainModel
import com.korchagin.presentation.models.toPupilModel
import com.korchagin.presentation.notifications.FcmTokenProvider
import com.korchagin.presentation.viewModel.controllers.BattleController
import com.korchagin.presentation.viewModel.controllers.BboysController
import com.korchagin.presentation.viewModel.controllers.ElementsController
import com.korchagin.presentation.viewModel.controllers.EventsController
import com.korchagin.presentation.viewModel.controllers.JudgesController
import com.korchagin.presentation.viewModel.controllers.PupilsController
import com.korchagin.presentation.viewModel.controllers.SelectionController
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.flowOf
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

class MainViewModel(
    private val elementUseCases: ElementUseCases,
    private val judgesUseCases: JudgeUseCases,
    private val pupilUseCases: PupilUseCases,
    private val eventsUseCases: EventUseCases,
    private val selectionUseCases: SelectionUseCases,
    private val battleUseCases: BattleUseCases,
    private val additionalUseCases: AdditionalUseCases,
    private val fcmTokenProvider: FcmTokenProvider,
) : ViewModel() {

    private val singletonMainScope = CoroutineScope(Dispatchers.Main + SupervisorJob())

    //--- Pupils case --->

    private val pupilsController = PupilsController(
        pupilsUseCases = pupilUseCases,
        scope = singletonMainScope
    )

    val pupils = pupilsController.pupils
    val clickedPupil = pupilsController.clickedPupil

    private val _currentPupil = MutableStateFlow<PupilModel?>(null)
    val currentPupil: StateFlow<PupilModel?> = _currentPupil

    fun updateClickedPupil(pupil: PupilModel) {
        pupilsController.updateClickedPupil(pupil)
    }

    fun setClickedPupil(pupil: PupilModel?) {
        pupilsController.setClickedPupil(pupil)
    }

    fun updatePositionsAndSave() {
        pupilsController.updatePositionsAndSave()
    }

    private val _coaches = MutableStateFlow<List<CoachModel>>(emptyList())
    val coaches: StateFlow<List<CoachModel>> = _coaches

    private val judgesController = JudgesController(
        judgeUseCases = judgesUseCases,
        scope = viewModelScope
    )

    val judges = judgesController.judges

    private val _selectedJudge = MutableStateFlow<JudgeModel?>(null)
    var selectedJudge: StateFlow<JudgeModel?> = _selectedJudge

    fun setJudge(judge: JudgeModel?) {
        _selectedJudge.value = judge
    }


    private val elementsController = ElementsController(
        elementUseCases = elementUseCases,
        scope = viewModelScope
    )

    val freezeElements = elementsController.freezeElements
    val powerElements = elementsController.powerElements
    val ofpElements = elementsController.ofpElements
    val stretchElements = elementsController.stretchElements
    val footWorkElements = elementsController.footWorkElements


    fun loadCurrentUser(currentUser: String) {
        singletonMainScope.launch {
            pupilUseCases.getPupilById.getAllPupils(currentUser).collect {
                _currentPupil.value = it.toPupilModel()
            }
        }
    }

    fun loadCoachesList() {
        singletonMainScope.launch {
            additionalUseCases.getCoaches.getCoaches().collect { coachesList ->
                _coaches.value = coachesList
                    .map { it.toCoachModel() }
            }
        }
    }

    //<--- Pupils case ---


    //--- Hall of Fame case --->

    private val bboysController = BboysController(
        additionalUseCases = additionalUseCases,
        scope = viewModelScope
    )

    val bboysList = bboysController.bboysList
    var bboy by mutableStateOf(BboyModel())
        private set

    fun addBboy(bboy: BboyModel) {
        this.bboy = bboy
    }

    //<--- Hall of Fame case --->


    //--- Battle case --->

    private val eventsController = EventsController(
        eventsUseCase = eventsUseCases,
        scope = viewModelScope
    )

    val events = eventsController.events

    private val _currentEventId = MutableStateFlow<String?>(null)
    val currentEventId = _currentEventId.asStateFlow()

    private val selectionController = SelectionController(
        selectionUseCase = selectionUseCases,
        eventsController = eventsController,
        currentEventId = currentEventId,
        selectedJudge = selectedJudge,
        scope = singletonMainScope
    )

    val currentEventParticipants =
        selectionController.currentEventParticipants

    val currentEvent =
        selectionController.currentEvent

    val currentSelectionGroup =
        selectionController.currentSelectionGroup

    val allSelectionGroups =
        selectionController.allSelectionGroups

    val isLastSelectionGroup =
        selectionController.isLastSelectionGroup

    val isSelectionComplete =
        selectionController.isSelectionComplete

    val isSelectionFinished =
        selectionController.isSelectionFinished

    val isCurrentSelectionGroupComplete =
        selectionController.isCurrentSelectionGroupComplete

    fun setSelectionPoints(participantId: String, point: Float) =
        selectionController.setSelectionPoints(participantId, point)

    fun nextSelectionGroup() =
        selectionController.nextSelectionGroup()

    fun sendSelectionResult() =
        selectionController.sendSelectionResult()

    private val battleController = BattleController(
        currentEvent = currentEvent
    )

    // Пары
    private val _currentRoundPairs
        get() = battleController._currentRoundPairs

    val currentRoundPairs = battleController.currentRoundPairs

    // Раунды
    private val _currentRound
        get() = battleController._currentRound

    val currentRound = battleController.currentRound

    private val _firstRound
        get() = battleController._firstRound

    val firstRound = battleController.firstRound

    // Индекс пары
    private val _currentPairIndex
        get() = battleController._currentPairIndex

    val currentPairIndex = battleController.currentPairIndex

    // Результаты
    private val _battleResults
        get() = battleController._battleResults

    private val littleFinal
        get() = battleController.littleFinal

    private val bigFinal
        get() = battleController.bigFinal

    // Победитель и финалисты
    private val _winner
        get() = battleController._winner

    val winner = battleController.winner

    private val _littleFinalParticipants
        get() = battleController._littleFinalParticipants

    private val _bigFinalParticipants
        get() = battleController._bigFinalParticipants

    private val _bigFinalWinner
        get() = battleController._bigFinalWinner

    private val _bigFinalLoser
        get() = battleController._bigFinalLoser

    // Оценки
    private val _battlePoints
        get() = battleController._battlePoints

    val battlePoints = battleController.battlePoints

    val isFullBattleRoundComplete =
        battleController.isFullBattleRoundComplete

    val isCurrentBattleComplete =
        battleController.isCurrentBattleComplete

    fun setCurrentEvent(eventId: String) {
        _currentEventId.value = eventId
    }


    fun getSelectionPoints(
        pupilId: String,
        judgeId: String?
    ): Flow<Double> {


        val eventId = _currentEventId.value ?: return flowOf(0.0)
        val safeJudgeId = judgeId ?: return flowOf(0.0)

        return selectionUseCases
            .getSelectionPoints
            .getSelectionPoints(eventId, pupilId, safeJudgeId)

    }





    fun EventParticipants.isBattleComplete(judges: Set<String>, round: String): Boolean {
        // Проверяем, что для каждого судьи есть оценка на указанном круге
        return judges.all { judgeId ->
            (battlePoints[round]?.containsKey(judgeId) == true) &&
                    (battlePoints[round]?.get(judgeId) ?: 0) > 0
        }
    }




    fun getJudgeResults(
        pair: BattlePair
    ): List<JudgeResult> {

        val round = _currentRound.value.name

        val event = events.value
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


    fun setCurrentRound(round: String) {
        val eventId = _currentEventId.value ?: return

        singletonMainScope.launch {
            battleUseCases.setCurrentRound.setCurrentRound(eventId, round)
        }
    }


    val currentPairIndexForUser: Flow<Int> =
        currentEvent
            .map { event ->
                event?.currentPairIndex ?: 0
            }

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

            battleUseCases.setBattleResult.setBattleResult(
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
            eventsController.updateEvents { events ->

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
            battleUseCases.setCurrentPairIndex.setCurrentPairIndex(
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
        val currentRound = _firstRound.value
        val eventId = _currentEventId.value ?: return

        // Получаем текущее событие
        val event = events.value.firstOrNull { it.id == eventId }
            ?: return

        // Получаем участников
        val participants = event.participants.values.toList()

        // Приоритет раундов
        val roundPriority = mapOf(
            "BIG_FINAL" to 1,
            "LITTLE_FINAL" to 2,
            "TOP 8" to 3,
            "TOP 16" to 4,
            "TOP 32" to 5
        )

        // Сортируем участников
        val sortedParticipants = participants
            .sortedWith { participant1, participant2 ->

                val round1Priority =
                    roundPriority[participant1.battlePoints.keys.firstOrNull()]
                        ?: Int.MAX_VALUE

                val round2Priority =
                    roundPriority[participant2.battlePoints.keys.firstOrNull()]
                        ?: Int.MAX_VALUE

                if (round1Priority == round2Priority) {
                    val roundScores1 =
                        participant1.battlePoints[currentRound.name]
                            ?.values?.sum()?.toDouble() ?: 0.0

                    val roundScores2 =
                        participant2.battlePoints[currentRound.name]
                            ?.values?.sum()?.toDouble() ?: 0.0

                    roundScores2.compareTo(roundScores1)
                } else {
                    round1Priority.compareTo(round2Priority)
                }
            }
            .mapIndexed { index, participant ->
                participant.copy(battlePosition = index + 1)
            }

        // Диагностика
        sortedParticipants.forEach { participant ->
            println(
                "Participant: ${participant.name}, " +
                        "Position: ${participant.battlePosition}, " +
                        "Round: ${currentRound.name}, " +
                        "Scores: ${participant.battlePoints[currentRound.name]}"
            )
        }

        // Обновляем участников в EventsController
        val updatedEvent = event.copy(
            participants = sortedParticipants.associateBy { it.userId }
        )

        eventsController.updateEvents { events ->
            events.map {
                if (it.id == eventId) updatedEvent else it
            }
        }

        // Извлекаем ID участников и позиции
        val usersList = sortedParticipants.map { it.userId }
        val battlePositions = sortedParticipants.map { it.battlePosition }

        // Сохраняем позиции
        singletonMainScope.launch {
            battleUseCases.setBattleResult.setBattlePosition(
                eventId = eventId,
                usersList = usersList,
                battlePositions = battlePositions
            )
        }

        // Отправляем протокол с уже обновлёнными участниками
        sendFinishEvent(updatedEvent)
    }


    fun sendFinishEvent(event: EventModel) {
        singletonMainScope.launch {
            battleUseCases.setBattleProtocol.sendBattleProtocol(
                event.participants.values.map { it.toEventParticipantsDomain() },
                event.toEventDomainModel()
            )
        }
    }

    fun finishEvent(event: EventModel) {
        singletonMainScope.launch {
            battleUseCases.setBattleProtocol.sendBattleProtocol(
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
            pupilUseCases.uploadAvatar.uploadAvatar(email, bytes)
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
    private val mainDataController = MainDataController(
        pupilsController,
        eventsController,
        elementsController,
        bboysController,
        judgesController
    )

    init {
        loadData()
    }


    //--- Registration to Battle Case --->

    fun registerToEvent(event: EventModel) {
        singletonMainScope.launch {
            _currentPupil.value?.let {
                eventsUseCases.registerToEvent.registerToEvent(
                    it.toPupilDomainModel(),
                    event.toEventDomainModel()
                )
            }  // Преобразуй в нужный формат
        }
    }

    fun unregisterToEvent(event: EventModel) {
        singletonMainScope.launch {
            _currentPupil.value?.let {
                eventsUseCases.unregisterFromEvent.unregisterFromEvent(
                    it.toPupilDomainModel(),
                    event.toEventDomainModel()
                )
            }  // Преобразуй в нужный формат
        }
    }

    fun registerJudgeToEvent(event: EventModel, judge: JudgeModel) {
        singletonMainScope.launch {
            judgesUseCases.registerJudgeToEvent.registerJudgeToEvent(
                judge.toJudgeDomainModel(),
                event.toEventDomainModel()
            )
        }
    }

    fun unregisterJudgeFromEvent(event: EventModel, judge: JudgeModel) {
        singletonMainScope.launch {
            judgesUseCases.unregisterJudgeToEvent.unregisterJudgeToEvent(
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

            additionalUseCases.saveFcmToken(
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
            mainDataController.loadData()
        }
    }
}