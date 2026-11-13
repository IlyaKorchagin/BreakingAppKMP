package com.korchagin.presentation.viewModel

import com.korchagin.presentation.viewModel.controllers.BboysController
import com.korchagin.presentation.viewModel.controllers.ElementsController
import com.korchagin.presentation.viewModel.controllers.EventsController
import com.korchagin.presentation.viewModel.controllers.JudgesController
import com.korchagin.presentation.viewModel.controllers.PupilsController

class MainDataController(
    private val pupilsController: PupilsController,
    private val eventsController: EventsController,
    private val elementsController: ElementsController,
    private val bboysController: BboysController,
    private val judgesController: JudgesController
) {

    fun loadData() {
        pupilsController.loadPupils()
        eventsController.loadEvents()
        elementsController.loadElements()
        bboysController.loadBboys()
        judgesController.loadJudges()
    }
}