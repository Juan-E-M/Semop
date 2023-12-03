<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\FollowSection;
use App\Models\Term;
use App\Models\Specification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Response;
use Inertia\Inertia;


class FollowSectionController extends Controller
{
    public function index()
    {
        return Inertia::render('FollowSection/Index', [
            'projects' => Project::paginate(8),
        ]);
    }

    public function info($project_id)
    {
        return Inertia::render('FollowSection/Info', [
            'project' => Project::with('follow_section')->find($project_id),
        ]);
    }
    public function register_create($project_id)
    {
        return Inertia::render('FollowSection/Register/Create', [
            'project' => Project::find($project_id),
        ]);
    }
    public function register_view($project_id)
    {
        return Inertia::render('FollowSection/Register/View', [
            'project' => Project::with('follow_section')->find($project_id),
        ]);
    }

    public function download($filename)
    {
        $filePath = '/documents/' . $filename;

        if (Storage::disk('local')->exists($filePath)) {
            $file = Storage::disk('local')->get($filePath);
            $extension = pathinfo($filename, PATHINFO_EXTENSION);
            $mimeTypes = [
                'pdf' => 'application/pdf',
                'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'xlsx' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'pptx' => 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            ];
            $mime = $mimeTypes[$extension] ?? 'application/octet-stream';
            $response = new Response($file, 200);
            $response->header('Content-Type', $mime);
            $response->header('Content-Disposition', 'attachment; filename="' . $filename . '"');
            return $response;
        }

        abort(404);
    }


    public function register_store(Request $request)
    {
        $data = $request->validate([
            'tdr_amount' => 'required',
            'paid_tdr_amount' => 'required',
            'et_amount' => 'required',
            'paid_et_amount' => 'required',
            'requested_amount' => 'required',
            'project_plan' => 'required',
            'project_id' => 'required',
        ]);

        $document = $request->file('project_plan');
        $documentName = time() . '.' . $document->getClientOriginalName();
        $document->storeAs('documents', $documentName);
        $data['project_plan'] = $documentName;

        FollowSection::updateOrCreate($data);
        return redirect()->back();
    }


    //------------------------Terms section------------------------------------
    public function term_index($project_id)
    {
        $project = Project::find($project_id);
        $terms = Term::where('project_id', $project_id)
            ->orderBy('created_at', 'desc')
            ->paginate(5);

        return Inertia::render('FollowSection/Terms/Index', [
            'terms' => $terms,
            'project' => $project,

        ]);
    }
    public function term_create($project_id)
    {
        return Inertia::render('FollowSection/Terms/Create', [
            'project' => Project::find($project_id),
        ]);
    }
    public function term_store(Request $request)
    {
        $data = $request->validate([
            'presentation_date'=>'required',
            'start_tdr_date'=>'required',
            'end_tdr_date'=>'required',
            'situation'=>'required',
            'description'=>'required',
            'requested_amount'=>'required',
            'project_id'=>'required',
        ]);
        Term::create($data);
        return redirect()->back();
    }

    public function term_view($project_id, $term_id)
    {
        return Inertia::render('FollowSection/Terms/View', [
            'term' => Term::find($term_id),
            'project' => Project::find($project_id),
        ]);
    }

    //------------------------Specifications section------------------------------------
    public function specification_index($project_id)
    {
        $project = Project::find($project_id);
        $specifications = Specification::where('project_id', $project_id)
            ->orderBy('created_at', 'desc')
            ->paginate(5);

        return Inertia::render('FollowSection/Specifications/Index', [
            'specifications' => $specifications,
            'project' => $project,

        ]);
    }
    
    public function specification_create($project_id)
    {
        return Inertia::render('FollowSection/Specifications/Create', [
            'project' => Project::find($project_id),
        ]);
    }
    public function specification_store(Request $request)
    {
        $data = $request->validate([
            'presentation_date'=>'required',
            'start_et_date'=>'required',
            'end_et_date'=>'required',
            'situation'=>'required',
            'description'=>'required',
            'requested_amount'=>'required',
            'project_id'=>'required',
        ]);
        Specification::create($data);
        return redirect()->back();
    }

    public function specification_view($project_id, $specification_id)
    {
        return Inertia::render('FollowSection/Specifications/View', [
            'specification' => Specification::find($specification_id),
            'project' => Project::find($project_id),
        ]);
    }







}
