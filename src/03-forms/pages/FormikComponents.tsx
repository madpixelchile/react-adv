import { Formik, Field, ErrorMessage } from "formik";

import * as Yup from 'yup';

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    inputFirstName: '',
                    inputLastName: '',
                    inputEmail: '',
                    inputTerms: false,
                    inputJobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        inputFirstName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('Campo obligatorio'),
                        inputLastName: Yup.string().max(10, 'Debe de tener un máximo de 10 caracteres').required('Campo obligatorio'),
                        inputEmail: Yup.string().email('Formato incorrecto').required('Campo obligatorio'),
                        inputTerms: Yup.boolean().notOneOf([false], 'Debes aceptar las condiciones'),
                        inputJobType: Yup.string().notOneOf(['2'],'No puedes seleccionar 2').required('Debes de seleccionar una opción válida'),
                    })
                }
            >

                {

                    (formik) => (
                        <form onSubmit={formik.handleSubmit}>
                            <label htmlFor="inputFirstName">First Name</label>
                            <Field name={'inputFirstName'} id={'inputFirstName'} />
                            <ErrorMessage name={'inputFirstName'} component={'span'} />
                            <label htmlFor="inputLastName">Last Name</label>
                            <Field name={'inputLastName'} id={'inputLastName'} />
                            <ErrorMessage name={'inputLastName'} component={'span'} />
                            <label htmlFor="inputEmail">Email</label>
                            <Field name={'inputEmail'} id={'inputEmail'} />
                            <ErrorMessage name={'inputEmail'} component={'span'} />
                            <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px' }}>
                            <Field name={'inputTerms'} id={'inputTerms'} type={'checkbox'} />
                                <label htmlFor="inputTerms">Terms & conditions</label>
                            </div>
                            <ErrorMessage name={'inputTerms'} component={'span'} />
                            <Field name={'inputJobType'} as={'select'}>
                                <option value={''}>Pick something</option>
                                <option value={'1'}>One</option>
                                <option value={'2'}>Two</option>
                            </Field>
                            <ErrorMessage name={'inputJobType'} component={'span'} />
                            <button type={'submit'}>Submit</button>
                        </form>
                    )

                }

            </Formik>

        </div>
    )
}
