<?php

namespace App\Http\Controllers;

use App\Models\Competence;
use App\Models\Cv;
use App\Models\Education;
use App\Models\Experiencepro;
use App\Models\Infopersonnelle;
use App\Models\Language;
use Illuminate\Http\Request;


class CvController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //return  auth('api')->user();
        return Cv::find(1);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

     
        $newCv =  Cv::create([
            "nomcv"=>$request->nomcv,
            "user_id"=>auth('api')->user()->id
        ]);
        $newCv->save();
        
            Infopersonnelle::create([
                "nom"=>$request->infopersonnelle['nom'],
                "prenom"=>$request->infopersonnelle['prenom'],
                "about"=>$request->infopersonnelle['about'],
                "email"=>$request->infopersonnelle["email"],
                "adresse"=>$request->infopersonnelle['adresse'],
                "tel"=>$request->infopersonnelle['tel'],
                "cv_id"=>$newCv->id,
            ]);
            
            
        
        
        foreach($request->education as $education){
             Education::create([
                "institution" => $education['institution'],
                "dateDebut" => $education['dateDebut'],
                "dateFin" => $education['dateFin'],
                "description" => $education['description'],
                "cv_id"=>$newCv->id,
            ]);
            
            
        };
        foreach($request->experiencepro as $experiencepro){
            Experiencepro::create([
                "position"=>$experiencepro['position'],
                "location"=>$experiencepro['location'],
                "dateDebut"=>$experiencepro["dateDebut"],
                "dateFin"=>$experiencepro["dateFin"],
                "description"=>$experiencepro["description"],
                "cv_id"=>$newCv->id,
        ]);
       
    
        };
        foreach($request->language as $language){
            Language::create([
                "language"=>$language["language"],
                "level"=>$language["level"],
                "cv_id"=>$newCv->id,
            ]);
            

        };
        foreach($request->competence as $competence){
            Competence::create([
                "competence"=>$competence["competence"],
                "cv_id"=>$newCv->id,
            ]);
        
        
        };
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cv  $cv
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $cv=Cv::find($id);
        $datacv["cvinfo"]=Cv::find($cv->id);
        $datacv["infopersonnelle"]=$cv->infopersonnelles;
        $datacv["competence"]=$cv->competences;
        $datacv["education"]=$cv->educations;
        $datacv["experiencepro"]=$cv->experiencepros;
        $datacv["language"]=$cv->languages;
        return response()->json($datacv, 200 );
 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Cv  $cv
     * @return \Illuminate\Http\Response
     */
    public function edit(Cv $cv)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Cv  $cv
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cv $cv)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cv  $cv
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cv $cv)
    {
        //
    }
}
