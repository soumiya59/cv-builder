import React from 'react';
import {useSelector} from 'react-redux'

const Resume = () => {
  const cv = useSelector(state=>state.cv)
  const perso = cv.find((cv)=>cv.id==='perso')
  const edu = cv.find((cv)=>cv.id==='edu')
  const exp = cv.find((cv)=>cv.id==='exp')
  const skills = cv.find((cv)=>cv.id==='skills')
  const langs = cv.find((cv)=>cv.id==='langs')
  
  return (
    <div className="mx-auto w-11/12 md:w-3/4 lg:w-3/4 xl:w-2/3 mt-5">
      <div className='bg-white p-10 rounded-lg pb-16'>
      {
       perso.nom || perso.prenom || perso.image || perso.tele || perso.email || perso.profile?
       <>
       <section className='flex'>
        <img src={perso.image} alt="Selected image" className="w-24 h-24 rounded-lg mr-5"/>
        <div>
          <h1 className="text-3xl font-bold ">{perso.prenom}{perso.nom}</h1>
          <p>{perso.email}</p>
          <p>{perso.tele}</p>
        </div>
       </section>
       <p className='mt-5'>{perso.profile}</p>
       </>
       :
       <>
       <div className='flex' >
        <img src='/images/editor/exm.avif' alt="Selected image" className="w-24 h-24 rounded-lg mr-5"/>
        <div>
          <h1 className="text-3xl font-bold ">Tomas Shelby</h1>
          <p>someemail@gmail.com</p>
          <p>+212 654856212</p>
        </div>
       </div> 
       <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nisi necessitatibus Lorem ipsum dolor sit amet.</p>
       </>
      }
      <p className="text-xl font-bold mb-2 mt-6">Skills</p>
      {
          skills.data?.skills[0].compétence!=="" ? 

            <ul className="list-disc list-inside">             
            {skills.data?.skills.map((e)=>{
              return(
              <li key={e}> {e.compétence} </li>
              )
            })}
            </ul>
            :
            <div>
             <ul className="list-disc list-inside">
               <li>React</li>
               <li>Tailwind CSS</li>
               <li>TypeScript</li>
               <li>laravel</li>
             </ul>
            </div> 
      }
      <h2 className="text-xl font-bold mb-2 mt-5">Experience</h2>
      {
          exp?.data?.exps[0].pos!=="" ||
          exp?.data?.exps[0].loc!=="" || exp?.data?.exps[0].dateD!=="" ||  exp?.data?.exps[0].dateF!=="" || exp?.data?.exps[0].desc!=="" ?
            <div>
              {
            exp?.data?.exps?.map((e)=>{
              return(
                <div className="mt-6" key={e}>
                  <div className="mb-2 flex justify-between">
                    <p className="text-lg font-bold">{e.pos}</p>
                    <p className="text-md mb-1">{e.dateD} - {e.dateF}</p>
                  </div>
                  <p className="text-md font-semibold mb-1">{e.loc}</p>
                  <p className="list-disc list-inside">{e.desc} </p>
                </div>
              )
            })
              }
            </div>
            :
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-bold">Software Developer</h3>
                <p className="text-md font-semibold mb-1">ABC Company</p>
                <p className="text-md mb-1">Jan 2022 - Present</p>
                <p>Developed and maintained React-based web applications</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">Frontend Developer</h3>
                <p className="text-md font-semibold mb-1">XYZ Company</p>
                <p className="text-md mb-1">May 2021 - Dec 2021</p>
                <p>Created and optimized web pages using HTML, CSS, and JavaScript</p>
              </div>
            </div>
      }
      <h2 className="text-xl font-bold mb-2 mt-5">Education</h2>
      {
            edu?.data?.length===0 ||
            edu?.data?.educations[0].institution!=="" ||
            edu?.data?.educations[0].dateD!=="" ||
            edu?.data?.educations[0].dateF!=="" ||
            edu?.data?.educations[0].desc!=="" 
            ?

            edu?.data?.educations?.map((e)=>{
            return(
            <div key={e}>
                  <div className="mb-2 flex justify-between">
                    <p className="text-lg font-bold">{e.institution}</p>
                    <p className="text-md mb-1">{e.dateD} - {e.dateF}</p>
                  </div>
                  <p className="list-disc list-inside">{e.desc} </p>
            </div>
              )
            })
            :
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-bold">Bachelor of Science in Computer Science</h3>
                <p className="text-md font-semibold mb-1">University of Example</p>
                <p className="text-md mb-1">Graduated May 2021</p>
              </div>
            </div>
      }
      <h2 className="text-xl font-bold mb-2 mt-5">Languages</h2>
      {
            langs?.data?.langs[0].lang || langs?.data?.level
            ?
            
            langs?.data?.langs?.map((e)=>{
              return(
            <p key={e}>
               {e.lang} - {e.level}
            </p>
              )
            })
            :
            <>
            <p>Anglais - B2</p>
            <p>Francais - B2</p>
            </>
      }
      </div>
    </div>
  )}
export default Resume;
