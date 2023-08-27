import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useRegisterUniversityMutation } from '@/redux/features/universityApiSlice'

import { toast } from 'react-toastify';

export default function useUniversityRegister() {
	const router = useRouter();
	const [register, { isLoading }] = useRegisterUniversityMutation();

	const [formData, setFormData] = useState({
        name: '',
        domain: '',
        first_name: '',
        last_name: '',
        username: '',
        email: '',
      });

	const { name, domain, first_name, last_name, username, email} = formData;

	const onChange = (event: any) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		register({ name, domain, admin: {first_name, last_name, username, email}})
			.unwrap()
			.then(() => {
				toast.success('Please wait until your university is approved');
				router.push('/nl/auth/login');
			})
			.catch(() => {
				toast.error('Failed to register university');
			});
	};

    return {
        name, domain, first_name, last_name, username, email,
		isLoading,
		onChange,
		onSubmit,
	};
}
