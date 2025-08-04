package com.korchagin.domain_main.models

import com.korchagin.data.models.PupilEntry

data class PupilDomainModel(

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
    var pushups: Int,
    var sit_ups: Int,
    var pressUpHandstand: Int,

    //<----------- OFP <-------------

    //--------> stretching ------------>

    var butterfly: Int,
    var fold: Int,
    var shoulders: Int,
    var twine: Int,

    //<-------- stretching <-------------
)
fun PupilEntry.toPupilDomainModel() = PupilDomainModel(
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
    ninetyNine = ninety_nine,
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
    pushups = pushups,
    sit_ups = sit_ups,
    pressUpHandstand = press_up_handstand,

    butterfly = butterfly,
    fold = fold,
    shoulders = shoulders,
    twine = twine,
)