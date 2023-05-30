import React from 'react'

export default function SupprimerModal(statemodalsupprimer) {
  const [close, setClose] = React.useState(statemodalsupprimer);
  function stateModal() { setClose(!close) }
  return (
    <>

      {close ? (
        <>
          <div className="flex flex-col items-center justify-center px-4 py-4 mx-auto md:h-screen lg:py-0 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
            <div className="w-full bg-white rounded-lg shadow border  md:mt-0 md:w-2/6 sm:w-3/6 xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                <div className="relative">

                </div>
                <div className="text-center p-5 flex-auto justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 flex items-center text-red-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-xl font-bold py-4 ">Êtes-vous sûr?</h3>
                  <p className="text-xl text-gray-500 px-8">Voulez-vous vraiment supprimer votre CV?
                    Ce processus ne peut pas être annulé</p>
                </div>
                <div className="p-3  mt-2 text-center space-x-4 md:block">
                  <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100" onClick={() => stateModal()}>
                    annulé
                  </button>
                  <button className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">supprimer</button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
