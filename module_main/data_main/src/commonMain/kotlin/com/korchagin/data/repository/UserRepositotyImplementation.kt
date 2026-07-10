package com.korchagin.data.repository


import com.korchagin.data.models.BboyEntry
import com.korchagin.data.models.CoachEntry
import com.korchagin.data.models.ElementEntry
import com.korchagin.data.models.EventEntry
import com.korchagin.data.models.EventParticipantsEntry
import com.korchagin.data.models.JudgeEntry
import com.korchagin.data.models.UserEntry
import com.korchagin.data.utils.toFirebaseData
import com.korchagin.data.utils.toLocalDateOrNull
import com.korchagin.module_common.Response
import dev.gitlive.firebase.Firebase
import dev.gitlive.firebase.database.database
import dev.gitlive.firebase.storage.storage
import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.plugins.onUpload
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.post
import io.ktor.client.request.setBody
import io.ktor.http.ContentType
import io.ktor.http.contentType
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.channelFlow
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import kotlinx.datetime.Clock
import kotlinx.datetime.LocalDate
import kotlinx.datetime.TimeZone
import kotlinx.datetime.todayIn


class UserRepositotyImplementation(
    private val client: HttpClient
) : UserRepository {

    //  идентификаторы таблицы Freeze в БД
    private val FREEZE_KEY = "Freeze"
    private val POWER_KEY = "PowerMove"
    private val OFP_KEY = "OFP"
    private val STRETCH_KEY = "Stretch"
    private val FOOTWORK_KEY = "Footwork"
    private val BBOYS_KEY = "Bio"
    private val PUPILS_KEY = "Pupils"
    private val EVENTS_KEY = "Events"
    private val COACHES_KEY = "Coach"

    private val JUDGES_KEY = "Judges"


    private val pupilsDB by lazy { Firebase.database.reference(PUPILS_KEY) }
    private val freezeDB by lazy { Firebase.database.reference(FREEZE_KEY) }
    private val powerDB by lazy { Firebase.database.reference(POWER_KEY) }
    private val ofpDB by lazy { Firebase.database.reference(OFP_KEY) }
    private val stretchDB by lazy { Firebase.database.reference(STRETCH_KEY) }
    private val footWorkDB by lazy { Firebase.database.reference(FOOTWORK_KEY) }
    private val bboysDB by lazy { Firebase.database.reference(BBOYS_KEY) }
    private val coachesDB by lazy { Firebase.database.reference(COACHES_KEY) }
    private val eventsDB by lazy { Firebase.database.reference(EVENTS_KEY) }
    private val judgesDB by lazy { Firebase.database.reference(JUDGES_KEY) }

    private val fireStorage = Firebase.storage


    override suspend fun getUsers(): Flow<List<UserEntry>> = channelFlow {
        pupilsDB.valueEvents.collect { pupil ->
            val users = pupil.children.mapNotNull {
                try {
                    it.value<UserEntry>()
                } catch (e: Exception) {
                    println("Error decoding user: ${e.message}")
                    null
                }
            }.filter { it.role == "user" }
            send(users)
        }
    }


    override suspend fun getUserById(id: String): Flow<UserEntry> = channelFlow {
        coroutineScope {
            pupilsDB
                .orderByChild("email")
                .equalTo(id)
                .valueEvents
                .onEach { snapshot ->
                    val user = snapshot.children.firstOrNull()?.value<UserEntry>()
                    println("Found user: ${user?.name}")
                    if (user != null) {
                        trySend(user)
                    }
                }
                .launchIn(this)
        }
    }

    override suspend fun getCoaches(): Flow<List<CoachEntry>> = channelFlow {
        coachesDB.valueEvents.collect { coach ->
            val coaches = coach.children.mapNotNull {
                try {
                    println("LOG: ${it.value}")
                    it.value<CoachEntry>()
                } catch (e: Exception) {
                    println("Error decoding coaches: ${e.message}")
                    null
                }
            }
            send(coaches)
        }
    }


    override suspend fun getJudges(): Flow<List<JudgeEntry>> = channelFlow {
        judgesDB.valueEvents.collect { judge ->
            val judges = judge.children.mapNotNull {
                try {
                    println("LOG: ${it.value}")
                    it.value<JudgeEntry>()
                } catch (e: Exception) {
                    println("Error decoding coaches: ${e.message}")
                    null
                }
            }
            send(judges)
        }
    }

    val today: LocalDate = Clock.System.todayIn(TimeZone.currentSystemDefault())



    override suspend fun getEvents(): Flow<List<EventEntry>> = channelFlow {
        eventsDB.valueEvents.collect { snapshot ->
            val events = snapshot.children.mapNotNull {
                try {
                    it.value<EventEntry>()
                } catch (e: Exception) {
                    null
                }
            }.filter { event ->
                val eventDate = event.data.toLocalDateOrNull()
                eventDate != null && eventDate >= today
            }
            println("Log: repo events - $events")
            send(events)
        }
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

   /* override suspend fun getBboysList(): Flow<List<BboyEntry>> = channelFlow {
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
    }*/

    override suspend fun getBboysList(): Flow<List<BboyEntry>> = channelFlow {
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

    override suspend fun createNewPupil(email: String, name: String, coach: List<String>) {
        val normalizedEmail = email.trim().lowercase()
        val uid = pupilsDB.push().key
        if (uid != null) {
            val newPupil = UserEntry(
                id = uid,        // будет установлен ниже
                email = normalizedEmail,
                nick = "",
                name = name,
                avatar = "",
                born = "",
                breaking_start = "",
                country = "",
                coach = coach.joinToString(", "),
                city = "",
                video = "",
                videoRutube = "",
                status = 0,
                role = "user",
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

                airBabyfrezze = 0,
                airBabyfrezze_record = 0,
                babyfrezze = 0,
                chairfrezze = 0,
                elbowfrezze = 0,
                headfrezze = 0,
                headhollowbackfrezze = 0,
                hollowbackfrezze = 0,
                invertfrezze = 0,
                invertfrezze_record = 0,
                onehandfrezze = 0,
                onehandfrezze_record = 0,
                shoulderfrezze = 0,
                turtlefrezze = 0,

                airflare = 0,
                airflare_record = 0,
                backspin = 0,
                backspin_record = 0,
                cricket = 0,
                cricket_record = 0,
                double = 0,
                double_record = 0,
                elbowairflare = 0,
                elbowairflare_record = 0,
                flare = 0,
                flare_record = 0,
                grabmill = 0,
                grabmill_record = 0,
                jackhammer = 0,
                jackhammer_record = 0,
                halo = 0,
                halo_record = 0,
                headspin = 0,
                headspin_record = 0,
                munchmill = 0,
                munchmill_record = 0,
                ninety_nine = 0,
                ninety_nine_record = 0,
                superman = 0,
                superman_record = 0,
                swipes = 0,
                tombstone = 0,
                tombstone_record = 0,
                turtle = 0,
                ufo = 0,
                ufo_record = 0,
                web = 0,
                web_record = 0,
                windmill = 0,
                windmill_record = 0,
                windmillToHandstand = 0,
                windmillToHandstand_record = 0,
                wolf = 0,
                wolf_record = 0,

                angle = 0,
                bridge = 0,
                finger = 0,
                handstand = 0,
                handstand_record = 0,
                hand_jump = 0,
                hand_jump_record = 0,
                hand_touch_leg = 0,
                hand_touch_leg_record = 0,
                hand_walk = 0,
                hand_walk_record = 0,
                horizont = 0,
                horizont_record = 0,
                pushups = 0,
                pushups_record = 0,
                sit_ups = 0,
                press_up_handstand = 0,
                press_up_handstand_record = 0,
                turtle_to_handstand = 0,

                butterfly = 0,
                fold = 0,
                shoulders = 0,
                twine = 0,

                record_four_steps = 0,
                record_six_steps = 0,
                record_three_steps = 0,
                record_russian_steps = 0,
                record_six_and_pretzel = 0,
                record_six_and_three_steps = 0,
                record_three_one_leg_steps = 0,
                record_six_and_coffee_steps = 0,
                record_six_and_russian_steps = 0,
                record_turtle_to_handstand = 0
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

    override suspend fun updatePupil(newUserEntry: UserEntry): Response<Unit> {
        val email = newUserEntry.email
        val normalizedEmail = email.trim().lowercase()

        // Шаг 1: Найти пользователя по email
        val snapshot = pupilsDB
            .orderByChild("email")
            .equalTo(normalizedEmail)
            .valueEvents
            .first()  // Получить первый эмит из Flow<DataSnapshot>

        val userSnapshot = snapshot.children.firstOrNull()

        if (userSnapshot != null) {
            val uid = userSnapshot.key
            if (uid != null) {
                // Шаг 2: Записать данные полностью (перезаписать)
                pupilsDB.child(uid).setValue(newUserEntry)
                println("✅ User data updated in database for user: $email")
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

    override suspend fun updatePupils(newUserEntries: List<UserEntry>): Response<Unit> {
        for (newUserEntry in newUserEntries) {
            val email = newUserEntry.email
            val normalizedEmail = email.trim().lowercase()

            val snapshot = pupilsDB
                .orderByChild("email")
                .equalTo(normalizedEmail)
                .valueEvents
                .first()

            val userSnapshot = snapshot.children.firstOrNull()

            if (userSnapshot != null) {
                val uid = userSnapshot.key
                if (uid != null) {
                    pupilsDB.child(uid).setValue(newUserEntry)
                    println("✅ User data updated in database for user: $email")
                } else {
                    println("❌ UID is null for email: $email")
                    return Response.Fail("UID is null for email: $email", 404)
                }
            } else {
                println("❌ User with email $email not found in database")
                return Response.Fail("User with email $email not found", 404)
            }
        }
        return Response.Success(Unit, 200)
    }

    override suspend fun registerToEvent(pupil: UserEntry, event: EventEntry): Boolean {
        val participant = EventParticipantsEntry(
            user_id = pupil.id,
            name = pupil.name,
            event_id = event.id,
            phone = pupil.email,
            timestamp = "",
            battlePoints = emptyMap(),
            selectionPoints = emptyMap(),
            battlePosition = 0
        )
        val eventRef = eventsDB.child(event.title)
            .child("participants")
            .child(pupil.id)

        // Проверяем наличие записи
        val snapshot = eventRef.valueEvents.first()

        if (snapshot.value != null) {
            println("⚠ Пользователь уже зарегистрирован")
            return false
        }


        val payload = mapOf(
            "user_id" to pupil.id,
            "name" to pupil.name,
            "phone" to pupil.email,
            "event_id" to "event_id",
            "action" to "register",
        )

        val responseText = client.post("${event.regUrl}/api/register") {
            contentType(ContentType.Application.Json)
            header("Accept", "*/*")         // 🔥 обязательно
            setBody(payload)

            onUpload { bytesSentTotal, contentLength ->
                println("sent: $bytesSentTotal / $contentLength")
            }
        }.body<String>()

        println("Google script response = $responseText")

        eventRef.setValue(participant)

        return true

    }

    override suspend fun unregisterFromEvent(pupil: UserEntry, event: EventEntry): Boolean {

        val eventRef = eventsDB.child(event.title)
            .child("participants")
            .child(pupil.id)

        // Проверяем наличие записи
        val snapshot = eventRef.valueEvents.first()

        if (snapshot.value == null) {
            println("⚠ Пользователь не был зарегистрирован")
            return false
        }

        // Попробуем удалить запись на Google Script
        val payload = mapOf(
            "user_id" to pupil.id,
            "name" to pupil.name,
            "phone" to pupil.email,
            "event_id" to "event_id",
            "action" to "unregister",
        )

        try {
            val responseText = client.post("${event.regUrl}/api/register") {
                contentType(ContentType.Application.Json)
                header("Accept", "*/*")
                setBody(payload)
            }.body<String>()

            println("Google script unregister response = $responseText")
            // Можно здесь парсить JSON ответа, если нужно
        } catch (e: Exception) {
            println("❌ Ошибка при отмене регистрации в Google Script: ${e.message}")
            // Реши, хочешь ли вернуть false или продолжить
            return false
        }

        // Удаляем запись пользователя из Firebase
        return try {
            eventRef.removeValue()
            println("🗑 Пользователь ${pupil.name} отписан от события ${event.title}")
            true
        } catch (e: Exception) {
            println("❌ Ошибка при удалении из Firebase: ${e.message}")
            false
        }
    }

    override suspend fun getEventParticipants(event: EventEntry): Flow<List<EventParticipantsEntry>> =
        flow {
            try {
                val participants: List<EventParticipantsEntry> =
                    client.get("${event.regUrl}/api/register").body()
                println("load participants - $participants")
                emit(participants)
            } catch (e: Exception) {
                println("Ошибка при загрузке участников: $e")
                emit(emptyList()) // возвращаем пустой список при ошибке
            }
        }

    override suspend fun sendBattleProtocol(
        participants: List<EventParticipantsEntry>,
        event: EventEntry
    ): Boolean {
        try {
            // Отфильтровываем участников, если необходимо (например, оставляем только участников с позицией > 0)
            val sortedParticipants = participants
                .filter { it.battlePosition > 0 } // фильтруем участников по позиции, если это необходимо
                .sortedBy { it.battlePosition } // сортируем участников по позиции

            // Формируем payload для каждого участника
            sortedParticipants.forEach { participant ->
                val lastRoundEntry = participant.battlePoints?.entries?.lastOrNull()
                val payload = mapOf(
                    "name" to participant.name,
                    "selection_points" to "${participant.selectionPoints}",
                    "last_round" to (lastRoundEntry?.key ?: ""),
                    "points" to (lastRoundEntry?.value?.toString() ?: "0"),
                    "battle_position" to "${participant.battlePosition}"
                )
                val responseText = client.post("${event.regUrl}/api/protocol") {
                    contentType(ContentType.Application.Json)
                    header("Accept", "*/*") // обязательно
                    setBody(payload)

                    onUpload { bytesSentTotal, contentLength ->
                        println("LOG: sent protocol: $bytesSentTotal / $contentLength")
                    }
                }.body<String>()

                println("Google script response for ${participant.name} = $responseText")
            }

            return true
        } catch (e: Exception) {
            println("Ошибка при записи протокола: $e")
            return false
        }
    }

    override suspend fun judgeRegister(judge: JudgeEntry, event: EventEntry): Boolean {
        val eventRef = eventsDB.child(event.title)
            .child("judges")
            .child(judge.id)

        // Проверяем наличие записи
        val snapshot = eventRef.valueEvents.first()

        if (snapshot.value != null) {
            println("⚠ Пользователь уже зарегистрирован")
            return false
        }

        eventRef.setValue(true)

        return true
    }

    override suspend fun judgeUnregister(
        judge: JudgeEntry,
        event: EventEntry
    ): Boolean {
        val eventRef = eventsDB.child(event.title)
            .child("judges")
            .child(judge.id)

        // Проверяем наличие записи
        val snapshot = eventRef.valueEvents.first()

        if (snapshot.value == null) {
            println("⚠ Пользователь не был зарегистрирован")
            return false
        }

        // Удаляем запись пользователя из Firebase
        return try {
            eventRef.removeValue()
            println("🗑 Пользователь ${judge.name} отписан от события ${event.title}")
            true
        } catch (e: Exception) {
            println("❌ Ошибка при удалении из Firebase: ${e.message}")
            false
        }
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

   /* override suspend fun getUserById(id: String): Flow<UserEntry> = channelFlow {
        coroutineScope {
            pupilsDB
                .orderByChild("email")
                .equalTo(id)
                .valueEvents
                .onEach { snapshot ->
                    val user = snapshot.children.firstOrNull()?.value<UserEntry>()
                    println("Found user: ${user?.name}")
                    if (user != null) {
                        trySend(user)
                    }
                }
                .launchIn(this)
        }
    }*/



    override suspend fun setBattlePoints(
        eventId: String,
        usersList: List<String>,
        judgeId: String,
        pointsList: List<Int>,
        round: String
    ) {
        usersList.forEachIndexed { index, userId ->
            eventsDB
                .child(eventId)
                .child("participants")
                .child(userId)
                .child("battlePoints")
                .child(round)
                .child(judgeId)
                .setValue(pointsList[index])
        }
    }

    override suspend fun setBattlePosition(
        eventId: String,
        usersList: List<String>,
        battlePositions: List<Int>
    ) {
        // Обновляем позицию участников
        usersList.forEachIndexed { index, userId ->
            eventsDB
                .child(eventId)
                .child("participants")
                .child(userId)
                .child("battlePosition")
                .setValue(battlePositions[index])  // Обновляем battlePosition
        }
    }


    override suspend fun observeParticipants(
        eventId: String
    ): Flow<List<EventParticipantsEntry>> = channelFlow {

        eventsDB
            .child(eventId)
            .child("participants")
            .valueEvents
            .collect { snapshot ->

                val users = snapshot.children.mapNotNull { child ->
                    try {
                        child.value<EventParticipantsEntry>()
                    } catch (e: Exception) {
                        println("Error decoding user ${child.key}: ${e.message}")
                        null
                    }
                }

                println("users - $users")
                send(users)
            }
    }



}
