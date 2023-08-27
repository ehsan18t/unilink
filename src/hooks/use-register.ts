import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useRegisterMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-toastify';

export default function useRegister() {
	const router = useRouter();
	const [register, { isLoading }] = useRegisterMutation();

	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		username: '',
		university: '',
		department: '',
		email: '',
		password: '',
		re_password: '',
	});

	const { first_name, last_name, username, university, department, email, password, re_password } = formData;

	const onChange = (event: any) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		register({ first_name, last_name, username, university, department, email, password, re_password })
			.unwrap()
			.then(() => {
				toast.success('Please check email to verify account');
				router.push('/nl/auth/login');
			})
			.catch(() => {
				toast.error('Failed to register account');
			});
	};

	return {
		first_name,
		last_name,
		username,
		university,
		department,
		email,
		password,
		re_password,
		isLoading,
		onChange,
		onSubmit,
	};
}
