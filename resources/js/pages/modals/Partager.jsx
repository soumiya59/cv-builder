import React from 'react'

export default function Partager(showModalPartager) {
  const [close, setClose] = React.useState(showModalPartager);
  function stateModal(){ setClose(!close)}
  return (
    <div>
        {close?
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
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                       </svg>
                     </button>
                     </div>
                 <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-700 md:text-2xl">
                 Partager via Linkdin
                 </h1>
                 <form className="space-y-4  md:space-y-6" action="#">
                            <input type="url" name="link" placeholder="URL: /linkdin" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "required=""/>
                             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-700 md:text-2xl">
                             Partager via QR
                            </h1>
                            <div className="flex flex-col justify-center items-center">
                              <img src="images/icons/unnamed.jpg" alt="icon QR"  className='w-3/6 '  />
                            </div>
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-700 md:text-2xl">
                             Partager avec Nous
                            </h1>
                          <button className="inline-flex items-center h-12 justify-center  px-4 py-2 w-full bg-sky-700 focus:ring-sky-800 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
                            <svg fill="none" className="  text-sky-300 w-8  h-9"  stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"></path>
                          </svg>
                          <span className='text-xl  leading-tight tracking-tight md:text-1xl ml-2'>Partager</span>
                          </button>
                 </form>
            </div>
        </div>
      </div>
             <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>:null} 
    </div>
  )
}
