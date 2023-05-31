import { useState } from "react";
import { useStateContext } from "../context/ContextProvider";
import LogOutHeader from './components/LogOutHeader'
import MiniFooter from "./components/MiniFooter";
import TelechargerModal from "./modals/TelechargerModal";
import SupprimerModal from "./modals/SupprimerModal";
import Partager from "./modals/Partager";
import { Navigate } from "react-router-dom";
function Profile() {
    const [showModalTelecherger, setshowModalTelecherger] = useState(false);
    const [showModalSupprimer, setshowModalSupprimer] = useState(false);
    const [showModalPartager, setshowModalPartager] = useState(false);
    function statemodaltelecharger() { setshowModalTelecherger(!showModalTelecherger) }
    function statemodalsupprimer() { setshowModalSupprimer(!showModalSupprimer) }
    function statemodalPartager() { setshowModalPartager(!showModalPartager) }
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
                <h1 className=' text-3xl font-Montserrat font-bold  leading-none tracking-tight pt-10 pb-20  text-gray-900 text-center md:text-4xl sm:text-4xl lg:text-5xl'>Mes CV</h1>
                <div className='  grid md:grid-cols-1 lg:grid-cols-2 w-5/6 mx-auto sm:grid-cols-1  gap-x-10 gap-y-14    '>
                    {Cvs.map(cv =>
                        <div className=' bg-[#fbffff]  shadow-xl rounded-lg md:pb-10 sm:pb-5  pb-6 border-2 border-[#d4ebee] flex flex-row transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300  '>
                            <div className='basis-3/6  sm:px-2 md:p-x-2'>
                                <img className=' sm:-mt-10 -mt-7 border-4 rounded-lg  border-[#cceef4] ' src="images/cv-templates-resumelab_cubic@3x.png" alt="" />
                            </div>
                            <div className='basis-3/6 grid grid-flow-row auto-rows-max content-center hover:auto-rows-min  '>
                                <h1 className='font-Montserrat ml-2  font-bold text-4xl mb-3 text-gray-700'> _ _</h1>
                                <h5 className='text-gray-400 text-1xl mb-5 ml-2 '>{cv.edition} </h5>
                                <div className='flex justify-start ml-2 '>
                                    <img className=' w-6 h-6 md:w-10 md:h-auto ms:mt-1 mt-1 lg:-mt-2 -mr-3 mb-2' src="images/icons8-download-resume-50.png" alt="" />
                                    <button className="mb-2 ml-4 md:text-2xl sm:text-sm font-Montserrat text-gray-400/100" type="button" onClick={() => statemodaltelecharger()}>
                                        Télécharger
                                    </button>

                                </div>
                                <div className='flex justify-start ml-2'>
                                    {/* <svg fill="none" className="w-6 h-6 md:w-10 md:h-auto ms:mt-1 mt-1 lg:-mt-2 -mr-3 mb-2 text-sky-300"  stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoiny="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"></path>
                            </svg> */}
                                    <img src="images/icons/share.png" className=" w-7 mb-2 md:w-10 md:mb-3    " />
                                    <button className="mb-2 ml-4 md:text-2xl sm:text-sm font-Montserrat text-gray-400/100" type="button" onClick={() => statemodalPartager()}>
                                        Partager
                                    </button>

                                </div>
                                <div className='flex justify-start ml-2'>
                                    <img className='w-6 h-6 md:w-10 md:h-auto ms:mt-1 mt-1 lg:-mt-2 -mr-3 mb-2' src="images/icons8-pencil-50.png" alt="" /><a href="#" className=' mb-2 ml-4 md:text-2xl sm:text-sm font-Montserrat text-gray-400/100 ' >Modifier</a>

                                </div>

                                <div className='flex justify-start ml-2'>
                                    <img className='w-6 h-6 md:w-10 md:h-auto ms:mt-1 mt-1  lg:-mt-1 lg:-ml-1   -mr-3 mb-2' src="images/icons8-trash-50.png" alt="" />
                                    <button className="mb-2 ml-4 md:text-2xl sm:text-sm font-Montserrat text-gray-400/100" type="button" onClick={() => statemodalsupprimer()}>
                                        Supprimer
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="grid place-items-center mt-20">
                    <button id="btn-creastion" className="inline-block px-8 py-2 mt-8 mb-16 md:mb-24 text-2xl text-white rounded-full bg-darkpink hover:opacity-90">
                        <p className="font-Montserrat ">créer nouveau cv</p>
                    </button>
                </div>
            </div>
            <hr className="container mx-auto" />
            <MiniFooter />


            {showModalTelecherger ? <TelechargerModal showModalTelecherger={showModalTelecherger} /> : null}
            {showModalSupprimer ? <SupprimerModal statemodalsupprimer={showModalSupprimer} /> : null}
            {showModalPartager ? <Partager showModalPartager={showModalPartager} /> : null}

        </div>

    );
}

export default Profile;
