import React, { useState, useRef } from "react";
import axiosClient from "../../axiosClient";
import SeConnecter from "./SeConnecte";
import { useStateContext } from "../../context/ContextProvider";
export default function Modal({ setShowModal, showModal }) {
  const [showModalSeconnecter, setshowModalSeconnecter] = React.useState(false);
  const showSeconnecterModal = () => {
    setshowModalSeconnecter(!showModalSeconnecter)
  }
  function identifier() {
    setshowModalSeconnecter(!showModalSeconnecter)
  }
  const nomRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [errors, setErrors] = useState(null)
  const { setUser, setToken, notification } = useStateContext()

  const submitForm = (event) => {
    event.preventDefault()

    const payload = {
      name: nomRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      passeword_confirmation: passwordConfirmRef.current.value
    }

    axiosClient.post('/signup', payload)
      .then(({ data }) => {
        setUser(data.user)
        setToken(data.token)
        setShowModal(!showModal)

      }).catch((error) => {
        const response = error.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
          console.log(response.data.errors)
        }
      })

  }


  return (
    <>
      {showModalSeconnecter ? '' :
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
                    onClick={() => setShowModal(!showModal)}
                  > <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none -mr-5"> X </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-6 flex-auto">
                  <p className="text-slate-500 text-lg leading-relaxed mb-8 mt-3 text"> Créez un compte GRATUIT pour télécharger votre CV </p>
                </div>
                <form onSubmit={submitForm}>

                  <div className="mb-6">
                    {errors && <div className="ms-0  "><p className="text-lg text-red-500 ">{errors?.name[0]}</p></div>}
                    <input
                      ref={nomRef}
                      type="text"
                      className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="name"
                    />
                  </div>
                  <div className="mb-6">
                    {errors && <div className="ms-0  "><p className="text-lg text-red-500 ">{errors?.email[0]}</p></div>}
                    <input
                      ref={emailRef}
                      type="text"
                      className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="login"
                    />
                  </div>
                  <div className="mb-6">
                    {errors && <div className="ms-0  "><p className="text-lg text-red-500 ">{errors?.password[0]}</p></div>}
                    <input
                      ref={passwordRef}
                      type="password"
                      className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Mot de Passe"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      ref={passwordConfirmRef}
                      type="password"
                      className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="confirmer le mot de pass"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-block w-full py-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out rounded shadow-md px-7 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-darkpink "
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  > S'inscrire </button>
                  <div
                    className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                  > <p className="mx-4 mb-0 font-semibold text-center">OR</p> </div>
                  <a
                    className="flex items-center justify-center w-full py-3 mb-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out rounded shadow-md px-7 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg "
                    style={{ backgroundColor: '#3b5998' }}
                    href="#!"
                    role="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-3.5 h-3.5 mr-2" > <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>Continue with Facebook </a>
                  <a
                    className="flex items-center justify-center w-full py-3 text-sm font-medium leading-snug uppercase transition duration-150 ease-in-out rounded shadow-md px-7 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg "
                    href="#!"
                    role="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  > <img src={"https://img.icons8.com/fluency/48/null/google-logo.png"} className='w-4.5 h-4 mr-2' /> Continue with Google </a>
                </form>
                <p className='my-5 text-slate-500 text-lg leading-relaxed mb-5'>Vous avez déjà un compte?
                  <button className='text-darkblue' onClick={identifier}>
                    s'identifier
                  </button>
                </p>
              </div>
            </div>
          </div>
        </>
      }
      {showModalSeconnecter && <SeConnecter showModal={showSeconnecterModal} />}
    </>

  );
}
