package com.korchagin.presentation.viewModel.controllers

import com.korchagin.domain_main.EventUseCases
import com.korchagin.presentation.models.battle.EventModel
import com.korchagin.presentation.models.battle.toEventModel
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

class EventsController(
    private val eventsUseCase: EventUseCases,
    private val scope: CoroutineScope
) {
    private val _events = MutableStateFlow<List<EventModel>>(emptyList())
    val events = _events.asStateFlow()

    fun updateEvents(update: (List<EventModel>) -> List<EventModel>) {
        _events.value = update(_events.value)
    }

    fun loadEvents() {
        scope.launch {
            eventsUseCase.getEvents.getEvents().collect { eventsList ->
                val newList = eventsList.map { it.toEventModel() }

                println("EQUALS: ${newList == _events.value}")
                println("REF: ${newList === _events.value}")

                _events.value = newList

                println("Log: events change - ${_events.value}")
            }
        }
    }
}