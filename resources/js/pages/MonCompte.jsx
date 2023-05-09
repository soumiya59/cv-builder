import React from "react";
import LogOutHeader from "./components/LogOutHeader";
import MiniFooter from "./components/MiniFooter";
export default function MonCompt(){
    return(
        <>
            <LogOutHeader />
           <form >
            <div class="grid grod-rows-2  gap-4 container m-16 lg:w-4/6 mx-auto mb-24">
                    <div class="flex-1 border-gray-100  border-2 rounded-1 ">
                        <div className=" mx-12 my-10">
                            <div className="flex justify-start">
                            <span><svg class="h-8 w-8 mr-2 text-gray-500 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  stroke-linecap="round"  strokeLinejoiny="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg></span>
                            <h1 className=" text-xl block font-bold leading-tight tracking-tight italic  text-gray-500 md:text-2xl">Courrier électronique d'accès</h1>
                            </div>
                            <label className="text-gray-400 text-sm block font-bold mt-4 ">Courrier électronique :</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full mt-2 p-2.5" type="email" name="email" id="email" placeholder="Zohayr@gmail.com" />

                        </div>
                    </div>   
                    <div class="flex-1 border-gray-100  border-2 rounded-lg   ">
                        <div className=" mx-12 my-10 ">
                            <div className="flex justify-start">
                            <svg class="h-8 w-8 mr-2  text-gray-500 "  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" strokeLinejoiny="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                            <h1 className=" text-xl block font-bold leading-tight tracking-tight italic  text-gray-500 md:text-2xl">Modifier mot de passe</h1>
                            </div>
                            <label className="text-gray-400 text-sm block font-bold mt-4 ">Mot de passe actual :</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full mt-2 p-2.5" type="email" name="email" id="email" />
                            <label className="text-gray-400 text-sm block font-bold mt-4 ">Nouveau mot de passe :</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full mt-2 p-2.5" type="email" name="email" id="email" />
                            <label className="text-gray-400 text-sm block font-bold mt-4 ">Veuiellez répéter Mot de passe :</label>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full mt-2 p-2.5 mb-5" type="email" name="email" id="email" />
                            <div className="flex justify-end">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 flex  ">Enregistrer</button>
                            </div>
                        </div>
                    </div>       
            </div>
            </form>
            <MiniFooter />
        </>
    )
}