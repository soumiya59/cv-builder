import React from "react";
import Formulaire from "./comp/Form";
import Preview from"./comp/Preview";
import { Provider } from 'react-redux'
import {store} from './store'


export default function Editeur(){
    return (
      <Provider store={store}>
        {/* header */}
        
        {/* editeur */}
        <div className="flex ">
          <Formulaire />
          <div className="w-1/2 fixed overflow-auto bg-blue-50 h-screen top-0 right-0">
              <Preview />
          </div>
        </div>
      </Provider>
    )
}



