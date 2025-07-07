package com.korchagin.presentation.models

import com.korchagin.domain_main.models.PupilDomainModel
import com.korchagin.presentation.constants.*


data class PupilModel(

    //---------> Personal information ---------->
    var id: String,
    var name: String,
    var email: String,
    var avatar: String,
    var born: String,
    var country: String,
    var city: String,
    var video: String,
    var status: Int,
    /*
        0 - не указан;
        1 - дети до 7 лет;
        2 - начинающие;
        3 - второгодки
        4 - продолжающие;
        5 - kidsPro;
        6 - преподаватель
    */

    var subscription: Long,
    /* ? = 0,
        5 - 1 месяц;
        2 - 3 месяца;
        3 - 5 месяцев;
        4 - 10 месяцев;
        10 - без ограничений
    */

    var subscriptionDay: Int,
    var subscriptionMonth: Int,
    var subscriptionYear: Int,

    val currentTask: String,
    val currentTaskProgress: Int,

    val roundsList: String,

    //<--------- Personal information <----------


    //---------> Rating ---------->

    var rating: Double,
    var freezeRating: Double,
    var powermoveRating: Double,
    var ofpRating: Double,
    var strechingRating: Double,
    var battleRating: Double,
    var battleCurPosition: Int,
    var battleNewPosition: Int,
    var newPosition: Int,
    var currentPosition: Int,

    //<--------- Rating <----------

    //---------> FREZZE ---------->

    var babyfrezze: Int,
    var chairfrezze: Int,
    var elbowfrezze: Int,
    var headfrezze: Int,
    var headhollowbackfrezze: Int,
    var hollowbackfrezze: Int,
    var invertfrezze: Int,
    var onehandfrezze: Int,
    var shoulderfrezze: Int,
    var turtlefrezze: Int,

    //<--------- FREZZE <----------

    //-------> POWER MOVE ------------->

    var airflare: Int,
    var backspin: Int,
    var cricket: Int,
    var elbowairflare: Int,
    var flare: Int,
    var jackhammer: Int,
    var halo: Int,
    var headspin: Int,
    var munchmill: Int,
    var ninetyNine: Int,
    var swipes: Int,
    var turtle: Int,
    var ufo: Int,
    var web: Int,
    var windmill: Int,
    var wolf: Int,

    //<-------- POWER MOVE <-------------

    //-----------> OFP ------------->

    var angle: Int,
    var bridge: Int,
    var finger: Int,
    var handstand: Int,
    var horizont: Int,
    var pushUps: Int,
    var sitUps: Int,
    var pressUpHandstand: Int,

    //<----------- OFP <-------------

    //--------> stretching ------------>

    var butterfly: Int,
    var fold: Int,
    var shoulders: Int,
    var twine: Int,

    //<-------- stretching <-------------
)
fun PupilDomainModel.toPupilModel() = PupilModel(
    id = id,
    name = name,
    email = email,
    avatar = avatar,
    born = born,
    country = country,
    city = city,
    video = video,
    status = status,

    subscription = subscription,
    subscriptionDay = subscriptionDay,
    subscriptionMonth = subscriptionMonth,
    subscriptionYear = subscriptionYear,

    currentTask = currentTask,
    currentTaskProgress = currentTaskProgress,

    roundsList = roundsList,

    rating = rating,
    freezeRating = freezeRating,
    powermoveRating = powermoveRating,
    ofpRating = ofpRating,
    strechingRating = strechingRating,
    battleRating = battleRating,
    battleCurPosition = battleCurPosition,
    battleNewPosition = battleNewPosition,
    newPosition = newPosition,
    currentPosition = currentPosition,

    babyfrezze = babyfrezze,
    chairfrezze = chairfrezze,
    elbowfrezze = elbowfrezze,
    headfrezze = headfrezze,
    headhollowbackfrezze = headhollowbackfrezze,
    hollowbackfrezze = hollowbackfrezze,
    invertfrezze = invertfrezze,
    onehandfrezze = onehandfrezze,
    shoulderfrezze = shoulderfrezze,
    turtlefrezze = turtlefrezze,

    airflare = airflare,
    backspin = backspin,
    cricket = cricket,
    elbowairflare = elbowairflare,
    flare = flare,
    jackhammer = jackhammer,
    halo = halo,
    headspin = headspin,
    munchmill = munchmill,
    ninetyNine = ninetyNine,
    swipes = swipes,
    turtle = turtle,
    ufo = ufo,
    web = web,
    windmill = windmill,
    wolf = wolf,

    angle = angle,
    bridge = bridge,
    finger = finger,
    handstand = handstand,
    horizont = horizont,
    pushUps = pushups,
    sitUps = sit_ups,
    pressUpHandstand = pressUpHandstand,

    butterfly = butterfly,
    fold = fold,
    shoulders = shoulders,
    twine = twine,
)

fun PupilModel.getElementRating(title: String): Int {
    return when (title) {
        "Baby" -> babyfrezze
        "Chair" -> chairfrezze
        "Elbow" -> elbowfrezze
        "Head" -> headfrezze
        "HeadHollowback" -> headhollowbackfrezze
        "Hollowback" -> hollowbackfrezze
        "Invert" -> invertfrezze
        "OneHand" -> onehandfrezze
        "Shoulder" -> shoulderfrezze
        "Turtle" -> turtlefrezze

        "Airflare" -> airflare
        "Backspin" -> backspin
        "Cricket" -> cricket
        "ElbowAirflare" -> elbowairflare
        "Flare" -> flare
        "Jackhammer" -> jackhammer
        "Muchmill" -> munchmill
        "Ninetynine" -> ninetyNine
        "Web" -> web
        "Swipes" -> swipes
        "TurtleMove" -> turtle
        "Ufo" -> ufo
        "Windmill" -> windmill
        "Halo" -> halo
        "Wolf" -> wolf
        "HeadSpin" -> headspin

        "Angle" -> angle
        "Bridge" -> bridge
        "Fingers" -> finger
        "Handstand" -> handstand
        "PressToHandstand" -> pressUpHandstand
        "PushUps" -> pushUps
        "SitUps" -> sitUps
        "Horizont" -> horizont

        "Butterfly" -> butterfly
        "Fold" -> fold
        "Shoulders" -> shoulders
        "Twine" -> twine

        else -> 0
    }
}

fun PupilModel.setProgress(elementTitle: String): Float {
    return when (elementTitle) {
        BABY -> babyfrezze.toFloat()
        SHOULDER -> shoulderfrezze.toFloat()
        TURTLE -> turtlefrezze.toFloat()
        HEAD -> headfrezze.toFloat()
        CHAIR -> chairfrezze.toFloat()
        ELBOW -> elbowfrezze.toFloat()
        HEAD_HOLLOWBACK -> headhollowbackfrezze.toFloat()
        ONE_HAND -> onehandfrezze.toFloat()
        INVERT -> invertfrezze.toFloat()
        HOLLOWBACK -> hollowbackfrezze.toFloat()

        BACKSPIN -> backspin.toFloat()
        TURTLEMOVE -> turtle.toFloat()
        HEADSPIN -> headspin.toFloat()
        WINDMILL -> windmill.toFloat()
        MUCHMILL -> munchmill.toFloat()
        HALO -> halo.toFloat()
        FLARE -> flare.toFloat()
        WOLF -> wolf.toFloat()
        WEB -> web.toFloat()
        CRICKET -> cricket.toFloat()
        AIRFLARE -> airflare.toFloat()
        NINETYNINE -> ninetyNine.toFloat()
        UFO -> ufo.toFloat()
        ELBOW_AIRFLARE -> elbowairflare.toFloat()
        JACKHAMMER -> jackhammer.toFloat()
        SWIPES -> swipes.toFloat()

        ANGLE -> angle.toFloat()
        BRIDGE -> bridge.toFloat()
        FINGERS -> finger.toFloat()
        PUSHUPS -> pushUps.toFloat()
        SITUPS -> sitUps.toFloat()
        HANDSTAND -> handstand.toFloat()
        HORIZONT -> horizont.toFloat()
        PRESS_TO_HANDSTAND -> pressUpHandstand.toFloat()

        TWINE -> twine.toFloat()
        BUTTERFLY -> butterfly.toFloat()
        FOLD -> fold.toFloat()
        SHOULDERS -> shoulders.toFloat()
        else -> 0.0f
    }
}