import dayjs from 'dayjs';
import {ArrowRight} from 'lucide-react';
import {Container} from '@/components/container';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {OptimizedImage} from '@/components/optimized-image';

export function About() {
	const startDate = dayjs('2019-08-01');
	const currentDate = dayjs();

	const yearsDiff = currentDate.diff(startDate, 'year');

	return (
		<section
			className="mt-16"
			id="o-mnie"
		>
			<Container>
				<h2 className="mb-5 text-base">O mnie</h2>

				<div className="flex flex-col items-start justify-between gap-5 md:flex-row">
					<article className="max-w-[750px] space-y-5 text-muted-foreground">
						<p>Hej! 👋</p>

						<p>
							Jestem Senior Frontend Developerem z ponad {yearsDiff}
							-letnim doświadczeniem komercyjnym. Na co dzień pracuję w{' '}
							<Button
								variant="link"
								asChild
							>
								<Link href="#instreamly">inStreamly</Link>
							</Button>
							, gdzie oprócz kodowania, chętnie pomagam przy rozwoju
							projektu i wdrażam rozwiązania AI.
						</p>

						<p>
							Po godzinach prowadzę własną działalność{' '}
							<Button
								variant="link"
								asChild
							>
								<Link href="#mwebs">mwebs</Link>
							</Button>
							, gdzie tworzę strony i aplikacje dla moich klientów. Miałem
							przyjemność współpracować z takimi markami jak{' '}
							<Button
								variant="link"
								asChild
							>
								<Link href="#samsung">Samsung</Link>
							</Button>{' '}
							czy{' '}
							<Button
								variant="link"
								asChild
							>
								<Link href="#pkobp">PKO BP</Link>
							</Button>
							, a także współtworzyłem jedną z większych społeczności
							marketingowych w Polsce -{' '}
							<Button
								variant="link"
								asChild
							>
								<Link href="#dcc">Digital Creators Community</Link>
							</Button>
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
							<li>
								<ArrowRight className="mr-2 h-4 w-4 text-primary" />
								Cloud: AWS
							</li>
						</ul>
					</article>

					<OptimizedImage
						src="https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/mateusz-woskowicz.jpg"
						alt="Mateusz Woskowicz"
						className="rounded-lg"
						width={360}
						height={360}
						loading="lazy"
					/>
				</div>
			</Container>
		</section>
	);
}
