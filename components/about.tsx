import dayjs from 'dayjs';
import {ArrowRight} from 'lucide-react';
import {Container} from '@/components/container';
import Link from 'next/link';
import {Button} from '@/components/ui/button';

export function About() {
	const startDate = dayjs('2019-08-01');
	const currentDate = dayjs();

	const yearsDiff = currentDate.diff(startDate, 'year');

	return (
		<section className="mt-16">
			<Container>
				<h2 className="mb-5 text-base">O mnie</h2>

				<article className="space-y-5 text-muted-foreground">
					<p>Hej! 👋</p>

					<p>
						Jestem Senior Frontend Developerem z ponad {yearsDiff}
						-letnim doświadczeniem komercyjnym. Na co dzień pracuję w{' '}
						<Link href="#instreamly">
							<Button variant="link">inStreamly</Button>
						</Link>
						, gdzie oprócz kodowania, chętnie pomagam przy rozwoju projektu i
						wdrażam rozwiązania AI.
					</p>

					<p>
						Po godzinach prowadzę własną działalność{' '}
						<Link href="#mwebs">
							<Button variant="link">mwebs</Button>
						</Link>
						, gdzie tworzę strony i aplikacje dla moich klientów. Miałem
						przyjemność współpracować z takimi markami jak{' '}
						<Link href="#samsung">
							<Button variant="link">Samsung</Button>
						</Link>{' '}
						czy{' '}
						<Link href="#pkobp">
							<Button variant="link">PKO BP</Button>
						</Link>
						, a także współtworzyłem jedną z większych społeczności
						marketingowych w Polsce -{' '}
						<Link href="#dcc">
							<Button variant="link">Digital Creators Community</Button>
						</Link>
						.
					</p>

					<p className="text-primary">Mój stack technologiczny:</p>

					<ul className="space-y-1 [&>li]:flex [&>li]:items-center">
						<li>
							<ArrowRight className="mr-2 h-4 w-4 text-primary" />
							Frontend: React.js, Next.js, TypeScript
						</li>
						<li>
							<ArrowRight className="mr-2 h-4 w-4 text-primary" />
							Backend: Node.js, Express
						</li>
						<li>
							<ArrowRight className="mr-2 h-4 w-4 text-primary" />
							Bazy danych: MySQL, PostgreSQL
						</li>
						<li>
							<ArrowRight className="mr-2 h-4 w-4 text-primary" />
							AI: Claude, SuperMaven, AWS Bedrock, GPT API
						</li>
						<li>
							<ArrowRight className="mr-2 h-4 w-4 text-primary" />
							Narzędzia: TailwindCSS, Shadcn UI
						</li>
					</ul>
				</article>
			</Container>
		</section>
	);
}
