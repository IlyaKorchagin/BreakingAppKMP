package com.korchagin.data.utils

import dev.gitlive.firebase.storage.Data

actual fun ByteArray.toFirebaseData(): Data {
    return Data(this)
}