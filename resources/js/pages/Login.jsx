import React, { useEffect, useState } from "react";
import axiosClient from "../axiosClient";
import { useStateContext } from "../context/ContextProvider";
import { useNavigate } from "react-router";
export default function SeConnecter(showModal) {

  const [close, setClose] = useState(showModal);
  const navigate=useNavigate()
  function stateModal() {
    setClose(!close)
    navigate('/')
  }
  const [showModalsinscrire, setshowModalsinscrire] = useState(false);
  function statemodalsinscrire(){ setshowModalsinscrire(!showModalsinscrire)
  setClose(false)

  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { setUser, setToken } = useStateContext()

  const submitForm = (event) => {
    event.preventDefault()
    console.log(email)
    const payload = {
      email: email,
      password: password,
    }
    axiosClient.post('/login', payload)
      .then(({ data }) => {
        setUser(data.user)
        setToken(data.token)
       
      }).catch((error) => {

        const response = error.response;
        if (response && response.status === 422) {
          console.log(response.data.errors);
        }
      })
  }

  return (
    <>

      
        <>
          <div className="flex flex-col items-center justify-center px-4 py-4 mx-auto md:h-screen lg:py-0 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
         
      <div className="w-full bg-white rounded-lg shadow border  md:mt-0 md:w-2/6 sm:w-3/6 xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
          <div className="relative">
     
                  <button
                    className="bg-white rounded-md p-2 absolute top-0 right-0   text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    type="button"
                    onClick={()=>{stateModal()}}
                  >
                    
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                </div>
                <h1 className="text-xl font-bold leading-tight tracking-tight italic underline text-gray-900 md:text-2xl">
                  se connecter
                </h1>
                <p className="font-light">Veuillez saisir votre adresse email et votre mot de passe pour vous connecter</p>
                <form className="space-y-4 md:space-y-6" action="#"
                       onSubmit={submitForm}
                >
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Votre email</label>
                    <input type="email"  onChange={(e) => setEmail(e.target.value)} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Email" required="" />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Votre Mot de passe</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                  </div>

                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 bg-sky-700 focus:ring-sky-800">S'identifier</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Vous n'avez pas encore de compte?  <button className="font-medium text-sky-600 hover:underline dark:text-primary-500" onClick={() => statemodalsinscrire()}>S'inscrire</button>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
     
    </>
  );
}





