package org.korchagin.kmp.activity.events.navigation

sealed class EventsDestination(
    val title: String
) {
    data object Events : EventsDestination(
        title = "События"
    )

    data object Selection : EventsDestination(
        "Отбор"
    )

    data object Battle : EventsDestination(
        "Баттлы"
    )


}