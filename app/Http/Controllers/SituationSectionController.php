<?php

namespace App\Http\Controllers;
use App\Models\Project;
use App\Models\Deliverable;
use App\Models\TechnicalActivity;
use App\Models\FinancialActivity;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SituationSectionController extends Controller
{
    public function index()
    {
        return Inertia::render('SituationSection/Index', [
            'projects' => Project::paginate(8),
        ]);
    }
    public function info($project_id)
    {
        return Inertia::render('SituationSection/Info', [
            'project' => Project::find($project_id),
        ]);
    }

    //------------------------Technical Situation section------------------------------------

    public function technical_index($project_id, $completed) {
        $project = Project::find($project_id);
        $role = Auth::user()->role_id;
        if ($completed==1 and $role!=1){
            abort(403, 'No tienes permisos para acceder a esta página.');
        }

        $deliverables = Deliverable::where('project_id', $project_id)
            ->with('milestone')
            ->where('technical_situation', '!=', '100%')
            ->paginate(5);

        if ($completed){
            $deliverables = Deliverable::where('project_id', $project_id)
            ->with('milestone')
            ->where('technical_situation', '=', '100%')
            ->paginate(5);
        }

        
        
        return Inertia::render('SituationSection/Technical/Index', [
            'deliverables' => $deliverables,
            'project' => $project,
            'completed'=>$completed,
        ]);
    }

    public function technical_deliverable_store (Request $request) {

        Deliverable::find($request->id)
        ->update(['technical_situation' => $request->technical_situation]);

        return redirect()->back();
    } 

    //Technical Activities

    public function technical_activity_index ($project_id, $deliverable_id) {
        return Inertia::render('SituationSection/Technical/Activities/Index',[
            'activities'=>TechnicalActivity::where('deliverable_id', $deliverable_id)
                ->paginate(5),
            'project'=>Project::find($project_id),
            'deliverable'=>Deliverable::find($deliverable_id)

        ]);
    } 
    public function technical_activity_create ($project_id, $deliverable_id) {
        return Inertia::render('SituationSection/Technical/Activities/Create',[
            'project'=>Project::find($project_id),
            'deliverable'=>Deliverable::find($deliverable_id)

        ]);
    } 
    public function technical_activity_store (Request $request) {
        $data = $request->validate([
            'how'=>'required',
            'in_charge'=>'required',
            'start_date'=>'required',
            'end_date'=>'required',
            'observation'=>'required',
            'deliverable_id'=>'required',
        ]);
        TechnicalActivity::create($data);
        return redirect()->back();
    }

    public function technical_activity_view($project_id, $deliverable_id, $activity_id)
    {
        return Inertia::render('SituationSection/Technical/Activities/View', [
            'activity' => TechnicalActivity::find($activity_id),
            'deliverable'=>Deliverable::find($deliverable_id),
            'project' => Project::find($project_id),
        ]);
    }

    //------------------------Financial Situation section------------------------------------

    public function financial_index($project_id, $completed) {
        $project = Project::find($project_id);
        $role = Auth::user()->role_id;
        if ($completed==1 and $role!=1){
            abort(403, 'No tienes permisos para acceder a esta página.');
        }

        $deliverables = Deliverable::where('project_id', $project_id)
            ->with('milestone')
            ->where('financial_situation', '!=', '100%')
            ->paginate(5);

        if ($completed){
            $deliverables = Deliverable::where('project_id', $project_id)
            ->with('milestone')
            ->where('financial_situation', '=', '100%')
            ->paginate(5);
        }

        
        
        return Inertia::render('SituationSection/Financial/Index', [
            'deliverables' => $deliverables,
            'project' => $project,
            'completed'=>$completed,
        ]);
    }

    public function financial_deliverable_store (Request $request) {

        Deliverable::find($request->id)
        ->update(['financial_situation' => $request->financial_situation]);

        return redirect()->back();
    }

    //Financial Activities

    public function financial_activity_index ($project_id, $deliverable_id) {
        return Inertia::render('SituationSection/Financial/Activities/Index',[
            'activities'=>FinancialActivity::where('deliverable_id', $deliverable_id)
                ->paginate(5),
            'project'=>Project::find($project_id),
            'deliverable'=>Deliverable::find($deliverable_id)

        ]);
    } 
    public function financial_activity_create ($project_id, $deliverable_id) {
        return Inertia::render('SituationSection/Financial/Activities/Create',[
            'project'=>Project::find($project_id),
            'deliverable'=>Deliverable::find($deliverable_id)

        ]);
    } 
    public function financial_activity_store (Request $request) {
        $data = $request->validate([
            'how'=>'required',
            'in_charge'=>'required',
            'start_date'=>'required',
            'end_date'=>'required',
            'observation'=>'required',
            'requested_amount'=>'required',
            'deliverable_id'=>'required',
        ]);
        FinancialActivity::create($data);
        return redirect()->back();
    } 

    public function financial_activity_view($project_id, $deliverable_id, $activity_id)
    {
        return Inertia::render('SituationSection/Financial/Activities/View', [
            'activity' => FinancialActivity::find($activity_id),
            'deliverable'=>Deliverable::find($deliverable_id),
            'project' => Project::find($project_id),
        ]);
    }


}
