<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Cv;

class Competence extends Model
{
    use HasFactory;
    protected $fillable = ["competence", "cv_id"];
    public function cv(){
        return $this->belongsTo(Cv::class , 'cv_id');
    }
}
