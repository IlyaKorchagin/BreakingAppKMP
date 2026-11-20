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
            RegistrationScreen(
                onBack = {
                    currentDestination = AuthDestination.Login
                },
                onAdminSuccess = onAdminSuccess,
                onUserSuccess = onUserSuccess,
            )
        }

        AuthDestination.PasswordRecovery -> {
            PasswordRecoveryScreen(
                onBack = {
                    currentDestination = AuthDestination.Login
                }
            )
        }
    }
}
