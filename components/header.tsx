'use client';

import {useState} from 'react';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {Container} from '@/components/container';
import {Button} from '@/components/ui/button';
import {Linkedin, Menu, X} from 'lucide-react';
import {motion, AnimatePresence} from 'framer-motion';

const navLinks = [
	{href: '/#projekty', label: 'Wyróżnione projekty'},
	{href: '/#doswiadczenie', label: 'Doświadczenie'},
	{href: '/#o-mnie', label: 'O mnie'},
	{href: '/#opinie', label: 'Opinie'},
	// {href: '/blog', label: 'Blog'},
];

export function Header() {
	const pathname = usePathname()

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<header
			className="fixed top-0 z-50 flex w-full shrink-0 items-center gap-2 bg-transparent backdrop-blur-sm"
			id="start"
		>
			<Container className="grid grid-cols-2 pb-2 pt-4 md:py-4">
				<div>
					<Link
						href={pathname === '/' ? '/#start' : '/'}
						className="z-10 rounded-lg py-2 focus:outline-0 focus-visible:ring-1 focus:ring-primary"
					>
						<span aria-label="Mateusz Woskowicz" className="text-2xl font-bold">MW</span>
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
					</ul>
				</nav>

				{/* Mobile Menu Button */}
				<div className="flex justify-end md:hidden">
					<Button
						variant="ghost"
						size="icon"
						onClick={toggleMobileMenu}
						aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
						aria-expanded={isMobileMenuOpen}
						className="z-10"
					>
						{isMobileMenuOpen ? <X /> : <Menu />}
					</Button>
				</div>
			</Container>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.nav
						className="absolute left-0 right-0 top-0 h-screen bg-background md:hidden"
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						exit={{opacity: 0}}
						transition={{type: 'spring', stiffness: 300, damping: 30}}
					>
						<Container className="h-full">
							<ul className="flex h-full flex-col items-center justify-center gap-5">
								{navLinks.map((link, index) => (
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
											Napisz na LinkedIn
										</Link>
									</Button>
								</li>
							</ul>
						</Container>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
}
