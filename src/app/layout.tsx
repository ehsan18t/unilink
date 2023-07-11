
import { SideBar } from '@/components/nav/SideBar'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'

import type { Metadata } from 'next';
import Provider from '@/redux/provider';
import { Footer, Navbar } from '@/components/common';
import { Setup } from '@/components/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'UniLink',
	description: 'UniLink application that provides jwt authentication',
};


export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className="">
				<Provider>
					<Setup />
					<Navbar />
					<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-8'>
						{children}
					</div>
					<Footer />
				</Provider>
			</body>
		</html>
	);
}
