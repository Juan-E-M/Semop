<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FinancialActivity extends Model
{
    use HasFactory;
    protected $table = 'financial_activities';
    protected $fillable = [
        'how',
        'in_charge',
        'start_date',
        'end_date',
        'observation',
        'requested_amount',
        'deliverable_id',
    ];
}
