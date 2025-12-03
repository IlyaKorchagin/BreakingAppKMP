package com.korchagin.domain_main.models

import com.korchagin.data.models.UserEntry

data class PupilDomainModel(

    //---------> Personal information ---------->
    var id: String,
    var name: String,
    var nick: String,
    var email: String,
    var avatar: String,
    var born: String,
    var country: String,
    var city: String,
    val coach: String,
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
    var pushups: Int,
    var pushupsRecord: Int,
    var sit_ups: Int,
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
fun UserEntry.toPupilDomainModel() = PupilDomainModel(
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
    freezeRating = freeze_rating,
    powermoveRating = powermove_rating,
    ofpRating = ofp_rating,
    strechingRating = streching_rating,
    battleRating = battle_rating,
    battleCurPosition = battle_cur_position,
    battleNewPosition = battle_new_position,
    newPosition = new_position,
    currentPosition = current_position,

    babyfrezze = babyfrezze,
    chairfrezze = chairfrezze,
    elbowfrezze = elbowfrezze,
    headfrezze = headfrezze,
    headhollowbackfrezze = headhollowbackfrezze,
    hollowbackfrezze = hollowbackfrezze,
    invertfrezze = invertfrezze,
    invertfrezzeRecord = invertfrezze_record,
    onehandfrezze = onehandfrezze,
    onehandfrezzeRecord = onehandfrezze_record,
    shoulderfrezze = shoulderfrezze,
    turtlefrezze = turtlefrezze,

    airflare = airflare,
    airflareRecord = airflare_record,
    backspin = backspin,
    backspinRecord = backspin_record,
    cricket = cricket,
    cricketRecord = cricket_record,
    elbowairflare = elbowairflare,
    elbowairflareRecord = elbowairflare_record,
    flare = flare,
    flareRecord = flare_record,
    jackhammer = jackhammer,
    jackhammerRecord = jackhammer_record,
    halo = halo,
    haloRecord = halo_record,
    headspin = headspin,
    headspinRecord = headspin_record,
    munchmill = munchmill,
    munchmillRecord = munchmill_record,
    ninetyNine = ninety_nine,
    ninetyNineRecord = ninety_nine_record,
    swipes = swipes,
    turtle = turtle,
    ufo = ufo,
    ufoRecord = ufo_record,
    web = web,
    webRecord = web_record,
    windmill = windmill,
    windmillRecord = windmill_record,
    wolf = wolf,
    wolfRecord = wolf_record,

    angle = angle,
    bridge = bridge,
    finger = finger,
    handstand = handstand,
    handstandRecord = handstand_record,
    handJump = hand_jump,
    handJumpRecord = hand_jump_record,
    handTouchLegs = hand_touch_leg,
    handTouchLegsRecord = hand_touch_leg_record,
    handWalk = hand_walk,
    handWalkRecord = hand_walk_record,
    horizont = horizont,
    horizontRecord = horizont_record,
    pushups = pushups,
    pushupsRecord = pushups_record,
    sit_ups = sit_ups,
    pressUpHandstand = press_up_handstand,
    pressUpHandstandRecord = press_up_handstand_record,

    butterfly = butterfly,
    fold = fold,
    shoulders = shoulders,
    twine = twine
)

fun PupilDomainModel.toPupilDataModel() = UserEntry(
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
    freeze_rating = freezeRating,
    powermove_rating = powermoveRating,
    ofp_rating = ofpRating,
    streching_rating = strechingRating,
    battle_rating = battleRating,
    battle_cur_position = battleCurPosition,
    battle_new_position = battleNewPosition,
    new_position = newPosition,
    current_position = currentPosition,

    babyfrezze = babyfrezze,
    chairfrezze = chairfrezze,
    elbowfrezze = elbowfrezze,
    headfrezze = headfrezze,
    headhollowbackfrezze = headhollowbackfrezze,
    hollowbackfrezze = hollowbackfrezze,
    invertfrezze = invertfrezze,
    invertfrezze_record = invertfrezzeRecord,
    onehandfrezze = onehandfrezze,
    onehandfrezze_record = onehandfrezzeRecord,
    shoulderfrezze = shoulderfrezze,
    turtlefrezze = turtlefrezze,

    airflare = airflare,
    airflare_record = airflareRecord,
    backspin = backspin,
    backspin_record = backspinRecord,
    cricket = cricket,
    cricket_record = cricketRecord,
    elbowairflare = elbowairflare,
    elbowairflare_record = elbowairflareRecord,
    flare = flare,
    flare_record = flareRecord,
    jackhammer = jackhammer,
    jackhammer_record = jackhammerRecord,
    halo = halo,
    halo_record = haloRecord,
    headspin = headspin,
    headspin_record = headspinRecord,
    munchmill = munchmill,
    munchmill_record = munchmillRecord,
    ninety_nine = ninetyNine,
    ninety_nine_record = ninetyNineRecord,
    swipes = swipes,
    turtle = turtle,
    ufo = ufo,
    ufo_record = ufoRecord,
    web = web,
    web_record = webRecord,
    windmill = windmill,
    windmill_record = windmillRecord,
    wolf = wolf,
    wolf_record = wolfRecord,

    angle = angle,
    bridge = bridge,
    finger = finger,
    handstand = handstand,
    handstand_record = handstandRecord,
    hand_jump = handJump,
    hand_jump_record = handJumpRecord,
    hand_touch_leg = handTouchLegs,
    hand_touch_leg_record = handTouchLegsRecord,
    hand_walk = handWalk,
    hand_walk_record = handWalkRecord,
    horizont = horizont,
    horizont_record = horizontRecord,
    pushups = pushups,
    pushups_record = pushupsRecord,
    sit_ups = sit_ups,
    press_up_handstand = pressUpHandstand,
    press_up_handstand_record = pressUpHandstandRecord,

    butterfly = butterfly,
    fold = fold,
    shoulders = shoulders,
    twine = twine
)
