package org.korchagin.kmp.activity.adminMain.navigation

sealed class AdminDestination(
    val title: String
) {
    data object Home : AdminDestination(
        title = "Главная"
    )

    data object Profile : AdminDestination(
        "Профиль"
    )

    data object Events : AdminDestination(
        "События"
    )

    data object EditUser : AdminDestination("Ученик")

}