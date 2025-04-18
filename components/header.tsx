'use client';

import {useState} from 'react';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {useTranslations, useLocale} from 'next-intl';
import {Linkedin, Menu, X} from 'lucide-react';
import {motion, AnimatePresence} from 'framer-motion';
import {Container} from '@/components/container';
import {Button} from '@/components/ui/button';
import {Mw} from '@/components/logotypes';
import {DarkModeToggler} from '@/components/dark-mode-toggler';
import {LocaleSwitcher} from '@/components/locale-switcher/locale-switcher';

export function Header() {
	const t = useTranslations('Header');
	const locale = useLocale();
	const pathname = usePathname();

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	const navLinks = [
		{href: `/${locale}/#projects`, label: t('featuredProjects')},
		{href: `/${locale}/#experience`, label: t('experience')},
		{href: `/${locale}/#about`, label: t('about')},
		{href: `/${locale}/#testimonials`, label: t('testimonials')},
	];

	return (
		<header
			className="fixed top-0 z-50 flex w-full shrink-0 items-center gap-2 bg-transparent backdrop-blur-sm"
			id="start"
		>
			<Container className="grid grid-cols-2 pb-2 pt-4 md:py-4">
				<div>
					<Link
						href={pathname === `/${locale}/` ? `/${locale}#start` : `/${locale}/`}
						className="z-10 rounded-lg py-2 focus:outline-0 focus:ring-primary focus-visible:ring-1"
					>
						<Mw className="w-[36px] h-auto" />
					</Link>
				</div>

				<nav className="hidden md:block">
					<ul className="flex justify-end gap-8">
						{navLinks.map((link) => (
							<li key={link.href}>
								<Button
									variant="link"
									asChild
								>
									<Link href={link.href}>{link.label}</Link>
								</Button>
							</li>
						))}

						<li>
							<LocaleSwitcher />
						</li>

						<li>
							<DarkModeToggler />
						</li>
					</ul>
				</nav>

				<div className="flex justify-end md:hidden">
					<Button
						variant="ghost"
						size="icon"
						onClick={toggleMobileMenu}
						aria-label={
							isMobileMenuOpen ? t('menuCloseState') : t('menuOpenState')
						}
						aria-expanded={isMobileMenuOpen}
						className="z-10"
					>
						{isMobileMenuOpen ? <X /> : <Menu />}
					</Button>
				</div>
			</Container>

			<AnimatePresence>
				{isMobileMenuOpen ? <motion.nav
						className="absolute left-0 right-0 top-0 h-screen bg-background md:hidden"
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						exit={{opacity: 0}}
						transition={{type: 'spring', stiffness: 300, damping: 30}}
					>
						<Container className="h-full">
							<ul className="flex h-full flex-col items-center justify-center gap-5">
								{navLinks.map((link) => (
									<li key={link.href}>
										<Button
											variant="link"
											className="w-full justify-start"
											asChild
										>
											<Link
												href={link.href}
												onClick={closeMobileMenu}
											>
												{link.label}
											</Link>
										</Button>
									</li>
								))}

								<li>
									<Button
										className="w-full justify-start"
										size="lg"
										asChild
									>
										<Link
											href="https://linkedin.com/in/mateusz-woskowicz"
											target="_blank"
											onClick={closeMobileMenu}
										>
											<Linkedin className="mr-2 h-4 w-4" />
											{t('linkedinLabel')}
										</Link>
									</Button>
								</li>

								<li>
									<LocaleSwitcher />
								</li>

								<li>
									<DarkModeToggler />
								</li>
							</ul>
						</Container>
					</motion.nav> : null}
			</AnimatePresence>
		</header>
	);
}
