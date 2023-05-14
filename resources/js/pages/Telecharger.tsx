import React,{useState} from 'react'
import MiniFooter from './components/MiniFooter'
import { Link } from 'react-router-dom'

import CreerCompteFrom from './components/CreerCompteForm'

export default function telecharger() {
   
  
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
                    <p className='flex-none text-xl align-middle hover:text-darkblue'>
                      <Link to='/profile'>
                      Mes CV
                      </Link>
                    </p>
                  </div>
              </div>
            </div>
        </nav>
        <section className='h-screen bg-verylightblue'>
          <h1 className='pt-10 text-4xl font-bold text-center text-slate-700 font-mont' >créer un compte pour obtenir votre CV</h1>
          <p className='px-2 pt-5 mx-auto text-center text-lg'>
            Téléchargements, partages et impressions illimités
          </p>

          <div className="flex items-center justify-center max-w-screen-md px-10 py-3 mt-12 bg-white shadow-xl rounded-2xl md:mx-auto 2xl:px-0 mx-7">
            <div className="my-10 md:w-8/12 lg:w-5/12">
              
            </div>
          </div>
        </section>


        
        <MiniFooter />
    </div>
  )
}
