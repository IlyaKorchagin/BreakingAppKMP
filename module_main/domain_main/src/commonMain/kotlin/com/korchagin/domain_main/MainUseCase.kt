package com.korchagin.domain_main

import com.korchagin.domain_main.useCase.GetAllPupils
import com.korchagin.domain_main.useCase.GetPupilById


data class MainUseCase(
    val getAllPupils: GetAllPupils,
    val getPupilById: GetPupilById
)
