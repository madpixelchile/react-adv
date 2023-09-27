import { ErrorMessage, useField } from "formik";

interface Props{
    label: string;
    name: string;
    id: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x:string]: any;
}


export const MyTextInput = ({ label, ...props }:Props) => {

    const [ field, meta ] = useField(props);
    // console.log('FIELD',field);
    return (
        <>
            <label htmlFor={ props.id }>{ label }</label>
            <input className="text-input" { ...field } { ...props } />
            <ErrorMessage name={ props.name } component={'span'} className={'error'}/>
            {/* {
                ( meta.touched && meta.error ) && <span className="error">{ meta.error }</span>
            } */}
        </>
    )
}

