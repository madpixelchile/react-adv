import { ErrorMessage, useField } from "formik";
import { ReactNode } from "react";

interface Props{
    label: string;
    name: string;
    id: string;
    children: ReactNode;
    [x:string]: any;
}

export const MySelect = ({ label, ...props }:Props) => {

    const [ field, meta ] = useField(props);

    return (
        <>
            <label htmlFor={props.id}>{ label }</label>
            <select { ...field } { ...props } />
            <ErrorMessage name={ props.name } component={'span'} className={'error'}/>
            {/* {
                ( meta.touched && meta.error ) && <span className="error">{ meta.error }</span>
            } */}
        </>
    )
}

