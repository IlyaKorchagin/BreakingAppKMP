package org.korchagin.kmp.theme.colors

import androidx.compose.ui.graphics.Color

private object AppColorsDefined {
    object LightTheme {
        val textDefault = Color(0x00000000)
        val textDisabled = Color(0xFF787F88)

        val teal200 = Color(0xFF03DAC5)
        val mainGreen = Color(0xFF01A2A6)
        val easy = Color(0xFFFCFC98)
        val medium = Color(0xFFfce300)
        val hard = Color(0xFFfc9700)
        val progress = Color(0xFF05fa26)

        val silver = Color(0xFFC0C0C0)
        val gold = Color(0xFFFFD700)
        val bronze = Color(0xFFCD7F32)
        val default = Color(0xFF737373)
        val startAvatar = Color(0xFFf0f1f2)
        val startGold = Color(0xFFf9faaa)
        val startBronze = Color(0xFFebd0a4)

        val onePosition = Color(0xFFD64C08)
        val twoPosition = Color(0xFFfc5700)
        val threePosition = Color(0xFFfc7200)
        val fourPosition = Color(0xFFfc9700)
        val fivePosition = Color(0xFFfcae00)
        val sixPosition = Color(0xFFfcd000)
        val sevenPosition = Color(0xFFfce300)
        val eightPosition = Color(0xFFfcfa08)
        val ninePosition = Color(0xFFfcfa58)
        val tenPosition = Color(0xFFfcfa98)

        val primaryColor = Color(0xFF2261AE)

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
        val textDefault = Color(0xFFFFFFFF)
        val textDisabled = Color(0xFF50555C)

        val teal200 = Color(0xFF03DAC5)
        val mainGreen = Color(0xFF01A2A6)
        val easy = Color(0xFFFCFC98)
        val medium = Color(0xFFfce300)
        val hard = Color(0xFFfc9700)
        val progress = Color(0xFF05fa26)

        val silver = Color(0xFFC0C0C0)
        val gold = Color(0xFFFFD700)
        val bronze = Color(0xFFCD7F32)
        val default = Color(0xFF737373)
        val startAvatar = Color(0xFFf0f1f2)
        val startGold = Color(0xFFf9faaa)
        val startBronze = Color(0xFFebd0a4)

        val onePosition = Color(0xFFD64C08)
        val twoPosition = Color(0xFFfc5700)
        val threePosition = Color(0xFFfc7200)
        val fourPosition = Color(0xFFfc9700)
        val fivePosition = Color(0xFFfcae00)
        val sixPosition = Color(0xFFfcd000)
        val sevenPosition = Color(0xFFfce300)
        val eightPosition = Color(0xFFfcfa08)
        val ninePosition = Color(0xFFfcfa58)
        val tenPosition = Color(0xFFfcfa98)

        val primaryColor = Color(0xFF2261AE)

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
                teal200 = AppColorsDefined.LightTheme.teal200,
                mainGreen = AppColorsDefined.LightTheme.mainGreen,
                easy = AppColorsDefined.LightTheme.easy,
                medium = AppColorsDefined.LightTheme.medium,
                hard = AppColorsDefined.LightTheme.hard,
                progress = AppColorsDefined.LightTheme.progress,
                silver = AppColorsDefined.LightTheme.silver,
                gold = AppColorsDefined.LightTheme.gold,
                bronze = AppColorsDefined.LightTheme.bronze,
                default = AppColorsDefined.LightTheme.default,
                startAvatar = AppColorsDefined.LightTheme.startAvatar,
                startGold = AppColorsDefined.LightTheme.startGold,
                startBronze = AppColorsDefined.LightTheme.startBronze,
                onePosition = AppColorsDefined.LightTheme.onePosition,
                twoPosition = AppColorsDefined.LightTheme.twoPosition,
                threePosition = AppColorsDefined.LightTheme.threePosition,
                fourPosition = AppColorsDefined.LightTheme.fourPosition,
                fivePosition = AppColorsDefined.LightTheme.fivePosition,
                sixPosition = AppColorsDefined.LightTheme.sixPosition,
                sevenPosition = AppColorsDefined.LightTheme.sevenPosition,
                eightPosition = AppColorsDefined.LightTheme.eightPosition,
                ninePosition = AppColorsDefined.LightTheme.ninePosition,
                tenPosition = AppColorsDefined.LightTheme.tenPosition,
                primaryColor = AppColorsDefined.LightTheme.primaryColor,
                textDefault = AppColorsDefined.LightTheme.textDefault,
                textDisabled = AppColorsDefined.LightTheme.textDisabled,
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
                teal200 = AppColorsDefined.DarkTheme.teal200,
                mainGreen = AppColorsDefined.DarkTheme.mainGreen,
                easy = AppColorsDefined.DarkTheme.easy,
                medium = AppColorsDefined.DarkTheme.medium,
                hard = AppColorsDefined.DarkTheme.hard,
                progress = AppColorsDefined.DarkTheme.progress,
                silver = AppColorsDefined.DarkTheme.silver,
                gold = AppColorsDefined.DarkTheme.gold,
                bronze = AppColorsDefined.DarkTheme.bronze,
                default = AppColorsDefined.DarkTheme.default,
                startAvatar = AppColorsDefined.DarkTheme.startAvatar,
                startGold = AppColorsDefined.DarkTheme.startGold,
                startBronze = AppColorsDefined.DarkTheme.startBronze,
                onePosition = AppColorsDefined.DarkTheme.onePosition,
                twoPosition = AppColorsDefined.DarkTheme.twoPosition,
                threePosition = AppColorsDefined.DarkTheme.threePosition,
                fourPosition = AppColorsDefined.DarkTheme.fourPosition,
                fivePosition = AppColorsDefined.DarkTheme.fivePosition,
                sixPosition = AppColorsDefined.DarkTheme.sixPosition,
                sevenPosition = AppColorsDefined.DarkTheme.sevenPosition,
                eightPosition = AppColorsDefined.DarkTheme.eightPosition,
                ninePosition = AppColorsDefined.DarkTheme.ninePosition,
                tenPosition = AppColorsDefined.DarkTheme.tenPosition,
                primaryColor = AppColorsDefined.DarkTheme.primaryColor,
                textDefault = AppColorsDefined.DarkTheme.textDefault,
                textDisabled = AppColorsDefined.DarkTheme.textDisabled,
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
    val teal200: Color = Color(0xFFFFFFFF),
    val mainGreen: Color = Color(0xFFFFFFFF),
    val easy: Color = Color(0xFFFFFFFF),
    val medium: Color = Color(0xFFFFFFFF),
    val hard: Color = Color(0xFFFFFFFF),
    val progress: Color = Color(0xFFFFFFFF),
    val silver: Color = Color(0xFFFFFFFF),
    val gold: Color = Color(0xFFFFFFFF),
    val bronze: Color = Color(0xFFFFFFFF),
    val default: Color = Color(0xFFFFFFFF),
    val startAvatar: Color = Color(0xFFFFFFFF),
    val startGold: Color = Color(0xFFFFFFFF),
    val startBronze: Color = Color(0xFFFFFFFF),
    val onePosition: Color = Color(0xFFFFFFFF),
    val twoPosition: Color = Color(0xFFFFFFFF),
    val threePosition: Color = Color(0xFFFFFFFF),
    val fourPosition: Color = Color(0xFFFFFFFF),
    val fivePosition: Color = Color(0xFFFFFFFF),
    val sixPosition: Color = Color(0xFFFFFFFF),
    val sevenPosition: Color = Color(0xFFFFFFFF),
    val eightPosition: Color = Color(0xFFFFFFFF),
    val ninePosition: Color = Color(0xFFFFFFFF),
    val tenPosition: Color = Color(0xFFFFFFFF),
    val primaryColor: Color = Color(0xFFFFFFFF),
    val textDefault: Color = Color(0xFFFFFFFF),
    val textDisabled: Color = Color(0xFFFFFFFF),
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