import React from "react"
import { Field,Formik,Form, useFormikContext, ErrorMessage  } from "formik";
import { setEdu } from "../../cvSlice";
import { useDispatch } from "react-redux";
import tw from "twin.macro";

const MORE = tw.button`w-full my-4 rounded-full bg-verylightblue text-darkblue  border-mediumblue border-2 p-2`
const REMOVE = tw.button`bg-mediumblue text-white px-2 rounded-full`

function EducationFields({ name, values, errors, touched, onChange, onBlur }) {
  return (
    <div>
      <label htmlFor={`${name}.institution`}>Institution</label>
      <Field type="text" name={`${name}.institution`} />
      <ErrorMessage name={`${name}.institution`} />
      <br />

      <label htmlFor={`${name}.dateD`}>dateD</label>
      <Field type="text" name={`${name}.dateD`} />
      <ErrorMessage name={`${name}.dateD`} />
      <br />
      
      <label htmlFor={`${name}.dateF`}>dateD</label>
      <Field type="text" name={`${name}.dateF`} />
      <ErrorMessage name={`${name}.dateF`} />
      <br />

      <label htmlFor={`${name}.desc`}>desc</label>
      <Field as='textarea' type="text" name={`${name}.desc`} />
      <ErrorMessage name={`${name}.desc`} />
    </div>
  );
  }

export default function EducationForm() {
  const dispatch=useDispatch()
  const initialValues = {
    educations: [{ institution: '', dateD: '',dateF:'', desc: '' }],
  };
  const handleSubmit = (values) => {
    // console.log(values);
  };
  const AutoSubmitToken = () => {
   const { values } = useFormikContext();
   React.useEffect(() => {
      dispatch(setEdu(values))
      // console.log(values);
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
          {values.educations.map((education, index) => (
            <div key={index}>
              <EducationFields
                name={`educations[${index}]`}
                values={education}
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
                      `educations`,
                      values.educations.filter((_, i) => i !== index)
                    )
                  }
                > X </REMOVE>
              )}
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
          {/* <button type="submit">Submit</button> */}
          <AutoSubmitToken />
        </Form>
      )}
    </Formik>
  );
}