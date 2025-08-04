package com.korchagin.domain_main.useCase

import com.korchagin.data.repository.UserRepository
import com.korchagin.domain_main.models.BboyDomainModel
import com.korchagin.domain_main.models.toBboyDomainModel
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map


class GetBboysList(private val repository: UserRepository) {
    fun getBboysList(): Flow<List<BboyDomainModel>> = repository.getBboysList().map { bboys ->
        bboys.map { it.toBboyDomainModel() }
    }
}