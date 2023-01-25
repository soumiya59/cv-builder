import React from 'react'
import tw from 'twin.macro'
import { Link } from 'react-router-dom'
// const P = tw.p` mt-5 `
export default function MiniFooter() {
  return (
    <footer className="text-gray-600 body-font">
  <div className="container flex flex-col flex-wrap px-5 py-5 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
    <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
      <Link to="/" className="flex items-center justify-center md:justify-start">
      <img src="images/logo.svg" alt="" className="w-40" />
      </Link>
    </div>
    <div className="flex flex-wrap flex-grow mt-5 text-center md:pl-20 md:mt-0 md:text-left">
      <div className="w-full px-4 lg:w-1/4 md:w-1/2">
        <h2 className="pt-2 text-sm font-medium tracking-widest text-gray-900 title-font">Contactez nous</h2>
      </div>
      <div className="w-full px-4 lg:w-1/4 md:w-1/2">
        <h2 className="pt-2 text-sm font-medium tracking-widest text-gray-900 title-font">Politique de confidentialité</h2>
      </div>
      <div className="w-full px-4 lg:w-1/4 md:w-1/2">
        <h2 className="pt-2 text-sm font-medium tracking-widest text-gray-900 title-font">Termes et conditions</h2>
      </div>
      <div className="w-full px-4 lg:w-1/4 md:w-1/2">
        <h2 className="text-sm font-medium tracking-widest text-gray-900 title-font">© 2023 Copyright: novocv.com Tous les droits sont réservés</h2>
      </div>
    </div>
  </div>
</footer>
  )
}
