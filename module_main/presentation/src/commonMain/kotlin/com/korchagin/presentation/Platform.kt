package com.korchagin.presentation

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform