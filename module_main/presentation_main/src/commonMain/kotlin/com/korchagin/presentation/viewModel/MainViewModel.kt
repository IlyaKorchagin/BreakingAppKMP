package com.korchagin.presentation.viewModel

import androidx.lifecycle.ViewModel
import com.korchagin.domain_main.MainUseCase
import com.korchagin.presentation.models.PupilModel
import com.korchagin.presentation.models.toPupilModel
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.joinAll
import kotlinx.coroutines.launch

class MainViewModel(
    private val mainUseCase: MainUseCase,
) : ViewModel() {
    private val singletonMainScope = CoroutineScope(Dispatchers.Main + SupervisorJob())

    private val _pupils = MutableStateFlow<List<PupilModel>>(emptyList())
    val pupils: StateFlow<List<PupilModel>> = _pupils

    private val _currentPupil = MutableStateFlow<PupilModel?>(null)
    val currentPupil: StateFlow<PupilModel?> = _currentPupil

    private val _screenWidth = MutableStateFlow(379)
    val screenWidth: StateFlow<Int> = _screenWidth

    fun setScreenWidth(width: Int) {
        _screenWidth.value = width
    }

    private val _screenHeight = MutableStateFlow(640)
    val screenHeight: StateFlow<Int> = _screenHeight

    fun setScreenHeight(height: Int) {
        _screenHeight.value = height
    }

    init {
        loadData()
    }

    private fun loadData() {
        singletonMainScope.launch {
            val pupils = singletonMainScope.launch {
                mainUseCase.getAllPupils.getAllPupils().collect { pupilsList ->
                    _pupils.value = pupilsList
                        .map { it.toPupilModel() }
                        .sortedByDescending { it.rating }
                }
            }

            val currentPupil = singletonMainScope.launch {
                mainUseCase.getPupilById.getAllPupils("hustleril@yandex.ru").collect {
                    _currentPupil.value = it.toPupilModel()
                }
            }

            val list = listOf(
                pupils,
                currentPupil
            )
            val collection: Collection<Job> = list
            collection.forEach { it.start() }
            collection.joinAll()
        }
    }

}