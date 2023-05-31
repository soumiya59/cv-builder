<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Cv;
class Language extends Model
{
    use HasFactory;
    protected $fillable = ["language","level", "cv_id"];
    public function cv(){
        return $this->belongsTo(Cv::class , 'cv_id');
    }
}
