<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Milestone extends Model
{
    use HasFactory;
    protected $table = 'milestones';
    protected $fillable = [
        'date',
        'contingencies',
        'project_id',
    ];

    public function deliverables()
    {
        return $this->hasMany(Deliverable::class, 'milestone_id');
    }
}
