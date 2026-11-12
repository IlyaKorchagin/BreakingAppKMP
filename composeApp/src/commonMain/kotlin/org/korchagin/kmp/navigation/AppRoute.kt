sealed interface AppRoute {

    data object SplashScreen : AppRoute

    data object Auth : AppRoute

    data object MainAdmin : AppRoute

    data object MainUser : AppRoute
}