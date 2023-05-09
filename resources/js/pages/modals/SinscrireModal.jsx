import React , {useRef} from "react";
import axiosClient from "../../axiosClient";
import { useStateContext } from "../../context/ContextProvider";
export default function SinscrireModal(showModalsinscrire) {
    const [closesinsctire, setCclosesinsctire] = React.useState(showModalsinscrire);
    function stateModal(){ setCclosesinsctire(!closesinsctire)}
    
  const nomRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  
  const { setUser, setToken } = useStateContext()

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
      }).catch((error) => {
        const response = error.response;
        if (response && response.status === 422) {
          console.log(response.data.errors);
        }
      })

  }

  return (
    <>
      
      {closesinsctire ? (
        <>
          <div className="flex flex-col items-center justify-center px-4 py-4 mx-auto md:h-screen lg:py-0 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
         
      <div className="w-full bg-white rounded-lg shadow border  md:mt-0 md:w-2/6 sm:w-3/6 xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
          <div className="relative">
                  <button
                    className="bg-white rounded-md p-2 absolute top-0 right-0   text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    type="button"
                    onClick={()=>stateModal()}>
                    <span className="sr-only">Close menu</span>
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                 
                  </div>
              <h1 className="text-xl font-bold leading-tight tracking-tight italic underline text-gray-900 md:text-2xl">
              S'inscrire
              </h1>
              <p className="font-light">Créez un compte GRATUIT pour télécharger votre documents</p>
              <form onSubmit={submitForm} className="space-y-4 md:space-y-6" action="#">
              <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Votre email</label>
                      <input type="name" name="name" ref={nomRef} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "placeholder="Email" required=""/>
                  </div>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Votre email</label>
                      <input type="email" name="email" ref={emailRef} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "placeholder="Email" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Votre Mot de passe</label>
                      <input type="password" name="password" ref={passwordRef} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Votre Mot de passe</label>
                      <input type="password" name="passwordConfirme" ref={passwordConfirmRef} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "required=""/>
                  </div>
                  
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 bg-sky-700 focus:ring-sky-800">S'identifier</button>
                
              </form>
          </div>
        </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
       
    </>
  );
}





