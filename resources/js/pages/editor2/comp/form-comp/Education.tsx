import React from "react"
import { Field,Formik,Form, useFormikContext, ErrorMessage  } from "formik";
import { setEdu } from "../../cvSlice";
import { useDispatch } from "react-redux";
import tw from "twin.macro";

const MORE = tw.button`w-full my-4 rounded-xl bg-blue-50 text-mediumblue  border-mediumblue border-2 p-2 font-semibold`
const REMOVE = tw.button`bg-lightblue mt-5 flex ml-auto text-white px-2 rounded-full`
const LABEL = tw.label`text-gray-500 ml-2 mb-2 `

function EducationFields({ name, values, errors, touched, onChange, onBlur ,styles}) {
  return (
    <div className="grid grid-rows-3 grid-cols-2 ">
      <label htmlFor={`${name}.institution`} className='col-span-2'>
        <LABEL> Institution : </LABEL>
        <Field type="text" name={`${name}.institution`} className={styles.fieldStyle} />
        <ErrorMessage name={`${name}.institution`} />
      </label>

      <label htmlFor={`${name}.dateD`} className='mr-5'>
        <LABEL> Date Debut : </LABEL>
        <Field type="text" name={`${name}.dateD`} className={styles.fieldStyle} />
        <ErrorMessage name={`${name}.dateD`} />
      </label>
      
      <label htmlFor={`${name}.dateF`} >
        <LABEL> Date Fin : </LABEL>
        <Field type="text" name={`${name}.dateF`} className={styles.fieldStyle} />
        <ErrorMessage name={`${name}.dateF`} />
      </label>

      <label htmlFor={`${name}.desc`} className='col-span-2'>
        <LABEL>Description :</LABEL>
        <Field as='textarea' type="text" name={`${name}.desc`} cols='50' rows='2' className={styles.txt} />
        <ErrorMessage name={`${name}.desc`} />
      </label>
    </div>
  );
  }

export default function EducationForm({styles}) {
  const dispatch=useDispatch()
  const initialValues = {
    educations: [{ institution: '', dateD: '',dateF:'', desc: '' }],
  };
  const AutoSubmitToken = () => {
   const { values } = useFormikContext();
   React.useEffect(() => {
      dispatch(setEdu(values))
   }, [values ]);
   return null;
 };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={()=>console.log('Submit')}
    >
      {({ values, errors, touched, handleChange, handleBlur ,setFieldValue}) => (
        <Form>
          {values.educations.map((education, index) => (
            <div key={index}>
              {index > 0 && (
                <REMOVE
                  type="button"
                  onClick={() =>
                    setFieldValue(
                      `educations`,
                      values.educations.filter((_, i) => i !== index)
                    )
                  }
                > X </REMOVE>
              )}
              <EducationFields
                name={`educations[${index}]`}
                values={education}
                errors={errors}
                touched={touched}
                onChange={handleChange}
                onBlur={handleBlur}
                styles={styles}
              />
            </div>
          ))}
            <MORE type="button" 
            onClick={() =>
              setFieldValue('educations', [
                ...values.educations,
                { institution: '', dateD: '',dateF:'', desc: '' },
              ])
            }
            >Ajouter Autres Études</MORE>
          <AutoSubmitToken />
        </Form>
      )}
    </Formik>
  );
}