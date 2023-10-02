import { ErrorMessage, useField } from "formik";

interface Props {
    label: string;
    name: string;
    id: string;
    [x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: Props) => {

    const [field ] = useField({ ...props, type: 'checkbox' });

    return (
        <>
            <label style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px' }}>
                <input type={'checkbox'} {...field} {...props} />
                {label}
            </label>
            <ErrorMessage name={ props.name } component={'span'} className={'error'}/>
        </>
    )
}

