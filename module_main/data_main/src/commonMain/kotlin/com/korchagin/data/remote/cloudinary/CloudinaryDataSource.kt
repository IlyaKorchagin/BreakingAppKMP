package com.korchagin.data.remote.cloudinary

import com.korchagin.data.models.CloudinaryUploadResponse
import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.request.forms.formData
import io.ktor.client.request.forms.submitFormWithBinaryData
import io.ktor.client.statement.bodyAsText
import io.ktor.http.Headers
import io.ktor.http.HttpHeaders
import io.ktor.http.isSuccess

class CloudinaryDataSource(
    private val httpClient: HttpClient
) {
    companion object {
        private const val CLOUD_NAME = "dijjsmlrz"
        private const val UPLOAD_PRESET = "user_avatars"

        private const val UPLOAD_URL =
            "https://api.cloudinary.com/v1_1/$CLOUD_NAME/image/upload"
    }

    suspend fun uploadImage(
        image: ByteArray,
        fileName: String = "avatar.jpg",
        contentType: String = "image/jpeg"
    ): CloudinaryUploadResponse {

        val response = httpClient.submitFormWithBinaryData(
            url = UPLOAD_URL,
            formData = formData {
                append(
                    key = "file",
                    value = image,
                    headers = Headers.build {
                        append(HttpHeaders.ContentType, contentType)
                        append(
                            HttpHeaders.ContentDisposition,
                            "filename=\"$fileName\""
                        )
                    }
                )

                append("upload_preset", UPLOAD_PRESET)
            }
        )

        if (!response.status.isSuccess()) {
            val errorBody = response.bodyAsText()

            throw Exception(
                "Cloudinary upload failed: ${response.status}. $errorBody"
            )
        }

        return response.body()
    }
}