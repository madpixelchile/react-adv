
import { Formik } from 'formik';
import formJson from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};

const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value

  if(!input.validations) continue;

  let schema = Yup.string();

  for(const rule  of input.validations){
    if( rule.type === 'required' ){
        schema = schema.required(rule.message);
    }
    if(rule.type === 'minLength'){
      schema = schema.min((rule as any).value || 2, rule.message || 'Mínimo de caracteres 2');
    }
    if(rule.type === 'maxLength'){
      schema = schema.max((rule as any).value || 10, rule.message || 'Mínimo de caracteres 10');
    }
    if(rule.type === 'email'){
      schema = schema.email(rule.message || 'Formato incorrecto');
    }
    if(rule.type === 'password1'){
      schema = schema.email(rule.message || 'Formato incorrecto');
    }
  }

  requiredFields[input.name] = schema;

}

export const DynamicForm = () => {

  // console.log(formJson.map((item) => (item.name)))

  return (
    <div>
      <h1>Dynamic form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(value) => {
          console.log(value);
        }}
        validationSchema={Yup.object({
          ...requiredFields
        })}
      >

        {
          (formik) => (
            <form noValidate onSubmit={formik.handleSubmit}>

              {
                formJson.map(({ name, id, placeholder, label, type, ...rest }) => {

                  if (type === 'text' || type === 'password' || type === 'email') {
                    return <MyTextInput
                      key={name}
                      type={(type as any)}
                      name={name}
                      label={label}
                      id={id}
                      placeholder={placeholder}
                    />
                  }

                  if (type === 'select') {
                    return <MySelect
                      key={name}
                      type={(type as any)}
                      name={name}
                      label={label}
                      id={id}
                    >
                      <option value={''}>Selecciona una opción</option>
                      {rest.options?.map(({ id, label }, key) => <option key={id} value={label} >{label}</option>)}
                    </MySelect>
                  }

                  return <span>El tipo de dato ${type} no es soportado.</span>

                })
              }

              <button type={'submit'}>Enviar</button>
              <button type={'button'} onClick={() => formik.handleReset()}>Reset</button>

            </form>
          )
        }

      </Formik>

    </div>
  )
}

