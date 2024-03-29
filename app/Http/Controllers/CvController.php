<?php

namespace App\Http\Controllers;

use App\Models\Competence;
use App\Models\Cv;
use App\Models\Education;
use App\Models\Experiencepro;
use App\Models\Infopersonnelle;
use App\Models\Language;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


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
        $cvs = Cv::all();
        return response()->json($cvs, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $image_64 = $request->image;
        $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];
        $replace = substr($image_64, 0, strpos($image_64, ',') + 1);
        $image = str_replace($replace, '', $image_64);
        $image = str_replace(' ', '+', $image);
        $imageName = Str::random(10) . '.' . $extension;
        Storage::disk('public')->put($imageName, base64_decode($image));
       
        $newCv =  Cv::create([
            "nomcv" => $request->nomcv,
            "user_id" => auth('api')->user()->id
        ]);
        $newCv->save();

        $perso = infopersonnelle::create([
            "nom" => $request->infopersonnelle['nom'],
            "image" => $imageName,
            "prenom" => $request->infopersonnelle['prenom'],
            "about" => $request->infopersonnelle['profile'],
            "email" => $request->infopersonnelle["email"],
            "tel" => $request->infopersonnelle['tele'],
            "cv_id" => $newCv->id,
        ]);
        $perso->save();

        foreach ($request->education as $education) {
            Education::create([
                "institution" => $education['institution'],
                "dateDebut" => $education['dateD'],
                "dateFin" => $education['dateF'],
                "description" => $education['desc'],
                "cv_id" => $newCv->id,
            ]);
        };
        foreach ($request->experiencepro as $experiencepro) {
            Experiencepro::create([
                "position" => $experiencepro['pos'],
                "location" => $experiencepro['loc'],
                "dateDebut" => $experiencepro["dateD"],
                "dateFin" => $experiencepro["dateF"],
                "description" => $experiencepro["desc"],
                "cv_id" => $newCv->id,
            ]);
        };
        foreach ($request->language as $language) {
            Language::create([
                "language" => $language["lang"],
                "level" => $language["level"],
                "cv_id" => $newCv->id,
            ]);
        };
        foreach ($request->competence as $competence) {
            Competence::create([
                "competence" => $competence["compétence"],
                "cv_id" => $newCv->id,
            ]);
        };
        return response()->json($newCv, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cv  $cv
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $cv = Cv::find($id);
        $datacv["cvinfo"] = Cv::find($cv->id);
        $datacv["infopersonnelle"] = $cv->infopersonnelles;
        $datacv["competence"] = $cv->competences;
        $datacv["education"] = $cv->educations;
        $datacv["experiencepro"] = $cv->experiencepros;
        $datacv["language"] = $cv->languages;
        return response()->json($datacv, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Cv  $cv
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $cv = Cv::find($id);
        $datacv["cvinfo"] = Cv::find($cv->id);
        $datacv["infopersonnelle"] = $cv->infopersonnelles;
        $datacv["competence"] = $cv->competences;
        $datacv["education"] = $cv->educations;
        $datacv["experiencepro"] = $cv->experiencepros;
        $datacv["language"] = $cv->languages;
        return response()->json($datacv, 200);
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
    public function destroy($id)
    {
        $cv = Cv::find($id);
        $cv->delete();
    }
}
