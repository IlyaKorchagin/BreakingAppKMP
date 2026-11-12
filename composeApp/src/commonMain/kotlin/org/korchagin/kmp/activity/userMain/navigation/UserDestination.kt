package org.korchagin.kmp.activity.userMain.navigation

sealed class UserDestination(
    val title: String
) {
    data object Home : UserDestination(
        title = "Главная"
    )

    data object Ratings : UserDestination(
        title = "Рейтинги"
    )

    data object Records : UserDestination(
        title = "Рекорды"
    )

    data object Bboys : UserDestination(
        title = "B-boys"
    )

    data object Profile : UserDestination(
        "Профиль"
    )

    data object ElementDetails : UserDestination("Описание элемента")

    data object BboysDetails : UserDestination("Описание")

}