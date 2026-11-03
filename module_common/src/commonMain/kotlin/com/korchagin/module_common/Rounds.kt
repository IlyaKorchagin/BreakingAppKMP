package com.korchagin.module_common

enum class Rounds( val round: Int) {
    SELECTION(0),
    TOP32(32),
    TOP16(16),
    TOP8(8),
    TOP4(4),
    LITTLE_FINAL(2),
    BIG_FINAL(1)
}