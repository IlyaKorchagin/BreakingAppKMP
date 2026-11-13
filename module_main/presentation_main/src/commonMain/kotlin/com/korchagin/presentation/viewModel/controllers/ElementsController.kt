package com.korchagin.presentation.viewModel.controllers

import com.korchagin.domain_main.ElementUseCases
import com.korchagin.presentation.models.ElementModel
import com.korchagin.presentation.models.toElementModel
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

class ElementsController(
    private val elementUseCases: ElementUseCases,
    private val scope: CoroutineScope
) {
    private val _freezeElements =
        MutableStateFlow<List<ElementModel>>(emptyList())
    val freezeElements = _freezeElements.asStateFlow()

    private val _powerElements =
        MutableStateFlow<List<ElementModel>>(emptyList())
    val powerElements = _powerElements.asStateFlow()

    private val _ofpElements =
        MutableStateFlow<List<ElementModel>>(emptyList())
    val ofpElements = _ofpElements.asStateFlow()

    private val _stretchElements =
        MutableStateFlow<List<ElementModel>>(emptyList())
    val stretchElements = _stretchElements.asStateFlow()

    private val _footWorkElements =
        MutableStateFlow<List<ElementModel>>(emptyList())
    val footWorkElements = _footWorkElements.asStateFlow()

    fun loadElements() {
        scope.launch {
            elementUseCases.getFreezeElements.getFreezeElements().collect { freezeElements ->
                _freezeElements.value = freezeElements.map { it.toElementModel() }
            }
        }

        scope.launch {
            elementUseCases.getPowerElements.getPowerElements().collect { powerElements ->
                _powerElements.value = powerElements.map { it.toElementModel() }
            }
        }

        scope.launch {
            elementUseCases.getOfpElements.getOfpElements().collect { ofpElements ->
                _ofpElements.value = ofpElements.map { it.toElementModel() }
            }
        }

        scope.launch {
            elementUseCases.getStretchElements.getStretchElements().collect { stretchElements ->
                _stretchElements.value = stretchElements.map { it.toElementModel() }
            }
        }

        scope.launch {
            elementUseCases.getFootWorkElements.getFootWorkElements().collect { footWorkElements ->
                _footWorkElements.value = footWorkElements.map { it.toElementModel() }
            }
        }
    }

}