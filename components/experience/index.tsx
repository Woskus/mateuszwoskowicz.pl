import {Container} from '@/components/container';
import {
	Callpage,
	Instreamly,
	Mwebs,
	Pkobp,
	Salesmanago,
	Samsung,
} from '@/components/logotypes';
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
					'Kompleksowa realizacja projektu dla PKO BP, obejmująca development, design i zarządzanie podwykonawcami.',
				projects: [
					{
						name: 'Bezpieczeństwo',
						description:
							'Dbanie o wysoki poziom bezpieczeństwa aplikacji konieczny przy realizacji projektu dla banku.',
					},
					{
						name: 'Zarządzanie zespołem',
						description:
							'Nadzór nad procesem projektowym oraz zarządzaniem zespołem.',
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
					'Frontend Developer w projekcie "Mobilne Rozgrywki Galaxy" dla Samsunga, odpowiedzialny za implementację strony internetowej.',
				projects: [],
				technologies: ['Node.js', 'Express', 'Pug', 'SCSS'],
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
					'Jako Senior Frontend Developer aktywnie pracuję przy produkcie nie tylko kodując, ale również planując jego rozwój. Wszystkie funkcjonalności wdrażam samodzielnie.',
				projects: [
					{
						name: 'Praca przy produkcie',
						description:
							'Planowanie i rozwój funkcjonalności produktu.',
					},
				],
				technologies: ['TypeScript', 'Next.js', 'Sanity.io', 'TailwindCSS'],
			},
			{
				title: 'Frontend Developer',
				startDate: new Date('2021-10-01'),
				endDate: new Date('2024-06-01'),
				description: '',
				projects: [
					{
						name: 'Nauka backendu i baz danych',
						description:
							'Duży nacisk kładłem na naukę backendu, co pozwoliło mi na tworzenie nowych projektów.',
					},
					{
						name: 'Indywidualne projekty',
						description:
							'Rozpocząłem pracę nad kilkoma projektami, które w większości kodowałem samodzielnie.',
					},
				],
				technologies: ['TypeScript', 'Next.js', 'MySQL', 'Node.js'],
			},
			{
				title: 'Junior Frontend Developer',
				startDate: new Date('2020-12-01'),
				endDate: new Date('2021-10-01'),
				description:
					'Początkowo do zespołu dołączyłem jako freelancer tworząc stronę internetową w oparciu o Wordpress, ale szybko dostałem propozycję pracy na pełen etat współtworząc aplikację. Zacząłem się uczyć React.js oraz backendu przy użyciu Node.js.',
				projects: [
					{
						name: 'Pierwszy projekt w React.js',
						description:
							'Wraz z doświadczonym Developerem stworzyłem nową aplikację, gdzie dużo się nauczyłem.',
					},
					{
						name: 'Nowa strona internetowa w Wordpress',
						description:
							'Samodzielnie stworzyłem nową stronę internetową w oparciu o Wordpress.',
					},
				],
				technologies: ['React.js', 'Wordpress', 'Node.js', 'Express'],
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
					'Własna działalność, gdzie tworzę strony i aplikacje internetowe, jestem odpowiedzialny za pozyskiwanie klientów i zarządzanie zespołem podwykonawców.',
				projects: [
					{
						name: 'Zarządzanie zespołem',
						description: 'Koordynacja pracy podwykonawców',
					},
					{
						name: 'Praca z klientami',
						description:
							'Rozpoznanie potrzeb klientów i zapewnienie im wsparcia.',
					},
				],
				technologies: ['Wordpress', 'Next.js', 'TypeScript', 'TailwindCSS'],
			},
		],
	},
	{
		logo: <Callpage />,
		type: 'part-time',
		positions: [
			{
				title: 'Frontend Developer',
				startDate: new Date('2020-11-01'),
				endDate: new Date('2021-01-01'),
				description:
					'Migracja aplikacji z AngularJS do Angulara wraz z Typescript, oraz aktualizacja UI.',
				projects: [
					{
						name: 'Migracja technologii',
						description: 'Przepisanie całej aplikacji do nowego frameworka.',
					},
					{
						name: 'UI/UX',
						description:
							'Aktualizacja Design Systemu i wdrożenie nowego designu do widoków.',
					},
				],
				technologies: ['Angular', 'TypeScript', 'AngularJS', 'SCSS'],
			},
		],
	},
	{
		logo: <Salesmanago />,
		type: 'full-time',
		positions: [
			{
				title: 'Junior Frontend Developer',
				startDate: new Date('2019-08-01'),
				endDate: new Date('2020-12-01'),
				description:
					'Byłem odpowiedzialny za rozwój strony firmowej opartej o WordPress, z doświadczeniem w zarządzaniu małym zespołem.',
				projects: [
					{
						name: 'Kierowanie zespołem',
						description:
							'Przez pół roku byłem odpowiedzialny za zarządzanie zespołem.',
					},
					{
						name: 'UI/UX',
						description: 'Samodzielne projektowanie interfejsu użytkownika.',
					},
				],
				technologies: ['WordPress', 'SCSS', 'PHP', 'HTML'],
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
