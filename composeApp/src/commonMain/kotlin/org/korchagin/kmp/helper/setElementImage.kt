package org.korchagin.kmp.helper

import com.korchagin.presentation.constants.AIRBABY
import com.korchagin.presentation.constants.AIRFLARE
import com.korchagin.presentation.constants.CHAIR
import com.korchagin.presentation.constants.CRICKET
import com.korchagin.presentation.constants.DOUBLE
import com.korchagin.presentation.constants.ELBOW
import com.korchagin.presentation.constants.ELBOW_AIRFLARE
import com.korchagin.presentation.constants.FLARE
import com.korchagin.presentation.constants.GRABMILL
import com.korchagin.presentation.constants.HALO
import com.korchagin.presentation.constants.HAND_JUMP
import com.korchagin.presentation.constants.HAND_TOUCH_LEGS
import com.korchagin.presentation.constants.HAND_WALK
import com.korchagin.presentation.constants.HEADSPIN
import com.korchagin.presentation.constants.HEAD_HOLLOWBACK
import com.korchagin.presentation.constants.HOLLOWBACK
import com.korchagin.presentation.constants.INVERT
import com.korchagin.presentation.constants.JACKHAMMER
import com.korchagin.presentation.constants.LOCK
import com.korchagin.presentation.constants.MUCHMILL
import com.korchagin.presentation.constants.NINETYNINE
import com.korchagin.presentation.constants.ONE_HAND
import com.korchagin.presentation.constants.SUPERMAN
import com.korchagin.presentation.constants.TOMBSTONE
import com.korchagin.presentation.constants.TURTLEMOVE
import com.korchagin.presentation.constants.TURTLE_TO_HANDSTAND
import com.korchagin.presentation.constants.UFO
import com.korchagin.presentation.constants.WEB
import com.korchagin.presentation.constants.WINDMILL
import com.korchagin.presentation.constants.WINDMILL_TO_HANDSTAND
import com.korchagin.presentation.constants.WOLF
import com.korchagin.presentation.models.ElementModel
import com.korchagin.presentation.models.PupilModel


fun setElementImage(
    elementTitle: String,
    currentPupil: PupilModel,
    info: ElementModel
): String {
    return when (elementTitle) {
        AIRBABY -> {
            if (currentPupil.horizont >= 40) info.image
            else LOCK
        }
        SUPERMAN -> {
            if (currentPupil.windmill >= 90) info.image
            else LOCK
        }
        GRABMILL -> {
            if (currentPupil.headspin >= 50 && currentPupil.windmill >= 70) info.image
            else LOCK
        }
        TOMBSTONE -> {
            if (currentPupil.headspin >= 50 && currentPupil.windmill >= 70) info.image
            else LOCK
        }
       DOUBLE -> {
            if (currentPupil.headspin >= 80 && currentPupil.windmill >= 90) info.image
            else LOCK
        }
        WINDMILL_TO_HANDSTAND -> {
            if (currentPupil.handstand >= 20 && currentPupil.windmill >= 60) info.image
            else LOCK
        }
        CHAIR -> {
            if (currentPupil.babyfrezze >= 20 && currentPupil.turtlefrezze >= 20) info.image
            else LOCK
        }
        ELBOW -> {
            if (currentPupil.babyfrezze >= 50 && currentPupil.turtlefrezze >= 40) info.image
            else LOCK
        }
        HEAD_HOLLOWBACK -> {
            if (currentPupil.headfrezze >= 70) info.image
            else LOCK
        }
        ONE_HAND -> {
            if (currentPupil.handstand >= 50 ) info.image
            else LOCK
        }
        INVERT -> {
            if (currentPupil.babyfrezze >= 40) info.image
            else LOCK
        }
        HOLLOWBACK -> {
            if (currentPupil.handstand >= 50 && currentPupil.bridge >= 80 && currentPupil.headhollowbackfrezze >= 60) info.image
            else LOCK
        }
        HAND_WALK -> {
            if (currentPupil.handstand >= 40) info.image
            else LOCK
        }
        HAND_TOUCH_LEGS -> {
            if (currentPupil.handstand >= 40) info.image
            else LOCK
        }
        HAND_JUMP -> {
            if (currentPupil.handstand >= 50) info.image
            else LOCK
        }
        TURTLE_TO_HANDSTAND -> {
            if (currentPupil.handstand >= 50) info.image
            else LOCK
        }
        AIRFLARE -> {
            if (currentPupil.handstand >= 80) info.image
            else LOCK
        }
        CRICKET -> {
            if (currentPupil.turtle >= 65) info.image
            else LOCK
        }
        ELBOW_AIRFLARE -> {
            if (currentPupil.elbowfrezze >= 80 && currentPupil.handstand >= 80) info.image
            else LOCK
        }
        FLARE -> {
            if (currentPupil.handstand >= 30 && currentPupil.horizont >=45) info.image
            else LOCK
        }
        HALO -> {
            if (currentPupil.windmill >= 80 && currentPupil.chairfrezze >=50) info.image
            else LOCK
        }
        HEADSPIN -> {
            if (currentPupil.headfrezze >= 60) info.image
            else LOCK
        }
        JACKHAMMER -> {
            if (currentPupil.cricket >= 90) info.image
            else LOCK
        }
        MUCHMILL -> {
            if (currentPupil.windmill >= 80) info.image
            else LOCK
        }
        NINETYNINE -> {
            if (currentPupil.handstand >= 80) info.image
            else LOCK
        }
        TURTLEMOVE -> {
            if (currentPupil.turtlefrezze >= 40) info.image
            else LOCK
        }
        UFO -> {
            if (currentPupil.wolf >= 60 && currentPupil.horizont >=70) info.image
            else LOCK
        }
        WEB -> {
            if (currentPupil.windmill >= 80) info.image
            else LOCK
        }
        WINDMILL -> {
            if (currentPupil.babyfrezze >= 50 && currentPupil.turtlefrezze >=40) info.image
            else LOCK
        }
        WOLF -> {
            if (currentPupil.horizont >= 55) info.image
            else LOCK
        }
        else -> info.image
    }
}