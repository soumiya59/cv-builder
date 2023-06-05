import LogOutHeader from './components/LogOutHeader'
import MiniFooter from "./components/MiniFooter";

import { Link, Navigate } from "react-router-dom";
import CvProfile from "./CvProfile";
import React, { useEffect, useState } from 'react'
import '../../css/homeAnimation.css'
import tw from 'twin.macro'
import i18n from './i18n'
import { useTranslation } from 'react-i18next'
import axiosClient from '../axiosClient'
import { useStateContext } from "../context/ContextProvider";
import CreerCompte from './modals/CreerCompte'
import { Transition } from "@headlessui/react";
function Profile() {
    

    const { token, logout } = useStateContext()
    if (!token) {
        return <Navigate to={"/login"} />
    }
    const Cvs = [{
        edition: 'Dérnier édition : 16/01/2023 ',
    },
    {
        edition: 'Dérnier édition : 16/01/2023 ',
    }]

  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] =  useState(i18n.language);
  const [user, setUser] = useState({})

  useEffect(() => {
    axiosClient.get(`/user`)
      .then(({ data }) => {
        setUser(data)
      })
    }, [])
    
    const handleChangeLanguage = (e) => {
      e.preventDefault();
        i18n.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
        setSelectedLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
      
    };
  const onLogout = (ev) => {
    ev.preventDefault()
    logout()
  }

  const [showModalSeconnecter, setshowModalSeconnecter] = useState(false);
  function statemodaltelecharger() { setshowModalSeconnecter(!showModalSeconnecter) }

  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* <LogOutHeader /> */}
        {/* nav */}
        <nav>
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl">
            <div className="flex items-center h-16 pt-3">
              <Link to='/'>
                <img className="w-40" src="images/logo.svg" alt="logo" />
              </Link>
              <div className="hidden ml-auto md:block">
            
                <div className="flex items-baseline justify-end space-x-4 text-base">
              <div className="w-40">
             </div>
                  <p className="inline-block h-10 pr-3 text-center no-underline md:pt-2 hover:text-indigo-800 hover:text-underline md:h-auto md:pr-7 font-semibold text-gray-600" >
                    {token && <Link to="/profile">{t("Mes cv")}</Link>}
                  </p>
                  <p className="inline-block h-10 pr-3 text-center no-underline md:pt-2 hover:text-indigo-800 hover:text-underline md:h-auto md:pr-7 font-semibold text-gray-600" >
                    {token && <Link to={`/monCompte/${user.id}`}> {t("Mon Compte")}  </Link>}
                  </p>
                  {!token ?
                    <button className="inline-block px-4 py-2 text-white rounded-full bg-darkpink hover:opacity-90 " onClick={() => setShowModal(true)} > {t("Connexion")}  </button>
                    : <form onSubmit={onLogout}> <button onClick={onLogout} className="inline-block px-4 py-2 text-white rounded-full bg-darkpink hover:opacity-90 "  > {t("Connexion")} </button></form>}
                  <div>
                    {showModal && <CreerCompte showModal={showModal} setShowModal={setShowModal} />}
                  </div>
                </div>
              </div>
              <div className="flex justify-end flex-auto -mr-2 md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="flex items-center p-2 ml-auto text-white rounded-md bg-darkblue hover:opacity-80"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                  <a
                    href="#"
                    className="block px-3 py-2 text-base font-medium text-black rounded-md hover:bg-mediumblue hover:text-white"
                  > {t("Mes CV ")}  
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 text-base font-medium text-black rounded-md hover:bg-mediumblue hover:text-white"
                  >{t("Mon Compte")}   </a>
                </div>
              </div>
            )}
          </Transition>
        </nav>
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
