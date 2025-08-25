package org.korchagin.kmp.uiElements

import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.datetime.Clock
import kotlinx.datetime.LocalDate
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime

@Composable
fun StyledTextScreen(title: String, description: String) {
    val styledText = buildAnnotatedString {
        withStyle(style = SpanStyle( fontSize = 11.sp)) {
            append(title)
        }
        withStyle(style = SpanStyle(fontWeight = FontWeight.Bold, fontSize = 14.sp)) {
            append(description)
        }
    }

    Text(
        text = styledText,
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 8.dp),
        textAlign = TextAlign.Center
    )
}


fun calculateAge(dateOfBirthString: String): Int {
    val months = mapOf(
        "января" to 1, "февраля" to 2, "марта" to 3,
        "апреля" to 4, "мая" to 5, "июня" to 6,
        "июля" to 7, "августа" to 8, "сентября" to 9,
        "октября" to 10, "ноября" to 11, "декабря" to 12
    )

    val parts = dateOfBirthString.lowercase().trim().split(" ")
    require(parts.size == 3) { "Дата должна быть в формате: '1 января 2000'" }

    val day = parts[0].toIntOrNull() ?: error("Некорректный день: ${parts[0]}")
    val month = months[parts[1]] ?: error("Некорректный месяц: ${parts[1]}")
    val year = parts[2].toIntOrNull() ?: error("Некорректный год: ${parts[2]}")

    val birthDate = LocalDate(year, month, day)
    val currentDate = Clock.System.now().toLocalDateTime(TimeZone.currentSystemDefault())

    var age = currentDate.year - birthDate.year
    if (
        currentDate.monthNumber < birthDate.monthNumber ||
        (currentDate.monthNumber == birthDate.monthNumber && currentDate.dayOfMonth < birthDate.dayOfMonth)
    ) {
        age--
    }

    return age
}
