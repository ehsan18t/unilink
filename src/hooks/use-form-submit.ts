import { useState, FormEvent } from 'react';
import { toast } from 'react-toastify';

async function performRegistration(registerFunction: any, data: any) {
    try {
        const response = await registerFunction(data);
        if (response?.data?.id) {
            toast.success('Operation successful!');
            return response;
        } else {
            toast.error('Operation failed!');
            return null;
        }
    } catch (error) {
        toast.error('An error occurred!');
        console.error(error);
        return null;
    }
}

export default function useFormSubmit(registerFunction: any, initialFormData: any) {
    const [formData, setFormData] = useState(initialFormData);

    const onChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        return await performRegistration(registerFunction, formData);
    };

    const updateFormData = (newFormData: any) => {
        setFormData(newFormData);
    };

    return {
        formData,
        onChange,
        onSubmit,
        updateFormData,
    };
}
