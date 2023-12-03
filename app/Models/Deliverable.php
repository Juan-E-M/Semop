<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Deliverable extends Model
{
    use HasFactory;
    protected $table = 'deliverables';
    protected $fillable = [
        'denomination',
        'description',
        'milestone_id',
        'project_id',
        'financial_situation',
        'technical_situation',
    ];

    public function milestone()
    {
        return $this->belongsTo(Milestone::class, 'milestone_id');
    }

}
