import React from "react";
import Formulaire from "./comp/Form";
import Preview from"./comp/Preview";
import { Provider } from 'react-redux'
import {store} from './store'
import { Link } from "react-router-dom";
export default function Editeur(){
    const styles = {
     fieldStyle: "bg-gray-100 rounded-xl pl-3 text-md py-3 focus:ring-0 focus:outline-none focus:outline-0 focus:bg-blue-50 w-full",
     txt :"border-2 rounded-2xl text-lg p-2 col-span-2 focus:ring-0 focus:outline-none focus:outline-0 pl-3 w-full"
    }
    return (
      <Provider store={store}>
        {/* header */}
        <header className="fixed overflow-auto w-screen bg-white border-1">
        <nav className='px-4 mx-auto my-3 max-w-7xl sm:px-6 lg:px-8 '>
            <Link to="/" className=' bg-slate-600'>
                <img src="images/logo.svg" alt="" className='w-32 ' />
            </Link>
            <div className='hidden text-center md:block '>
              <div className='flex -mt-9 text-gray-500' >
                  <div className='flex justify-center grow'>
                    <div className='flex items-center pl-12'>
                        <img src="images/t1.png" alt=""  className='w-3/12 '/>
                        <p className='ml-1'>Modèles</p>
                    </div>
                    <div className='flex items-center mx-4'>
                        <img src="images/F2.png" alt="" className='w-3/12 h-7 p-0.5'/>
                        <p className='ml-1 font-semibold'>Information</p>
                    </div>
                    <div className='flex items-center '>
                        <img src="images/m3.png" alt="" className='w-3/12 p-1'/>
                        <p className='ml-1 '>Télécharger</p>
                    </div>
                  </div>
                  <div>
                    <p className='flex-none text-xl align-middle hover:text-darkblue mt-2 text-gray-500'>
                      <Link to='/profile'>
                      Mes CV
                      </Link>
                    </p>
                  </div>
              </div>
            </div>
        </nav>
        </header>
        
        {/* editeur */}
        <div className="flex">
          <div className=" w-screen mt-16 ">
          <Formulaire styles={styles}/>
          </div>
          <div className="w-1/2 fixed overflow-auto bg-blue-50 h-screen top-16 right-0 border-blue-50 ">
              <Preview />
          </div>
        </div>
      </Provider>
    )
}



