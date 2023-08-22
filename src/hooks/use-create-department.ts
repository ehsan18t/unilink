import { useState, FormEvent } from 'react';
import { useRegisterDepartmentMutation } from '@/redux/features/departmentApiSlice';
import { toast } from 'react-toastify';

export default function useRegister() {
	const [register, { isLoading }] = useRegisterDepartmentMutation();

	const [formData, setFormData] = useState({
		department_name: '',
		department_code: ''
	});

	const { department_name, department_code } = formData;

	const onChange = (event: any) => {
        const { name, value } = event.target;
        console.log(name, value);

		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		register({ department_name, department_code })
			.unwrap()
			.then(() => {
				toast.success('Operation successful!');
			})
			.catch(() => {
				toast.error('Operation failed!');
			});
	};

	return {
		department_name,
		department_code,
		isLoading,
		onChange,
		onSubmit,
	};
}
