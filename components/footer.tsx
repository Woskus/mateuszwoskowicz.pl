import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Container} from '@/components/container';

export function Footer() {
	return (
		<footer className="my-8">
			<Container>
				<div className="grid grid-cols-1 items-center gap-5 border-t pt-5 md:grid-cols-2">
					<div className="text-sm font-medium">
						{new Date().getFullYear()} &copy; Mateusz Woskowicz
					</div>

					<nav className="flex md:justify-end">
						<ul className="m-0 flex list-none flex-wrap p-0">
							<li>
								<Button
									variant="link"
									asChild
								>
									<Link href="/polityka-prywatnosci">
										Polityka prywatności
									</Link>
								</Button>
							</li>
						</ul>
					</nav>
				</div>
			</Container>
		</footer>
	);
}
