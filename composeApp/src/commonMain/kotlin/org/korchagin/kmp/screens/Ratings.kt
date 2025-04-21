package org.korchagin.kmp.screens

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import breakingkmpapp.composeapp.generated.resources.Res
import breakingkmpapp.composeapp.generated.resources.compose_multiplatform
import coil3.compose.AsyncImage
import org.jetbrains.compose.resources.painterResource
import org.koin.core.annotation.KoinExperimentalAPI
import org.korchagin.kmp.data.repository.UserRepository
import org.koin.compose.koinInject

@OptIn(KoinExperimentalAPI::class)
@Composable
fun Ratings() {
    val repository: UserRepository = koinInject()
    val users by repository.getUsers().collectAsState(emptyList())
    LazyColumn {

        itemsIndexed(users) { index, user ->
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(16.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                if (users[index].avatar.isEmpty()) {
                    Image(
                        painter = painterResource(Res.drawable.compose_multiplatform),
                        contentDescription = null,
                        modifier = Modifier.width(64.dp).aspectRatio(1.0f)
                    )
                } else {
                    AsyncImage(
                        model = users[index].avatar,
                        contentDescription = null,
                        modifier = Modifier.width(64.dp).aspectRatio(1.0f)
                    )
                }
                Text(text = users[index].name)
                Spacer(modifier = Modifier.width(16.dp))
                Text(text = "Рейтинг: ${users[index].rating}")
            }
        }
    }
}