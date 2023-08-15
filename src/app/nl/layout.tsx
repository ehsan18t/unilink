import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Footer, Navbar } from '@/components/common';

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
		<>
			<Navbar />
				<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-8'>
					{children}
				</div>
			<Footer />
		</>
	);
}
