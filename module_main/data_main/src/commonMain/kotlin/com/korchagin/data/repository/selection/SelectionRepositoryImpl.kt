package com.korchagin.data.repository.selection

import dev.gitlive.firebase.Firebase
import dev.gitlive.firebase.database.database
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.channelFlow

class SelectionRepositoryImpl : SelectionRepository {

    private val eventsDB by lazy {
        Firebase.database.reference("Events")
    }

    override suspend fun setSelectionPoints(
        eventId: String,
        usersList: List<String>,
        judgeId: String,
        pointsList: List<Double>
    ) {
        usersList.forEachIndexed { index, userId ->
            eventsDB
                .child(eventId)
                .child("participants")
                .child(userId)
                .child("selectionPoints")
                .child(judgeId)
                .setValue(pointsList[index])
        }
    }

    override fun getSelectionPoints(
        eventId: String,
        pupilId: String,
        judgeId: String
    ): Flow<Double> = channelFlow {

        eventsDB
            .child(eventId)
            .child("participants")
            .child(pupilId)
            .child("selectionPoints")
            .child(judgeId)
            .valueEvents
            .collect { snapshot ->
                send(snapshot.children.firstOrNull()?.value<Double>() ?: 0.0)
            }
    }

    override suspend fun setCurrentSelectionGroup(
        eventId: String,
        selectionGroup: Int
    ) {
        eventsDB
            .child(eventId)
            .child("currentSelectionGroup")
            .setValue(selectionGroup)
    }
}