import { useFormik } from "formik";

import * as Yup from 'yup';

export const FormikYupPage = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            inputFirstName: '',
            inputLastName: '',
            inputEmail: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            inputFirstName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('Campo obligatorio'),
            inputLastName: Yup.string().max(10,'Debe de tener un máximo de 10 caracteres').required('Campo obligatorio'),
            inputEmail: Yup.string().email('Formato incorrecto').required('Campo obligatorio')
        })
    });

    

    return (
        <div>
            <h1>Formik YUP tutorial</h1>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="inputFirstName">First Name</label>
                <input
                    type={'text'}
                    id={'inputFirstName'}
                    { ...getFieldProps('inputFirstName') } //trae el name, onBlur, onChange y todos los eventos del formulario en base a ese nombre
                />
                
                {
                    (touched.inputFirstName && errors.inputFirstName) && <span>{errors.inputFirstName}</span>
                }

                <label htmlFor="inputLastName">Last Name</label>
                <input
                    type={'text'}
                    id={'inputLastName'}
                    { ...getFieldProps('inputLastName') }
                />
                {
                    (touched.inputLastName && errors.inputLastName) && <span>{errors.inputLastName}</span>
                }
                <label htmlFor="inputEmail">Email</label>
                <input
                    type={'email'}
                    id={'inputEmail'}
                    { ...getFieldProps('inputEmail') }
                />
                {
                    (touched.inputEmail && errors.inputEmail) && <span>{errors.inputEmail}</span>
                }
                <button>Submit</button>
            </form>
        </div>
    )
}
