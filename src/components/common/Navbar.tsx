'use client';

import { usePathname } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { useLogoutMutation } from '@/redux/features/authApiSlice';
import { logout as setLogout } from '@/redux/features/authSlice';
import { NavLink } from '@/components/common';

export default function Navbar() {
	const pathname = usePathname();
	const dispatch = useAppDispatch();

	const [logout] = useLogoutMutation();

	const { isAuthenticated } = useAppSelector(state => state.auth);

	const handleLogout = () => {
		logout(undefined)
			.unwrap()
			.then(() => {
				dispatch(setLogout());
			});
	};

	const isSelected = (path: string) => (pathname === path ? true : false);

	const authLinks = (isMobile: boolean) => (
		<>
			<NavLink
				isSelected={isSelected('/dashboard')}
				isMobile={isMobile}
				href='/dashboard'
			>
				Dashboard
			</NavLink>
			<NavLink isMobile={isMobile} onClick={handleLogout}>
				Logout
			</NavLink>
		</>
	);

	const guestLinks = (isMobile: boolean) => (
		<>
			<NavLink
				isSelected={isSelected('/nl/auth/login')}
				isMobile={isMobile}
				href='/nl/auth/login'
			>
				Login
			</NavLink>
			<NavLink
				isSelected={isSelected('/nl/auth/register')}
				isMobile={isMobile}
				href='/nl/auth/register'
			>
				Register
			</NavLink>
		</>
	);

	return (
		<div className='w-full h-20 flex items-center bg-slate-600'>
			<div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
				<div className='flex flex-shrink-0 items-center'>
					<NavLink href='/' isBanner>
						UniLink
					</NavLink>
				</div>
				<div className='hidden sm:ml-6 sm:block'>
					<div className='flex space-x-4'>
						{isAuthenticated
							? authLinks(false)
							: guestLinks(false)}
					</div>
				</div>
			</div>
		</div>
	);
}
