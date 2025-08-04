package com.korchagin.data.utils

import dev.gitlive.firebase.storage.Data
import org.khronos.webgl.Uint8Array
import org.khronos.webgl.set

actual fun ByteArray.toFirebaseData(): Data {
    val uint8Array = Uint8Array(this.size)
    for (i in indices) {
        uint8Array[i] = (this[i].toInt() and 0xFF).toByte()
    }
    return Data(uint8Array)
}