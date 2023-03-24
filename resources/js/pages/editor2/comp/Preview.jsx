import React from "react";
import {useSelector} from 'react-redux'
import tw from "twin.macro";
const HEADER = tw.p`text-xl font-semibold my-5`
export default function Preview(){
  const cv = useSelector(state=>state.cv)
  const perso = cv.find((cv)=>cv.id==='perso')
  const edu = cv.find((cv)=>cv.id==='edu')
  const exp = cv.find((cv)=>cv.id==='exp')

  console.log('preview: ', edu)
    return (
        <div className=" p-10  ">
          <HEADER>Personal Information</HEADER>
          {
            perso &&
            <p>
              nom: {perso.nom}  <br />
              prenom: {perso.prenom} <br />
              tele: {perso.tele}  <br />
              email: {perso.email}  <br />
              profile: {perso.profile} <br />
            </p>
          }
          <HEADER>Education</HEADER>
          {
            edu &&
            <p>
              institution: {edu.institution} <br />
              date debut: {edu.dateD} <br />
              date fin: {edu.dateF} <br /> 
              description: {edu.eduDesc}  <br />
            </p>
          }
          <HEADER>Experience</HEADER>
          {
            exp &&
            <p>
              position: {exp.pos} <br />
              location: {exp.location} <br />
              date debut: {exp.dateD} <br />
              date fin: {exp.dateF} <br />
              description: {exp.workDesc}  <br />
            </p>
          }
        </div>
    )
}