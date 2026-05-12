package org.korchagin.kmp.activity.auth.component.passwordRecoveryFragment.screen

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
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp
import com.korchagin.presentation_auth.viewModel.AuthViewModel
import kotlinx.coroutines.launch
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.activity.auth.component.authFragment.AuthFragment
import team.platforma.extra_nav.navigator.component.api.ComponentNavigator
import team.platforma.extra_nav.navigator.fragment.api.FragmentNavigator
import team.platforma.infoteam.theme.typography.FontWeights
import team.platforma.infoteam.theme.typography.Typography

@OptIn(KoinExperimentalAPI::class)
@Composable
fun PasswordRecoveryScreen(
    componentNavigator: ComponentNavigator,
    fragmentNavigator: FragmentNavigator
) {
    val authViewModel = koinViewModel<AuthViewModel>()
    val snackbarHostState = remember { SnackbarHostState() }
    val coroutineScope = rememberCoroutineScope()

    var email by rememberSaveable { mutableStateOf("") }

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
                    text = "Восстановление пароля",//stringResource(R.string.enterToAppTitle),
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
                    label = { Text(text = "Элетронная почта"/*stringResource(id = R.string.email)*/) },
                    placeholder = { Text(text = "Ваша электронная почта"/* stringResource(id = R.string.yourEmail)*/) },
                    onValueChange = {
                        email = it.trim().lowercase()
                    }
                )



                Button(
                    onClick = {
                        coroutineScope.launch {
                            authViewModel.sendResetEmail(
                                email = email,
                                onSuccess = { fragmentNavigator.navigate(AuthFragment) },
                                onError = { e ->
                                    coroutineScope.launch { snackbarHostState.showSnackbar("Что-то пошло не так!") }
                                }
                            )
                        }
                    },
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(top = 20.dp, start = 30.dp, end = 30.dp),
                    shape = RoundedCornerShape(15.dp)
                ) {
                    Text(
                        text = "Восстановить пароль",
                        style = Typography.text2xl(FontWeights.Medium)
                    )
                }
                Button(
                    onClick = {
                        fragmentNavigator.navigateBack()
                    },
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(top = 20.dp, start = 30.dp, end = 30.dp),
                    shape = RoundedCornerShape(15.dp)
                ) {
                    Text(
                        text = "Войти",
                        style = Typography.text2xl(FontWeights.SemiBold)
                    )
                }
            }
        }
    }
}
