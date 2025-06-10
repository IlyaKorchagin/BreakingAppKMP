package org.korchagin.kmp.activity.profile.fragments.screen

import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.rememberCoroutineScope
import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.logout
import com.korchagin.presentation_auth.viewModel.AuthViewModel
import kotlinx.coroutines.launch
import org.jetbrains.compose.resources.painterResource
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.activity.auth.AuthActivity
import team.platforma.extra_nav.navigator.activity.findNavHost

@OptIn(KoinExperimentalAPI::class)
@Composable
fun ProfileAction() {
    val authViewModel = koinViewModel<AuthViewModel>()
    val scope = rememberCoroutineScope()
    IconButton(onClick = {
        scope.launch {
            authViewModel.logOut()
            findNavHost().navigateToActivitySingleTop(AuthActivity)
        }
    }) {
        Icon(painterResource(Res.drawable.logout), contentDescription = "")
    }
}