package com.korchagin.presentation.models

import com.korchagin.domain_main.models.PupilDomainModel
import com.korchagin.presentation.constants.*


data class PupilModel(

    //---------> Personal information ---------->
    var id: String,
    var name: String,
    var nick: String,
    var email: String,
    var avatar: String,
    var born: String,
    var country: String,
    val coach: String,
    var city: String,
    var video: String,
    var role: String,
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

    var subscription: Int,
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
    var invertfrezzeRecord: Int,
    var onehandfrezze: Int,
    var onehandfrezzeRecord: Int,
    var shoulderfrezze: Int,
    var turtlefrezze: Int,

    //<--------- FREZZE <----------

    //-------> POWER MOVE ------------->

    var airflare: Int,
    var airflareRecord: Int,
    var backspin: Int,
    var backspinRecord: Int,
    var cricket: Int,
    var cricketRecord: Int,
    var elbowairflare: Int,
    var elbowairflareRecord: Int,
    var flare: Int,
    var flareRecord: Int,
    var jackhammer: Int,
    var jackhammerRecord: Int,
    var halo: Int,
    var haloRecord: Int,
    var headspin: Int,
    var headspinRecord: Int,
    var munchmill: Int,
    var munchmillRecord: Int,
    var ninetyNine: Int,
    var ninetyNineRecord: Int,
    var swipes: Int,
    var turtle: Int,
    var ufo: Int,
    var ufoRecord: Int,
    var web: Int,
    var webRecord: Int,
    var windmill: Int,
    var windmillRecord: Int,
    var wolf: Int,
    var wolfRecord: Int,

    //<-------- POWER MOVE <-------------

    //-----------> OFP ------------->

    var angle: Int,
    var bridge: Int,
    var finger: Int,
    var handstand: Int,
    var handstandRecord: Int,
    var handJump: Int,
    var handJumpRecord: Int,
    var handTouchLegs: Int,
    var handTouchLegsRecord: Int,
    var handWalk: Int,
    var handWalkRecord: Int,
    var horizont: Int,
    var horizontRecord: Int,
    var pushUps: Int,
    var pushUpsRecord: Int,
    var sitUps: Int,
    var pressUpHandstand: Int,
    var pressUpHandstandRecord: Int,

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
    nick = nick,
    email = email,
    avatar = avatar,
    born = born,
    country = country,
    coach = coach,
    city = city,
    video = video,
    role = role,
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
    invertfrezzeRecord = invertfrezzeRecord,
    onehandfrezze = onehandfrezze,
    onehandfrezzeRecord = onehandfrezzeRecord,
    shoulderfrezze = shoulderfrezze,
    turtlefrezze = turtlefrezze,

    airflare = airflare,
    airflareRecord = airflareRecord,
    backspin = backspin,
    backspinRecord = backspinRecord,
    cricket = cricket,
    cricketRecord = cricketRecord,
    elbowairflare = elbowairflare,
    elbowairflareRecord = elbowairflareRecord,
    flare = flare,
    flareRecord = flareRecord,
    jackhammer = jackhammer,
    jackhammerRecord = jackhammerRecord,
    halo = halo,
    haloRecord = haloRecord,
    headspin = headspin,
    headspinRecord = headspinRecord,
    munchmill = munchmill,
    munchmillRecord = munchmillRecord,
    ninetyNine = ninetyNine,
    ninetyNineRecord = ninetyNineRecord,
    swipes = swipes,
    turtle = turtle,
    ufo = ufo,
    ufoRecord = ufoRecord,
    web = web,
    webRecord = webRecord,
    windmill = windmill,
    windmillRecord = windmillRecord,
    wolf = wolf,
    wolfRecord = wolfRecord,

    angle = angle,
    bridge = bridge,
    finger = finger,
    handstand = handstand,
    handstandRecord = handstandRecord,
    handJump = handJump,
    handJumpRecord = handJumpRecord,
    handTouchLegs = handTouchLegs,
    handTouchLegsRecord = handTouchLegsRecord,
    handWalk = handWalk,
    handWalkRecord = handWalkRecord,
    horizont = horizont,
    horizontRecord = horizontRecord,
    pushUps = pushups,
    pushUpsRecord = pushupsRecord,
    sitUps = sit_ups,
    pressUpHandstand = pressUpHandstand,
    pressUpHandstandRecord = pressUpHandstandRecord,

    butterfly = butterfly,
    fold = fold,
    shoulders = shoulders,
    twine = twine,
)

fun PupilModel.toPupilDomainModel() = PupilDomainModel(
    id = id,
    name = name,
    nick = nick,
    email = email,
    avatar = avatar,
    born = born,
    coach = coach,
    country = country,
    city = city,
    video = video,
    role = role,
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
    invertfrezzeRecord = invertfrezzeRecord,
    onehandfrezze = onehandfrezze,
    onehandfrezzeRecord = onehandfrezzeRecord,
    shoulderfrezze = shoulderfrezze,
    turtlefrezze = turtlefrezze,

    airflare = airflare,
    airflareRecord = airflareRecord,
    backspin = backspin,
    backspinRecord = backspinRecord,
    cricket = cricket,
    cricketRecord = cricketRecord,
    elbowairflare = elbowairflare,
    elbowairflareRecord = elbowairflareRecord,
    flare = flare,
    flareRecord = flareRecord,
    jackhammer = jackhammer,
    jackhammerRecord = jackhammerRecord,
    halo = halo,
    haloRecord = haloRecord,
    headspin = headspin,
    headspinRecord = headspinRecord,
    munchmill = munchmill,
    munchmillRecord = munchmillRecord,
    ninetyNine = ninetyNine,
    ninetyNineRecord = ninetyNineRecord,
    swipes = swipes,
    turtle = turtle,
    ufo = ufo,
    ufoRecord = ufoRecord,
    web = web,
    webRecord = webRecord,
    windmill = windmill,
    windmillRecord = windmillRecord,
    wolf = wolf,
    wolfRecord = wolfRecord,

    angle = angle,
    bridge = bridge,
    finger = finger,
    handstand = handstand,
    handstandRecord = handstandRecord,
    handJump = handJump,
    handJumpRecord = handJumpRecord,
    handTouchLegs = handTouchLegs,
    handTouchLegsRecord = handTouchLegsRecord,
    handWalk = handWalk,
    handWalkRecord = handWalkRecord,
    horizont = horizont,
    horizontRecord = horizontRecord,
    pushups = pushUps,
    pushupsRecord = pushUpsRecord,
    sit_ups = sitUps,
    pressUpHandstand = pressUpHandstand,
    pressUpHandstandRecord = pressUpHandstandRecord,
    butterfly = butterfly,
    fold = fold,
    shoulders = shoulders,
    twine = twine,
)

fun PupilModel.getProgress(elementTitle: String): Float {
    return when (elementTitle) {
        RATING -> rating.toFloat()
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

fun PupilModel.getRecord(elementTitle: String): Int {
    return when (elementTitle) {
       /* BABY -> babyfrezze.toFloat()
        SHOULDER -> shoulderfrezze.toFloat()
        TURTLE -> turtlefrezze.toFloat()
        HEAD -> headfrezze.toFloat()
        CHAIR -> chairfrezze.toFloat()
        ELBOW -> elbowfrezze.toFloat()
        HEAD_HOLLOWBACK -> headhollowbackfrezze.toFloat()*/
        ONE_HAND -> onehandfrezzeRecord
        INVERT -> invertfrezzeRecord
  //      HOLLOWBACK -> hollowbackfrezze.toFloat()

        BACKSPIN -> backspinRecord
 //       TURTLEMOVE -> turtle.toFloat()
        HEADSPIN -> headspinRecord
        WINDMILL -> windmillRecord
        MUCHMILL -> munchmillRecord
        HALO -> haloRecord
        FLARE -> flareRecord
        WOLF -> wolfRecord
        WEB -> webRecord
        CRICKET -> cricketRecord
        AIRFLARE -> airflareRecord
        NINETYNINE -> ninetyNineRecord
        UFO -> ufoRecord
        ELBOW_AIRFLARE -> elbowairflareRecord
        JACKHAMMER -> jackhammerRecord
 //       SWIPES -> swipes.toFloat()

 //       ANGLE -> angle.toFloat()
 //       BRIDGE -> bridge.toFloat()
 //       FINGERS -> finger.toFloat()
        PUSHUPS -> pushUpsRecord
 //       SITUPS -> sitUps.toFloat()
        HANDSTAND -> handstandRecord
        HORIZONT -> horizontRecord
        PRESS_TO_HANDSTAND -> pressUpHandstandRecord

 /*       TWINE -> twine.toFloat()
        BUTTERFLY -> butterfly.toFloat()
        FOLD -> fold.toFloat()
        SHOULDERS -> shoulders.toFloat()*/
        else -> 0
    }
}


fun PupilModel.setProgress(elementTitle: String, progress: Int) {
    when (elementTitle) {
        BABY -> babyfrezze = progress
        SHOULDER -> shoulderfrezze = progress
        TURTLE -> turtlefrezze = progress
        HEAD -> headfrezze = progress
        CHAIR -> chairfrezze = progress
        ELBOW -> elbowfrezze = progress
        HEAD_HOLLOWBACK -> headhollowbackfrezze = progress
        ONE_HAND -> onehandfrezze = progress
        INVERT -> invertfrezze = progress
        HOLLOWBACK -> hollowbackfrezze = progress

        BACKSPIN -> backspin = progress
        TURTLEMOVE -> turtle = progress
        HEADSPIN -> headspin = progress
        WINDMILL -> windmill = progress
        MUCHMILL -> munchmill = progress
        HALO -> halo = progress
        FLARE -> flare = progress
        WOLF -> wolf = progress
        WEB -> web = progress
        CRICKET -> cricket = progress
        AIRFLARE -> airflare = progress
        NINETYNINE -> ninetyNine = progress
        UFO -> ufo = progress
        ELBOW_AIRFLARE -> elbowairflare = progress
        JACKHAMMER -> jackhammer = progress
        SWIPES -> swipes = progress

        ANGLE -> angle = progress
        BRIDGE -> bridge = progress
        FINGERS -> finger = progress
        PUSHUPS -> pushUps = progress
        SITUPS -> sitUps = progress
        HANDSTAND -> handstand = progress
        HORIZONT -> horizont = progress
        PRESS_TO_HANDSTAND -> pressUpHandstand = progress

        TWINE -> twine = progress
        BUTTERFLY -> butterfly = progress
        FOLD -> fold = progress
        SHOULDERS -> shoulders = progress
        else -> 0.0f
    }
}

fun PupilModel.setRecord(elementTitle: String, recordCount: Int) {
    when (elementTitle) {
      /*  BABY -> babyfrezze = recordCount
        SHOULDER -> shoulderfrezze = recordCount
        TURTLE -> turtlefrezze = recordCount
        HEAD -> headfrezze = recordCount
        CHAIR -> chairfrezze = recordCount
        ELBOW -> elbowfrezze = recordCount
        HEAD_HOLLOWBACK -> headhollowbackfrezze = recordCount*/
        ONE_HAND -> onehandfrezzeRecord = recordCount
        INVERT -> invertfrezzeRecord = recordCount
 //       HOLLOWBACK -> hollowbackfrezze = recordCount

        BACKSPIN -> backspinRecord = recordCount
 //       TURTLEMOVE -> turtle = recordCount
        HEADSPIN -> headspinRecord = recordCount
        WINDMILL -> windmillRecord = recordCount
        MUCHMILL -> munchmillRecord = recordCount
        HALO -> haloRecord = recordCount
        FLARE -> flareRecord = recordCount
        WOLF -> wolfRecord = recordCount
        WEB -> webRecord = recordCount
        CRICKET -> cricketRecord = recordCount
        AIRFLARE -> airflareRecord = recordCount
        NINETYNINE -> ninetyNineRecord = recordCount
        UFO -> ufoRecord = recordCount
        ELBOW_AIRFLARE -> elbowairflareRecord = recordCount
        JACKHAMMER -> jackhammerRecord = recordCount
 //       SWIPES -> swipes = recordCount

  /*      ANGLE -> angle = recordCount
        BRIDGE -> bridge = recordCount
        FINGERS -> finger = recordCount*/
        PUSHUPS -> pushUpsRecord = recordCount
 //       SITUPS -> sitUps = recordCount
        HANDSTAND -> handstandRecord = recordCount
        HORIZONT -> horizontRecord = recordCount
        PRESS_TO_HANDSTAND -> pressUpHandstandRecord = recordCount
    }
}
