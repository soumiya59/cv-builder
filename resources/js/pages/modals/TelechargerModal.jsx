import React from 'react'

export default function TelechargerModal(showModalTelecherger) {
  const [close, setClose] = React.useState(showModalTelecherger);
  function stateModal() { setClose(!close) }
  return (
    <>

      {close ? (
        <>
          <div className="flex flex-col items-center justify-center px-4  mx-auto md:h-screen lg:py-0 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
            <div className="w-full bg-white rounded-lg shadow border  md:mt-0 md:w-2/6 sm:w-3/6 xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                <div className="relative">
                  <button
                    className="bg-white rounded-md p-2 absolute top-0 right-0   text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    type="button"
                    onClick={() => stateModal()}>
                    <span className="sr-only">Close menu</span>
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Télécharger
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label for="email" class=" md:text-1xl mb-5 sm:text-sm font-Montserrat text-gray-400/100 ">Choisr Format de CV</label>
                    <div className="  mt-2">
                      <select className="form-select appearance-none block  w-full px-3 py-1.5 text-base font-normal text-gray-700
                                    bg-white bg-clip-padding bg-no-repeat  border border-solid border-gray-30  rounded transition  ease-in-out  m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                        <option selected>Format</option>
                        <option value="1">PDF</option>
                        <option value="2">IMAGE</option>
                        <option value="3">DOCX</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 bg-sky-700 focus:ring-sky-800">Télécharger</button>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
