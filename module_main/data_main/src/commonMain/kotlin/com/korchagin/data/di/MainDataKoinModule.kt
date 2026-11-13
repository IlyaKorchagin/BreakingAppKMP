package com.korchagin.data.di

import com.korchagin.data.client.provideHttpClient
import com.korchagin.data.repository.additional.AdditionalRepository
import com.korchagin.data.repository.additional.AdditionalRepositoryImpl
import com.korchagin.data.repository.battle.BattleRepository
import com.korchagin.data.repository.battle.BattleRepositoryImpl
import com.korchagin.data.repository.elements.ElementRepository
import com.korchagin.data.repository.elements.ElementRepositoryImpl
import com.korchagin.data.repository.events.EventRepository
import com.korchagin.data.repository.events.EventRepositoryImpl
import com.korchagin.data.repository.judjes.JudgeRepository
import com.korchagin.data.repository.judjes.JudgeRepositoryImpl
import com.korchagin.data.repository.pupils.PupilRepository
import com.korchagin.data.repository.pupils.PupilRepositoryImpl
import com.korchagin.data.repository.selection.SelectionRepository
import com.korchagin.data.repository.selection.SelectionRepositoryImpl
import org.koin.core.module.dsl.singleOf
import org.koin.dsl.bind
import org.koin.dsl.module


val mainDataRepositoryModule = module{
    single { provideHttpClient() }
    singleOf(::PupilRepositoryImpl).bind<PupilRepository>()
    singleOf(::EventRepositoryImpl).bind<EventRepository>()
    singleOf(::JudgeRepositoryImpl).bind<JudgeRepository>()
    singleOf(::BattleRepositoryImpl).bind<BattleRepository>()
    singleOf(::ElementRepositoryImpl).bind<ElementRepository>()
    singleOf(::AdditionalRepositoryImpl).bind<AdditionalRepository>()
    singleOf(::SelectionRepositoryImpl).bind<SelectionRepository>()
}