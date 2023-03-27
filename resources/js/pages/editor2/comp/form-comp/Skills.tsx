import React from "react"
import { Field,Formik,Form, useFormikContext, ErrorMessage  } from "formik";
import { setSkills } from "../../cvSlice";
import { useDispatch } from "react-redux";
import tw from "twin.macro";

const MORE = tw.button`w-full my-4 rounded-xl bg-blue-50 text-mediumblue  border-mediumblue border-2 p-2 font-semibold`
const REMOVE = tw.button`bg-lightblue mt-5 flex ml-auto text-white px-2 rounded-full`
const LABEL = tw.p`text-gray-500 `

function ExpFields({ name, values, errors, touched, onChange, onBlur,styles }) {
  return (
    <div>
      <label htmlFor={`${name}.compétence`}>
        <LABEL> compétence :</LABEL>
        <Field type="text" name={`${name}.compétence`} className={styles.fieldStyle}/>
        <ErrorMessage name={`${name}.compétence`} />
      </label>
    </div>
  );
  }

export default function skillForm({styles}) {
  const dispatch=useDispatch()
  const initialValues = {
    skills: [{ compétence: ''}],
  };
  const AutoSubmitToken = () => {
   const { values } = useFormikContext();
   React.useEffect(() => {
      dispatch(setSkills(values))
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
          {values.skills.map((exp, index) => (
            <div key={index}>
              {index > 0 && (
                <REMOVE
                  type="button"
                  onClick={() =>
                    setFieldValue(
                      `skills`,
                      values.skills.filter((_, i) => i !== index)
                    )
                  }
                > X </REMOVE>
              )}
              <ExpFields
                name={`skills[${index}]`}
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
              setFieldValue('skills', [
                ...values.skills,
                { compétence: ''}
              ])
            }
            >Ajouter Autres Compétences</MORE>
          <AutoSubmitToken />
        </Form>
      )}
    </Formik>
  );
}