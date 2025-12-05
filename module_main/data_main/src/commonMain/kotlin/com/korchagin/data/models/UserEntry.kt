package com.korchagin.data.models

@kotlinx.serialization.Serializable
data class UserEntry(

    //---------> Personal information ---------->
    var id: String,
    var name: String,
    var nick: String,
    var email: String,
    var avatar: String,
    var born: String,
    var breaking_start: String,
    var country: String,
    var city: String,
    var coach: String,
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
    var invertfrezze_record: Int,
    var onehandfrezze: Int,
    var onehandfrezze_record: Int,
    var shoulderfrezze: Int,
    var turtlefrezze: Int,

    //<--------- FREZZE <----------

    //-------> POWER MOVE ------------->

    var airflare: Int,
    var airflare_record: Int,
    var backspin: Int,
    var backspin_record: Int,
    var cricket: Int,
    var cricket_record: Int,
    var elbowairflare: Int,
    var elbowairflare_record: Int,
    var flare: Int,
    var flare_record: Int,
    var jackhammer: Int,
    var jackhammer_record: Int,
    var halo: Int,
    var halo_record: Int,
    var headspin: Int,
    var headspin_record: Int,
    var munchmill: Int,
    var munchmill_record: Int,
    var ninety_nine: Int,
    var ninety_nine_record: Int,
    var swipes: Int,
    var turtle: Int,
    var ufo: Int,
    var ufo_record: Int,
    var web: Int,
    var web_record: Int,
    var windmill: Int,
    var windmill_record: Int,
    var wolf: Int,
    var wolf_record: Int,

    //<-------- POWER MOVE <-------------

    //-----------> OFP ------------->

    var angle: Int,
    var bridge: Int,
    var finger: Int,
    var handstand: Int,
    var handstand_record: Int,
    var hand_jump: Int,
    var hand_jump_record: Int,
    var hand_touch_leg: Int,
    var hand_touch_leg_record: Int,
    var hand_walk: Int,
    var hand_walk_record: Int,
    var horizont: Int,
    var horizont_record: Int,
    var pushups: Int,
    var pushups_record: Int,
    var sit_ups: Int,
    var press_up_handstand: Int,
    var press_up_handstand_record: Int,

    //<----------- OFP <-------------

    //--------> stretching ------------>

    var butterfly: Int,
    var fold: Int,
    var shoulders: Int,
    var twine: Int,

    //<-------- stretching <-------------
)
