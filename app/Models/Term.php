<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Term extends Model
{
    use HasFactory;
    protected $table = 'terms';
    protected $fillable = [
        'presentation_date',
        'start_tdr_date',
        'end_tdr_date',
        'situation',
        'description',
        'requested_amount',
        'project_id',
    ];
}
