import { useState, FormEvent } from 'react';
import { toast } from 'react-toastify';

async function performRegistration(registerFunction: any, data: any) {
    try {
        const response = await registerFunction(data);
        if (response?.data?.id || response?.status == 200) {
            
        // show info toast for 2 sec
        toast.info('Processing...', { autoClose: 2000 });

        // delay 2 sec
        await new Promise((resolve) => setTimeout(resolve, 2000));

        toast.success('Operation Successful!', { autoClose: 2000 });
            return response;
        } else {
            toast.error('Operation failed!', { autoClose: 2000 });
            return null;
        }
    } catch (error) {
        toast.error('An error occurred!', { autoClose: 2000 });
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
