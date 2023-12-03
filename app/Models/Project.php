<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $table = 'projects';
    protected $fillable = [
        'title',
        'days',
        'start_date',
        'end_date',
        'extension',
        'ceplan_register',
        'total_amount'
    ];

    public function follow_section(){
        return $this->hasOne(FollowSection::class);
    }

    public function milestones(){
        return $this->hasMany(Milestone::class);
    }
}
