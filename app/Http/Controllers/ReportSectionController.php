<?php

namespace App\Http\Controllers;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReportSectionController extends Controller
{
    public function index()
    {
        return Inertia::render('ReportSection/Index', [
            'projects' => Project::paginate(8),
        ]);
    }
    public function info($project_id)
    {
        return Inertia::render('ReportSection/Info', [
            'project' => Project::find($project_id),
        ]);
    }
    public function financial_report($project_id)
    {
        return Inertia::render('ReportSection/Financial/Form', [
            'project' => Project::with('follow_section')->find($project_id),
        ]);
    }

    public function technical_report($project_id)
    {
        return Inertia::render('ReportSection/Technical/Form', [
            'project' => Project::with(['milestones', 'milestones.deliverables'])->find($project_id),
        ]);
    }
}
