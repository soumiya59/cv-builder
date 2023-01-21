import React from 'react'

export default function Modeles() {
  return (
    <div>
        <nav className='px-4 mx-auto mt-3 max-w-7xl sm:px-6 lg:px-8'>
            <img src="images/logo.png" alt="" className='w-40' />
            <div className='hidden float-right md:block bg-slate-200'>
              <div className='flex -mt-10' >
                  <div className='flex items-center'>
                    <img src="images/m1.png" alt=""  className='w-3/12 '/>
                    <p className='ml-2'>Modèles</p>
                  </div>
                  <div className='flex items-center mx-4'>
                    <img src="images/m2.png" alt="" className='w-3/12'/>
                    <p className='ml-2'>Information</p>
                  </div>
                  <div className='flex items-center '>
                    <img src="images/m3.png" alt="" className='w-3/12'/>
                    <p className='ml-2'>Télécharger</p>
                  </div>
              </div>
            </div>
        </nav>
    </div>
  )
}
