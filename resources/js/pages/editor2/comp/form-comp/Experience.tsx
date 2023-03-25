import React from "react"
import { Field,Formik,Form, useFormikContext, ErrorMessage  } from "formik";
import { setExp } from "../../cvSlice";
import { useDispatch } from "react-redux";
import tw from "twin.macro";

const MORE = tw.button`w-full my-4 rounded-full bg-verylightblue text-darkblue  border-mediumblue border-2 p-2`
const REMOVE = tw.button`bg-mediumblue text-white px-2 rounded-full`

function ExpFields({ name, values, errors, touched, onChange, onBlur }) {
  return (
    <div>
      <label htmlFor={`${name}.pos`}>Postion</label>
      <Field type="text" name={`${name}.pos`} />
      <ErrorMessage name={`${name}.pos`} />
      <br />

      <label htmlFor={`${name}.loc`}>Location</label>
      <Field type="text" name={`${name}.loc`} />
      <ErrorMessage name={`${name}.loc`} />
      <br />

      <label htmlFor={`${name}.dateD`}>date debut</label>
      <Field type="text" name={`${name}.dateD`} />
      <ErrorMessage name={`${name}.dateD`} />
      <br />
      
      <label htmlFor={`${name}.dateF`}>deta fin</label>
      <Field type="text" name={`${name}.dateF`} />
      <ErrorMessage name={`${name}.dateF`} />
      <br />

      <label htmlFor={`${name}.desc`}>description</label>
      <Field as='textarea' type="text" name={`${name}.desc`} />
      <ErrorMessage name={`${name}.desc`} />
    </div>
  );
  }

export default function ExpForm() {
  const dispatch=useDispatch()
  const initialValues = {
    exps: [{ pos: '', loc: '', dateD: '',dateF:'',desc:'' }],
  };
  const handleSubmit = (values) => {
    console.log(values);
  };
  const AutoSubmitToken = () => {
   const { values } = useFormikContext();
   React.useEffect(() => {
      dispatch(setExp(values))
      console.log(values);
   }, [values ]);
   return null;
 };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur ,setFieldValue}) => (
        <Form>
          {values.exps.map((exp, index) => (
            <div key={index}>
              <ExpFields
                name={`exps[${index}]`}
                values={exp}
                errors={errors}
                touched={touched}
                onChange={handleChange}
                onBlur={handleBlur}
              />
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
          {/* <button type="submit">Submit</button> */}
          <AutoSubmitToken />
        </Form>
      )}
    </Formik>
  );
}