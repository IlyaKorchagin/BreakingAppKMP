package org.korchagin.kmp.notifications

data class NotificationEvent(
    val type: String,
    val id: String? = null
)
