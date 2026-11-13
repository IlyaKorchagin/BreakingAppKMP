package com.korchagin.presentation.viewModel.controllers

import com.korchagin.domain_main.PupilUseCases
import com.korchagin.presentation.models.PupilModel
import com.korchagin.presentation.models.toPupilDomainModel
import com.korchagin.presentation.models.toPupilModel
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import kotlin.math.roundToInt

class PupilsController(
    private val pupilsUseCases: PupilUseCases,
    private val scope: CoroutineScope
) {
    private val _pupils =
        MutableStateFlow<List<PupilModel>>(emptyList())

    val pupils: StateFlow<List<PupilModel>> = _pupils.asStateFlow()

    private val _clickedPupil =
        MutableStateFlow<PupilModel?>(null)

    val clickedPupil: StateFlow<PupilModel?> =
        _clickedPupil.asStateFlow()

    fun updateClickedPupil(updatedPupil: PupilModel) {
        _clickedPupil.value = updatedPupil
    }

    fun setClickedPupil(pupil: PupilModel?) {
        _clickedPupil.value = pupil
    }

    fun loadPupils() {
        scope.launch {
            pupilsUseCases.getAllPupils.getAllPupils().collect { list ->
                _pupils.value = list
                    .map { it.toPupilModel() }
                    .sortedByDescending { it.rating }
            }
        }
    }

    var tmpPupils: List<PupilModel> = emptyList()

    fun culcPupilRating() {
        clickedPupil.value?.let { pupil ->
            // Растяжка
            val stretchRating = (pupil.twine + pupil.fold + pupil.butterfly + pupil.shoulders) / 4.0
            pupil.strechingRating = stretchRating.let { (it * 100).roundToInt() / 100.0 }

            // Подкачка
            val ofpRating =
                (pupil.angle + pupil.bridge + pupil.finger + pupil.handstand + pupil.horizont + pupil.pushUps + pupil.pressUpHandstand + pupil.sitUps + pupil.handJump + pupil.handWalk + pupil.handTouchLegs + pupil.turtleToHandstand) / 12.0
            pupil.ofpRating = ofpRating.let { (it * 100).roundToInt() / 100.0 }

            // Стойки
            val freezeRating =
                ((pupil.babyfrezze * 0.5 + pupil.turtlefrezze * 0.75 + pupil.shoulderfrezze * 0.5 + pupil.headfrezze * 0.5 + pupil.headhollowbackfrezze * 0.75 + pupil.hollowbackfrezze + pupil.invertfrezze + pupil.onehandfrezze + pupil.chairfrezze + pupil.elbowfrezze + pupil.airBabyfrezze) / 9).let { (it * 100).roundToInt() / 100.0 }
            pupil.freezeRating = freezeRating.let { (it * 100).roundToInt() / 100.0 }

            // Powermove
            val powerMoveRating =
                (pupil.airflare + pupil.backspin * 0.2 + pupil.cricket * 0.6 + pupil.elbowairflare + pupil.flare * 0.8 + pupil.jackhammer * 0.8 + pupil.halo * 0.8 + pupil.headspin * 0.4 + pupil.munchmill * 0.7 + pupil.double * 0.8 + pupil.grabmill * 0.7 + pupil.superman * 0.7 + pupil.tombstone * 0.8 + pupil.windmillToHandstand + pupil.ninetyNine + pupil.swipes * 0.6 + pupil.turtle * 0.4 + pupil.ufo + pupil.web * 0.5 + pupil.windmill * 0.4 + pupil.wolf * 0.8) / 14
            pupil.powermoveRating = powerMoveRating.let { (it * 100).roundToInt() / 100.0 }

            // Общий рейтинг
            pupil.rating =
                ((pupil.freezeRating + pupil.ofpRating * 0.6 + pupil.strechingRating * 0.4 + pupil.powermoveRating * 2) / 4).let { (it * 100).roundToInt() / 100.0 }

            recalculateAllPositions()

        }
    }

    fun recalculateAllPositions() {

        tmpPupils = _pupils.value.toList()

        val allPupils = _pupils.value.toMutableList()

        clickedPupil.value?.let { updated ->
            val existingIndex = allPupils.indexOfFirst { it.id == updated.id }

            if (existingIndex != -1) {
                allPupils[existingIndex] = updated
            } else {
                allPupils.add(updated)
            }
        }

        val sorted = allPupils.sortedByDescending { it.rating }

        val updatedList = sorted.mapIndexed { index, pupil ->
            pupil.copy(
                currentPosition = pupil.currentPosition,
                newPosition = index + 1
            )
        }

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
        scope.launch {
            pupilsUseCases.savePupil.savePupil(changedUsers.map { it.toPupilDomainModel() })  // Преобразуй в нужный формат
            //    _clickedPupil.value?.let { mainUseCase.savePupil.savePupil(it.toPupilDomainModel()) }

        }
    }
}