package org.korchagin.kmp.activity.auth.component.registrationFragment.screen

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowDropDown
import androidx.compose.material.icons.filled.Edit
import androidx.compose.material.icons.filled.Email
import androidx.compose.material3.Button
import androidx.compose.material3.Checkbox
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.SnackbarHost
import androidx.compose.material3.SnackbarHostState
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.unit.dp
import com.korchagin.presentation.viewModel.MainViewModel
import com.korchagin.presentation_auth.viewModel.AuthViewModel
import kotlinx.coroutines.launch
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.activity.main.MainActivity
import team.platforma.extra_nav.navigator.activity.findNavHost
import team.platforma.extra_nav.navigator.component.api.ComponentNavigator
import team.platforma.extra_nav.navigator.fragment.api.FragmentNavigator
import team.platforma.infoteam.theme.typography.FontWeights
import team.platforma.infoteam.theme.typography.Typography

@OptIn(KoinExperimentalAPI::class)
@Composable
fun RegistrationScreen(
    componentNavigator: ComponentNavigator,
    fragmentNavigator: FragmentNavigator
) {
    val authViewModel = koinViewModel<AuthViewModel>()
    val mainViewModel = koinViewModel<MainViewModel>()
    val snackbarHostState = remember { SnackbarHostState() }

    val coaches by mainViewModel.coaches.collectAsState(null)
    val coachesList = coaches?.map { it.name } ?: return
    var name by rememberSaveable { mutableStateOf("") }
    var email by rememberSaveable { mutableStateOf("") }
    var password by rememberSaveable { mutableStateOf("") }
    val scope = rememberCoroutineScope()
    var selected by remember { mutableStateOf(listOf<String>()) }




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
                    text = "Регистрация",//stringResource(R.string.enterToAppTitle),
                    style = Typography.text2xl(FontWeights.SemiBold)
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
                    value = name,
                    modifier = Modifier
                        .padding(8.dp)
                        .fillMaxWidth(),
                    keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Text),
                    label = { Text(text = "Фамилия и имя"/*stringResource(id = R.string.email)*/) },
                    placeholder = { Text(text = "Ваша фамилия и имя"/* stringResource(id = R.string.yourEmail)*/) },
                    onValueChange = {
                        name = it
                    }
                )

                MultiSelectDropdown(items = coachesList,
                    selectedItems = selected,
                    onSelectionChange = {selected = it }
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


                Button(
                    enabled = email.isNotEmpty() && password.isNotEmpty() && name.isNotEmpty() && selected.isNotEmpty(),
                    onClick = {
                        scope.launch {
                            authViewModel.signIn(email, password, name, selected,
                                onSuccess = {
                                    mainViewModel.loadCurrentUser(currentUser = email)
                                    findNavHost().navigateToActivitySingleTop(MainActivity)
                                },
                                onError = {
                                    scope.launch { snackbarHostState.showSnackbar("Что-то пошло не так!") }
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
                        text = "Создать"/*stringResource(R.string.enter)*/,
                        style = Typography.text2xl(FontWeights.SemiBold)
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

@Composable
fun MultiSelectDropdown(
    items: List<String>,
    selectedItems: List<String>,
    onSelectionChange: (List<String>) -> Unit
) {
    var expanded by remember { mutableStateOf(false) }

    Box(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 8.dp, vertical = 8.dp)
    ) {

        OutlinedTextField(
            value = selectedItems.joinToString(", "),
            onValueChange = {},
            readOnly = true,
            label = { Text("Выберите тренеров") },
            trailingIcon = {
                IconButton(onClick = { expanded = !expanded }) {
                    Icon(
                        imageVector = Icons.Default.ArrowDropDown,
                        contentDescription = null
                    )
                }
            },
            modifier = Modifier
                .fillMaxWidth()
                .clickable { expanded = true }
        )

        DropdownMenu(
            expanded = expanded,
            onDismissRequest = { expanded = false }
        ) {
            items.forEach { item ->
                DropdownMenuItem(
                    onClick = {
                        val newList = selectedItems.toMutableList().apply {
                            if (contains(item)) remove(item)
                            else add(item)
                        }
                        onSelectionChange(newList)
                    },
                    text = {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Checkbox(
                                checked = selectedItems.contains(item),
                                onCheckedChange = { checked ->
                                    val newList = selectedItems.toMutableList().apply {
                                        if (checked) add(item) else remove(item)
                                    }
                                    onSelectionChange(newList)
                                }
                            )
                            Spacer(modifier = Modifier.width(8.dp))
                            Text(text = item)
                        }
                    }
                )
            }
        }
    }
}
