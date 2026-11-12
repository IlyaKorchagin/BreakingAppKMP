sealed class AuthDestination(
    val title: String,
    val isBackEnabled: Boolean = false
) {
    data object Login : AuthDestination("Авторизация")

    data object Registration : AuthDestination(
        title = "Регистрация",
        isBackEnabled = true
    )

    data object PasswordRecovery : AuthDestination(
        title = "Восстановление пароля",
        isBackEnabled = true
    )
}