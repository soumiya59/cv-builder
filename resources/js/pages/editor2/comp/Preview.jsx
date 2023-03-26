import React from "react";
import {useSelector} from 'react-redux'
import tw from "twin.macro";
const HEADER = tw.p`text-xl font-semibold my-5`

export default function Preview(){
  const cv = useSelector(state=>state.cv)
  const perso = cv.find((cv)=>cv.id==='perso')
  const edu = cv.find((cv)=>cv.id==='edu')
  const exp = cv.find((cv)=>cv.id==='exp')
  
  

  // console.log('preview: ', perso)
    return (
        <div className=" p-10  ">
          <HEADER>Personal Information</HEADER>
          {
            perso &&
            <p>
              {/* nom: {perso.image}  <br /> */}
              <img src={perso.image} alt="Selected image" className="w-32 h-32"/>
              nom: {perso.nom}  <br />
              prenom: {perso.prenom} <br />
              tele: {perso.tele}  <br />
              email: {perso.email}  <br />
              profile: {perso.profile} <br />
            </p>
          }
          <HEADER>Education</HEADER>
          {
            edu?.data?.educations && edu?.data?.educations?.map((e)=>{
              return(
            <p key={e}>
              institution: {e.institution} <br />
              date debut: {e.dateD} <br />
              date fin: {e.dateF} <br />
              description: {e.desc}  <br />
            </p>

              )
            })
          }
          <HEADER>Experience</HEADER>
          {
            exp?.data?.exps && exp?.data?.exps?.map((e)=>{
              return(
            <p key={e}>
              position: {e.pos} <br />
              location: {e.loc} <br />
              date debut: {e.dateD} <br />
              date fin: {e.dateF} <br />
              description: {e.desc}  <br />
            </p>
              )
            })
          }
        </div>
    )
}