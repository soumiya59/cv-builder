// import React from 'react'
// import tw from 'twin.macro'

// const Wrapper = tw.section`relative flex flex-wrap justify-between items-center px-2 py-3 bg-pink-500 mb-3`
// const UL = tw.li`flex flex-col lg:flex-row list-none lg:ml-auto`
// // const LI = tw.li`nav-item`
// const A = tw.a`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75`

// const Component = () => (
//   <Wrapper>
//   <img src="images/logo.png" alt="logo" className='inline-block mr-4 w-44' />
//   <div className="items-center flex-grow lg:flex"id="example-navbar-danger" >
//   <ul>
//     <li> <A href="h">hello</A> </li>
//     <li> <A href="h">hello</A> </li>
//     <li> <A href="h">hello</A> </li>
//   </ul>
//   </div>
//   </Wrapper>
// )
// export default Component;


import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <nav >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
              <div>
              <img className="w-40" src="images/logo.png" alt="logo" />
              </div>
              <div className="hidden ml-auto md:block">
                <div className="flex items-baseline justify-end ml-10 space-x-4 ">
                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium rounded-md hover:text-darkblue"
                  >
                    Mes CV
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium rounded-md hover:text-darkblue"
                  >
                    Mon Compte
                  </a>
                  <button className="p-3 text-white rounded-3xl bg-darkpink hover:opacity-90">
                    Connexion
                  </button>
              </div>
            </div>
            <div className="flex justify-end flex-auto -mr-2 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="flex items-center p-2 ml-auto text-white rounded-md bg-darkblue hover:opacity-80"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                <a
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-black rounded-md hover:bg-mediumblue hover:text-white"
                > Mes CV </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-black rounded-md hover:bg-mediumblue hover:text-white"
                > Mon Compte </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
  );
}

export default Header;


