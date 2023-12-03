<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FollowSectionController;



//---------------------------FOLLOW SECTION-------------------------------

Route::get('/follow/projects', [FollowSectionController::class, 'index'])->name('follow-section.index');
Route::get('/follow/projects/{project_id}', [FollowSectionController::class, 'info'])->name('follow-section.project.info');
Route::get('/follow/projects/{project_id}/create', [FollowSectionController::class, 'register_create'])->name('follow-section.project.create');
Route::get('/follow/projects/{project_id}/view', [FollowSectionController::class, 'register_view'])->name('follow-section.project.view');
Route::get('/follow/projects/plan/download/{filename}',[FollowSectionController::class,'download'])->name('follow-section.project.download');
Route::post('/follow/projects/store', [FollowSectionController::class, 'register_store'])->name('follow-section.project.store');

//TERMS
Route::get('/follow/projects/{project_id}/terms', [FollowSectionController::class, 'term_index'])->name('follow-section.project.term.index');
Route::get('/follow/projects/{project_id}/terms/create', [FollowSectionController::class, 'term_create'])->name('follow-section.project.term.create');
Route::get('/follow/projects/{project_id}/terms/{term_id}', [FollowSectionController::class, 'term_view'])->name('follow-section.project.term.view');
Route::post('/follow/projects/term/store', [FollowSectionController::class, 'term_store'])->name('follow-section.project.term.store');

//Specifications
Route::get('/follow/projects/{project_id}/specifications', [FollowSectionController::class, 'specification_index'])->name('follow-section.project.specification.index');
Route::get('/follow/projects/{project_id}/specifications/create', [FollowSectionController::class, 'specification_create'])->name('follow-section.project.specification.create');
Route::get('/follow/projects/{project_id}/specifications/{specification_id}', [FollowSectionController::class, 'specification_view'])->name('follow-section.project.specification.view');

Route::post('/follow/projects/specification/store', [FollowSectionController::class, 'specification_store'])->name('follow-section.project.specification.store');
