<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\Objective;
use App\Models\Milestone;
use App\Models\Deliverable;
use App\Models\Member;
use App\Models\Financial_Entity;
use Inertia\Inertia;

class RegisterSectionController extends Controller
{
    public function index()
    {
        return Inertia::render('RegisterSection/Index', [
            'projects' => Project::paginate(8),
        ]);
    }

    public function project_create()
    {
        return Inertia::render('RegisterSection/Projects/Create');
    }

    public function project_store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required',
            'days' => 'required',
            'start_date' => 'required',
            'end_date' => 'required',
            'extension' => 'required',
            'ceplan_register' => 'required',
            'total_amount' => 'required',
        ]);
        Project::create($data);
        return redirect()->back();
    }

    public function info($project_id)
    {
        return Inertia::render('RegisterSection/Info', [
            'project' => Project::find($project_id),
        ]);
    }


    //------------------------Objectives Section------------------------------------
    public function objective_index($project_id)
    {
        $project = Project::find($project_id);
        $objectives = Objective::where('project_id', $project_id)
            ->orderBy('created_at', 'asc')
            ->paginate(5);

        return Inertia::render('RegisterSection/Objectives/Index', [
            'objectives' => $objectives,
            'project' => $project,

        ]);
    }
    public function objective_create($project_id)
    {
        return Inertia::render('RegisterSection/Objectives/Create', [
            'project' => Project::find($project_id),
        ]);
    }
    public function objective_store(Request $request)
    {
        $data = $request->validate([
            'purpose' => 'required',
            'objective' => 'required',
            'project_id' => 'required',
        ]);
        Objective::create($data);
        return redirect()->back();
    }

    public function objective_view($project_id, $objective_id)
    {
        return Inertia::render('RegisterSection/Objectives/View', [
            'objective' => Objective::find($objective_id),
            'project' => Project::find($project_id),
        ]);
    }


    //------------------------Milestones section------------------------------------
    public function milestone_index($project_id)
    {
        $project = Project::find($project_id);
        $milestones = Milestone::where('project_id', $project_id)
            ->orderBy('date', 'desc')
            ->paginate(5);

        return Inertia::render('RegisterSection/Milestones/Index', [
            'milestones' => $milestones,
            'project' => $project,

        ]);
    }
    public function milestone_create($project_id)
    {
        return Inertia::render('RegisterSection/Milestones/Create', [
            'project' => Project::find($project_id),
        ]);
    }
    public function milestone_store(Request $request)
    {
        $data = $request->validate([
            'date' => 'required',
            'contingencies' => 'required',
            'project_id' => 'required',
        ]);
        Milestone::create($data);
        return redirect()->back();
    }

    public function milestone_view($project_id, $milestone_id)
    {
        return Inertia::render('RegisterSection/Milestones/View', [
            'milestone' => Milestone::with('deliverables')->find($milestone_id),
            'project' => Project::find($project_id),
        ]);
    }

    //------------------------Members section------------------------------------
    public function member_index($project_id)
    {
        $project = Project::find($project_id);
        $members = Member::where('project_id', $project_id)
            ->orderBy('created_at', 'asc')
            ->paginate(5);

        return Inertia::render('RegisterSection/Members/Index', [
            'members' => $members,
            'project' => $project,

        ]);
    }
    public function member_create($project_id)
    {
        return Inertia::render('RegisterSection/Members/Create', [
            'project' => Project::find($project_id),
        ]);
    }
    public function member_store(Request $request)
    {
        $data = $request->validate([
            'full_name' => 'required',
            'type' => 'required',
            'email' => 'required',
            'phone_number' => 'required',
            'mobile_number' => 'required',
            'address' => 'required',
            'project_id' => 'required',
        ]);
        Member::create($data);
        return redirect()->back();
    }

    public function member_view($project_id, $member_id)
    {
        return Inertia::render('RegisterSection/Members/View', [
            'member' => Member::find($member_id),
            'project' => Project::find($project_id),
        ]);
    }

    //------------------------Financial Entities section------------------------------------
    public function financial_entity_index($project_id)
    {
        $project = Project::find($project_id);
        $financial_entities = Financial_Entity::where('project_id', $project_id)
            ->orderBy('created_at', 'asc')
            ->paginate(5);

        return Inertia::render('RegisterSection/FinancialEntities/Index', [
            'financial_entities' => $financial_entities,
            'project' => $project,

        ]);
    }
    public function financial_entity_create($project_id)
    {
        return Inertia::render('RegisterSection/FinancialEntities/Create', [
            'project' => Project::find($project_id),
        ]);
    }
    public function financial_entity_store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'financing_amount' => 'required',
            'project_id' => 'required',

        ]);
        Financial_Entity::create($data);
        return redirect()->back();
    }

    public function financial_entity_view($project_id, $financial_entity_id)
    {
        return Inertia::render('RegisterSection/FinancialEntities/View', [
            'financial_entity' => Financial_Entity::find($financial_entity_id),
            'project' => Project::find($project_id),
        ]);
    }

    //------------------------Deliverable section------------------------------------
    public function deliverable_index($project_id)
    {
        $project = Project::find($project_id);

        $deliverables = Deliverable::where('project_id', $project_id)
            ->with([
                'milestone' => function ($query) {
                    $query->orderBy('date', 'asc');
                }
            ])
            ->orderBy('milestone_id')
            ->paginate(5);

        return Inertia::render('RegisterSection/Deliverables/Index', [
            'deliverables' => $deliverables,
            'project' => $project,
        ]);
    }
    public function deliverable_create($project_id)
    {
        return Inertia::render('RegisterSection/Deliverables/Create', [
            'project' => Project::find($project_id),
            'milestones'=>Milestone::where('project_id', $project_id)->orderBy('date', 'asc')->get()
        ]);
    }
    public function deliverable_store(Request $request)
    {
        $data = $request->validate([
            'denomination' => 'required',
            'description' => 'required',
            'milestone_id' => 'required',
            'project_id' => 'required',
        ]);
        Deliverable::create($data);
        return redirect()->back();
    }

    public function deliverable_view($project_id, $deliverable_id)
    {
        return Inertia::render('RegisterSection/Deliverables/View', [
            'deliverable' => Deliverable::with('milestone')->find($deliverable_id),
            'project' => Project::find($project_id),
        ]);
    }

}
