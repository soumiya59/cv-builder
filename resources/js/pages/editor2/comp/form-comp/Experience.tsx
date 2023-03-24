import React, { useEffect } from "react"
import { Field,Formik,Form, useFormikContext } from "formik";
import { setExp } from "../../cvSlice";
import { useDispatch } from "react-redux";

export default function Education(){
  const [close,setClose]= React.useState(false)
  const dispatch=useDispatch()
  const FormObserver = () => {
    const { values }: any= useFormikContext();  
    useEffect(() => {
        dispatch(setExp(values))
    }, [values]);  
    return null;
  };
    return(
        <>
            {
            close? null :
            <>
                <Formik
                 initialValues={{
                    pos:'',
                    location:'',
                    dateD:'',
                    dateF:'',
                    workDesc:''
                  }}
                  onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                  }}
                >
                <Form className="">
                  <button onClick={()=>setClose(!close)} className=" text-white bg-sky-200 rounded-full px-2 flex ml-auto mt-4">X</button>
  
                  <div className="grid grid-cols-2">
                  <label className="col-span-2 mb-4">Position de travail: <br />
                  <Field name="pos" className='border-2'/>
                  </label>
  
                  <label className="mb-4">Location: <br />
                  <Field name="location" className='border-2'  /> 
                  </label>
  
                  <label>Company: <br />
                  <Field name="Company" className='border-2'  /> 
                  </label>
  
                  <label className="mb-4">Date de début: <br />
                  <Field name="dateD" className='border-2'  /> 
                  </label>
  
                  <label>Date de fin: <br />
                  <Field name="dateF" className='border-2'  /> 
                  </label>

                  <p className="">Description:</p>
                  <Field as="textarea" name="workDesc" cols='50' rows='3' className='text-lg p-2 col-span-2'></Field>
                  </div>
                  <FormObserver />
                </Form>
                </Formik>
            </>
            }
        </>

    )
}