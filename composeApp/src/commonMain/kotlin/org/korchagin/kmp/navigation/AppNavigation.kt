package org.korchagin.kmp.navigation

import AppRoute
import androidx.compose.runtime.Composable
import org.korchagin.kmp.activity.adminMain.AdminRoute
import org.korchagin.kmp.activity.auth.AuthRoute
import org.korchagin.kmp.activity.splash.SplashRoute
import org.korchagin.kmp.activity.userMain.UserRoute

@Composable
fun AppNavigation(
    navigator: AppNavigator
) {

    when (navigator.currentRoute) {

        AppRoute.SplashScreen -> {
            SplashRoute(
                onAdminClick = {
                    navigator.clearBackStack(AppRoute.MainAdmin)
                },
                onUserClick = {
                    navigator.clearBackStack(AppRoute.MainUser)
                },
                onAuthClick = {
                    navigator.navigate(AppRoute.Auth)
                }
            )
        }

        AppRoute.Auth -> {
            AuthRoute(
                onBack = {
                    navigator.popBackStack()
                },
                onAdminSuccess = {
                    navigator.clearBackStack(AppRoute.MainAdmin)
                },
                onUserSuccess = {
                    navigator.clearBackStack(AppRoute.MainUser)
                }
            )
        }

        AppRoute.MainAdmin -> {
            AdminRoute( onLogout = {
                navigator.navigate(AppRoute.Auth)
            })
        }

        AppRoute.MainUser -> {
                UserRoute(
                    onLogout = {
                        navigator.navigate(AppRoute.Auth)
                    }
                )
        }

    }
}