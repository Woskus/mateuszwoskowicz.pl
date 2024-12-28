import Link from 'next/link';
import {Container} from '@/components/container';
import {Button} from '@/components/ui/button';

export function Header() {
	return (
		<header className="fixed w-full top-0 z-50 flex shrink-0 items-center gap-2 bg-transparent backdrop-blur-sm">
			<Container className="grid grid-cols-2 py-4">
				<Link href="/">
					<span className="text-2xl font-bold">MW</span>
				</Link>

				<ul className="flex justify-end gap-8">
					<li>
						<Link href="/#doswiadczenie">
							<Button variant="link">Doświadczenie</Button>
						</Link>
					</li>
					<li>
						<Link href="/blog">
							<Button variant="link">Blog</Button>
						</Link>
					</li>
				</ul>
			</Container>
		</header>
	);
}
