import React,{useState} from 'react'
import '../../css/homeAnimation.css'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'
import Carousel from './components/Carousel'
import Statistic from './components/Statistic'
import Footer from './components/Footer'
import SeConnecter from './modals/SeConnecte'

const IMG = tw.img` xl:w-2/12 lg:w-1/5 w-1/4  mx-auto justify-around h-44 md:h-60 xl:h-64 rounded-2xl `
const STEPS = tw.div` flex flex-wrap container mx-auto mt-14 px-3 `
const CONTAINER = tw.div`text-center mx-auto px-5 md:px-0`
const TITLE = tw.h1` px-3 py-5 mt-16 md:mt-20 xl:text-4xl md:text-3xl text-2xl mb-10 `
const SOUSTITRE = tw.h1` text-lg md:text-2xl font-semibold `
const DESCRIPTION = tw.h1` text-sm md:text-xl font-light `
const CARD = tw.div`flex items-center`
const ICON = tw.img` max-h-32  md:pr-5`

export default function Home() {
const [showModalSeconnecter, setshowModalSeconnecter] = useState(false);
function statemodaltelecharger(){ setshowModalSeconnecter(!showModalSeconnecter)}
return (
<div className="leading-normal tracking-normal text-gray-900" style={{fontFamily: 'Source Sans Pro, sans-serif'}}>
    <div className="h-screen bg-right bg-cover pb-14" style={{backgroundImage:"url('images/Background(4).svg')"}}>
    {/* nav */}
	<div className="container w-full p-6 mx-auto">
		<div className="flex items-center justify-between w-full">
			<Link to="/" className="flex items-center "  > 
                <img src="images/logo.svg" className='w-40' alt="" />
            </Link>
			<div className="flex content-center justify-end w-1/2">		
				<p className="inline-block h-10 pr-3 text-center no-underline md:pt-2 hover:text-indigo-800 hover:text-underline md:h-auto md:pr-7 font-semibold text-gray-600" >
                    <Link to="/profile">Mes cv</Link>
				</p>
				<p className="inline-block h-10 pr-3 text-center no-underline md:pt-2 hover:text-indigo-800 hover:text-underline md:h-auto md:pr-7 font-semibold text-gray-600" >
                    <Link to='/monCompte'> Mon Compte </Link>
				</p>
                <button  className="inline-block px-4 py-2 text-white rounded-full bg-darkpink hover:opacity-90 " onClick={()=>statemodaltelecharger()} > Connexion</button>
                {/* Modal se connecter */}
                {showModalSeconnecter?<SeConnecter showModal={showModalSeconnecter}/>:null}
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
                  <p className="px-5 py-3 text-2xl text-white transition duration-300 ease-in-out delay-75 rounded-3xl bg-darkpink hover:opacity-90 hover:-translate-y-1 hover:scale-110 ">
                    <Link to="/modeles"> cr??er votre cv </Link>
                  </p>
			</div>
		</div>
        {/* right col */}
		<div className="w-full py-6 overflow-y-hidden xl:w-3/5 xl:mt-2">
			<img className="w-4/6 mx-auto lg:mr-0 slide-in-bottom" src="images/home/banner.png" />
		</div>
	</div>

    {/* steps */}
    <CONTAINER>
        <TITLE>4 ??TAPES FACILES POUR CR??ER VOTRE CV </TITLE>
        <STEPS className=''>
            <IMG src="images/home/step1.png" alt="" className=''/>
            <IMG src="images/home/step2.png" alt="" className=''/>
            <IMG src="images/home/step3.png" alt="" className=''/>
            <IMG src="images/home/step4.png" alt="" className=''/>
        </STEPS>
        <div className='container flex justify-around px-3 mx-auto my-5 mb-15 text-lg text-center xl:text-xl'>
            <p className='-mr-10'>Choisir un mod??le.</p>
            <p className='pl-16 sm:pl-28 '>Remplir votre CV.</p>
            <p className='md:pl-5'>Personnalisez le mod??le</p>
            <p className=''>T??l??charger votre CV.</p>
        </div>
    </CONTAINER>

    {/* modeles de cv */}
    <CONTAINER>
        <TITLE>MOD??LES DE CV PROFESSIONNELS</TITLE>
        <Carousel/>
    </CONTAINER>

    {/* poourquoi novoCV */}
    <CONTAINER>
        <TITLE>Pourquoi utiliser le g??n??rateur de cv novocv?</TITLE>
        <div className='grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-4  container mx-auto px-3 md:gap-9'>
          <CARD>
            <ICON src="/images/icons/fees.png"  alt="" />
            <div>
                <SOUSTITRE>Pas de frais cach??s</SOUSTITRE>
                <DESCRIPTION>Avec Novor??sum??, vous ne passerez pas des heures ?? travailler sur votre CV, juste pour ??tre frapp?? par un paywall cach??.</DESCRIPTION>
            </div>
          </CARD>
          <CARD>
            <ICON src="/images/icons/edit.png" alt="" className=''/>
            <div>
                <SOUSTITRE>Modifiez votre CV en temps r??el</SOUSTITRE>
                <DESCRIPTION>Lorsque vous modifiez votre CV avec notre constructeur, vous verrez imm??diatement les modifications appliqu??es ?? votre document.</DESCRIPTION>
            </div>
          </CARD>
          <CARD>
            <ICON src="/images/icons/feedback2.png" alt="" />
            <div>
                <SOUSTITRE>Avoir un retour</SOUSTITRE>
                <DESCRIPTION>Obtenez une r??vision de CV gratuite de la part de nos partenaires ou envoyez-la ?? vos amis pour obtenir des commentaires.</DESCRIPTION>
            </div>
          </CARD>
          <CARD>
            <ICON src="/images/icons/protect.png" alt="" />
            <div>
                <SOUSTITRE>Contr??le des donn??es et de la confidentialit??</SOUSTITRE>
                <DESCRIPTION>Nous ne partageons vos informations avec personne (sauf si vous nous le demandez explicitement)</DESCRIPTION>
            </div>
          </CARD>
        </div>
    </CONTAINER>
    
    {/* creer ici */}
    {/* <CONTAINER> */}
        {/* <TITLE>Dec CV cr????s ici</TITLE> */}
    {/* </CONTAINER> */}

    {/* Statistic */}
    <CONTAINER>
        {/* <TITLE>rejoignez-nous et construisez votre CV professionnel</TITLE> */}
        {/* <TITLE>NovoCV est le meilleur constructeur pour vous !</TITLE> */}
        <Statistic />
    </CONTAINER>

    {/* commencer maintenent div*/}
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#e2f1ff" fillOpacity="1" d="M0,192L48,192C96,192,192,192,288,176C384,160,480,128,576,133.3C672,139,768,181,864,202.7C960,224,1056,224,1152,218.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <CONTAINER className='bg-verylightblue'>
            <h1 className=' text-3xl xl:text-4xl'>Commencez d??s aujourd'hui avec notre cr??ateur de CV gratuit !</h1>
            <p className="inline-block px-8 py-2 mt-8 mb-16 md:mb-24 text-2xl text-white rounded-full bg-darkpink hover:opacity-90" >
            <Link to="/modeles"> Commencer Maintenent </Link>
            </p>
        </CONTAINER>
    </div>
    {/* footer */}
    <Footer />
</div>
</div>
)
}
