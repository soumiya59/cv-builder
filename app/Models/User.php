<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Education;
use App\Models\Competence;
use App\Models\Experiencepro;
use App\Models\Infopersonnelle;
use App\Models\Language;
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
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
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
