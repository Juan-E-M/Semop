<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SituationSectionController;



//---------------------------FOLLOW SECTION-------------------------------

Route::get('/situation/projects', [SituationSectionController::class, 'index'])->name('situation-section.index');
Route::get('/situation/projects/{project_id}', [SituationSectionController::class, 'info'])->name('situation-section.project.info');

// Techincal
Route::get('/situation/projects/{project_id}/technical/{completed}', [SituationSectionController::class, 'technical_index'])->name('situation-section.project.technical');
Route::patch('/situation/projects/technical/store', [SituationSectionController::class, 'technical_deliverable_store'])->name('situation-section.project.technical.store');

Route::get('/situation/projects/{project_id}/technical/{deliverable_id}/activity', [SituationSectionController::class, 'technical_activity_index'])->name('situation-section.project.technical.activity.index');
Route::get('/situation/projects/{project_id}/technical/{deliverable_id}/activity/create', [SituationSectionController::class, 'technical_activity_create'])->name('situation-section.project.technical.activity.create');
Route::get('/situation/projects/{project_id}/technical/{deliverable_id}/activity/{activity_id}', [SituationSectionController::class, 'technical_activity_view'])->name('situation-section.project.technical.activity.view');
Route::post('/situation/projects/technical/activity/store', [SituationSectionController::class, 'technical_activity_store'])->name('situation-section.project.technical.activity.store');


//Financial
Route::get('/situation/projects/{project_id}/financial/{completed}', [SituationSectionController::class, 'financial_index'])->name('situation-section.project.financial');
Route::patch('/situation/projects/financial/store', [SituationSectionController::class, 'financial_deliverable_store'])->name('situation-section.project.financial.store');

Route::get('/situation/projects/{project_id}/financial/{deliverable_id}/activity', [SituationSectionController::class, 'financial_activity_index'])->name('situation-section.project.financial.activity.index');
Route::get('/situation/projects/{project_id}/financial/{deliverable_id}/activity/create', [SituationSectionController::class, 'financial_activity_create'])->name('situation-section.project.financial.activity.create');
Route::get('/situation/projects/{project_id}/financial/{deliverable_id}/activity/{activity_id}', [SituationSectionController::class, 'financial_activity_view'])->name('situation-section.project.financial.activity.view');
Route::post('/situation/projects/financial/activity/store', [SituationSectionController::class, 'financial_activity_store'])->name('situation-section.project.financial.activity.store');
