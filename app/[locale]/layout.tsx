import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import localFont from 'next/font/local';
import {routing} from '@/lib/i18n/routing';
import {Header} from '@/components/header';
import {Footer} from '@/components/footer';
import {Providers} from '@/components/providers';
import './globals.css';

const sen = localFont({
	src: [
		{
			path: '../../public/fonts/Sen-Regular.ttf',
			weight: '400',
		},
		{
			path: '../../public/fonts/Sen-Medium.ttf',
			weight: '500',
		},
		{
			path: '../../public/fonts/Sen-Bold.ttf',
			weight: '700',
		},
	],
	variable: '--font-sen',
});

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{locale: string}>;
}) {
	const {locale} = await params;

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<html
			lang={locale}
			suppressHydrationWarning
		>
			<body className={`${sen.variable} antialiased`}>
				<NextIntlClientProvider
					locale={locale}
					timeZone="Europe/Warsaw"
				>
					<Providers>
						<Header />

						{children}

						<Footer />
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
