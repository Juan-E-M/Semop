<?php

namespace App\Http\Controllers;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index() {
        return Inertia::render('Users/Index',[
            "users"=> User::with('role')->paginate(10)
        ]);
    }
    public function create($user_id= null) {
        if ($user_id) {
            return Inertia::render('Users/Create', [
                'user' => User::find($user_id)
            ]);
        }
        return Inertia::render('Users/Create');
    }
    public function store(Request $request) {
        if($request->id) {
            $user = User::find($request->id);
            $user->update($request->only(['name', 'email', 'role_id']));
            return redirect()->back();
        }
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => 'required',
            'role_id'=>'required'
        ]);
        User::create($data);
        return redirect()->back();
    }
    public function delete($user_id) {
        $user = User::find($user_id);
        $user->delete();
        return redirect()->back();
    }
}
