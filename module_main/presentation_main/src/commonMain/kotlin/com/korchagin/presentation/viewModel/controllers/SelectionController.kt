package com.korchagin.presentation.viewModel.controllers

import com.korchagin.domain_main.SelectionUseCases
import com.korchagin.presentation.models.JudgeModel
import com.korchagin.presentation.models.battle.EventModel
import com.korchagin.presentation.models.battle.EventParticipants
import com.korchagin.presentation.models.battle.isComplete
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.combine
import kotlinx.coroutines.flow.distinctUntilChanged
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.stateIn
import kotlinx.coroutines.launch

class SelectionController(
    private val selectionUseCase: SelectionUseCases,
    private val eventsController: EventsController,
    private val currentEventId: StateFlow<String?>,
    private val selectedJudge: StateFlow<JudgeModel?>,
    private val scope: CoroutineScope
) {

    private val events = eventsController.events

    // Текущее событие
    private val currentEventFlow: Flow<EventModel?> = combine(
        events,
        currentEventId
    ) { eventList, currentId ->
        eventList.firstOrNull { it.id == currentId }
            ?: eventList.firstOrNull()
    }

    val currentEvent = combine(
        events,
        currentEventId
    ) { eventList, currentId ->
        eventList.firstOrNull { it.id == currentId }
    }.distinctUntilChanged()

    // Участники текущего события
    val currentEventParticipants: StateFlow<List<EventParticipants>> =
        currentEventFlow
            .map { event ->
                event?.participants?.values?.toList() ?: emptyList()
            }
            .stateIn(
                scope = scope,
                started = SharingStarted.Eagerly,
                initialValue = emptyList()
            )

    // Текущая группа отбора
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

    // Все группы отбора
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

    // Последняя ли группа
    val isLastSelectionGroup =
        currentEvent.map { event ->
            if (event == null) {
                false
            } else {
                val totalGroups =
                    (event.participants.size + 3) / 4

                event.currentSelectionGroup >= totalGroups - 1
            }
        }

    // Завершён ли весь отбор
    val isSelectionComplete =
        currentEvent
            .map { event ->
                event?.participants?.values?.all { participant ->
                    participant.isComplete(event.judges.keys)
                } ?: false
            }
            .distinctUntilChanged()

    // Все ли участники получили оценки от всех судей
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

    // Завершено ли голосование за текущую группу
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

                    val point = updatedParticipant
                        ?.selectionPoints
                        ?.get(judge.id)

                    point != null && point > 0
                }
            }
        }.distinctUntilChanged()

    // Установка оценки участнику
    fun setSelectionPoints(
        participantId: String,
        point: Float
    ) {
        val judgeId = selectedJudge.value?.id ?: return
        val eventId = currentEventId.value ?: return

        eventsController.updateEvents { eventList ->
            eventList.map { event ->
                if (event.id != eventId) return@map event

                val updatedParticipants =
                    event.participants.toMutableMap()

                val participant =
                    updatedParticipants[participantId]
                        ?: return@map event

                val updatedSelectionPoints =
                    participant.selectionPoints.toMutableMap().apply {
                        put(judgeId, point.toDouble())
                    }

                updatedParticipants[participantId] =
                    participant.copy(
                        selectionPoints = updatedSelectionPoints
                    )

                event.copy(
                    participants = updatedParticipants
                )
            }
        }
    }

    // Переход к следующей группе
    fun nextSelectionGroup() {
        val eventId = currentEventId.value ?: return

        val event = events.value
            .firstOrNull { it.id == eventId }
            ?: return

        val nextGroup = event.currentSelectionGroup + 1

        eventsController.updateEvents { eventList ->
            eventList.map {
                if (it.id == eventId) {
                    it.copy(currentSelectionGroup = nextGroup)
                } else {
                    it
                }
            }
        }

        scope.launch {
            selectionUseCase.setCurrentSelectionGroup
                .setCurrentSelectionGroup(eventId, nextGroup)
        }
    }

    // Отправка результатов отбора
    fun sendSelectionResult() {
        val judgeId = selectedJudge.value?.id ?: return
        val eventId = currentEventId.value ?: return

        val event = events.value
            .firstOrNull { it.id == eventId }
            ?: return

        val group = event.participants.values
            .sortedBy { it.selectionOrder }
            .chunked(4)
            .getOrNull(event.currentSelectionGroup)
            ?: return

        scope.launch {
            selectionUseCase.setSelectionResult.setSelectionResults(
                usersList = group.map { it.userId },
                pointsList = group.map {
                    it.selectionPoints[judgeId] ?: 0.0
                },
                eventId = eventId,
                judgeId = judgeId
            )
        }
    }
}
