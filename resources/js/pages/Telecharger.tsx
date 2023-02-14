import React,{useState} from 'react'
import MiniFooter from './components/MiniFooter'
import { Link } from 'react-router-dom'
import SeConnecter from './modals/SeConnecte'
export default function Modeles() {
    const [showModalSeconnecter, setshowModalSeconnecter] = useState(false);
    function statemodaltelecharger(){ setshowModalSeconnecter(!showModalSeconnecter)}
  return (
    <div className='text-slate-700'  style={{fontFamily:'Montserrat ,sans-serif' }}>
        <nav className='px-4 mx-auto my-3 max-w-7xl sm:px-6 lg:px-8'>
            <Link to="/" className=' bg-slate-600'>
                <img src="images/logo.svg" alt="" className='w-40 ' />
            </Link>
            <div className='hidden text-center md:block '>
              <div className='flex -mt-10' >
                  <div className='flex justify-center grow'>
                    <div className='flex items-center pl-12'>
                        <img src="images/t1.png" alt=""  className='w-4/12 '/>
                        <p className='ml-1'>Modèles</p>
                    </div>
                    <div className='flex items-center mx-4'>
                        <img src="images/m2.png" alt="" className='w-3/12'/>
                        <p className='ml-1'>Information</p>
                    </div>
                    <div className='flex items-center '>
                        <img src="images/t3.png" alt="" className='w-3/12'/>
                        <p className='ml-1 font-semibold'>Télécharger</p>
                    </div>
                  </div>
                  <div>
                    <a href="#" className='flex-none text-xl align-middle hover:text-darkblue'>Mes CV</a>
                  </div>
              </div>
            </div>
        </nav>
        <section className='h-screen bg-verylightblue'>
          <h1 className='pt-10 text-4xl font-bold text-center text-slate-700 font-mont' >créer un compte pour obtenir votre CV</h1>
          <p className='px-2 pt-5 mx-auto text-center'>
            Téléchargements, partages et impressions illimités
          </p>

          <div className="flex items-center justify-center max-w-screen-md px-10 py-3 mt-12 bg-white shadow-xl rounded-2xl md:mx-auto 2xl:px-0 mx-7">
            <div className="my-10 md:w-8/12 lg:w-5/12">
            <form>
            <div className="mb-6">
                <input
                type="text"
                className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email address"
                />
            </div>
    
            <div className="mb-6">
                <input
                type="password"
                className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Mot de Passe"
                />
            </div>
            
            <button
                type="submit"
                className="inline-block w-full py-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out rounded shadow-md px-7 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-darkpink "
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
            >
                S'inscrire
            </button>
    
            <div
                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
            >
                <p className="mx-4 mb-0 font-semibold text-center">OR</p>
            </div>
    
            <a
                className="flex items-center justify-center w-full py-3 mb-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out rounded shadow-md px-7 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg "
                style={{backgroundColor:'#3b5998'  }}
                href="#!"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="w-3.5 h-3.5 mr-2"
                >
                <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                /></svg>Continue with Facebook
            </a>
            <a
                className="flex items-center justify-center w-full py-3 text-sm font-medium leading-snug uppercase transition duration-150 ease-in-out rounded shadow-md px-7 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg "
                href="#!"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
            >
            <img src="https://img.icons8.com/fluency/48/null/google-logo.png" className='w-4.5 h-4 mr-2'/> 
            Continue with Google
            </a>
            </form>
            <button className='mt-5 text-center' onClick={()=>statemodaltelecharger()}>Vous avez déjà un compte? <span className=' text-darkblue'>s'identifier</span> </button>
            </div>
          </div>
        </section>
        <MiniFooter />
        {showModalSeconnecter?<SeConnecter showModal={showModalSeconnecter}/>:null}
    </div>
  )
}
