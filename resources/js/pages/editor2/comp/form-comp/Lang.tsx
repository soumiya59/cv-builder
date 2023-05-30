import React from "react"
import { Field,Formik,Form, useFormikContext, ErrorMessage  } from "formik";
import { setLang } from "../../slices/langSlice";
import { useDispatch } from "react-redux";
import tw from "twin.macro";

const MORE = tw.button`w-full my-4 rounded-xl bg-blue-50 text-mediumblue  border-mediumblue border-2 p-2 font-semibold`
const REMOVE = tw.button`bg-lightblue mt-5 flex ml-auto text-white px-2 rounded-full`
const LABEL = tw.p`text-gray-500 `
// const P = tw.label`text-gray-500 `

function ExpFields({ name, values, errors, touched, onChange, onBlur,styles }) {
  return (
    <div className="grid grid-cols-2 ">
      <label htmlFor={`${name}.lang`} className='mr-5'>
        <LABEL> Language : </LABEL>
        <Field type="text" name={`${name}.lang`} className={styles.fieldStyle}/>
        <ErrorMessage name={`${name}.lang`} />
      </label>
      
      <label htmlFor={`${name}.level`}>
        <LABEL> Level : </LABEL>
        <Field type="text" name={`${name}.level`} className={styles.fieldStyle}/>
        <ErrorMessage name={`${name}.level`} />
      </label>
    </div>
  );
  }

export default function langForm({styles}) {
  const dispatch=useDispatch()
  const initialValues = {
    langs: [{ lang: '',level:''}],
  };
  const AutoSubmitToken = () => {
   const { values } = useFormikContext();
   React.useEffect(() => {
      dispatch(setLang(values))
   }, [values ]);
   return null;
 };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={()=>console.log('submit')}
    >
      {({ values, errors, touched, handleChange, handleBlur ,setFieldValue}) => (
        <Form>
          {values.langs.map((exp, index) => (
            <div key={index}>
              {index > 0 && (
                <REMOVE
                  type="button"
                  onClick={() =>
                    setFieldValue(
                      `langs`,
                      values.langs.filter((_, i) => i !== index)
                    )
                  }
                > X </REMOVE>
              )}
              <ExpFields
                name={`langs[${index}]`}
                values={exp}
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
              setFieldValue('langs', [
                ...values.langs,
                { lang: '',level:''}
              ])
            }
            >Ajouter Autres Languages</MORE>
          <AutoSubmitToken />
        </Form>
      )}
    </Formik>
  );
}