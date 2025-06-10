package com.korchagin.domain_main

import com.korchagin.domain_main.useCase.CreateNewPupil
import com.korchagin.domain_main.useCase.GetAllPupils
import com.korchagin.domain_main.useCase.GetBboysList
import com.korchagin.domain_main.useCase.GetFreezeElements
import com.korchagin.domain_main.useCase.GetOfpElements
import com.korchagin.domain_main.useCase.GetPowerElements
import com.korchagin.domain_main.useCase.GetPupilById
import com.korchagin.domain_main.useCase.GetStretchElements


data class MainUseCase(
    val getAllPupils: GetAllPupils,
    val getPupilById: GetPupilById,
    val getFreezeElements: GetFreezeElements,
    val getPowerElements: GetPowerElements,
    val getOfpElements: GetOfpElements,
    val getStretchElements: GetStretchElements,
    val getBboysList: GetBboysList,
    val createNewPupil: CreateNewPupil
)
