import React, { useEffect } from "react";
import tw from "twin.macro";
import { Formik, Field, Form, useFormikContext } from "formik";
import Education from "./form-comp/Education";
import Experience from "./form-comp/Experience";
import { cloneElement } from 'react';
import { setperso } from "../cvSlice";
import { useDispatch } from "react-redux";

const MORE = tw.button`w-full my-4 rounded-full bg-verylightblue text-darkblue  border-mediumblue border-2 p-2`

export default function Formulaire(){
  const [displayEdu,setdisplayEdu] = React.useState(false)
  const [displayExp,setdisplayExp] = React.useState(false)
  const cloneEDu = cloneElement(<Education/>)
  const cloneExp= cloneElement(<Experience/>)
  const dispatch=useDispatch()

//   const handleChange = (e)=>{setperso((prev)=>({...prev,perso:{perso}})) }

  const FormObserver = () => {
    const { values }: any= useFormikContext();  
    useEffect(() => {
        dispatch(setperso(values))
    }, [values]);  
    return null;
  };
  
  return (
    <div className=" bg-pink-50 w-1/2 p-10">
      <Formik
        initialValues={{
          photo:'',
          nom: '',
          prenom: '',
          tele: '',
          email: '',
          profile: '',
        }}
        onSubmit={()=>console.log("submit")}
      >
        <Form>
            <p className="text-xl mb-5 font-semibold">Personal Information</p>
            <div className=" grid  grid-cols-3 grid-rows-2">
                <Field type="file" name="photo" className='row-span-2 border-2'/>
                <label>nom <br />
                <Field name="nom" className='border-2'/>
                </label>
                <label>prenom <br />
                <Field name="prenom" className='border-2'  /> 
                </label>
                <label>telephone <br />
                <Field name="tele" className='border-2'  /> 
                </label>
                <label>email <br />
                <Field type="email" name="email" className='border-2' />
                </label>
            </div>
            <div id="profile" className="grid grid-cols-2">
                <p className="text-xl my-5 font-semibold">Profile</p>
                <Field as="textarea" name="profile" cols='50' rows='3' className='text-lg p-2 col-span-2'></Field>
            </div>
            <FormObserver />
        </Form>
      </Formik>
            
        <div id="education">
            <p className="text-xl my-5 font-semibold">Education</p>
            <Education/>
            {displayEdu && cloneEDu}
            <MORE type="button" onClick={()=>setdisplayEdu(true)}>Ajouter Autres Études</MORE>
        </div>
        
        <div id="experience">
            <p className="text-xl my-5 font-semibold">L'expérience professionnelle</p>
            <Experience/>
            {displayExp && cloneExp}
            <MORE type="button" onClick={()=>setdisplayExp(true)}>Ajouter plus d'expérience</MORE>
        </div>

    </div>
  );

}