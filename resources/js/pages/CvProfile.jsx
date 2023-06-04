import jsPDF from "jspdf";
import { useEffect, useState } from "react";
import TelechargerModal from "./modals/TelechargerModal";
import SupprimerModal from "./modals/SupprimerModal";
import Partager from "./modals/Partager";
import axiosClient from "../axiosClient";
function CvProfile() {
    const [showModalTelecherger, setshowModalTelecherger] = useState(false);
    const [showModalSupprimer, setshowModalSupprimer] = useState(false);
    const [showModalPartager, setshowModalPartager] = useState(false);
    const [cvsupprimer, setCvsupprimer] = useState();
    function statemodaltelecharger() {
        setshowModalTelecherger(!showModalTelecherger);
    }
    function statemodalsupprimer(idcv)  {
        setCvsupprimer(idcv)
        setshowModalSupprimer(!showModalSupprimer);
    }
    function statemodalPartager() {
        setshowModalPartager(!showModalPartager);
    }
    const [dataCv, setDataCv] = useState([]);
    // saving cv to localSorage
    // const myCV = JSON.stringify([cv])
    // localStorage.setItem("localCV",myCV);

    // downloading cv to PDF
    const getDataCv = async () => {
        const cvs = await axiosClient.get("/getcvuser");
        setDataCv(cvs.data);
    };
    useEffect(() => {
        getDataCv();
    }, []);
    useEffect(() => {
        console.log(dataCv);
    }, [dataCv]);

    return (
        <div className="  grid md:grid-cols-1 lg:grid-cols-2 w-5/6 mx-auto sm:grid-cols-1  gap-x-10 gap-y-14    ">
            {dataCv.map((cv) => (
                <div className=" bg-[#fbffff]  shadow-xl rounded-lg md:pb-10 sm:pb-5  pb-6 border-2 border-[#d4ebee] flex flex-row transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300  ">
                    {/*  <img src={perso.image} alt="Selected image" className="w-24 h-24 rounded-lg mr-5"/> */}

                    <div>
                        <div className=" bg-white rounded-lg p-8 text-sm">
                            {cv.infopersonnelle.map((infoPers) => (
                                <>
                                    <div className="flex">
                                        <div>
                                            <h1 className="text-3xl font-bold ">
                                                {infoPers.prenom} {infoPers.nom}
                                            </h1>
                                            <p>{infoPers.email}</p>
                                            <p>{infoPers.tele}</p>
                                        </div>
                                    </div>
                                    <p className="mt-5">{infoPers.profile}</p>
                                </>
                            ))}

                            <p className="text-xl font-bold mb-2 mt-6">
                                Skills
                            </p>

                            <ul className="list-disc list-inside">
                                {cv.competence?.map((e, i) => {
                                    return <li key={i}> {e.competence} </li>;
                                })}
                            </ul>

                            <h2 className="text-xl font-bold mb-2 mt-5">
                                Experience
                            </h2>

                            <div>
                                {cv.experiencepro?.map((e, i) => {
                                    return (
                                        <div className="mt-6" key={i}>
                                            <div className="mb-2 flex justify-between">
                                                <p className="text-lg font-bold">
                                                    {e.position}
                                                </p>
                                                <p className="text-md mb-1">
                                                    {e.dateDebut} - {e.dateFin}
                                                </p>
                                            </div>
                                            <p className="text-md font-semibold mb-1">
                                                {e.location}
                                            </p>
                                            <p className="list-disc list-inside">
                                                {e.description}{" "}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                            <h2 className="text-xl font-bold mb-2 mt-5">
                                Education
                            </h2>

                            {cv.education?.map((e, i) => {
                                return (
                                    <div key={i}>
                                        <div className="mb-2 flex justify-between">
                                            <p className="text-lg font-bold">
                                                {e.institution}
                                            </p>
                                            <p className="text-md mb-1">
                                                {e.dateDebut} - {e.dateFin}
                                            </p>
                                        </div>
                                        <p className="list-disc list-inside">
                                            {e.description}{" "}
                                        </p>
                                    </div>
                                );
                            })}

                            <h2 className="text-xl font-bold mb-2 mt-5">
                                Languages
                            </h2>

                            {cv.language?.map((e, i) => {
                                return (
                                    <p key={i}>
                                        {e.language} - {e.Level}
                                    </p>
                                );
                            })}
                        </div>
                        <div className="basis-3/6 grid grid-flow-row auto-rows-max content-center hover:auto-rows-min  ">
                            <h1 className="font-Montserrat ml-2  font-bold text-4xl mb-3 text-gray-700">
                                {" "}
                                {cv.nomcv}
                            </h1>
                            <h5 className="text-gray-400 text-1xl mb-5 ml-2 ">
                                {cv.updated_at}
                            </h5>
                            <div className="flex justify-start ml-2 ">
                                <img
                                    className=" w-6 h-6 md:w-10 md:h-auto ms:mt-1 mt-1 lg:-mt-2 -mr-3 mb-2"
                                    src="images/icons8-download-resume-50.png"
                                    alt=""
                                />
                                <button
                                    className="mb-2 ml-4 md:text-2xl sm:text-sm font-Montserrat text-gray-400/100"
                                    type="button"
                                    onClick={() => statemodaltelecharger()}
                                >
                                    Télécharger
                                </button>
                            </div>
                            <div className="flex justify-start ml-2">
                                <img
                                    src="images/icons/share.png"
                                    className=" w-7 mb-2 md:w-10 md:mb-3    "
                                />
                                <button
                                    className="mb-2 ml-4 md:text-2xl sm:text-sm font-Montserrat text-gray-400/100"
                                    type="button"
                                    onClick={() => statemodalPartager()}
                                >
                                    Partager
                                </button>
                            </div>
                            <div className="flex justify-start ml-2">
                                <img
                                    className="w-6 h-6 md:w-10 md:h-auto ms:mt-1 mt-1 lg:-mt-2 -mr-3 mb-2"
                                    src="images/icons8-pencil-50.png"
                                    alt=""
                                />
                                <a
                                    href="#"
                                    className=" mb-2 ml-4 md:text-2xl sm:text-sm font-Montserrat text-gray-400/100 "
                                >
                                    Modifier
                                </a>
                            </div>

                            <div className="flex justify-start ml-2">
                                <img
                                    className="w-6 h-6 md:w-10 md:h-auto ms:mt-1 mt-1  lg:-mt-1 lg:-ml-1   -mr-3 mb-2"
                                    src="images/icons8-trash-50.png"
                                    alt=""
                                />
                                <button
                                    className="mb-2 ml-4 md:text-2xl sm:text-sm font-Montserrat text-gray-400/100"
                                    type="button"
                                    onClick={() => statemodalsupprimer(cv.id)}
                                    
                                >
                                    Supprimer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            ))}
            {showModalTelecherger ? (
                <TelechargerModal showModalTelecherger={showModalTelecherger} />
            ) : null}
            {showModalSupprimer ? (
                  <SupprimerModal statemodalsupprimer={showModalSupprimer}  cvsupprimer={cvsupprimer}/> 
            ) : null}
            {showModalPartager ? (
                <Partager showModalPartager={showModalPartager} />
            ) : null}
        </div>
    );
}

export default CvProfile;
