<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterSectionController;



//---------------------------REGISTER SECTION-------------------------------

Route::get('/projects', [RegisterSectionController::class, 'index'])->name('register-section.index');
Route::get('/projects/create', [RegisterSectionController::class, 'project_create'])->name('register-section.project.create');
Route::post('/projects/store', [RegisterSectionController::class, 'project_store'])->name('register-section.project.store');
Route::get('/projects/{project_id}', [RegisterSectionController::class, 'info'])->name('register-section.project.info');

//OBJECTIVES
Route::post('/projects/objective/store', [RegisterSectionController::class, 'objective_store'])->name('register-section.project.objective.store');
Route::get('/projects/{project_id}/objectives', [RegisterSectionController::class, 'objective_index'])->name('register-section.project.objective.index');
Route::get('/projects/{project_id}/objectives/create', [RegisterSectionController::class, 'objective_create'])->name('register-section.project.objective.create');
Route::get('/projects/{project_id}/objectives/{objective_id}', [RegisterSectionController::class, 'objective_view'])->name('register-section.project.objective.view');

//MILESTONES
Route::post('/projects/milestone/store', [RegisterSectionController::class, 'milestone_store'])->name('register-section.project.milestone.store');
Route::get('/projects/{project_id}/milestones', [RegisterSectionController::class, 'milestone_index'])->name('register-section.project.milestone.index');
Route::get('/projects/{project_id}/milestones/create', [RegisterSectionController::class, 'milestone_create'])->name('register-section.project.milestone.create');
Route::get('/projects/{project_id}/milestones/{milestone_id}', [RegisterSectionController::class, 'milestone_view'])->name('register-section.project.milestone.view');

//MEMBERS
Route::post('/projects/member/store', [RegisterSectionController::class, 'member_store'])->name('register-section.project.member.store');
Route::get('/projects/{project_id}/members', [RegisterSectionController::class, 'member_index'])->name('register-section.project.member.index');
Route::get('/projects/{project_id}/members/create', [RegisterSectionController::class, 'member_create'])->name('register-section.project.member.create');
Route::get('/projects/{project_id}/members/{member_id}', [RegisterSectionController::class, 'member_view'])->name('register-section.project.member.view');

//FINANCIAL ENTITIES
Route::post('/projects/financial-entities/store', [RegisterSectionController::class, 'financial_entity_store'])->name('register-section.project.financial-entity.store');
Route::get('/projects/{project_id}/financial-entities', [RegisterSectionController::class, 'financial_entity_index'])->name('register-section.project.financial-entity.index');
Route::get('/projects/{project_id}/financial-entities/create', [RegisterSectionController::class, 'financial_entity_create'])->name('register-section.project.financial-entity.create');
Route::get('/projects/{project_id}/financial-entities/{financial_entity_id}', [RegisterSectionController::class, 'financial_entity_view'])->name('register-section.project.financial-entity.view');

//DELIVERABLES
Route::post('/projects/deliverable/store', [RegisterSectionController::class, 'deliverable_store'])->name('register-section.project.deliverable.store');
Route::get('/projects/{project_id}/deliverables', [RegisterSectionController::class, 'deliverable_index'])->name('register-section.project.deliverable.index');
Route::get('/projects/{project_id}/deliverables/create', [RegisterSectionController::class, 'deliverable_create'])->name('register-section.project.deliverable.create');
Route::get('/projects/{project_id}/deliverables/{deliverable_id}', [RegisterSectionController::class, 'deliverable_view'])->name('register-section.project.deliverable.view');