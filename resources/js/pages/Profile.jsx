import { useState } from "react";
import { useStateContext } from "../context/ContextProvider";
import LogOutHeader from './components/LogOutHeader'
import MiniFooter from "./components/MiniFooter";

import { Link, Navigate } from "react-router-dom";
import CvProfile from "./CvProfile";
function Profile() {
    

    const { token } = useStateContext();
    if (!token) {
        return <Navigate to={"/login"} />
    }
    const Cvs = [{
        edition: 'Dérnier édition : 16/01/2023 ',
    },
    {
        edition: 'Dérnier édition : 16/01/2023 ',
    }]

    return (
        <div>
            <LogOutHeader />
            <div className="container mx-auto    bg-white mb-10 pb-10" >
                <h1 className=' text-3xl font-Montserrat leading-none tracking-tight pt-10 text-gray-900 text-center md:text-4xl sm:text-4xl lg:text-5xl mb-10'>Mes CV</h1>
             
                    
                               {/*  <img className=' sm:-mt-10 -mt-7 border-4 rounded-lg  border-[#cceef4] ' src="images/cv-templates-resumelab_cubic@3x.png" alt="" /> */}
                               <CvProfile />
                            
             
                <div className="grid place-items-center mt-20">
                    <button id="btn-creastion" className="inline-block px-8 py-2 mt-8 mb-16 md:mb-24 text-2xl text-white rounded-full bg-darkpink hover:opacity-90">
                        <Link to={"/editeur"} className="font-Montserrat ">créer nouveau cv</Link>
                    </button>
                </div>
            </div>
            <hr className="container mx-auto" />
            <MiniFooter />


            

        </div>

    );
}

export default Profile;
