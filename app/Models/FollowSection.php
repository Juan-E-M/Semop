<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FollowSection extends Model
{
    use HasFactory;
    protected $table = 'follow_sections';
    protected $fillable = [
        'tdr_amount',
        'paid_tdr_amount',
        'et_amount',
        'paid_et_amount',
        'requested_amount',
        'project_plan',
        'project_id',
    ];

}
