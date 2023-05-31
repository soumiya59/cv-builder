<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Education;
use App\Models\Competence;
use App\Models\Experiencepro;
use App\Models\Infopersonnelle;
use App\Models\Language;
class Cv extends Model
{
    protected $fillable = ["nomcv", "user_id"];
    use HasFactory;
    public function user(){
        return $this->belongsTo(User::class , 'user_id');
    }
    public function educations(){
        return $this->hasMany(Education::class , "cv_id");
    }
    public function competences(){
        return $this->hasMany(Competence::class , "cv_id");
    }
    public function experiencepros(){
        return $this->hasMany(Experiencepro::class , "cv_id");
    }
    public function infopersonnelles(){
        return $this->hasMany(Infopersonnelle::class , "cv_id");
    }
    public function languages(){
        return $this->hasMany(Language::class , "cv_id");
    }
}
