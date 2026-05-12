package team.platforma.infoteam.theme.typography

import androidx.compose.runtime.Composable
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.font.FontWeight.Companion.W400
import androidx.compose.ui.text.font.FontWeight.Companion.W500
import androidx.compose.ui.text.font.FontWeight.Companion.W600
import androidx.compose.ui.unit.sp

object Typography {
    private var text3xl = Text3XL()
    fun text3xl(weights: FontWeights) = text3xl.style(weights)

    private var text2xl = Text2XL()
    fun text2xl(weights: FontWeights) = text2xl.style(weights)

    private var textLg = TextLG()
    fun textLg(weights: FontWeights) = textLg.style(weights)

    private var textSm = TextSM()
    fun textSm(weights: FontWeights) = textSm.style(weights)

    private var textXs = TextXS()
    fun textXs(weights: FontWeights) = textXs.style(weights)

    @Composable
    fun define(isDark: Boolean) {
        isDark
        text3xl = Text3XL()
        text2xl = Text2XL()
        textLg = TextLG()
        textSm = TextSM()
        textXs = TextXS()
    }
}

class Text3XL() {
    fun style(weights: FontWeights) = TextStyle(
        fontSize = 22.sp, lineHeight = 28.sp, fontWeight = weights.weight
    )
}

class Text2XL() {
    fun style(weights: FontWeights) = TextStyle(
        fontSize = 16.sp, lineHeight = 24.sp, fontWeight = weights.weight
    )
}

class TextLG() {
    fun style(weights: FontWeights) = TextStyle(
        fontSize = 14.sp, lineHeight = 20.sp, fontWeight = weights.weight
    )
}

class TextSM() {
    fun style(weights: FontWeights) = TextStyle(
        fontSize = 12.sp, lineHeight = 16.sp, fontWeight = weights.weight
    )
}

class TextXS() {
    fun style(weights: FontWeights) = TextStyle(
        fontSize = 11.sp, lineHeight = 16.sp, fontWeight = weights.weight
    )
}

enum class FontWeights(val weight: FontWeight) {
    Regular(W400), Medium(W500), SemiBold(W600)
}

