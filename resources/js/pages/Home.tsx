import React from 'react'
import '../../css/homeAnimation.css'
import tw from 'twin.macro'
const IMG = tw.img`
xl:w-2/12 lg:w-1/5 w-1/4  mx-auto justify-around h-44 md:h-60 xl:h-64
`
const STEPS = tw.div`
flex flex-wrap container mx-auto mt-14 px-3
`
export default function Home() {
  return (
<div className="leading-normal tracking-normal text-gray-900" style={{fontFamily: 'Source Sans Pro, sans-serif'}}>

    <div className="h-screen bg-right bg-cover pb-14" style={{backgroundImage:"url('images/Background(4).svg')"}}>
    {/* nav */}
	<div className="container w-full p-6 mx-auto">
		<div className="flex items-center justify-between w-full">
			<a className="flex items-center text-2xl font-bold text-indigo-400 no-underline hover:no-underline lg:text-4xl"  href="#"> 
                <img src="images/logo.svg" className='w-40' alt="" />
            </a>
			<div className="flex content-center justify-end w-1/2">		
				<a className="inline-block h-10 pr-3 text-center no-underline md:pt-2 hover:text-indigo-800 hover:text-underline md:h-auto" href="#">
                Mes cv
				</a>
				<a className="inline-block h-10 pr-3 text-center no-underline md:pt-2 hover:text-indigo-800 hover:text-underline md:h-auto" href="#">
                Mon profile
				</a>
                <button className="inline-block px-4 py-2 text-white rounded-full bg-darkpink hover:opacity-90 ">
                Connexion
                </button>
			</div>
		</div>
	</div>

    {/* main */}
	<div className="container flex flex-col flex-wrap items-center px-6 mx-auto md:flex-row">
        {/* left col */}
		<div className="flex flex-col justify-center w-full mt-5 overflow-y-hidden xl:w-2/5 lg:items-start xl:mt-0 md:pl-2.5 ">
			<h1 className="mb-4 text-3xl font-bold leading-tight text-center md:text-5xl md:text-left slide-in-bottom-h1">CONSTRUCTEUR EN LIGNE FACILE</h1>
			<p className="mb-8 text-2xl leading-normal text-center md:text-left slide-in-bottom-subtitle">Utilisation gratuite, rapide et efficace.</p>
		
			<div className="flex justify-center w-full pb-5 md:justify-start lg:pb-0 fade-in ">
                  <button className="px-5 py-3 text-2xl text-white transition duration-300 ease-in-out delay-140 rounded-3xl bg-darkpink hover:opacity-90 hover:-translate-y-1 hover:bg-lightpink hover:scale-110">
                    créer votre cv 
                  </button>
			</div>
		</div>
        {/* right col */}
		<div className="w-full py-6 overflow-y-hidden xl:w-3/5 xl:mt-2">
			<img className="w-4/6 mx-auto lg:mr-0 slide-in-bottom" src="images/banner.png" />
		</div>
	</div>
    <div className='h-full '>
        <h1 className='px-3 mt-8 text-2xl text-center md:mt-10 md:text-3xl'>4 ÉTAPES FACILES POUR CRÉER VOTRE CV </h1>
        <STEPS className=''>
            <IMG src="images/home/step1.png" alt="" className=''/>
            <IMG src="images/home/step2.png" alt="" className=''/>
            <IMG src="images/home/step3.png" alt="" className=''/>
            <IMG src="images/home/step4.png" alt="" className=''/>
        </STEPS>
        <div className='container flex justify-around px-3 mx-auto mt-5 text-lg text-center xl:text-xl'>
            <p className='-mr-10'>Choisir un modéle.</p>
            <p className='pl-16 sm:pl-28 '>Remplir votre CV.</p>
            <p className='md:pl-5'>Personnalisez le modéle</p>
            <p className=''>Télécharger votre CV.</p>
        </div>
    </div>
</div>
</div>

  )
}
