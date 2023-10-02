
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

interface FormDataProps {
    inputName: string;
    inputEmail: string;
    inputPassword1: string;
    inputPassword2: string;
}

const defaultFormData = {
    inputName: '',
    inputEmail: '',
    inputPassword1: '',
    inputPassword2: ''
}

export const ResgisterFormikPage = () => {

    return (
        <div>

            <h1>Register page</h1>

            <Formik
                initialValues={defaultFormData}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    inputName: Yup.string()
                        .min(2, 'Mínimo de 2 caracteres')
                        .max(15, 'Máximo de 15 caracteres')
                        .required('Obligatorio'),
                    inputEmail: Yup.string()
                        .email('Formato incorrecrto')
                        .required('Obligatorio'),
                    inputPassword1: Yup.string()
                        .min(6, 'Mínimo de 6 caracteres')
                        .max(8, 'Máximo de 8 caracteres')
                        .required('Obligatorio'),
                    inputPassword2: Yup.string()
                        .oneOf([Yup.ref('inputPassword1')], 'Los campos deben ser idénticos')
                        .required('Obligatorio'),
                })}
            >

                {
                    (formik) => (
                        <form noValidate onSubmit={formik.handleSubmit}>

                            <MyTextInput
                                name={'inputName'}
                                label={'Input Name'}
                                id={'inputName'}
                                type={'text'}
                                placeholder={'Escribe tu nombre aquí'}
                            />

                            <MyTextInput
                                name={'inputEmail'}
                                label={'Email'}
                                id={'inputEmail'}
                                type={'email'}
                                placeholder={'Escribe tu email aquí'}
                            />

                            <MyTextInput
                                name={'inputPassword1'}
                                label={'Password'}
                                id={'inputPassword1'}
                                type={'password'}
                                placeholder={'Escribe tu password aquí'}
                            />
                            
                            <MyTextInput
                                name={'inputPassword2'}
                                label={'Repetir password'}
                                id={'inputPassword2'}
                                type={'password'}
                                placeholder={'Repite tu password aquí'}
                            />
                            
                            <button>Create</button>
                            <button type={'button'} onClick={()=>formik.handleReset()}>Reset Form</button>
                        </form>
                    )
                }

            </Formik>

        </div>
    )
}

