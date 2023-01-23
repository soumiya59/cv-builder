const Profile = () => {
    const Cvs=[{
                edition :'Dérnier édition : 16/01/2023 ',
            },
            {
                edition :'Dérnier édition : 16/01/2023 ',  
            }]
    return (
        <div className="container mx-auto  bg-white mb-10 pb-10" >
            <h1 className=' text-3xl font-Montserrat font-bold  leading-none tracking-tight pt-10 pb-20  text-gray-900 text-center md:text-4xl sm:text-4xl lg:text-5xl'>Mes CV</h1>
            <div className='  grid md:grid-cols-1 lg:grid-cols-2 w-5/6 mx-auto sm:grid-cols-1  gap-x-10 gap-y-14    '>
            {Cvs.map(cv=>
                <div className=' bg-[#fbffff]  shadow-xl rounded-lg md:pb-10 sm:pb-5  pb-6 border-2 border-[#d4ebee] flex flex-row transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '>
                        <div className='basis-3/6  sm:px-2 md:p-x-2'>
                            <img className=' sm:-mt-10 -mt-7 border-4 rounded-lg  border-[#cceef4] ' src="images/cv-templates-resumelab_cubic@3x.png" alt="" />
                        </div>
                        <div className='basis-3/6 grid grid-flow-row auto-rows-max content-center hover:auto-rows-min  '>
                            <h1 className='font-Montserrat ml-2  font-bold text-4xl mb-3 text-gray-700'> _ _</h1>
                            <h5 className='text-gray-400 text-1xl mb-5 ml-2 '>{cv.edition} </h5>
                            <div className='flex justify-start ml-2 '>
                                <img className=' w-6 h-6 md:w-10 md:h-auto ms:mt-1 mt-1 lg:-mt-2 -mr-3 mb-2' src="images/icons8-download-resume-50.png" alt="" /><a className=' mb-2 ml-4 md:text-2xl sm:text-sm font-Montserrat text-gray-400/100' >Télécharger</a>
                            </div>
                            <div className='flex justify-start ml-2'>
                                <img className='w-6 h-6 md:w-10 md:h-auto ms:mt-1 mt-1 lg:-mt-2 -mr-3 mb-2' src="images/icons8-pencil-50.png" alt="" /><a className=' mb-2 ml-4 md:text-2xl sm:text-sm font-Montserrat text-gray-400/100 ' >Modifier</a>
                            </div>
                           
                            <div className='flex justify-start ml-2'>
                                <img className='w-6 h-6 md:w-10 md:h-auto ms:mt-1 mt-1  lg:-mt-1 lg:-ml-1   -mr-3 mb-2' src="images/icons8-trash-50.png" alt="" /><a className=' mb-2 ml-4 md:text-2xl sm:text-sm font-Montserrat text-gray-400/100' >Supprimer</a>
                            </div>
                        </div>
                </div>
                )} 
            </div> 
            <div class="grid place-items-center mt-20">
            <button id="btn-creastion" className="pb-7    text-center   h-12  w-72 text-white rounded-3xl bg-darkpink hover:opacity-90">
                    <p className="font-Montserrat   text-3xl">créer nouveau cv</p>
            </button>
</div>
            
        </div>
       
    );
}

export default Profile;
