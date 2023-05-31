<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Cv;
class Experiencepro extends Model
{
    use HasFactory;
    protected $fillable = ["position","location", "dateDebut","dateFin","description","cv_id"];
    public function cv(){
        return $this->belongsTo(Cv::class , 'cv_id');
    }
}
