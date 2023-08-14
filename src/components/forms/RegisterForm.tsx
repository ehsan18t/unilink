'use client';

import { useRegister } from '@/hooks';
import { Input, Select } from '@/components/forms';
import { Spinner } from '@/components/common';

export default function RegisterForm() {
	const {
		first_name,
		last_name,
		username,
		university,
		email,
		password,
		re_password,
		isLoading,
		onChange,
		onSubmit,
	} = useRegister();

	const options = [
			{ value: '1', label: 'Option 1' },
			{ value: '2', label: 'Option 2' },
			{ value: '3', label: 'Option 3' },
	]

	return (
		<form className='space-y-6' onSubmit={onSubmit}>
			<Input
					key="first_name"
					labelId="first_name"
					type="text"
					onChange={onChange}
					value={first_name}
					required={true}
				>
					First name
			</Input>
			<Input
					key="last_name"
					labelId="last_name"
					type="text"
					onChange={onChange}
					value={last_name}
					required={true}
				>
					Last name
			</Input>
			<Input
					key="username"
					labelId="username"
					type="text"
					onChange={onChange}
					value={username}
					required={true}
				>
					Username
			</Input>
			<Select
					key="university"
					labelId="university"
					onChange={onChange}
					value={university}
					required={true}
					options={options}
			>
				University
			</Select>
			<Input
					key="email"
					labelId="email"
					type="email"
					onChange={onChange}
					value={email}
					required={true}
				>
					Email address
			</Input>
			<Input
					key="password"
					labelId="password"
					type="password"
					onChange={onChange}
					value={password}
					required={true}
				>
					Password
			</Input>
			<Input
					key="re_password"
					labelId="re_password"
					type="password"
					onChange={onChange}
					value={re_password}
					required={true}
				>
					Confirm password
			</Input>

			<div>
				<button
					type='submit'
					className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
					disabled={isLoading}
				>
					{isLoading ? <Spinner sm /> : `Sign Up`}
				</button>
			</div>
		</form>
	);
}
