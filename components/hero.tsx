import Link from 'next/link';
import {Linkedin, Github} from 'lucide-react';
import {Container} from '@/components/container';
import {Button} from '@/components/ui/button';

export function Hero() {
	return (
		<section className="mt-[160px]">
			<Container>
				<div className="mb-2 w-fit rounded-full border border-border p-1">
					<img
						src="/img/mateusz-woskowicz.jpg"
						alt="Mateusz Woskowicz"
						className="rounded-full"
					/>
				</div>

				<h1 className="text-2xl">Mateusz Woskowicz</h1>

				<p className="text-muted-foreground">Senior Frontend Developer</p>

				<div className="mt-4 space-x-2">
					<Link
						href="https://www.linkedin.com/in/mateusz-woskowicz/"
						target="_blank"
					>
						<Button
							size="icon"
							variant="outline"
						>
							<Linkedin className="h-4 w-4" />
						</Button>
					</Link>

					<Link
						href="https://github.com/Woskus"
						target="_blank"
					>
						<Button
							size="icon"
							variant="outline"
						>
							<Github className="h-4 w-4" />
						</Button>
					</Link>
				</div>
			</Container>
		</section>
	);
}
