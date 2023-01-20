import React from 'react'

export default function Modeles() {
  return (
    <div>
        <nav className='flex px-4 mx-auto mt-3 max-w-7xl sm:px-6 lg:px-8'>
            <img src="images/logo.png" alt="" className='w-40' />
            <div className='flex justify-around mx-auto ' >
                <div className='flex items-center'>
                  <img src="images/m1.png" alt=""  className='w-3/6 '/>
                  <p className='ml-2'>Modèles</p>
                </div>
                <div className='flex items-center mx-4'>
                  <img src="images/m2.png" alt="" className='w-2/4'/>
                  <p className='ml-2'>Information</p>
                </div>
                <div className='flex items-center '>
                  <img src="images/m3.png" alt="" className='w-2/4'/>
                  <p className='ml-2'>Télécharger</p>
                </div>
            </div>
        </nav>
    </div>
  )
}
