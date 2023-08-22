import { useState, FormEvent } from 'react';
import { useRegisterDepartmentMutation } from '@/redux/features/departmentApiSlice';
import { toast } from 'react-toastify';
import { useSharedList } from '@/hooks'

export default function useRegister() {
	const [register, { isLoading }] = useRegisterDepartmentMutation();
	const { addItem } = useSharedList()

	const [formData, setFormData] = useState({
		department_name: '',
		department_code: ''
	});

	const { department_name, department_code } = formData;

	const onChange = (event: any) => {
        const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const response: any = await register({ name: department_name, code: department_code });
			if (response?.data?.id) {
			  toast.success('Operation successful!');
				addItem(response)
		  } else {
			toast.error('Operation failed!');
		  }
		} catch (error) {
		  toast.error('An error occurred!');
		  console.error(error);
		}
	  };
	  

	return {
		department_name,
		department_code,
		isLoading,
		onChange,
		onSubmit,
	};
}
