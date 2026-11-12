package org.korchagin.kmp.navigation

import AppRoute
import androidx.compose.runtime.Stable
import androidx.compose.runtime.mutableStateListOf

@Stable
class AppNavigator(
    startDestination: AppRoute = AppRoute.SplashScreen
) {

    private val backStack = mutableStateListOf(startDestination)

    val currentRoute: AppRoute
        get() = backStack.last()

    fun navigate(route: AppRoute) {
        backStack.add(route)
    }

    fun popBackStack(): Boolean {
        if (backStack.size <= 1) return false

        backStack.removeAt(backStack.lastIndex)
        return true
    }

    fun clearBackStack(route: AppRoute) {
        backStack.clear()
        backStack.add(route)
    }

    fun canGoBack(): Boolean {
        return backStack.size > 1
    }
}