import dayjs from 'dayjs';
import {Calendar, ArrowRight} from 'lucide-react';
import {Badge, BadgeProps} from '@/components/ui/badge';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {Container} from '@/components/container';
import {Instreamly, Pkobp, Samsung} from '@/components/logotypes';

interface Experience {
	logo: React.ReactNode;
	type: 'full-time' | 'freelance';
	positions: Array<{
		title: string;
		startDate: Date;
		endDate?: Date;
		description: string;
		projects: Array<{
			name: string;
			description: string;
		}>;
	}>;
}

const experiencesColorsMap: Record<Experience['type'], BadgeProps['variant']> = {
	'full-time': 'success',
	freelance: 'warning',
};

const experiences: Experience[] = [
	{
		logo: <Instreamly />,
		type: 'full-time',
		positions: [
			{
				title: 'Senior Frontend Developer',
				startDate: new Date('2024-06-01'),
				description:
					'Lead development of cloud-based solutions and mentored junior developers.',
				projects: [
					{
						name: 'CloudScale',
						description:
							'Developed a scalable cloud infrastructure solution, increasing system efficiency by 40%.',
					},
					{
						name: 'DevOps Pipeline',
						description:
							'Implemented a new CI/CD pipeline, reducing deployment time by 60%.',
					},
				],
			},
			{
				title: 'Frontend Developer',
				startDate: new Date('2021-10-01'),
				endDate: new Date('2024-06-01'),
				description:
					'Lead development of cloud-based solutions and mentored junior developers.',
				projects: [
					{
						name: 'CloudScale',
						description:
							'Developed a scalable cloud infrastructure solution, increasing system efficiency by 40%.',
					},
					{
						name: 'DevOps Pipeline',
						description:
							'Implemented a new CI/CD pipeline, reducing deployment time by 60%.',
					},
				],
			},
			{
				title: 'Junior Frontend Developer',
				startDate: new Date('2020-12-01'),
				endDate: new Date('2021-10-01'),
				description:
					'Lead development of cloud-based solutions and mentored junior developers.',
				projects: [
					{
						name: 'CloudScale',
						description:
							'Developed a scalable cloud infrastructure solution, increasing system efficiency by 40%.',
					},
					{
						name: 'DevOps Pipeline',
						description:
							'Implemented a new CI/CD pipeline, reducing deployment time by 60%.',
					},
				],
			},
		],
	},
	{
		logo: <Pkobp />,
		type: 'freelance',
		positions: [
			{
				title: 'Strona internetowa projektu Fortnite',
				startDate: new Date('2024-10-01'),
				endDate: new Date('2025-03-01'),
				description:
					'Lead development of cloud-based solutions and mentored junior developers.',
				projects: [
					{
						name: 'CloudScale',
						description:
							'Developed a scalable cloud infrastructure solution, increasing system efficiency by 40%.',
					},
					{
						name: 'DevOps Pipeline',
						description:
							'Implemented a new CI/CD pipeline, reducing deployment time by 60%.',
					},
				],
			},
		],
	},
	{
		logo: <Samsung />,
		type: 'freelance',
		positions: [
			{
				title: 'Strona internetowa - Mobilne Rozgrywki Galaxy',
				startDate: new Date('2024-10-01'),
				endDate: new Date('2025-03-01'),
				description:
					'Lead development of cloud-based solutions and mentored junior developers.',
				projects: [
					{
						name: 'CloudScale',
						description:
							'Developed a scalable cloud infrastructure solution, increasing system efficiency by 40%.',
					},
					{
						name: 'DevOps Pipeline',
						description:
							'Implemented a new CI/CD pipeline, reducing deployment time by 60%.',
					},
				],
			},
		],
	},
];

export function Experience() {
	return (
		<section className="mt-16">
			<Container>
				<h2 className="text-base">Doświadczenie</h2>

				<div className="mt-5 space-y-6">
					{experiences.map((company, index) => (
						<Card
							key={index}
							className="w-full"
						>
							<CardHeader className="flex flex-row items-center gap-3">
								{company.logo}

								<Badge variant={experiencesColorsMap[company.type]}>
									{company.type}
								</Badge>
							</CardHeader>

							<CardContent className="space-y-6">
								{company.positions.map((position, posIndex) => (
									<div
										key={posIndex}
										className="border-t pt-4 first:border-t-0 first:pt-0"
									>
										<h3 className="flex items-center gap-2 text-xl font-semibold">
											{position.title}
										</h3>

										<div className="mt-1 flex items-center text-sm text-muted-foreground">
											<Calendar className="mr-1 h-4 w-4" />
											{dayjs(position.startDate).format(
												'DD.MM.YYYY',
											)}{' '}
											-{' '}
											{position.endDate
												? dayjs(position.endDate).format(
														'DD.MM.YYYY',
												  )
												: 'Present'}
										</div>

										<p className="mt-2 text-sm">
											{position.description}
										</p>

										{position.projects.length > 0 && (
											<div className="mt-4">
												<h4 className="mb-2 text-base font-semibold">
													Featured projects:
												</h4>
												<ul className="space-y-2">
													{position.projects.map(
														(project, projIndex) => (
															<li
																key={projIndex}
																className="flex items-start gap-2 text-muted-foreground"
															>
																<ArrowRight className="mt-1 h-4 w-4 flex-shrink-0" />
																<div className="text-sm">
																	<span className="font-medium">
																		{project.name}:{' '}
																	</span>
																	{project.description}
																</div>
															</li>
														),
													)}
												</ul>
											</div>
										)}
									</div>
								))}
							</CardContent>
						</Card>
					))}
				</div>
			</Container>
		</section>
	);
}
