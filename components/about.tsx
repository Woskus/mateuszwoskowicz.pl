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
					<article className="max-w-[800px] space-y-5 text-muted-foreground [&_a]:p-0 [&_a]:h-auto">
						<p>Hej! 👋</p>

						<p>
							Jestem Senior Frontend Developerem z ponad {yearsDiff}
							-letnim doświadczeniem komercyjnym. Specjalizuję się w
							Next.js, React.js, TypeScript oraz Node.js i MySQL.
						</p>

						<p>
							Na co dzień pracuję w{' '}
							<Button
								variant="link"
								asChild
							>
								<Link href="#instreamly">inStreamly</Link>
							</Button>
							, gdzie wraz z zespołem produktowym i biznesowym wdrażam
							innowacyjne rozwiązania. Jednym z kluczowych obszarów mojej
							pracy jest{' '}
							<Button
								variant="link"
								asChild
							>
								<Link
									href="https://www.linkedin.com/posts/maciejsawiksawicki_jak-ai-zmienia-realia-pracy-programist%C3%B3w-activity-7265680977006342144-0VQH?utm_source=share&utm_medium=member_desktop"
									target="_blank"
								>
									implementacja rozwiązań AI
								</Link>
							</Button>{' '}
							oraz{' '}
							<Button
								variant="link"
								asChild
							>
								<Link
									href="https://www.linkedin.com/posts/maciejsawiksawicki_ka%C5%BCdy-obszar-w-firmie-bot-gpt-wszystkie-activity-7199685411844100096-U-xB?utm_source=share&utm_medium=member_desktop"
									target="_blank"
								>
									wspieranie zespołu w rozwoju
								</Link>
							</Button>{' '}
							w tej dziedzinie.
						</p>

						<p>
							Współpracowałem z takimi markami jak{' '}
							<Button
								variant="link"
								asChild
							>
								<Link href="#samsung">Samsung</Link>
							</Button>{' '}
							{/*czy{' '}*/}
							{/*<Button*/}
							{/*	variant="link"*/}
							{/*	asChild*/}
							{/*>*/}
							{/*	<Link href="#pkobp">PKO BP</Link>*/}
							{/*</Button>{' '}*/}
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
									pełną odpowiedzialność (DRI)
								</Link>
							</Button>
							{' '}za powierzone zadania, traktując każdy projekt jak własny, cenię{' '}
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

						<ul className="space-y-2 [&>li]:flex [&>li]:items-center [&_span]:text-primary [&_span]:block [&_span]:mr-1">
							<li>
								<ArrowRight className="mr-2 h-4 w-4 text-primary" />
								<span>Frontend:</span>Next.js, React.js, TypeScript
							</li>
							<li>
								<ArrowRight className="mr-2 h-4 w-4 text-primary" />
								<span>Backend:</span> Node.js, TypeScript, Express.js
							</li>
							<li>
								<ArrowRight className="mr-2 h-4 w-4 text-primary" />
								<span>Bazy danych:</span> MySQL, PostgreSQL
							</li>
							<li>
								<ArrowRight className="mr-2 h-4 w-4 text-primary" />
								<span>AI:</span> Claude, SuperMaven, v0, AWS Bedrock, OpenAI API
							</li>
							<li>
								<ArrowRight className="mr-2 h-4 w-4 text-primary" />
								<span>Testy:</span> Cypress, Jest, Playwright
							</li>
							<li>
								<ArrowRight className="mr-2 h-4 w-4 text-primary" />
								<span>Stylowanie:</span> TailwindCSS, Shadcn UI, SCSS
							</li>
							<li>
								<ArrowRight className="mr-2 h-4 w-4 text-primary" />
								<span>Narzędzia:</span> Git, Github, Webstorm, Cursor, Docker, Figma, ClickUp
							</li>
							<li>
								<ArrowRight className="mr-2 h-4 w-4 text-primary" />
								<span>Cloud:</span> AWS
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
