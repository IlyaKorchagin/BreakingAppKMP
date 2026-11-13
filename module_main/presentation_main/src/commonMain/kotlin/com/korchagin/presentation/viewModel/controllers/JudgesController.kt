package com.korchagin.presentation.viewModel.controllers

import com.korchagin.domain_main.JudgeUseCases
import com.korchagin.presentation.models.JudgeModel
import com.korchagin.presentation.models.toJudgeModel
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

class JudgesController(
    private val judgeUseCases: JudgeUseCases,
    private val scope: CoroutineScope
) {
    private val _judges = MutableStateFlow<List<JudgeModel>>(emptyList())
    val judges = _judges.asStateFlow()

    fun loadJudges() {
        scope.launch {
            judgeUseCases.getJudges.getJudges().collect { judgesList ->
                _judges.value = judgesList.map { it.toJudgeModel() }
            }
        }
    }
}