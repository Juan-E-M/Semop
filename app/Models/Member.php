<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;
    protected $table = 'members';
    protected $fillable = [
        'full_name',
        'type',
        'email',
        'phone_number',
        'mobile_number',
        'address',
        'project_id',
    ];
}
