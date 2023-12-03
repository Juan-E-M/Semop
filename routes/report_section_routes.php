<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReportSectionController;



//---------------------------FOLLOW SECTION-------------------------------

Route::get('/report/projects', [ReportSectionController::class, 'index'])->name('report-section.index');
Route::get('/report/projects/{project_id}', [ReportSectionController::class, 'info'])->name('report-section.project.info');

Route::get('/report/projects/{project_id}/financial', [ReportSectionController::class, 'financial_report'])->name('report-section.financial');
Route::get('/report/projects/{project_id}/technical', [ReportSectionController::class, 'technical_report'])->name('report-section.technical');
