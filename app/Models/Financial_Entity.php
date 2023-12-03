<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Financial_Entity extends Model
{
    use HasFactory;
    protected $table = 'financial_entities';
    protected $fillable = [
        'name',
        'financing_amount',
        'project_id',
    ];
}
