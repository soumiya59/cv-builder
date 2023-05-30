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
    use HasFactory;
    public function user(){
        return $this->belongsTo(User::class , 'cv_id');
    }
    public function educations(){
        return $this->hasMany(Education::class , "user_id");
    }
    public function competences(){
        return $this->hasMany(Competence::class , "user_id");
    }
    public function experiencepros(){
        return $this->hasMany(Experiencepro::class , "user_id");
    }
    public function infopersonnelles(){
        return $this->hasMany(Infopersonnelle::class , "user_id");
    }
    public function languages(){
        return $this->hasMany(Language::class , "user_id");
    }
}
