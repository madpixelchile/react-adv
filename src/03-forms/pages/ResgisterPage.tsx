
import { useForm } from '../hooks/useForm'


interface FormDataProps{
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

export const ResgisterPage = () => {

    const {
        inputName,
        inputEmail,
        inputPassword1,
        inputPassword2,
        handleChange,
        formData,
        handleReset,
        isValidEmail
    } = useForm<FormDataProps>(defaultFormData);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div>

            <h1>Register page</h1>

            <form noValidate onSubmit={handleSubmit}>

                <input
                    type={'text'}
                    placeholder={'Name'}
                    name={'inputName'}
                    value={inputName}
                    onChange={handleChange}
                    className={`${inputName.trim().length <=0 && 'has-error'}`}
                />
                {
                    inputName.trim().length <=0 && <span>Este campo es necesario</span>
                }
                <input
                    type={'email'}
                    placeholder={'Email'}
                    autoComplete={'on'}
                    name={'inputEmail'}
                    value={inputEmail}
                    onChange={handleChange}
                    className={`${!isValidEmail(inputEmail) && 'has-error'}`}
                />
                {
                    !isValidEmail(inputEmail) && <span>El email no es válido</span>
                }
                <input
                    type={'password'}
                    placeholder={'Password'}
                    autoComplete={'off'}
                    name={'inputPassword1'}
                    value={inputPassword1}
                    onChange={handleChange}
                />
                {
                    inputPassword1.trim().length <=0 && <span>Este campo es necesario</span>
                }
                {
                    (inputPassword1.trim().length < 6 && inputPassword1.trim().length > 0) && <span>El password debe de tener al menos 6 dígitos</span>
                }
                <input
                    type={'password'}
                    placeholder={'Repeat password'}
                    autoComplete={'off'}
                    name={'inputPassword2'}
                    value={inputPassword2}
                    onChange={handleChange}
                />
                {
                    inputPassword2.trim().length <=0 && <span>Este campo es necesario</span>
                }
                {
                    (inputPassword2.trim().length > 0 && inputPassword2 !== inputPassword1)  && <span>Los passwords no coinciden</span>
                }
                <button>Create</button>
                <button type={'button'} onClick={handleReset}>Reset Form</button>
            </form>

        </div>
    )
}

