import {Container} from '@/components/container';
import {Callpage, Instreamly, Mwebs, Pkobp, Salesmanago, Samsung} from '@/components/logotypes';
import {ExperienceItem} from './experience-item';

export interface Experience {
	logo: React.ReactNode;
	type: 'full-time' | 'part-time' | 'freelance';
	positions: Array<{
		title: string;
		startDate: Date;
		endDate?: Date;
		description: string;
		technologies: string[];
		projects: Array<{
			name: string;
			description: string;
		}>;
	}>;
}

const experiences: Experience[] = [
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
				technologies: ['TypeScript', 'Next.js', 'Sanity.io', 'TailwindCSS'],
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
				technologies: ['TypeScript', 'Next.js', 'Sanity.io', 'TailwindCSS'],
			},
		],
	},
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
				technologies: ['TypeScript', 'Next.js', 'Sanity.io', 'TailwindCSS'],
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
				technologies: ['TypeScript', 'Next.js', 'Sanity.io', 'TailwindCSS'],
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
				technologies: ['TypeScript', 'Next.js', 'Sanity.io', 'TailwindCSS'],
			},
		],
	},
	{
		logo: <Mwebs />,
		type: 'part-time',
		positions: [
			{
				title: 'Founder & Senior Frontend Developer',
				startDate: new Date('2021-08-07'),
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
				technologies: ['TypeScript', 'Next.js', 'Sanity.io', 'TailwindCSS'],
			},
		],
	},
	{
		logo: <Callpage />,
		type: 'part-time',
		positions: [
			{
				title: 'Frontend Developer',
				startDate: new Date('2021-08-07'),
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
				technologies: ['TypeScript', 'Next.js', 'Sanity.io', 'TailwindCSS'],
			},
		],
	},
	{
		logo: <Salesmanago />,
		type: 'full-time',
		positions: [
			{
				title: 'Junior Frontend Developer',
				startDate: new Date('2021-08-07'),
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
				technologies: ['TypeScript', 'Next.js', 'Sanity.io', 'TailwindCSS'],
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
					{experiences.map((experience, index) => (
						<ExperienceItem
							key={index}
							experience={experience}
						/>
					))}
				</div>
			</Container>
		</section>
	);
}
