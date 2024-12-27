import Link from 'next/link';
import {Container} from '@/components/container';
import {Button} from '@/components/ui/button';

export function Header() {
	return (
		<header className="fixed w-full top-0 z-50 flex h-16 shrink-0 items-center gap-2 bg-transparent px-4 backdrop-blur-sm">
			<Container className="grid grid-cols-2 py-4">
				<Link href="/">
					<span className="text-2xl font-bold">MW</span>
				</Link>

				<ul className="flex justify-end gap-2">
					<li>
						<Link href="#">
							<Button variant="link">Projekty</Button>
						</Link>
					</li>
					<li>
						<Link href="#">
							<Button variant="link">Doświadczenie</Button>
						</Link>
					</li>
					<li>
            <Link href="#">
              <Button variant="link">Opinie</Button>
            </Link>
					</li>
				</ul>
			</Container>
		</header>
	);
}
