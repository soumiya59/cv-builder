import React, { useEffect ,useState} from "react";
import tw from "twin.macro";
import { Formik, Field, Form, useFormikContext } from "formik";
import EducationForm from './form-comp/Education'
import Experience from "./form-comp/Experience";
import Skills from "./form-comp/Skills";
import Lang from "./form-comp/Lang";
// import { setperso } from "../cvSlice";
import { setperso } from "../slices/persoSlice";
import { useDispatch } from "react-redux";
import i18n from "../../i18n";
import { useTranslation } from 'react-i18next'
import '../../../../css/editor.css'
const HEADER = tw.p`text-2xl text-gray-600 font-bold mt-5 pb-1 mb-5 border-b-2 border-dashed border-verylightblue flex  `
const LABEL = tw.label`text-gray-500 `

export default function Formulaire({styles}){
  const { t } = useTranslation();
  // const [selectedLanguage, setSelectedLanguage] =  useState(i18n.language);
  // const handleChangeLanguage = (e) => {
  //   e.preventDefault();
  //     i18n.changeLanguage(e.target.value); 
  //     setSelectedLanguage(e.target.value);   
  // };
  const dispatch=useDispatch()
  const FormObserver = () => {
    const { values }: any= useFormikContext();  
    useEffect(() => {
        dispatch(setperso(values))
    }, [values]);  
    return null;
  };
  return (
    <div className=" button w-1/2 p-10" >
      <Formik
        initialValues={{ image:'', nom: '', prenom: '', tele: '', email: '', profile: '', }}
        onSubmit={()=>console.log("submit")}
      >
        {({ values, handleSubmit, setFieldValue }) => (
        <Form>
            <HEADER >
              <img src="images/editor/info.png" alt="" className="mr-3 h-6 self-center"/>
              {t("Information Personnelles")}
            </HEADER>
            <div className=" grid grid-cols-3 grid-rows-2 gap-5" >
                <div className="row-span-2  ">
                <p className=" text-gray-500">{t("Photo :")}</p>
                <div className="flex items-center justify-center px-6 pt-5 pb-6 mt-2 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                <div className="flex justify-center text-sm font-medium text-gray-600">
                <label htmlFor="fileInput" className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-light focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary">
                <svg className="w-12 h-12 mx-auto text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M26 22v-6h-4v6H16v4h6v6h4v-6h6v-4h-6z" />
                <path d="M24 4C13.178 4 4 13.178 4 24s9.178 20 20 20 20-9.178 20-20S34.822 4 24 4zm0 36c-8.837 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16-7.163 16-16 16z" />
                </svg> <span>{t("Ajouter une image")}</span>
                  <Field type="file" id="fileInput" name="file" className="sr-only"
                  onChange={(e) => {
                      const fileReader = new FileReader();
                      fileReader.onload = () => {
                        if (fileReader.readyState === 2) {
                          setFieldValue('image', fileReader.result);
                        }
                      };
                      fileReader.readAsDataURL(e.target.files[0]);
                    }}
                  />
                </label>
              </div>
              <p className="text-xs text-gray-500">
                PNG, JPG, GIF up to 10MB
              </p>
              </div>
            </div>
                </div>
                <LABEL>{t("Nom")}: <br />
                <Field name="nom" className={styles.fieldStyle} />
                </LABEL>
                <LABEL>{t("Prenom")}:<br />
                <Field name="prenom" className={styles.fieldStyle}/> 
                </LABEL>
                <LABEL>{t("Telephone")}:<br />
                <Field name="tele" className={styles.fieldStyle}/> 
                </LABEL>
                <LABEL>{t("Email")}: <br />
                <Field type="email" name="email"  className={styles.fieldStyle}/>
                </LABEL>
            </div>
            <div id="profile" className="mt-14">
                <HEADER>
                  <img src="images/editor/profile.png" alt="" className="mr-3 h-6 self-center"/>
                  {t("Profile")} 
                </HEADER>

                <Field as="textarea" name="profile" cols='50' rows='2' className={styles.txt} ></Field>
            </div>
            <FormObserver />
        </Form>
          )}
      </Formik>
            
        <div id="education" className="mt-14">
            <HEADER >
              <img src="images/editor/edu.png" alt="" className="mr-3 h-6 self-center"/>
              {t("Études et Formation")}
            </HEADER>
            <EducationForm styles={styles}/>
        </div>
        
        <div id="experience" className="mt-14">
            <HEADER >
            <img src="images/editor/work.png" className="mr-3 h-6 self-center"/>
            {t("Expérience professionnelles")}
            </HEADER>
            <Experience styles={styles}/>
        </div>

        <div id="skills" className="mt-14">
            <HEADER >
              <img src="images/editor/skill.png" className="mr-3 h-6 self-center"/>
              {t("Compétences")}
            </HEADER>
            <Skills styles={styles}/>
        </div>
        
        <div id="lang" className="mt-14">
            <HEADER >
              <img src="images/editor/lang.png" className="mr-3 h-6 self-center"/>
              {t("languages")}
            </HEADER>
            <Lang styles={styles}/>
        </div>
    </div>
  );

}