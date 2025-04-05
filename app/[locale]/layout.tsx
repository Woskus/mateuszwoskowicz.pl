import {hasLocale} from 'next-intl';
import {getTranslations} from 'next-intl/server';
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
	const t = await getTranslations();

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	const navLinks = [
		{href: '/#projekty', label: t('Header.featuredProjects')},
		{href: '/#doswiadczenie', label: t('Header.experience')},
		{href: '/#o-mnie', label: t('Header.about')},
		{href: '/#opinie', label: t('Header.testimonials')},
	];

	return (
		<html
			lang={locale}
			suppressHydrationWarning
		>
			<body className={`${sen.variable} antialiased`}>
				<Providers locale={locale}>
					<Header
						links={navLinks}
						menuOpenStateLabel={t('Header.menuOpenState')}
						menuCloseStateLabel={t('Header.menuCloseState')}
						linkedinLabel={t('Header.linkedinLabel')}
					/>

					{children}

					<Footer />
				</Providers>
			</body>
		</html>
	);
}
