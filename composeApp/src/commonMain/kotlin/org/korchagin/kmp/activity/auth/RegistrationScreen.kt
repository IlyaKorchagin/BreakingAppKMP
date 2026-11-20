
package org.korchagin.kmp.activity.auth

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowDropDown
import androidx.compose.material.icons.filled.Email
import androidx.compose.material.icons.filled.Lock
import androidx.compose.material.icons.filled.Person
import androidx.compose.material.icons.filled.Visibility
import androidx.compose.material.icons.filled.VisibilityOff
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Checkbox
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.DropdownMenu
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.OutlinedTextFieldDefaults
import androidx.compose.material3.Scaffold
import androidx.compose.material3.SnackbarHost
import androidx.compose.material3.SnackbarHostState
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.unit.dp
import com.korchagin.presentation.viewModel.MainViewModel
import com.korchagin.presentation_auth.viewModel.AuthViewModel
import kotlinx.coroutines.launch
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.theme.colors.LocalAppColors
import team.platforma.infoteam.theme.typography.FontWeights
import team.platforma.infoteam.theme.typography.Typography

@OptIn(KoinExperimentalAPI::class)
@Composable
fun RegistrationScreen(
    onBack: () -> Unit,
    onAdminSuccess: () -> Unit,
    onUserSuccess: () -> Unit
) {
    val authViewModel = koinViewModel<AuthViewModel>()
    val mainViewModel = koinViewModel<MainViewModel>()

    val appColors = LocalAppColors.current
    val snackbarHostState = remember { SnackbarHostState() }
    val scope = rememberCoroutineScope()

    val coaches by mainViewModel.coaches.collectAsState(null)
    val coachesList = coaches?.map { it.name } ?: emptyList()

    var name by rememberSaveable { mutableStateOf("") }
    var email by rememberSaveable { mutableStateOf("") }
    var password by rememberSaveable { mutableStateOf("") }
    var passwordVisible by rememberSaveable { mutableStateOf(false) }
    var selected by rememberSaveable {
        mutableStateOf(listOf<String>())
    }
    var isSubmitting by remember { mutableStateOf(false) }

    val isEmailValid = remember(email) {
        Regex("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$")
            .matches(email)
    }

    val isFormValid =
        name.isNotBlank() &&
                isEmailValid &&
                password.length >= 6 &&
                selected.isNotEmpty()

    Scaffold(
        containerColor = Color.Transparent,
        snackbarHost = {
            SnackbarHost(snackbarHostState)
        }
    ) { padding ->

        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(padding),
            contentAlignment = Alignment.Center
        ) {

            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .widthIn(max = 480.dp)
                    .padding(horizontal = 16.dp)
                    .clip(RoundedCornerShape(28.dp))
                    .background(Color.White.copy(alpha = 0.90f))
                    .border(
                        width = 2.dp,
                        color = appColors.mainGreen.copy(alpha = 0.65f),
                        shape = RoundedCornerShape(28.dp)
                    )
                    .padding(24.dp)
                    .verticalScroll(rememberScrollState()),

                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.spacedBy(12.dp)
            ) {

                Text(
                    text = "Создай свой профиль",
                    style = Typography.text2xl(FontWeights.SemiBold),
                    color = appColors.textDefault
                )

                Text(
                    text = "Присоединяйся к BreakingApp!",
                    style = Typography.textSm(FontWeights.SemiBold),
                    color = appColors.textDefault.copy(alpha = 0.65f)
                )

                Spacer(modifier = Modifier.height(8.dp))

                // Имя и фамилия
                OutlinedTextField(
                    value = name,
                    onValueChange = { name = it },
                    modifier = Modifier.fillMaxWidth(),
                    enabled = !isSubmitting,
                    singleLine = true,
                    leadingIcon = {
                        Icon(
                            imageVector = Icons.Default.Person,
                            contentDescription = null
                        )
                    },
                    label = {
                        Text("Фамилия и имя")
                    },
                    placeholder = {
                        Text("Введите ваше имя")
                    },
                    shape = RoundedCornerShape(16.dp),
                    colors = registrationFieldColors()
                )

                // Email
                OutlinedTextField(
                    value = email,
                    onValueChange = {
                        email = it.trim().lowercase()
                    },
                    modifier = Modifier.fillMaxWidth(),
                    enabled = !isSubmitting,
                    singleLine = true,
                    leadingIcon = {
                        Icon(
                            imageVector = Icons.Default.Email,
                            contentDescription = null
                        )
                    },
                    label = {
                        Text("Электронная почта")
                    },
                    placeholder = {
                        Text("example@mail.com")
                    },
                    keyboardOptions = KeyboardOptions(
                        keyboardType = KeyboardType.Email
                    ),
                    isError = email.isNotEmpty() && !isEmailValid,
                    shape = RoundedCornerShape(16.dp),
                    colors = registrationFieldColors()
                )

                // Пароль
                OutlinedTextField(
                    value = password,
                    onValueChange = { password = it },
                    modifier = Modifier.fillMaxWidth(),
                    enabled = !isSubmitting,
                    singleLine = true,
                    leadingIcon = {
                        Icon(
                            imageVector = Icons.Default.Lock,
                            contentDescription = null
                        )
                    },
                    trailingIcon = {
                        IconButton(
                            onClick = {
                                passwordVisible = !passwordVisible
                            }
                        ) {
                            Icon(
                                imageVector = if (passwordVisible) {
                                    Icons.Default.VisibilityOff
                                } else {
                                    Icons.Default.Visibility
                                },
                                contentDescription = if (passwordVisible) {
                                    "Скрыть пароль"
                                } else {
                                    "Показать пароль"
                                }
                            )
                        }
                    },
                    label = {
                        Text("Пароль")
                    },
                    placeholder = {
                        Text("Не менее 6 символов")
                    },
                    visualTransformation = if (passwordVisible) {
                        VisualTransformation.None
                    } else {
                        PasswordVisualTransformation()
                    },
                    keyboardOptions = KeyboardOptions(
                        keyboardType = KeyboardType.Password
                    ),
                    isError = password.isNotEmpty() && password.length < 6,
                    shape = RoundedCornerShape(16.dp),
                    colors = registrationFieldColors()
                )

                // Выбор тренеров
                MultiSelectDropdown(
                    items = coachesList,
                    selectedItems = selected,
                    onSelectionChange = { selected = it },
                    enabled = !isSubmitting && coaches != null &&
                            coachesList.isNotEmpty()
                )

                if (coaches == null) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.Center,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        CircularProgressIndicator(
                            modifier = Modifier
                                .width(18.dp)
                                .height(18.dp),
                            color = appColors.mainGreen,
                            strokeWidth = 2.dp
                        )

                        Spacer(modifier = Modifier.width(8.dp))

                        Text(
                            text = "Загружаем список тренеров...",
                            style = Typography.textSm(FontWeights.SemiBold)
                        )
                    }
                } else if (coachesList.isEmpty()) {
                    Text(
                        text = "Список тренеров пока пуст",
                        color = MaterialTheme.colorScheme.error,
                        style = Typography.textSm(FontWeights.SemiBold)
                    )
                }

                Spacer(modifier = Modifier.height(4.dp))

                // Создать аккаунт
                Button(
                    onClick = {
                        if (!isFormValid || isSubmitting) return@Button

                        scope.launch {
                            isSubmitting = true

                            try {
                                authViewModel.signIn(
                                    email,
                                    password,
                                    name.trim(),
                                    selected,
                                    onSuccess = {
                                        scope.launch {
                                            try {
                                                val authUid =
                                                    authViewModel.authState.value?.uid

                                                if (authUid != null) {
                                                    try {
                                                        mainViewModel.saveCurrentFcmToken(
                                                            authUid
                                                        )
                                                    } catch (e: Exception) {
                                                        println(
                                                            "Ошибка сохранения FCM-токена: ${e.message}"
                                                        )
                                                    }
                                                } else {
                                                    snackbarHostState.showSnackbar(
                                                        "Не удалось получить UID пользователя"
                                                    )
                                                }

                                                mainViewModel.loadCurrentUser(
                                                    currentUser = email
                                                )

                                                if (
                                                    mainViewModel.currentPupil.value?.role == "admin"
                                                ) {
                                                    onAdminSuccess()
                                                } else {
                                                    onUserSuccess()
                                                }
                                            } catch (e: Exception) {
                                                snackbarHostState.showSnackbar(
                                                    e.message ?: "Ошибка загрузки пользователя"
                                                )
                                                isSubmitting = false
                                            }
                                        }
                                    },
                                    onError = {
                                        scope.launch {
                                            snackbarHostState.showSnackbar(
                                                "Не удалось создать аккаунт. Проверьте введённые данные."
                                            )
                                            isSubmitting = false
                                        }
                                    }
                                )
                            } catch (e: Exception) {
                                snackbarHostState.showSnackbar(
                                    e.message ?: "Ошибка регистрации"
                                )
                                isSubmitting = false
                            }
                        }
                    },
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(54.dp),
                    enabled = isFormValid && !isSubmitting &&
                            coaches != null && coachesList.isNotEmpty(),
                    shape = RoundedCornerShape(16.dp),
                    colors = ButtonDefaults.buttonColors(
                        containerColor = appColors.mainGreen
                    )
                ) {
                    if (isSubmitting) {
                        CircularProgressIndicator(
                            modifier = Modifier
                                .width(22.dp)
                                .height(22.dp),
                            color = Color.White,
                            strokeWidth = 2.dp
                        )
                    } else {
                        Text(
                            text = "Создать аккаунт",
                            style = Typography.textLg(FontWeights.SemiBold)
                        )
                    }
                }

                // Возврат к авторизации
                TextButton(
                    onClick = onBack,
                    enabled = !isSubmitting
                ) {
                    Text(
                        text = "Уже есть аккаунт? Войти",
                        color = appColors.mainGreen,
                        style = Typography.textSm(FontWeights.SemiBold)
                    )
                }
            }
        }
    }
}

@Composable
private fun registrationFieldColors() =
    OutlinedTextFieldDefaults.colors(
        focusedBorderColor = LocalAppColors.current.mainGreen,
        focusedLabelColor = LocalAppColors.current.mainGreen,
        cursorColor = LocalAppColors.current.mainGreen,
        unfocusedBorderColor = LocalAppColors.current.mainGreen.copy(alpha = 0.35f)
    )

@Composable
fun MultiSelectDropdown(
    items: List<String>,
    selectedItems: List<String>,
    onSelectionChange: (List<String>) -> Unit,
    enabled: Boolean = true
) {
    var expanded by remember { mutableStateOf(false) }

    val appColors = LocalAppColors.current

    Box(
        modifier = Modifier.fillMaxWidth()
    ) {

        OutlinedTextField(
            value = selectedItems.joinToString(", "),
            onValueChange = {},
            readOnly = true,
            enabled = enabled,
            modifier = Modifier.fillMaxWidth(),
            label = {
                Text("Ваши тренеры")
            },
            placeholder = {
                Text("Выберите одного или нескольких")
            },
            supportingText = {
                Text(
                    text = when {
                        items.isEmpty() -> "Нет доступных тренеров"
                        selectedItems.isEmpty() -> "Можно выбрать несколько тренеров"
                        else -> "Выбрано тренеров: ${selectedItems.size}"
                    }
                )
            },
            trailingIcon = {
                IconButton(
                    onClick = { expanded = !expanded },
                    enabled = enabled
                ) {
                    Icon(
                        imageVector = Icons.Default.ArrowDropDown,
                        contentDescription = "Выбрать тренеров"
                    )
                }
            },
            shape = RoundedCornerShape(16.dp),
            colors = registrationFieldColors()
        )

        DropdownMenu(
            expanded = expanded,
            onDismissRequest = { expanded = false },
            modifier = Modifier
                .heightIn(max = 280.dp),
            containerColor = MaterialTheme.colorScheme.surface
        ) {
            items.forEach { item ->

                val isSelected = item in selectedItems

                DropdownMenuItem(
                    onClick = {
                        val newList = if (isSelected) {
                            selectedItems - item
                        } else {
                            selectedItems + item
                        }

                        onSelectionChange(newList)
                    },
                    text = {
                        Row(
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Checkbox(
                                checked = isSelected,
                                onCheckedChange = null
                            )

                            Spacer(modifier = Modifier.width(8.dp))

                            Text(
                                text = item,
                                color = appColors.textDefault
                            )
                        }
                    }
                )
            }
        }
    }
}
