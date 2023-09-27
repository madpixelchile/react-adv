import { useState } from 'react';

export const useForm = <T>(initialData: T) => {
    const [formData, setFormData] = useState({...initialData});

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = target;
        setFormData((state) => ({
            ...state,
            [name]: value
        }))
    }

    const handleReset = ()=>{
        setFormData(initialData);
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // console.log(re.test(email))
        return re.test(email);
    }
    
    return {
        formData,
        ...formData,
        handleChange,
        handleReset,
        isValidEmail
    }
}

