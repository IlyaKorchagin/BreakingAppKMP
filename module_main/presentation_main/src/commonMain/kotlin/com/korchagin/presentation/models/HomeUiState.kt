package com.korchagin.presentation.models

sealed interface HomeUiState {

    data object Loading : HomeUiState

    data class Content(
        val pupil: PupilModel,
        val freezes: List<ElementModel>,
        val powerMoves: List<ElementModel>,
        val ofp: List<ElementModel>,
        val stretch: List<ElementModel>,
        val footWork: List<ElementModel>
    ) : HomeUiState
}