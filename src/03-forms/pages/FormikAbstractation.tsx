import { Formik } from "formik";
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from "../components";

export const FormikAbstractation = () => {

    return (
        <div>
            <h1>Formik Abstractation</h1>
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
                        inputJobType: Yup.string().notOneOf(['2'], 'No puedes seleccionar 2').required('Debes de seleccionar una opción válida'),
                    })
                }
            >

                {

                    (formik) => (
                        <form onSubmit={formik.handleSubmit}>

                            <MyTextInput
                                label={'First Name'}
                                name={'inputFirstName'}
                                id={'inputFirstName'}
                                placeholder={'First Name'}
                            />
                            <MyTextInput
                                label={'Last Name'}
                                name={'inputLastName'}
                                id={'inputLastName'}
                                placeholder={'Last Name'}
                            />
                            <MyTextInput
                                label={'Email'}
                                name={'inputEmail'}
                                id={'inputEmail'}
                                placeholder={'email@mail.com'}
                            />
                            <MyCheckbox
                                name={'inputTerms'}
                                id={'inputTerms'}
                                label={'Terms & conditions'}
                            />
                            <MySelect name={'inputJobType'} label={'inputJobType'} id={'inputJobType'}>
                                <option value={''}>Pick something</option>
                                <option value={'1'}>One</option>
                                <option value={'2'}>Two</option>
                            </MySelect>

                            <button type={'submit'}>Submit</button>
                        </form>
                    )

                }

            </Formik>

        </div>
    )
}
