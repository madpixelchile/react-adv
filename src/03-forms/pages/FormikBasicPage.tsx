import { FormikErrors, useFormik } from "formik"

interface FormValuesProps {
    inputFirstName: string;
    inputLastName: string;
    inputEmail: string;
}

export const FormikBasicPage = () => {

    const validate = ({ inputLastName, inputFirstName, inputEmail }:FormValuesProps) => {
        const errors: FormikErrors<FormValuesProps> = {};

        if(!inputFirstName){
            errors.inputFirstName = 'Required field';
        }else if(inputFirstName.length >= 15){
            errors.inputFirstName = 'Must be 15 characters or less';
        }

        if(!inputLastName){
            errors.inputLastName = 'Required field';
        }else if(inputLastName.length >= 10){
            errors.inputLastName = 'Must be 10 characters or less';
        }

        if(!inputEmail){
            errors.inputEmail = 'Required field';
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputEmail)){
            errors.inputEmail = 'Invalid email address';
        }

        console.log(errors);
        return errors;

    }

    const { handleChange, values:{ inputFirstName, inputLastName, inputEmail }, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            inputFirstName: '',
            inputLastName: '',
            inputEmail: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate
    });


    return (
        <div>
            <h1>Formik basic tutorial</h1>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="inputFirstName">First Name</label>
                <input
                    type={'text'}
                    name={'inputFirstName'}
                    id={'inputFirstName'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={inputFirstName}
                />
                
                {
                    (touched.inputFirstName && errors.inputFirstName) && <span>{errors.inputFirstName}</span>
                }

                <label htmlFor="inputLastName">Last Name</label>
                <input
                    type={'text'}
                    name={'inputLastName'}
                    id={'inputLastName'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={inputLastName}
                />
                {
                    (touched.inputLastName && errors.inputLastName) && <span>{errors.inputLastName}</span>
                }
                <label htmlFor="inputEmail">Email</label>
                <input
                    type={'email'}
                    name={'inputEmail'}
                    id={'inputEmail'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={inputEmail}
                />
                {
                    (touched.inputEmail && errors.inputEmail) && <span>{errors.inputEmail}</span>
                }
                <button>Submit</button>
            </form>
        </div>
    )
}
