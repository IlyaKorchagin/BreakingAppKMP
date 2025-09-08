package com.korchagin.presentation.viewModel

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import com.korchagin.domain_main.MainUseCase
import com.korchagin.presentation.models.BboyModel
import com.korchagin.presentation.models.ElementModel
import com.korchagin.presentation.models.PupilModel
import com.korchagin.presentation.models.toBboyModel
import com.korchagin.presentation.models.toElementModel
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

    private val _freezeElements = MutableStateFlow<List<ElementModel>>(emptyList())
    val freezeElements: StateFlow<List<ElementModel>> = _freezeElements

    private val _powerElements = MutableStateFlow<List<ElementModel>>(emptyList())
    val powerElements: StateFlow<List<ElementModel>> = _powerElements

    private val _ofpElements = MutableStateFlow<List<ElementModel>>(emptyList())
    val ofpElements: StateFlow<List<ElementModel>> = _ofpElements

    private val _stretchElements = MutableStateFlow<List<ElementModel>>(emptyList())
    val stretchElements: StateFlow<List<ElementModel>> = _stretchElements

    private val _bboysList = MutableStateFlow<List<BboyModel>>(emptyList())
    val bboysList: StateFlow<List<BboyModel>> = _bboysList

    private val _currentPupil = MutableStateFlow<PupilModel?>(null)
    val currentPupil: StateFlow<PupilModel?> = _currentPupil

    private val _clickedPupil = MutableStateFlow<PupilModel?>(null)
    var clickedPupil: StateFlow<PupilModel?> = _clickedPupil

    private val _userAvatarOnLoading: MutableStateFlow<Boolean> = MutableStateFlow(false)
    val userAvatarOnLoading: StateFlow<Boolean> = _userAvatarOnLoading



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

    var elementTabPosition by mutableStateOf(0)

    var element by mutableStateOf(ElementModel())
        private set
    var elementRating by mutableStateOf(0)
        private set

    var bboy by mutableStateOf(BboyModel())
        private set

    fun addBboy(bboy: BboyModel) {
        this.bboy = bboy
    }


    var checkedState by mutableStateOf(true)
        private set
    fun changeCheckedState() {
        checkedState = !checkedState
    }

    fun addElement(currentElement: ElementModel) {
        element = currentElement
    }

    fun addElementRating(rating: Int) {
        elementRating = rating
    }

    init {
        loadData()
    }

    fun uploadNewUserAvatar(email: String, bytes: ByteArray) {
        _userAvatarOnLoading.value = true
        println(" uploadNewUserAvatar bytes: $bytes")
        singletonMainScope.launch {
            mainUseCase.uploadAvatar.uploadAvatar(email,bytes)
                .onSuccess { data, code ->
                    _userAvatarOnLoading.value = false
                }.onFail { message, code ->
                    _userAvatarOnLoading.value = false
                }.onException { message, code ->
                    _userAvatarOnLoading.value = false
                }
        }
    }

    fun setClickedPupil(pupil: PupilModel?) {
        _clickedPupil.value = pupil
        println("clicked pupil: ${_clickedPupil.value}")
    }
    fun loadCurrentUser(currentUser: String) {
        singletonMainScope.launch {
            mainUseCase.getPupilById.getAllPupils(currentUser).collect {
                _currentPupil.value = it.toPupilModel()
                println("pupil: ${_currentPupil.value}")
            }
        }
    }

    fun loadData() {
        singletonMainScope.launch {
            val pupils = singletonMainScope.launch {
                mainUseCase.getAllPupils.getAllPupils().collect { pupilsList ->
                    _pupils.value = pupilsList
                        .map { it.toPupilModel() }
                        .sortedByDescending { it.rating }
                    println("pupils: ${_pupils.value}")
                }
            }

            val freezeElements = singletonMainScope.launch {
                mainUseCase.getFreezeElements.getFreezeElements().collect { freezeElements ->
                    _freezeElements.value = freezeElements
                        .map { it.toElementModel() }
                    println("elements: ${_freezeElements.value}")
                }
            }

            val powerElements = singletonMainScope.launch {
                mainUseCase.getPowerElements.getPowerElements().collect { powerElements ->
                    _powerElements.value = powerElements
                        .map { it.toElementModel() }
                    println("elements: ${_powerElements.value}")
                }
            }

            val ofpElements = singletonMainScope.launch {
                mainUseCase.getOfpElements.getOfpElements().collect { ofpElements ->
                    _ofpElements.value = ofpElements
                        .map { it.toElementModel() }
                    println("elements: ${_ofpElements.value}")
                }
            }

            val stretchElements = singletonMainScope.launch {
                mainUseCase.getStretchElements.getStretchElements().collect { stretchElements ->
                    _stretchElements.value = stretchElements
                        .map { it.toElementModel() }
                    println("elements: ${_stretchElements.value}")
                }
            }

            val bboysList = singletonMainScope.launch {
                mainUseCase.getBboysList.getBboysList().collect { bboysList ->
                    _bboysList.value = bboysList
                        .map { it.toBboyModel() }
                        .sortedBy { it.rating.toInt() }
                    println("elements: ${_bboysList.value}")
                }
            }

            val list = listOf(
                pupils,
                freezeElements,
                powerElements,
                ofpElements,
                stretchElements,
                bboysList
            )
            val collection: Collection<Job> = list
            collection.forEach { it.start() }
            collection.joinAll()
        }
    }

}