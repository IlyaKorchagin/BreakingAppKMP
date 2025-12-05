package com.korchagin.data.utils

import dev.gitlive.firebase.storage.Data
import kotlinx.datetime.LocalDate

expect fun ByteArray.toFirebaseData(): Data

fun String.toLocalDateOrNull(): LocalDate? {
    return try {
        val parts = this.split(".")
        if (parts.size != 3) return null
        val day = parts[0].toInt()
        val month = parts[1].toInt()
        val year = parts[2].toInt()
        LocalDate(year, month, day)
    } catch (e: Exception) {
        null
    }
}