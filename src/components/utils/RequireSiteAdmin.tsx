'use client';

import { redirect } from 'next/navigation';
import { Spinner } from '@/components/common';
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice'

interface Props {
	children: React.ReactNode;
}

export default function RequireAuth({ children }: Props) {
    const { data: user, isLoading, isFetching } = useRetrieveUserQuery()

	if (isLoading) {
		return (
			<div className='flex justify-center my-8'>
				<Spinner lg />
			</div>
		);
	}

    if (user && user.user_type != 0 && user.user_type > 2) {
        redirect('/l/dashboard');
    } else if (user && user.user_type > 0) {
        redirect('/l/admin/university/dashboard');
    }

	return <>{children}</>;
}
