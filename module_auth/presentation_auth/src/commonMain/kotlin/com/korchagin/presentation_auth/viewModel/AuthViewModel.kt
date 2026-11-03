package com.korchagin.presentation_auth.viewModel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.korchagin.domain_auth.AuthUseCase
import com.korchagin.domain_main.MainUseCase
import dev.gitlive.firebase.auth.FirebaseAuth
import dev.gitlive.firebase.auth.FirebaseUser
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.stateIn

class AuthViewModel(
    private val authUseCase: AuthUseCase,
    private val mainUseCase: MainUseCase,
    auth: FirebaseAuth
) : ViewModel() {
    private val _authState = auth.authStateChanged
        .stateIn(viewModelScope, SharingStarted.Eagerly, null)

    val authState: StateFlow<FirebaseUser?> = _authState
    suspend fun logIn(
        email: String,
        password: String,
        onSuccess: () -> Unit,
        onError: (Throwable) -> Unit
    ) {
        val result = authUseCase.logIn.logIn(email, password)
        if (result.isSuccess) {
            onSuccess()
        } else {
            onError(result.exceptionOrNull() ?: Exception("Unknown error"))
        }
    }

    suspend fun logOut() = authUseCase.logOut.logOut()

    suspend fun signIn(
        email: String,
        password: String,
        name: String,
        coach: List<String>,
        onSuccess: () -> Unit,
        onError: (Throwable) -> Unit
    ) {
        val result = authUseCase.signIn.signIn(email, password)

        if (result.isSuccess) {
            try {
                val authUid = authState.value?.uid
                    ?: throw IllegalStateException(
                        "Не удалось получить UID пользователя Firebase"
                    )

                mainUseCase.createNewPupil.createNewPupil(
                    email = email,
                    name = name,
                    coach = coach,
                    authUid = authUid
                )

                onSuccess()
            } catch (e: Exception) {
                onError(e)
            }
        } else {
            onError(
                result.exceptionOrNull()
                    ?: Exception("Unknown error")
            )
        }
    }

    suspend fun sendResetEmail(email: String, onSuccess: () -> Unit, onError: (Throwable) -> Unit) {
        val result = authUseCase.resetPassword.resetPassword(email)
        if (result.isSuccess) {
            onSuccess()
        } else {
            onError(result.exceptionOrNull() ?: Exception("Unknown error"))
        }
    }
}