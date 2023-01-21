import React from 'react'
import Carousel from './Carousel'

export default function Modeles() {
  return (
    <div className='text-slate-700'  style={{fontFamily:'Montserrat ,sans-serif' }}>
        <nav className='px-4 pb-3 mx-auto mt-3 max-w-7xl sm:px-6 lg:px-8 '>
            <img src="images/logo.png" alt="" className='w-40' />
            <div className='hidden float-right md:block bg-slate-200'>
              <div className='flex -mt-10' >
                  <div className='flex items-center'>
                    <img src="images/m1.png" alt=""  className='w-3/12 '/>
                    <p className='ml-1 font-semibold'>Modèles</p>
                  </div>
                  <div className='flex items-center mx-4'>
                    <img src="images/m2.png" alt="" className='w-3/12'/>
                    <p className='ml-1'>Information</p>
                  </div>
                  <div className='flex items-center '>
                    <img src="images/m3.png" alt="" className='w-3/12'/>
                    <p className='ml-1'>Télécharger</p>
                  </div>
              </div>
            </div>
        </nav>
        <section className='h-screen bg-verylightblue'>
          <h1 className='pt-10 text-4xl font-bold text-center text-slate-700 font-mont' >Choisissez le modèle</h1>
          <p className='flex max-w-lg px-1 pt-5 mx-auto text-center'>Les modèles de CV suivants ont été spécialement conçus pour faire la meilleure impression dans votre recherche d'emploi.</p>

          <div className="px-10 py-3 2xl:mx-auto 2xl:px-0">
            <Carousel />
          </div>
        </section>
    </div>
  )
}
