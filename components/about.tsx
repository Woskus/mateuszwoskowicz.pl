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
					<article className="max-w-[800px] space-y-5 text-muted-foreground">
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
							Miałem przyjemność współpracować z takimi markami jak{' '}
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
							</Button>{' '}
							jako freelancer. Po godzinach prowadzę własną działalność{' '}
							<Button
								variant="link"
								asChild
							>
								<Link href="#mwebs">mwebs</Link>
							</Button>
							, gdzie tworzę strony i aplikacje dla kilkudziesięciu
							klientów.
						</p>

						<p>
							W mojej pracy biorę{' '}
							<Button
								variant="link"
								asChild
							>
								<Link
									href="https://handbook.gitlab.com/handbook/people-group/directly-responsible-individuals/"
									target="_blank"
								>
									pełną odpowiedzialność za powierzone zadania (DRI)
								</Link>
							</Button>
							, traktując każdy projekt jak własny, cenię{' '}
							<Button
								variant="link"
								asChild
							>
								<Link
									href="https://handbook.gitlab.com/handbook/people-group/guidance-on-feedback/"
									target="_blank"
								>
									szczerą i konstruktywną komunikację (Feedback)
								</Link>
							</Button>{' '}
							i wierzę, że{' '}
							<Button
								variant="link"
								asChild
							>
								<Link
									href="https://nonviolentcommunication.com/learn-nonviolent-communication/nvc-workplace/"
									target="_blank"
								>
									życzliwość i wzajemny szacunek (NVC)
								</Link>
							</Button>{' '}
							są kluczem do sukcesu w zespole.
						</p>

						<p className="text-primary">Mój stack technologiczny:</p>

						<ul className="space-y-1 [&>li]:flex [&>li]:items-center">
							<li>
								<ArrowRight className="mr-2 h-4 w-4 text-primary" />
								Frontend: React.js, Next.js, TypeScript
							</li>
							<li>
								<ArrowRight className="mr-2 h-4 w-4 text-primary" />
								Backend: Node.js, TypeScript, Express
							</li>
							<li>
								<ArrowRight className="mr-2 h-4 w-4 text-primary" />
								Bazy danych: MySQL, PostgreSQL
							</li>
							<li>
								<ArrowRight className="mr-2 h-4 w-4 text-primary" />
								AI: Claude, SuperMaven, v0, AWS Bedrock, OpenAI API
							</li>
							<li>
								<ArrowRight className="mr-2 h-4 w-4 text-primary" />
								Narzędzia: TailwindCSS, Shadcn UI, SCSS
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
