package org.korchagin.kmp.activity.auth.component.authFragment.screen

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Edit
import androidx.compose.material.icons.filled.Email
import androidx.compose.material3.Button
import androidx.compose.material3.Icon
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.SnackbarHost
import androidx.compose.material3.SnackbarHostState
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.unit.dp
import com.korchagin.presentation.viewModel.MainViewModel
import com.korchagin.presentation_auth.viewModel.AuthViewModel
import kotlinx.coroutines.launch
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.activity.auth.component.passwordRecoveryFragment.PasswordRecoveryFragment
import org.korchagin.kmp.activity.auth.component.registrationFragment.RegistrationFragment
import org.korchagin.kmp.activity.main.MainActivity
import team.platforma.extra_nav.navigator.activity.findNavHost
import team.platforma.extra_nav.navigator.component.api.ComponentNavigator
import team.platforma.extra_nav.navigator.fragment.api.FragmentNavigator
import team.platforma.infoteam.theme.typography.FontWeights
import team.platforma.infoteam.theme.typography.Typography

@OptIn(KoinExperimentalAPI::class)
@Composable
fun AuthScreen(componentNavigator: ComponentNavigator, fragmentNavigator: FragmentNavigator) {
    val authViewModel = koinViewModel<AuthViewModel>()
    val mainViewModel = koinViewModel<MainViewModel>()

    var email by rememberSaveable { mutableStateOf("") }
    var password by rememberSaveable { mutableStateOf("") }
    val scope = rememberCoroutineScope()
    val snackbarHostState = remember { SnackbarHostState() }

    val registrationHyperlinkText = "Регистрация"//stringResource(id = R.string.registrate)
    val forgetPasswordHyperlinkText = "Забыли пароль?"//stringResource(id = R.string.forgetPassword)
    val registrationString = buildAnnotatedString {
        append("Ещё нет аккаунта?")
        append(" ")
        val start = length
        val end = length + registrationHyperlinkText.length
        addStringAnnotation(tag = "terms", annotation = "", start = start, end = end)
        withStyle(
            style = SpanStyle(
                textDecoration = TextDecoration.Underline,
                //  color = colorResource(id = R.color.main_green),
            ),
        ) {
            append(registrationHyperlinkText)
        }
    }
    val passwordRecoveryString = buildAnnotatedString {
        withStyle(
            style = SpanStyle(
                //  color = colorResource(id = R.color.main_green),
            ),
        ) {
            append(forgetPasswordHyperlinkText)
        }
    }

    Scaffold(
        snackbarHost = { SnackbarHost(snackbarHostState) }
    ) { padding ->
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(padding),
            contentAlignment = Alignment.Center
        ) {
            Column(
                modifier = Modifier
                    .widthIn(max = 600.dp),
                verticalArrangement = Arrangement.Center,
                horizontalAlignment = Alignment.CenterHorizontally
            ) {

                Text(
                    text = "Войти в приложение BreakingApp",//stringResource(R.string.enterToAppTitle),
                    style = Typography.text2xl(FontWeights.SemiBold),
                )

                Spacer(modifier = Modifier.height(20.dp))


                OutlinedTextField(
                    value = email,
                    leadingIcon = {
                        Icon(
                            imageVector = Icons.Default.Email,
                            contentDescription = null
                        )
                    },
                    modifier = Modifier
                        .padding(8.dp)
                        .fillMaxWidth(),
                    keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Text),
                    label = { Text(text = "Электронная почта"/*stringResource(id = R.string.email)*/) },
                    placeholder = { Text(text = "Ваша электронная почта"/* stringResource(id = R.string.yourEmail)*/) },
                    onValueChange = {
                        email = it.trim().lowercase()
                    }
                )

                OutlinedTextField(
                    value = password,
                    modifier = Modifier
                        .padding(8.dp)
                        .fillMaxWidth(),
                    leadingIcon = {
                        Icon(
                            imageVector = Icons.Default.Edit,
                            contentDescription = null
                        )
                    },
                    label = { Text(text = "Пароль"/*stringResource(id = R.string.password)*/) },
                    placeholder = { Text(text = "Ваш пароль"/*stringResource(id = R.string.yourPassword)*/) },
                    visualTransformation = PasswordVisualTransformation(),
                    onValueChange = {
                        password = it
                    },
                    keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Password)
                )

                Spacer(modifier = Modifier.height(20.dp))

                Text(text = passwordRecoveryString,
                    style = Typography.textLg(FontWeights.Medium),
                    modifier = Modifier.clickable {
                    fragmentNavigator.navigate(PasswordRecoveryFragment)
                })

                Button(
                    enabled = email.isNotEmpty() && password.isNotEmpty(),
                    onClick = {
                        scope.launch {
                            authViewModel.logIn(email, password,
                                onSuccess = {
                                    mainViewModel.loadCurrentUser(currentUser = email)
                                    findNavHost().navigateToActivitySingleTop(MainActivity)
                                },
                                onError = { e ->
                                    scope.launch { snackbarHostState.showSnackbar("Что-то пошло не так! Проверьте почту и пароль!") }
                                })
                        }
                    },
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(top = 20.dp, start = 30.dp, end = 30.dp),
                    shape = RoundedCornerShape(15.dp)
                ) {
                    Text(text = "Войти"/*stringResource(R.string.enter)*/,
                        style = Typography.text2xl(FontWeights.SemiBold))

                }

                Spacer(modifier = Modifier.height(20.dp))

                Text(text = registrationString,
                    style = Typography.textLg(FontWeights.Medium),
                    modifier = Modifier.clickable {
                    fragmentNavigator.navigate(RegistrationFragment)
                })
            }
        }
    }
}
