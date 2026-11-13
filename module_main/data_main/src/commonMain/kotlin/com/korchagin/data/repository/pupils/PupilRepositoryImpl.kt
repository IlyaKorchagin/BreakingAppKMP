package com.korchagin.data.repository.pupils

import com.korchagin.data.models.UserEntry
import com.korchagin.data.utils.toFirebaseData
import com.korchagin.module_common.Response
import dev.gitlive.firebase.Firebase
import dev.gitlive.firebase.database.database
import dev.gitlive.firebase.storage.storage
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.channelFlow
import kotlinx.coroutines.flow.first

class PupilRepositoryImpl : PupilRepository {

    private val pupilsDB by lazy {
        Firebase.database.reference("Pupils")
    }

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
        pupilsDB
            .orderByChild("email")
            .equalTo(id)
            .valueEvents
            .collect { snapshot ->
                val user = snapshot.children.firstOrNull()?.value<UserEntry>()
                println("Found user: ${user?.name}")

                if (user != null) {
                    send(user)
                }
            }
    }

    override suspend fun createNewPupil(
        email: String,
        name: String,
        coach: List<String>,
        authUid: String
    ) {
        val normalizedEmail = email.trim().lowercase()
        val uid = pupilsDB.push().key

        if (uid != null) {
            val newPupil = UserEntry(
                id = uid,
                email = normalizedEmail,
                nick = "",
                name = name,
                avatar = "",
                authUid = authUid,
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
                headspin = 0,
                headspin_record = 0,
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

    override suspend fun updateAvatar(
        email: String,
        data: ByteArray
    ): Response<Unit> {
        val normalizedEmail = email.trim().lowercase()

        val avatarRef = fireStorage
            .reference("ImageDB")
            .child("${normalizedEmail.replace(".", "_")}-avatar.jpg")

        val firebaseData = data.toFirebaseData()

        avatarRef.putData(firebaseData, metadata = null)

        val downloadUrl = avatarRef.getDownloadUrl()

        println("✅ Avatar uploaded to: $downloadUrl")

        val snapshot = pupilsDB
            .orderByChild("email")
            .equalTo(normalizedEmail)
            .valueEvents
            .first()

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

    override suspend fun updatePupil(
        newUserEntry: UserEntry
    ): Response<Unit> {
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

    override suspend fun updatePupils(
        newUserEntries: List<UserEntry>
    ): Response<Unit> {
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
}