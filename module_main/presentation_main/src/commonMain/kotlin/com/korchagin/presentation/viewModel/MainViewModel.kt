package com.korchagin.presentation.viewModel

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import com.korchagin.domain_main.MainUseCase
import com.korchagin.presentation.models.BboyModel
import com.korchagin.presentation.models.CoachModel
import com.korchagin.presentation.models.ElementModel
import com.korchagin.presentation.models.EventModel
import com.korchagin.presentation.models.PupilModel
import com.korchagin.presentation.models.toBboyModel
import com.korchagin.presentation.models.toCoachModel
import com.korchagin.presentation.models.toElementModel
import com.korchagin.presentation.models.toEventDomainModel
import com.korchagin.presentation.models.toEventModel
import com.korchagin.presentation.models.toPupilDomainModel
import com.korchagin.presentation.models.toPupilModel
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.joinAll
import kotlinx.coroutines.launch
import kotlin.math.roundToInt

class MainViewModel(
    private val mainUseCase: MainUseCase,
) : ViewModel() {
    private val singletonMainScope = CoroutineScope(Dispatchers.Main + SupervisorJob())

    private val _pupils = MutableStateFlow<List<PupilModel>>(emptyList())
    val pupils: StateFlow<List<PupilModel>> = _pupils

    private val _events = MutableStateFlow<List<EventModel>>(emptyList())
    val events: StateFlow<List<EventModel>> = _events

    private val _coaches = MutableStateFlow<List<CoachModel>>(emptyList())
    val coaches: StateFlow<List<CoachModel>> = _coaches

    var tmpPupils: List<PupilModel> = emptyList()

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

    fun updateClickedPupil(updatedPupil: PupilModel) {
        _clickedPupil.value = updatedPupil
    }

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

    fun culcPupilRating() {
        _clickedPupil.value?.let { pupil ->
            // Растяжка
            val stretchRating = (pupil.twine + pupil.fold + pupil.butterfly + pupil.shoulders) / 4.0
            pupil.strechingRating = stretchRating.let { (it * 100).roundToInt() / 100.0 }

            // Подкачка
            val ofpRating =
                (pupil.angle + pupil.bridge + pupil.finger + pupil.handstand + pupil.horizont + pupil.pushUps + pupil.pressUpHandstand + pupil.sitUps + pupil.handJump + pupil.handWalk + pupil.handTouchLegs) / 11.0
            pupil.ofpRating = ofpRating.let { (it * 100).roundToInt() / 100.0 }

            // Стойки
            val freezeRating =
                ((pupil.babyfrezze * 0.5 + pupil.turtlefrezze * 0.75 + pupil.shoulderfrezze * 0.5 + pupil.headfrezze * 0.5 + pupil.headhollowbackfrezze * 0.75 + pupil.hollowbackfrezze + pupil.invertfrezze + pupil.onehandfrezze + pupil.chairfrezze + pupil.elbowfrezze) / 8).let { (it * 100).roundToInt() / 100.0 }
            pupil.freezeRating = freezeRating.let { (it * 100).roundToInt() / 100.0 }

            // Powermove
            val powerMoveRating =
                (pupil.airflare + pupil.backspin * 0.2 + pupil.cricket * 0.6 + pupil.elbowairflare + pupil.flare * 0.8 + pupil.jackhammer * 0.8 + pupil.halo * 0.8 + pupil.headspin * 0.4 + pupil.munchmill * 0.7 + pupil.ninetyNine + pupil.swipes * 0.6 + pupil.turtle * 0.4 + pupil.ufo + pupil.web * 0.5 + pupil.windmill * 0.4 + pupil.wolf * 0.8) / 11
            pupil.powermoveRating = powerMoveRating.let { (it * 100).roundToInt() / 100.0 }

            // Общий рейтинг
            pupil.rating =
                ((pupil.freezeRating + pupil.ofpRating * 0.6 + pupil.strechingRating * 0.4 + pupil.powermoveRating * 2) / 4).let { (it * 100).roundToInt() / 100.0 }

            recalculateAllPositions()

        }
    }

    fun recalculateAllPositions() {

        tmpPupils = _pupils.value.toMutableList()

        tmpPupils.forEach { println("LOG: ${it.name} curPos: ${it.currentPosition} newPos: ${it.newPosition}") }

        _pupils.value = _pupils.value.map { pupil ->
            pupil.copy(currentPosition = pupil.newPosition)
        }

        _clickedPupil.value?.let { it.currentPosition = it.newPosition }

        //    _pupils.value.forEach { println("${it.name} curPos: ${it.currentPosition} newPos: ${it.newPosition}") }


        val allPupils = _pupils.value.toMutableList()

        // Добавляем (или обновляем) отредактированного ученика
        _clickedPupil.value?.let { updated ->
            val existingIndex = allPupils.indexOfFirst { it.id == updated.id }
            if (existingIndex != -1) {
                allPupils[existingIndex] = updated
            } else {
                allPupils.add(updated)
            }
        }

        // Сортировка по рейтингу (по убыванию)
        val sorted = allPupils.sortedByDescending { it.rating }

        // sorted.forEach { println("${it.name} curPos: ${it.currentPosition} newPos: ${it.newPosition}") }


        // Присваиваем новую позицию каждому
        val updatedList = sorted.mapIndexed { index, pupil ->
            pupil.copy(newPosition = index + 1)
        }

        //   updatedList.forEach { println("update ${it.name} curPos: ${it.currentPosition} newPos: ${it.newPosition}") }


        // Обновляем список
        _pupils.value = updatedList

    }

    fun updatePositionsAndSave() {
        culcPupilRating()
        val changedUsers = emptyList<PupilModel>().toMutableList()
        // val changedUsers = _pupils.value.filter { it.newPosition != it.currentPosition }
        val tmpMap = tmpPupils.associateBy { it.id }

        _pupils.value.forEach { pupil ->
            val tmp = tmpMap[pupil.id]
            if (tmp != null) {
                println("LOG: Change - ${pupil.name} newPosition: ${pupil.newPosition} | TMP - ${tmp.name} curPosition: ${tmp.newPosition}")
                if (pupil.newPosition != tmp.newPosition || tmp.newPosition != tmp.currentPosition) {
                    changedUsers.add(pupil)
                }
            }
        }
        if (changedUsers.isEmpty()) changedUsers.add(clickedPupil.value!!)

        changedUsers.forEach { println("LOG: ChangeUsers - ${it.name} current Position: ${it.currentPosition} newPosition: ${it.newPosition}") }
        // Сохраняем пользователя (вызов suspend, надо запускать в coroutine)
        singletonMainScope.launch {
            mainUseCase.savePupil.savePupil(changedUsers.map { it.toPupilDomainModel() })  // Преобразуй в нужный формат
            //    _clickedPupil.value?.let { mainUseCase.savePupil.savePupil(it.toPupilDomainModel()) }

        }
    }

    init {
        loadData()
    }

    fun registerToEvent(event: EventModel) {
        singletonMainScope.launch {
            _currentPupil.value?.let {
                mainUseCase.registerToEvent.registerToEvent(
                    it.toPupilDomainModel(),
                    event.toEventDomainModel()
                )
            }  // Преобразуй в нужный формат
        }
    }

    fun unregisterToEvent(event: EventModel) {
        singletonMainScope.launch {
            _currentPupil.value?.let {
                mainUseCase.unregisterFromEvent.unregisterFromEvent(
                    it.toPupilDomainModel(),
                    event.toEventDomainModel()
                )
            }  // Преобразуй в нужный формат
        }
    }

    fun uploadNewUserAvatar(email: String, bytes: ByteArray) {
        _userAvatarOnLoading.value = true
        println(" uploadNewUserAvatar bytes: $bytes")
        singletonMainScope.launch {
            mainUseCase.uploadAvatar.uploadAvatar(email, bytes)
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
    }

    fun loadCurrentUser(currentUser: String) {
        singletonMainScope.launch {
            mainUseCase.getPupilById.getAllPupils(currentUser).collect {
                _currentPupil.value = it.toPupilModel()
            }
        }
    }

    fun loadCoachesList() {
        singletonMainScope.launch {
            mainUseCase.getCoaches.getCoaches().collect { coachesList ->
                _coaches.value = coachesList
                    .map { it.toCoachModel() }
            }
        }
    }

    fun loadData() {
        singletonMainScope.launch {
            val eventsList = singletonMainScope.launch {
                mainUseCase.getEvents.getEvents().collect { eventsList ->
                    _events.value = eventsList
                        .map { it.toEventModel() }
                }
            }

            val pupils = singletonMainScope.launch {
                mainUseCase.getAllPupils.getAllPupils().collect { pupilsList ->
                    _pupils.value = pupilsList
                        .map { it.toPupilModel() }
                        .sortedByDescending { it.rating }
                }
            }

            val freezeElements = singletonMainScope.launch {
                mainUseCase.getFreezeElements.getFreezeElements().collect { freezeElements ->
                    _freezeElements.value = freezeElements
                        .map { it.toElementModel() }
                }
            }

            val powerElements = singletonMainScope.launch {
                mainUseCase.getPowerElements.getPowerElements().collect { powerElements ->
                    _powerElements.value = powerElements
                        .map { it.toElementModel() }
                }
            }

            val ofpElements = singletonMainScope.launch {
                mainUseCase.getOfpElements.getOfpElements().collect { ofpElements ->
                    _ofpElements.value = ofpElements
                        .map { it.toElementModel() }
                }
            }

            val stretchElements = singletonMainScope.launch {
                mainUseCase.getStretchElements.getStretchElements().collect { stretchElements ->
                    _stretchElements.value = stretchElements
                        .map { it.toElementModel() }
                }
            }

            val bboysList = singletonMainScope.launch {
                mainUseCase.getBboysList.getBboysList().collect { bboysList ->
                    _bboysList.value = bboysList
                        .map { it.toBboyModel() }
                        .sortedBy { it.rating.toInt() }
                }
            }

            val list = listOf(
                eventsList,
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