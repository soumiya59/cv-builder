import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link, redirect } from "react-router-dom";
import axiosClient from "../../axiosClient";
import { useStateContext } from "../../context/ContextProvider";
export default function LogOutHeader() {
  const {setUser , setToken , logout} = useStateContext()
  const onLogout = ev => {
    ev.preventDefault()
      logout()
      redirect("/")
  }
  const [isOpen, setIsOpen] = useState(false);
  return (
      <nav>
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl">
          <div className="flex items-center h-16 mt-3">
              <Link to='/'>
              <img className="w-40" src="/images/logo.svg" alt="logo" />
              </Link>
              <div className="hidden ml-auto md:block">
                <div className="flex items-baseline justify-end ml-10 space-x-4 ">
            
                  <p className="inline-block h-10 pr-3 text-center no-underline md:pt-2 hover:text-indigo-800 hover:text-underline md:h-auto md:pr-7 font-semibold text-gray-600" >
                    <Link to="/profile">Mes cv</Link>
                  </p>
                  <p className="inline-block h-10 pr-3 text-center no-underline md:pt-2 hover:text-indigo-800 hover:text-underline md:h-auto md:pr-7 font-semibold text-gray-600" >
                    <Link to='/monCompte'> Mon Compte </Link>
                  </p>
                  <form onSubmit={onLogout} >
              <button type='submit' className="p-3 text-white rounded-3xl bg-darkpink hover:opacity-90">
              
                <span className="flex-1 ml-3 whitespace-nowrap">déconnecter</span>
              </button></form>
                 
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
                > Mes CV </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-black rounded-md hover:bg-mediumblue hover:text-white"
                > Mon Compte </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
  );
}



