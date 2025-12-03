package org.korchagin.kmp.helper

import com.korchagin.presentation.constants.AIRFLARE
import com.korchagin.presentation.constants.ANGLE
import com.korchagin.presentation.constants.BABY
import com.korchagin.presentation.constants.BACKSPIN
import com.korchagin.presentation.constants.BRIDGE
import com.korchagin.presentation.constants.BUTTERFLY
import com.korchagin.presentation.constants.CHAIR
import com.korchagin.presentation.constants.CRICKET
import com.korchagin.presentation.constants.ELBOW
import com.korchagin.presentation.constants.ELBOW_AIRFLARE
import com.korchagin.presentation.constants.FINGERS
import com.korchagin.presentation.constants.FLARE
import com.korchagin.presentation.constants.FOLD
import com.korchagin.presentation.constants.HALO
import com.korchagin.presentation.constants.HANDSTAND
import com.korchagin.presentation.constants.HAND_JUMP
import com.korchagin.presentation.constants.HAND_TOUCH_LEGS
import com.korchagin.presentation.constants.HAND_WALK
import com.korchagin.presentation.constants.HEAD
import com.korchagin.presentation.constants.HEADSPIN
import com.korchagin.presentation.constants.HEAD_HOLLOWBACK
import com.korchagin.presentation.constants.HOLLOWBACK
import com.korchagin.presentation.constants.HORIZONT
import com.korchagin.presentation.constants.INVERT
import com.korchagin.presentation.constants.JACKHAMMER
import com.korchagin.presentation.constants.MUCHMILL
import com.korchagin.presentation.constants.NINETYNINE
import com.korchagin.presentation.constants.ONE_HAND
import com.korchagin.presentation.constants.PRESS_TO_HANDSTAND
import com.korchagin.presentation.constants.PUSHUPS
import com.korchagin.presentation.constants.RATING
import com.korchagin.presentation.constants.SHOULDER
import com.korchagin.presentation.constants.SHOULDERS
import com.korchagin.presentation.constants.SITUPS
import com.korchagin.presentation.constants.SWIPES
import com.korchagin.presentation.constants.TURTLE
import com.korchagin.presentation.constants.TURTLEMOVE
import com.korchagin.presentation.constants.TWINE
import com.korchagin.presentation.constants.UFO
import com.korchagin.presentation.constants.WEB
import com.korchagin.presentation.constants.WINDMILL
import com.korchagin.presentation.constants.WOLF

fun setElementTitle(elementTitle: String): String {
    return when (elementTitle) {
        RATING -> "Общий рейтинг"
        BABY -> "Стойка ребёнка"
        SHOULDER -> "Стойка на плече"
        HEAD -> "Стойка на голове"
        BACKSPIN -> "Кручение на спине"
        TURTLEMOVE -> "Кручение в черепашке"
        HEADSPIN -> "Кручение на голове"
        WINDMILL -> "Гелик"
        BUTTERFLY -> "Бабочка"
        FOLD -> "Складка"
        TWINE -> "Шпагат"
        SHOULDERS -> "Растяжка плеч"
        PUSHUPS -> "Отжимания"
        SITUPS -> "Приседания"
        BRIDGE -> "Мостик"
        TURTLE -> "Стойка в черепахе"
        HEAD_HOLLOWBACK -> "Бэк на голове"
        SWIPES -> "Свайп"
        MUCHMILL -> "Бочка"
        WEB -> "Веб"
        WOLF -> "Волчок"
        CRICKET -> "Прыжки в черепашке"
        FLARE -> "Флай"
        NINETYNINE -> "Свеча"
        HALO -> "Корона"
        HANDSTAND -> "Стойка на руках"
        FINGERS -> "Стойка на пальцах"
        ANGLE -> "Уголок"
        HAND_WALK -> "Хождение на руках"
        HAND_TOUCH_LEGS -> "Касания ног в стойке на руках"
        CHAIR -> "Стульчик"
        ONE_HAND -> "Стойка на одной руке"
        INVERT -> "Стойка на руках в уголке"
        HOLLOWBACK -> "Стойка на руках в бэке"
        ELBOW -> "Стойка на локте"
        ELBOW_AIRFLARE -> "Локтевой твист"
        AIRFLARE -> "Твист"
        JACKHAMMER -> "Прыжки на одной руке в черепашке"
        UFO -> "Уфо"
        HORIZONT -> "Горизонт"
        PRESS_TO_HANDSTAND -> "Спичаг"
        HAND_JUMP -> "Прыжки на руках"

        else -> ""
    }
}