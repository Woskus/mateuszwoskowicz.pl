import dayjs from 'dayjs';
import {ArrowRight} from 'lucide-react';
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {Container} from '@/components/container';
import {Button} from '@/components/ui/button';
import {OptimizedImage} from '@/components/optimized-image';

export function About() {
	const t = useTranslations('HomePage');
	const startDate = dayjs('2019-08-01');
	const currentDate = dayjs();
	const yearsDiff = currentDate.diff(startDate, 'year');

	return (
		<section
			className="mt-16"
			id="about"
		>
			<Container>
				<h2 className="mb-5 text-base">{t('about.title')}</h2>
				<div className="flex flex-col items-start justify-between gap-5 md:flex-row">
					<article className="max-w-[800px] space-y-5 text-muted-foreground [&_a]:h-auto [&_a]:p-0">
						<p>{t('about.greeting')}</p>
						<p>{t('about.experience', {yearsDiff})}</p>
						<p>
							{t.rich('about.work.description', {
								instreamly: (chunks) => (
									<Button
										variant="link"
										asChild
									>
										<Link href="#instreamly">{chunks}</Link>
									</Button>
								),
								aiImplementation: (chunks) => (
									<Button
										variant="link"
										asChild
									>
										<Link
											href="https://www.linkedin.com/posts/maciejsawiksawicki_jak-ai-zmienia-realia-pracy-programist%C3%B3w-activity-7265680977006342144-0VQH?utm_source=share&utm_medium=member_desktop"
											target="_blank"
										>
											{chunks}
										</Link>
									</Button>
								),
								teamSupport: (chunks) => (
									<Button
										variant="link"
										asChild
									>
										<Link
											href="https://www.linkedin.com/posts/maciejsawiksawicki_ka%C5%BCdy-obszar-w-firmie-bot-gpt-wszystkie-activity-7199685411844100096-U-xB?utm_source=share&utm_medium=member_desktop"
											target="_blank"
										>
											{chunks}
										</Link>
									</Button>
								),
							})}
						</p>
						<p>
							{t.rich('about.brands.description', {
								samsung: (chunks) => (
									<Button
										variant="link"
										asChild
									>
										<Link href="#samsung">{chunks}</Link>
									</Button>
								),
								pkobp: (chunks) => (
									<Button
										variant="link"
										asChild
									>
										<Link href="#pkobp">{chunks}</Link>
									</Button>
								),
								mwebs: (chunks) => (
									<Button
										variant="link"
										asChild
									>
										<Link href="#mwebs">{chunks}</Link>
									</Button>
								),
							})}
						</p>
						<p>
							{t.rich('about.values.description', {
								dri: (chunks) => (
									<Button
										variant="link"
										asChild
									>
										<Link
											href="https://handbook.gitlab.com/handbook/people-group/directly-responsible-individuals/"
											target="_blank"
										>
											{chunks}
										</Link>
									</Button>
								),
								feedback: (chunks) => (
									<Button
										variant="link"
										asChild
									>
										<Link
											href="https://handbook.gitlab.com/handbook/people-group/guidance-on-feedback/"
											target="_blank"
										>
											{chunks}
										</Link>
									</Button>
								),
								nvc: (chunks) => (
									<Button
										variant="link"
										asChild
									>
										<Link
											href="https://nonviolentcommunication.com/learn-nonviolent-communication/nvc-workplace/"
											target="_blank"
										>
											{chunks}
										</Link>
									</Button>
								),
							})}
						</p>
						<p className="text-primary">{t('about.techStack.title')}</p>
						<ul className="space-y-2 [&>li]:flex [&>li]:items-center [&_span]:mr-1 [&_span]:block [&_span]:text-primary">
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
								<span>{t('about.techStack.database')}:</span> MySQL, PostgreSQL
							</li>
							<li>
								<ArrowRight className="mr-2 h-4 w-4 text-primary" />
								<span>AI:</span> Claude, SuperMaven, v0, AWS Bedrock, OpenAI API
							</li>
							<li>
								<ArrowRight className="mr-2 h-4 w-4 text-primary" />
								<span>{t('about.techStack.tests')}:</span> Cypress, Jest, Playwright
							</li>
							<li>
								<ArrowRight className="mr-2 h-4 w-4 text-primary" />
								<span>{t('about.techStack.styling')}:</span> TailwindCSS, Shadcn UI, SCSS
							</li>
							<li>
								<ArrowRight className="mr-2 h-4 w-4 text-primary" />
								<span>{t('about.techStack.tools')}:</span> Git, Github, Webstorm, Cursor, Docker, Figma, ClickUp
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
