import React from "react";
import CreerCompteFrom from "../components/CreerCompteForm";
import SeConnecter from "./SeConnecte";
export default function Modal({setShowModal,showModal}) {
const [showModalSeconnecter, setshowModalSeconnecter] = React.useState(false);
    const showSeconnecterModal=()=>{ 
      setshowModalSeconnecter(!showModalSeconnecter)
    }
  return (
    <>
      {showModalSeconnecter? '' :
        <> 
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none md:px-8">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-3xl font-semibold -ml-5">
                    S'inscrire
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none opacity-40"
                    onClick={() =>setShowModal(!showModal)}
                  > <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none -mr-5"> X </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-6 flex-auto">
                  <p className="text-slate-500 text-lg leading-relaxed mb-8 mt-3 text -ml-5"> Créez un compte GRATUIT pour télécharger votre CV </p>
                </div>
              <CreerCompteFrom setshowModalSeconnecter={setshowModalSeconnecter} showModal={showModalSeconnecter}/>
              </div>
            </div>
          </div>
         </>
      } 
      {showModalSeconnecter && <SeConnecter showModal={showSeconnecterModal}/>}
    </>
      
  );
}
