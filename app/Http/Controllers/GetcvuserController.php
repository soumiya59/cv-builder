<?php

namespace App\Http\Controllers;

use App\Models\Cv;

use Illuminate\Http\Request;

class GetcvuserController extends Controller
{
    public function getcvuser()
    {
       
        $cvs=Cv::where('user_id', auth('api')->user()->id)->orderBy('created_at', 'DESC')->get();
        foreach($cvs as $cv){
            $cv["infopersonnelle"]=$cv->infopersonnelles;
            $cv["competence"]=$cv->competences;
            $cv["education"]=$cv->educations;
            $cv["experiencepro"]=$cv->experiencepros;
            $cv["language"]=$cv->languages; 
        }
        return response()->json($cvs, 200 );
      
    }

}
