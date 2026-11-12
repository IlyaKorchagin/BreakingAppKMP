package org.korchagin.kmp.activity.auth

import AuthDestination
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue

@Composable
fun AuthRoute(
    onBack: () -> Unit,
    onAdminSuccess: () -> Unit,
    onUserSuccess: () -> Unit
) {
    var currentDestination by remember {
        mutableStateOf<AuthDestination>(AuthDestination.Login)
    }

    AuthScreen(
        onBack = {
            when (currentDestination) {
                AuthDestination.Registration,
                AuthDestination.PasswordRecovery -> {
                    currentDestination = AuthDestination.Login
                }

                AuthDestination.Login -> onBack()
            }
        },
        onRegistration = {
            currentDestination = AuthDestination.Registration
        },
        onPasswordRecovery = {
            currentDestination = AuthDestination.PasswordRecovery
        },
        onAdminSuccess = onAdminSuccess,
        onUserSuccess = onUserSuccess
    )

    when (currentDestination) {
        AuthDestination.Login -> {
            AuthScreen(
                onBack = onBack,
                onAdminSuccess = onAdminSuccess,
                onUserSuccess = onUserSuccess,
                onRegistration = {
                    currentDestination = AuthDestination.Registration
                },
                onPasswordRecovery = {
                    currentDestination = AuthDestination.PasswordRecovery
                }
            )
        }

        AuthDestination.Registration -> {
           RegistrationScreen()
        }

        AuthDestination.PasswordRecovery -> {
           PasswordRecoveryScreen()
        }
    }
}