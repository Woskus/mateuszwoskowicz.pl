'use client';

import {useState} from 'react';
import Link from 'next/link';
import {Container} from '@/components/container';
import {Button} from '@/components/ui/button';
import {Linkedin, Menu, X} from 'lucide-react';
import {motion, AnimatePresence} from 'framer-motion';

const navLinks = [
	{href: '/#projekty', label: 'Projekty'},
	{href: '/#doswiadczenie', label: 'Doświadczenie'},
	{href: '/#opinie', label: 'Opinie'},
	// {href: '/blog', label: 'Blog'},
];

export function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<header className="fixed top-0 z-50 flex w-full shrink-0 items-center gap-2 bg-transparent backdrop-blur-sm">
			<Container className="grid grid-cols-2 md:py-4 pt-4 pb-2">
				<Link
					href="/"
					className="z-10"
				>
					<span className="text-2xl font-bold">MW</span>
				</Link>

				<nav className="hidden md:block">
					<ul className="flex justify-end gap-8">
						{navLinks.map((link) => (
							<li key={link.href}>
								<Link href={link.href}>
									<Button variant="link">{link.label}</Button>
								</Link>
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
										<Link
											href={link.href}
											onClick={closeMobileMenu}
										>
											<Button
												variant="link"
												className="w-full justify-start"
											>
												{link.label}
											</Button>
										</Link>
									</li>
								))}

								<li>
									<Link
										href="https://linkedin.com/in/mateusz-woskowicz"
										target="_blank"
										onClick={closeMobileMenu}
									>
										<Button
											className="w-full justify-start"
											size="lg"
										>
											<Linkedin className="mr-2 h-4 w-4" />
											LinkedIn
										</Button>
									</Link>
								</li>
							</ul>
						</Container>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
}
