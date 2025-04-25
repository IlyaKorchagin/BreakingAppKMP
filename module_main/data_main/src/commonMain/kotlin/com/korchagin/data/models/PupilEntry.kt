package com.korchagin.data.models

@kotlinx.serialization.Serializable
// Описание класса Pupils
data class PupilEntry(

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
    var freeze_rating: Double,
    var powermove_rating: Double,
    var ofp_rating: Double,
    var streching_rating: Double,
    var battle_rating: Double,
    var battle_cur_position: Int,
    var battle_new_position: Int,
    var new_position: Int,
    var current_position: Int,

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
    var ninety_nine: Int,
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
    var press_up_handstand: Int,

    //<----------- OFP <-------------

    //--------> stretching ------------>

    var butterfly: Int,
    var fold: Int,
    var shoulders: Int,
    var twine: Int,

    //<-------- stretching <-------------
)

fun toPupilEntry(data: Map<String, Any>): PupilEntry {
    return PupilEntry(
        id = data["id"] as String,
        name = data["name"] as String,
        email = data["email"] as String,
        avatar = data["avatar"] as String,
        born = data["born"] as String,
        country = data["country"] as String,
        city = data["city"] as String,
        video = data["video"] as String,
        status = (data["status"] as Long).toInt(),

        subscription = data["subscription"] as Long,
        subscriptionDay = (data["subscriptionDay"] as Long).toInt(),
        subscriptionMonth = (data["subscriptionMonth"] as Long).toInt(),
        subscriptionYear = (data["subscriptionYear"] as Long).toInt(),

        currentTask = data["currentTask"] as String,

        currentTaskProgress = (data["currentTaskProgress"] as Long).toInt(),

        roundsList = data["roundsList"] as String,

        rating = data["rating"] as Double,
        freeze_rating = data["freeze_rating"] as Double,
        powermove_rating = data["powermove_rating"] as Double,
        ofp_rating = data["ofp_rating"]  as Double,
        streching_rating = data["streching_rating"] as Double,
        battle_rating = data["battle_rating"] as Double,
        battle_cur_position = (data["battle_cur_position"] as Long).toInt(),
        battle_new_position = (data["battle_new_position"] as Long).toInt(),
        new_position = (data["new_position"] as Long).toInt(),
        current_position = (data["current_position"] as Long).toInt(),

        babyfrezze = (data["babyfrezze"] as Long).toInt(),
        chairfrezze = (data["chairfrezze"] as Long).toInt(),
        elbowfrezze = (data["elbowfrezze"] as Long).toInt(),
        headfrezze = (data["headfrezze"] as Long).toInt(),
        headhollowbackfrezze = (data["headhollowbackfrezze"] as Long).toInt(),
        hollowbackfrezze = (data["hollowbackfrezze"] as Long).toInt(),
        invertfrezze = (data["invertfrezze"] as Long).toInt(),
        onehandfrezze = (data["onehandfrezze"] as Long).toInt(),
        shoulderfrezze = (data["shoulderfrezze"] as Long).toInt(),
        turtlefrezze = (data["turtlefrezze"] as Long).toInt(),



        airflare = (data["airflare"] as Long).toInt(),
        backspin = (data["backspin"] as Long).toInt(),
        cricket = (data["cricket"] as Long).toInt(),
        elbowairflare = (data["elbowairflare"] as Long).toInt(),
        flare = (data["flare"] as Long).toInt(),
        jackhammer = (data["jackhammer"] as Long).toInt(),
        halo = (data["halo"] as Long).toInt(),
        headspin = (data["headspin"] as Long).toInt(),
        munchmill = (data["munchmill"] as Long).toInt(),
        ninety_nine = (data["ninety_nine"] as Long).toInt(),
        swipes = (data["swipes"] as Long).toInt(),
        turtle = (data["turtle"] as Long).toInt(),
        ufo = (data["ufo"] as Long).toInt(),
        web = (data["web"] as Long).toInt(),
        windmill = (data["windmill"] as Long).toInt(),
        wolf = (data["wolf"] as Long).toInt(),


        angle = (data["angle"] as Long).toInt(),
        bridge = (data["bridge"] as Long).toInt(),
        finger = (data["finger"] as Long).toInt(),
        handstand = (data["handstand"] as Long).toInt(),
        horizont = (data["horizont"] as Long).toInt(),
        pushups = (data["pushups"] as Long).toInt(),
        sit_ups = (data["sit_ups"] as Long).toInt(),
        press_up_handstand = (data["press_up_handstand"] as Long).toInt(),

        butterfly = (data["butterfly"] as Long).toInt(),
        fold = (data["fold"] as Long).toInt(),
        shoulders = (data["shoulders"] as Long).toInt(),
        twine = (data["twine"] as Long).toInt(),
    )
}
