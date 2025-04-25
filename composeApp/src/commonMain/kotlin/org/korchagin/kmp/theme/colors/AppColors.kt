package org.korchagin.kmp.theme.colors

import androidx.compose.ui.graphics.Color

private object AppColorsDefined {
    object LightTheme {
        val primaryColor = Color(0xFF2261AE)

        val textDefault = Color(0xFF222224)
        val textOnPrimary = Color(0xFFFFFFFF)
        val iconOnPrimary = Color(0xFFFFFFFF)

        val textGrey = Color(0xFF76767A)
        val iconGrey = Color(0xFF76767A)

        val defaultBackground = Color(0xFFFFFFFF)
        val defaultDividerColor = Color(0xFF222224)

        val dislikeColor = Color(0xFFFF6363)
        val shareColor = Color(0xFFEFB000)
        val likeColor = Color(0xFF2261AE)

        val reportStatusAcceptedColor = Color(0xFF15B84F)
        val reportStatusRejectedColor = Color(0xFFFF6363)
        val reportStatusModeratedColor = Color(0xFFEFB000)

        val reportOnAcceptedTextColor = Color(0xFFFFFFFF)
        val reportOnRejectedTextColor = Color(0xFFFFFFFF)
        val reportOnModerationTextColor = Color(0xFFFFFFFF)

        val ratingFistPlaceColor = Color(0xFFEFB000)
        val ratingSecondPlaceColor = Color(0xFF61688D)
        val ratingThirdPlaceColor = Color(0xFFCC7C4A)
    }

    object DarkTheme {
        val primaryColor = Color(0xFF2261AE)

        val textDefault = Color(0xFFFFFFFF)
        val textOnPrimary = Color(0xFFFFFFFF)
        val iconOnPrimary = Color(0xFFFFFFFF)

        val textGrey = Color(0xFFBCBCBF)
        val iconGrey = Color(0xFFBCBCBF)

        val defaultBackground = Color(0xFF222224)
        val defaultDividerColor = Color(0xFFFFFFFF)

        val dislikeColor = Color(0xFFFF6363)
        val shareColor = Color(0xFFEFB000)
        val likeColor = Color(0xFF2261AE)

        val reportStatusAcceptedColor = Color(0xFF15B84F)
        val reportStatusRejectedColor = Color(0xFFFF6363)
        val reportStatusModeratedColor = Color(0xFFEFB000)

        val reportOnAcceptedTextColor = Color(0xFFFFFFFF)
        val reportOnRejectedTextColor = Color(0xFFFFFFFF)
        val reportOnModerationTextColor = Color(0xFFFFFFFF)

        val ratingFistPlaceColor = Color(0xFFEFB000)
        val ratingSecondPlaceColor = Color(0xFF61688D)
        val ratingThirdPlaceColor = Color(0xFFCC7C4A)
    }
}

object AppColors {
    private var mColors: Colors = Colors()
    fun colors() = mColors
    fun define(colors: Colors) {
        mColors = colors
    }
}

class AppColorsTheme() {
    fun light() {
        AppColors.define(
            Colors(
                primaryColor = AppColorsDefined.LightTheme.primaryColor,
                textDefault = AppColorsDefined.LightTheme.textDefault,
                textOnPrimary = AppColorsDefined.LightTheme.textOnPrimary,
                iconOnPrimary = AppColorsDefined.LightTheme.iconOnPrimary,
                textGrey = AppColorsDefined.LightTheme.textGrey,
                defaultBackground = AppColorsDefined.LightTheme.defaultBackground,
                iconGrey = AppColorsDefined.LightTheme.iconGrey,
                defaultDividerColor = AppColorsDefined.LightTheme.defaultDividerColor,
                dislikeColor = AppColorsDefined.LightTheme.dislikeColor,
                shareColor = AppColorsDefined.LightTheme.shareColor,
                likeColor = AppColorsDefined.LightTheme.likeColor,
                reportStatusAcceptedColor = AppColorsDefined.LightTheme.reportStatusAcceptedColor,
                reportStatusRejectedColor = AppColorsDefined.LightTheme.reportStatusRejectedColor,
                reportStatusModeratedColor = AppColorsDefined.LightTheme.reportStatusModeratedColor,
                reportOnAcceptedTextColor = AppColorsDefined.LightTheme.reportOnAcceptedTextColor,
                reportOnRejectedTextColor = AppColorsDefined.LightTheme.reportOnRejectedTextColor,
                reportOnModerationTextColor = AppColorsDefined.LightTheme.reportOnModerationTextColor,

                ratingFistPlaceColor = AppColorsDefined.LightTheme.ratingFistPlaceColor,
                ratingSecondPlaceColor = AppColorsDefined.LightTheme.ratingSecondPlaceColor,
                ratingThirdPlaceColor = AppColorsDefined.LightTheme.ratingThirdPlaceColor
            )
        )
    }

    fun dark() {
        AppColors.define(
            Colors(
                primaryColor = AppColorsDefined.DarkTheme.primaryColor,
                textDefault = AppColorsDefined.DarkTheme.textDefault,
                textOnPrimary = AppColorsDefined.DarkTheme.textOnPrimary,
                iconOnPrimary = AppColorsDefined.DarkTheme.iconOnPrimary,
                textGrey = AppColorsDefined.DarkTheme.textGrey,
                defaultBackground = AppColorsDefined.DarkTheme.defaultBackground,
                iconGrey = AppColorsDefined.DarkTheme.iconGrey,
                defaultDividerColor = AppColorsDefined.DarkTheme.defaultDividerColor,
                dislikeColor = AppColorsDefined.DarkTheme.dislikeColor,
                shareColor = AppColorsDefined.DarkTheme.shareColor,
                likeColor = AppColorsDefined.DarkTheme.likeColor,

                reportStatusAcceptedColor = AppColorsDefined.DarkTheme.reportStatusAcceptedColor,
                reportStatusRejectedColor = AppColorsDefined.DarkTheme.reportStatusRejectedColor,
                reportStatusModeratedColor = AppColorsDefined.DarkTheme.reportStatusModeratedColor,
                reportOnAcceptedTextColor = AppColorsDefined.DarkTheme.reportOnAcceptedTextColor,
                reportOnRejectedTextColor = AppColorsDefined.DarkTheme.reportOnRejectedTextColor,
                reportOnModerationTextColor = AppColorsDefined.DarkTheme.reportOnModerationTextColor,

                ratingFistPlaceColor = AppColorsDefined.DarkTheme.ratingFistPlaceColor,
                ratingSecondPlaceColor = AppColorsDefined.DarkTheme.ratingSecondPlaceColor,
                ratingThirdPlaceColor = AppColorsDefined.DarkTheme.ratingThirdPlaceColor
            )
        )
    }
}

data class Colors(
    val primaryColor: Color = Color(0xFFFFFFFF),
    val textDefault: Color = Color(0xFFFFFFFF),
    val textOnPrimary: Color = Color(0xFFFFFFFF),
    val iconOnPrimary: Color = Color(0xFFFFFFFF),
    val textGrey: Color = Color(0xFFFFFFFF),
    val defaultBackground: Color = Color(0xFFFFFFFF),
    val iconGrey: Color = Color(0xFFFFFFFF),
    val defaultDividerColor: Color = Color(0xFFFFFFFF),
    val dislikeColor: Color = Color(0xFFFFFFFF),
    val shareColor: Color = Color(0xFFFFFFFF),
    val likeColor: Color = Color(0xFFFFFFFF),

    val reportStatusAcceptedColor: Color = Color(0xFFFFFFFF),
    val reportStatusRejectedColor: Color = Color(0xFFFFFFFF),
    val reportStatusModeratedColor: Color = Color(0xFFFFFFFF),
    val reportOnAcceptedTextColor: Color = Color(0xFFFFFFFF),
    val reportOnRejectedTextColor: Color = Color(0xFFFFFFFF),
    val reportOnModerationTextColor: Color = Color(0xFFFFFFFF),

    val ratingFistPlaceColor: Color = Color(0xFFFFFFFF),
    val ratingSecondPlaceColor: Color = Color(0xFFFFFFFF),
    val ratingThirdPlaceColor: Color = Color(0xFFFFFFFF)
)