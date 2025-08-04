package com.korchagin.data.repository


import com.korchagin.data.models.BboyEntry
import com.korchagin.data.models.ElementEntry
import com.korchagin.data.models.PupilEntry
import com.korchagin.data.utils.toFirebaseData
import com.korchagin.module_common.Response
import dev.gitlive.firebase.Firebase
import dev.gitlive.firebase.database.database
import dev.gitlive.firebase.storage.storage
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.channelFlow
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach


class UserRepositotyImplementation : UserRepository {

    private val FREEZE_KEY = "Freeze"       //  идентификатор таблицы Freeze в БД
    private val POWER_KEY = "PowerMove"     //  идентификатор таблицы PowerMove в БД
    private val OFP_KEY = "OFP"             //  идентификатор таблицы OFP в БД
    private val STRETCH_KEY = "Stretch"     //  идентификатор таблицы Stretch в БД
    private val BBOYS_KEY = "Bio"           //  идентификатор таблицы Bio в БД
    private val PUPILS_KEY = "Pupils"       //  идентификатор таблицы Pupils в БД


    private val pupilsDB by lazy { Firebase.database.reference(PUPILS_KEY) }
    private val freezeDB by lazy { Firebase.database.reference(FREEZE_KEY) }
    private val powerDB by lazy { Firebase.database.reference(POWER_KEY) }
    private val ofpDB by lazy { Firebase.database.reference(OFP_KEY) }
    private val stretchDB by lazy { Firebase.database.reference(STRETCH_KEY) }
    private val bboysDB by lazy { Firebase.database.reference(BBOYS_KEY) }

    private val fireStorage = Firebase.storage

    override fun getUsers(): Flow<List<PupilEntry>> = channelFlow {
        pupilsDB.valueEvents.collect { pupil ->
            val users = pupil.children.mapNotNull {
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


    override fun getUserById(id: String): Flow<PupilEntry> = channelFlow {
        coroutineScope {
            pupilsDB
                .orderByChild("email")
                .equalTo(id)
                .valueEvents
                .onEach { snapshot ->
                    val user = snapshot.children.firstOrNull()?.value<PupilEntry>()
                    println("Found user: ${user?.name}")
                    if (user != null) {
                        trySend(user)
                    }
                }
                .launchIn(this)
        }
    }

    override fun getFreezeElements(): Flow<List<ElementEntry>> = channelFlow {
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

    override fun getPowerElements(): Flow<List<ElementEntry>> = channelFlow {
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

    override fun getOfpElements(): Flow<List<ElementEntry>> = channelFlow {
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

    override fun getStretchElements(): Flow<List<ElementEntry>> = channelFlow {
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

    override fun getBboysList(): Flow<List<BboyEntry>> = channelFlow {
        bboysDB.valueEvents.collect { bboys ->
            val bboysElements = bboys.children.mapNotNull {
                try {
                    it.value<BboyEntry>()
                } catch (e: Exception) {
                    println("Error decoding user: ${e.message}")
                    null
                }
            }
            send(bboysElements)
        }
    }

    override suspend fun createNewPupil(email: String, name: String) {
        val normalizedEmail = email.trim().lowercase()
        val uid = pupilsDB.push().key
        if (uid != null) {
            val newPupil = PupilEntry(
                id = uid,        // будет установлен ниже
                email = normalizedEmail,
                name = name,
                avatar = "",
                born = "",
                country = "",
                city = "",
                video = "",
                status = 0,
                subscription = 0,
                subscriptionDay = 0,
                subscriptionMonth = 0,
                subscriptionYear = 0,
                currentTask = "",
                currentTaskProgress = 0,
                roundsList = "",

                rating = 0.0,
                freeze_rating = 0.0,
                powermove_rating = 0.0,
                ofp_rating = 0.0,
                streching_rating = 0.0,
                battle_rating = 0.0,
                battle_cur_position = 0,
                battle_new_position = 0,
                new_position = 0,
                current_position = 0,

                babyfrezze = 0,
                chairfrezze = 0,
                elbowfrezze = 0,
                headfrezze = 0,
                headhollowbackfrezze = 0,
                hollowbackfrezze = 0,
                invertfrezze = 0,
                onehandfrezze = 0,
                shoulderfrezze = 0,
                turtlefrezze = 0,

                airflare = 0,
                backspin = 0,
                cricket = 0,
                elbowairflare = 0,
                flare = 0,
                jackhammer = 0,
                halo = 0,
                headspin = 0,
                munchmill = 0,
                ninety_nine = 0,
                swipes = 0,
                turtle = 0,
                ufo = 0,
                web = 0,
                windmill = 0,
                wolf = 0,

                angle = 0,
                bridge = 0,
                finger = 0,
                handstand = 0,
                horizont = 0,
                pushups = 0,
                sit_ups = 0,
                press_up_handstand = 0,

                butterfly = 0,
                fold = 0,
                shoulders = 0,
                twine = 0
            )
            pupilsDB.child(uid).setValue(newPupil)
        } else {
            println("❌ Не удалось сгенерировать UID для ученика")
        }
    }


    override suspend fun updateAvatar(email: String, data: ByteArray): Response<Unit> {
        val normalizedEmail = email.trim().lowercase()
        val avatarRef = fireStorage
            .reference("ImageDB")
            .child("${normalizedEmail.replace(".", "_")}-avatar.jpg")

        val firebaseData = data.toFirebaseData()

        avatarRef.putData(firebaseData, metadata = null)

        val downloadUrl = avatarRef.getDownloadUrl()

        println("✅ Avatar uploaded to: $downloadUrl")

        // Получаем snapshot из Flow<DataSnapshot> с помощью first()
        val snapshot = pupilsDB
            .orderByChild("email")
            .equalTo(normalizedEmail)
            .valueEvents
            .first()  // Получаем первое значение из потока

        val userSnapshot = snapshot.children.firstOrNull()

        if (userSnapshot != null) {
            val uid = userSnapshot.key
            if (uid != null) {
                pupilsDB.child(uid).child("avatar").setValue(downloadUrl)
                println("✅ Avatar URL updated in database for user: $email")
                return Response.Success(data = Unit, statusCode = 200)
            } else {
                println("❌ UID is null for email: $email")
                return Response.Fail("", 404)
            }
        } else {
            println("❌ User with email $email not found in database")
            return Response.Fail("", 404)
        }
    }
}
