<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Specification extends Model
{
    use HasFactory;
    protected $table = 'specifications';
    protected $fillable = [
        'presentation_date',
        'start_et_date',
        'end_et_date',
        'situation',
        'description',
        'requested_amount',
        'project_id',
    ];
}
