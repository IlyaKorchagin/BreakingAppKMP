package com.korchagin.data.repository.events

import com.korchagin.data.models.EventEntry
import com.korchagin.data.models.EventParticipantsEntry
import com.korchagin.data.models.UserEntry
import kotlinx.coroutines.flow.Flow

interface EventRepository {
    suspend fun getEvents(): Flow<List<EventEntry>>
    suspend fun registerToEvent(pupil: UserEntry, event: EventEntry): Boolean
    suspend fun unregisterFromEvent(pupil: UserEntry, event: EventEntry): Boolean
    suspend fun getEventParticipants(event: EventEntry): Flow<List<EventParticipantsEntry>>
    suspend fun observeParticipants(eventId: String): Flow<List<EventParticipantsEntry>>
}