import localFont from 'next/font/local';
import {Header} from '@/components/header';
import {Footer} from '@/components/footer';
import {Providers} from '@/components/providers';
import './globals.css';

const sen = localFont({
	src: [
		{
			path: '../public/fonts/Sen-Regular.ttf',
			weight: '400',
		},
		{
			path: '../public/fonts/Sen-Medium.ttf',
			weight: '500',
		},
		{
			path: '../public/fonts/Sen-Bold.ttf',
			weight: '700',
		},
	],
	variable: '--font-sen',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl" suppressHydrationWarning>
			<body className={`${sen.variable} antialiased`}>
				<Providers>
					<Header />

					{children}

					<Footer />
				</Providers>
			</body>
		</html>
	);
}
