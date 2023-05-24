import React from "react"
import { Field,Formik,Form, useFormikContext, ErrorMessage  } from "formik";
import { setExp } from "../../slices/expSlice";
import { useDispatch } from "react-redux";
import tw from "twin.macro";

const MORE = tw.button`w-full my-4 rounded-xl bg-blue-50 text-mediumblue  border-mediumblue border-2 p-2 font-semibold`
const REMOVE = tw.button`bg-lightblue mt-5 flex ml-auto text-white px-2 rounded-full`
const LABEL = tw.label`text-gray-500 ml-2 mb-2 `

function ExpFields({ name, values, errors, touched, onChange, onBlur ,styles}) {
  return (
    <div className="grid grid-cols-2 grid-row-3 gap-5">
      <label htmlFor={`${name}.pos`} className=''>
        <LABEL> Postion :</LABEL>
        <Field type="text" name={`${name}.pos`} className={styles.fieldStyle}/>
        <ErrorMessage name={`${name}.pos`} />
        </label>

      <label htmlFor={`${name}.loc`}>
        <LABEL> Location :</LABEL>
        <Field type="text" name={`${name}.loc`} className={styles.fieldStyle}/>
        <ErrorMessage name={`${name}.loc`} />
      </label>

      <label htmlFor={`${name}.dateD`} className=''>
        <LABEL> Date Debut : </LABEL>
        <Field type="date" name={`${name}.dateD`} className={styles.fieldStyle}/>
        <ErrorMessage name={`${name}.dateD`} />
      </label>
      
      <label htmlFor={`${name}.dateF`}>
       <LABEL> Date Fin : </LABEL>
      <Field type="date" name={`${name}.dateF`} className={styles.fieldStyle}/>
      <ErrorMessage name={`${name}.dateF`} />
      </label>

      <label htmlFor={`${name}.desc`} className='col-span-2'>
        <LABEL> Description :</LABEL> 
        <Field as='textarea' type="text" name={`${name}.desc`} cols='50' rows='2' className={styles.txt}/>
        <ErrorMessage name={`${name}.desc`} />
      </label>
    </div>
  );
  }

export default function ExpForm({styles}) {
  const dispatch=useDispatch()
  const initialValues = {
    exps: [{ pos: '', loc: '', dateD: '',dateF:'',desc:'' }],
  };
  const AutoSubmitToken = () => {
   const { values } = useFormikContext();
   React.useEffect(() => {
      dispatch(setExp(values))
   }, [values ]);
   return null;
 };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => console.log('submit')}
    >
      {({ values, errors, touched, handleChange, handleBlur ,setFieldValue}) => (
        <Form>
          {values.exps.map((exp, index) => (
            <div key={index}>
              {index > 0 && (
                <REMOVE
                  type="button"
                  onClick={() =>
                    setFieldValue(
                      `exps`,
                      values.exps.filter((_, i) => i !== index)
                    )
                  }
                > X </REMOVE>
              )}
              <ExpFields
                name={`exps[${index}]`}
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
              setFieldValue('exps', [
                ...values.exps,
                { pos: '', loc: '', dateD: '',dateF:'',desc:'' }
              ])
            }
            >Ajouter Autres Experience</MORE>
          <AutoSubmitToken />
        </Form>
      )}
    </Formik>
  );
}