import Link from 'next/link';
import {Download, Linkedin, Github} from 'lucide-react';
import {Container} from '@/components/container';
import {Button} from '@/components/ui/button';
import {OptimizedImage} from '@/components/optimized-image';

export function Hero() {
	return (
		<section className="mt-[160px]">
			<Container>
				<div className="mb-2 w-fit rounded-full border border-border p-1">
					<OptimizedImage
						src="/img/mateusz-woskowicz-avatar.jpg"
						alt="Mateusz Woskowicz"
						className="h-16 w-16 rounded-full"
						width={64}
						height={64}
					/>
				</div>

				<h1 className="text-2xl">Mateusz Woskowicz</h1>

				<p className="text-muted-foreground">Senior Frontend Developer</p>

				<div className="mt-4 flex items-start gap-2">
					<Button
						size="icon"
						variant="outline"
						asChild
					>
						<Link
							href="https://www.linkedin.com/in/mateusz-woskowicz/"
							target="_blank"
							aria-label="LinkedIn"
						>
							<Linkedin className="h-4 w-4" />
						</Link>
					</Button>

					<Button
						size="icon"
						variant="outline"
						asChild
						aria-label="Github"
					>
						<Link
							href="https://github.com/Woskus"
							target="_blank"
						>
							<Github className="h-4 w-4" />
						</Link>
					</Button>
				</div>
			</Container>
		</section>
	);
}
