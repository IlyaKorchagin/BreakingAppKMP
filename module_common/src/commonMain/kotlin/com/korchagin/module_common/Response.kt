package com.korchagin.module_common

sealed class Response<out T> {
    data class Success<T>(val data: T, val statusCode: Int) : Response<T>()
    data class Fail(val message: String, val statusCode: Int) : Response<Nothing>()
    data class Exception(val message: String, val statusCode: Int) : Response<Nothing>()

    inline fun <R> transform(transform: (T) -> R): Response<R> = when (this) {
        is Success -> Success(transform(data), statusCode)
        is Fail -> Fail(message, statusCode)
        is Exception -> Exception(message, statusCode)
    }

    /**
     * Response code 200..299
     */
    inline fun onSuccess(action: (data: T, code: Int) -> Unit): Response<T> {
        if (this is Success) {
            action(data, statusCode)
        }
        return this
    }


    inline fun onFail(action: (message: String, code: Int) -> Unit): Response<T> {
        if (this is Fail) {
            action(message, statusCode)
        }
        return this
    }

    inline fun onException(action: (message: String, code: Int) -> Unit): Response<T> {
        if (this is Exception) {
            action(message, statusCode)
        }
        return this
    }
}