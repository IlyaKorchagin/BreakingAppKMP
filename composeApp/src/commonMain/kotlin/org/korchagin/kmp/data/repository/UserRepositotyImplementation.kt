package org.korchagin.kmp.data.repository


import dev.gitlive.firebase.Firebase
import dev.gitlive.firebase.database.database
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.channelFlow
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import org.korchagin.kmp.data.models.PupilEntry


class UserRepositotyImplementation: UserRepository {

    private val database by lazy { Firebase.database.reference("Pupils") }

    override fun getUsers(): Flow<List<PupilEntry>> = channelFlow {
        database.valueEvents.collect { event ->
            val users = event.children.mapNotNull {
                try {
                    it.value<PupilEntry>()
                } catch (e: Exception) {
                    println("Error decoding user: ${e.message}")
                    null
                }
            }
            send(users)
        }
    }


    override fun getUserById(id: String): Flow<PupilEntry?> = channelFlow {
        coroutineScope {
            database
                .orderByChild("email")
                .equalTo(id)
                .valueEvents
                .onEach { snapshot ->
                    val user = snapshot.children.firstOrNull()?.value<PupilEntry>()
                    println("Found user: ${user?.name}")
                    trySend(user)
                }
                .launchIn(this)
        }
    }
}
