package com.korchagin.data.repository

import com.korchagin.data.models.BboyEntry
import com.korchagin.data.models.CoachEntry
import com.korchagin.data.models.ElementEntry
import com.korchagin.data.models.EventEntry
import com.korchagin.data.models.EventParticipantsEntry
import com.korchagin.data.models.JudgeEntry
import com.korchagin.data.models.UserEntry
import com.korchagin.module_common.Response
import kotlinx.coroutines.flow.Flow

interface UserRepository {
    suspend fun getEvents(): Flow<List<EventEntry>>
    suspend fun getCoaches(): Flow<List<CoachEntry>>
    suspend fun getJudges(): Flow<List<JudgeEntry>>
    suspend fun getUsers(): Flow<List<UserEntry>>
    suspend fun getUserById(id: String): Flow<UserEntry>
    suspend fun getFreezeElements(): Flow<List<ElementEntry>>
    suspend fun getPowerElements(): Flow<List<ElementEntry>>
    suspend fun getOfpElements(): Flow<List<ElementEntry>>
    suspend fun getStretchElements(): Flow<List<ElementEntry>>
    suspend fun getFootWorkElements(): Flow<List<ElementEntry>>
    suspend fun getBboysList(): Flow<List<BboyEntry>>
    suspend fun createNewPupil(email: String, name: String, coach: List<String>)

    suspend fun updateAvatar(email: String, data: ByteArray):Response<Unit>

    suspend fun updatePupil(newUserEntry: UserEntry): Response<Unit>

    suspend fun updatePupils(newUserEntries: List<UserEntry>): Response<Unit>

    suspend fun registerToEvent(pupil: UserEntry, event: EventEntry): Boolean

    suspend fun unregisterFromEvent(pupil: UserEntry, event: EventEntry): Boolean

    suspend fun getEventParticipants(event: EventEntry): Flow<List<EventParticipantsEntry>>

    suspend fun sendBattleProtocol(paricipants: List<EventParticipantsEntry>, event: EventEntry): Boolean

    suspend fun judgeRegister(judge: JudgeEntry, event: EventEntry): Boolean

    suspend fun judgeUnregister(judge: JudgeEntry, event: EventEntry): Boolean

    suspend fun setSelectionPoints( eventId: String, usersList: List<String>, judgeId: String, pointsList: List<Double>)

    suspend fun setBattlePoints( eventId: String, usersList: List<String>, judgeId: String, pointsList: List<Int>, round: String)

    suspend fun observeParticipants(eventId: String): Flow<List<EventParticipantsEntry>>

  //  fun observeEventsRealtime():Flow<List<EventEntry>>

}

