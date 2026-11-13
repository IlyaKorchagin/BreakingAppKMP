package com.korchagin.data.repository.elements

import com.korchagin.data.models.ElementEntry
import dev.gitlive.firebase.Firebase
import dev.gitlive.firebase.database.database
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.channelFlow

class ElementRepositoryImpl : ElementRepository {

    private val freezeDB by lazy {
        Firebase.database.reference("Freeze")
    }

    private val powerDB by lazy {
        Firebase.database.reference("PowerMove")
    }

    private val ofpDB by lazy {
        Firebase.database.reference("OFP")
    }

    private val stretchDB by lazy {
        Firebase.database.reference("Stretch")
    }

    private val footWorkDB by lazy {
        Firebase.database.reference("Footwork")
    }

    override suspend fun getFreezeElements(): Flow<List<ElementEntry>> = channelFlow {
        freezeDB.valueEvents.collect { freeze ->
            val freezeElements = freeze.children.mapNotNull {
                try {
                    it.value<ElementEntry>()
                } catch (e: Exception) {
                    println("Error decoding user: ${e.message}")
                    null
                }
            }
            send(freezeElements)
        }
    }

    override suspend fun getPowerElements(): Flow<List<ElementEntry>> = channelFlow {
        powerDB.valueEvents.collect { power ->
            val powerElements = power.children.mapNotNull {
                try {
                    it.value<ElementEntry>()
                } catch (e: Exception) {
                    println("Error decoding user: ${e.message}")
                    null
                }
            }
            send(powerElements)
        }
    }

    override suspend fun getOfpElements(): Flow<List<ElementEntry>> = channelFlow {
        ofpDB.valueEvents.collect { ofp ->
            val ofpElements = ofp.children.mapNotNull {
                try {
                    it.value<ElementEntry>()
                } catch (e: Exception) {
                    println("Error decoding user: ${e.message}")
                    null
                }
            }
            send(ofpElements)
        }
    }

    override suspend fun getStretchElements(): Flow<List<ElementEntry>> = channelFlow {
        stretchDB.valueEvents.collect { stretch ->
            val stretchElements = stretch.children.mapNotNull {
                try {
                    it.value<ElementEntry>()
                } catch (e: Exception) {
                    println("Error decoding user: ${e.message}")
                    null
                }
            }
            send(stretchElements)
        }
    }

    override suspend fun getFootWorkElements(): Flow<List<ElementEntry>> = channelFlow {
        footWorkDB.valueEvents.collect { foot ->
            val footWorkElements = foot.children.mapNotNull {
                try {
                    it.value<ElementEntry>()
                } catch (e: Exception) {
                    println("Error decoding user: ${e.message}")
                    null
                }
            }
            send(footWorkElements)
        }
    }
}