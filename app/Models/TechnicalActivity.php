<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TechnicalActivity extends Model
{
    use HasFactory;
    protected $table = 'technical_activities';
    protected $fillable = [
        'how',
        'in_charge',
        'start_date',
        'end_date',
        'observation',
        'deliverable_id',
    ];
}
