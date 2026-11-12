package org.korchagin.kmp.activity.userMain.navigation

import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.heart
import breakingkmpapp.composeapp.generated.resources.main
import breakingkmpapp.composeapp.generated.resources.people
import breakingkmpapp.composeapp.generated.resources.rating
import breakingkmpapp.composeapp.generated.resources.records
import breakingkmpapp.composeapp.generated.resources.star_default
import org.jetbrains.compose.resources.DrawableResource

sealed class UserDestination(
    val title: String,
    val icon: DrawableResource
) {
    data object Home : UserDestination(
        title = "Главная",
        Res.drawable.main
    )

    data object Ratings : UserDestination(
        title = "Рейтинги",
        icon = Res.drawable.rating
    )

    data object Records : UserDestination(
        title = "Рекорды",
        icon = Res.drawable.records
    )

    data object Bboys : UserDestination(
        title = "B-boys",
        icon = Res.drawable.heart
    )

    data object Profile : UserDestination(
        "Профиль",
        icon = Res.drawable.people
    )

    data object OtherProfile : UserDestination(
        title = "Профиль пользователя",
        icon = Res.drawable.people
    )

    data object ElementDetails : UserDestination(
        "Описание элемента",
        icon = Res.drawable.star_default
    )

    data object BboysDetails : UserDestination(
        "Описание",
        icon = Res.drawable.star_default
    )

    data object Events : UserDestination(
        "События",
        icon = Res.drawable.star_default
    )

}