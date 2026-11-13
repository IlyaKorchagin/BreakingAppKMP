package com.korchagin.presentation.viewModel.controllers

import com.korchagin.domain_main.AdditionalUseCases
import com.korchagin.presentation.models.BboyModel
import com.korchagin.presentation.models.toBboyModel
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

class BboysController(
    private val additionalUseCases: AdditionalUseCases,
    private val scope: CoroutineScope
) {
    private val _bboysList = MutableStateFlow<List<BboyModel>>(emptyList())
    val bboysList = _bboysList.asStateFlow()

    fun loadBboys() {
        scope.launch {
            additionalUseCases.getBboysList.getBboysList().collect { bboysList ->
                _bboysList.value = bboysList
                    .map { it.toBboyModel() }
                    .sortedBy { it.rating.toInt() }
            }
        }
    }
}