import {Container} from '@/components/container';
import {
	Callpage,
	Dcc,
	Instreamly,
	Mwebs,
	Pkobp,
	Salesmanago,
	Samsung,
} from '@/components/logotypes';
import {ExperienceItem} from './experience-item';
import {Button} from '@/components/ui/button';
import Link from 'next/link';

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
			description: React.ReactNode;
		}>;
	}>;
}

const experiences: Experience[] = [
	{
		logo: <Pkobp />,
		type: 'freelance',
		positions: [
			{
				title: 'Strona internetowa - Fortnite',
				startDate: new Date('2024-10-01'),
				description:
					'Przy tym projekcie połączyłem role Frontend Developera i Project Managera. Odpowiadałem zarówno za development strony, jak i za nadzór nad procesem projektowym oraz podwykonawcami.',
				projects: [
					{
						name: 'Security',
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
					'Miałem przyjemność pracować jako podwykonawca przy projekcie dla Samsunga. Stworzyłem stronę internetową korzystając z Pug, aby wyświetlać dynamiczne treści przekazywane z backendu kontrolerów Express & Node.js.',
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
					'Obecnie, oprócz kodowania, aktywnie uczestniczę w planowaniu rozwoju produktu. Szczególnie koncentruję się na innowacyjnych rozwiązaniach z wykorzystaniem AI i samodzielnie prowadzę nowe projekty.',
				projects: [
					{
						name: 'Dedykowane mechanizmy sponsoringów - Netflix, Play Station, Pepsi',
						description:
							'Wdrożenie dedykowanych rozwiązań przy wyświetlaniu sponsoringów na transmisjach na żywo na Twitch lub YouTube.',
					},
					{
						name: 'Wdrażanie rozwiązań AI',
						description:
							'Moje zainteresowanie AI przekładam do codziennej pracy, wdrażam rozwiązania, zarówno wewnętrzne jak i zewnętrzne w postaci Chatbotów oraz aplikacji.',
					},
				],
				technologies: [
					'TypeScript',
					'Next.js',
					'MySQL',
					'Node.js',
					'TailwindCSS',
				],
			},
			{
				title: 'Frontend Developer',
				startDate: new Date('2021-10-01'),
				endDate: new Date('2024-06-01'),
				description:
					'W tym okresie znacząco poszerzyłem swoje kompetencje, biorąc odpowiedzialność za coraz większe projekty. Szczególnie skupiłem się na rozwoju w kierunku full-stack.',
				projects: [
					{
						name: 'AI Voice Recognition Mechanism - Monte Snack',
						description: (
							<p>
								Stworzyłem mechanizm do automatycznego wyświetlania
								sponsoringu podczas streamów na Twitch i YouTube.
								NowyMarketing{' '}
								<Link
									href="https://nowymarketing.pl/przerwa-na-monte-snack-dzieki-technologii-voice-recognition-na-147-streamach-na-twitchu/"
									target="_blank"
								>
									<Button variant="link">napisał o tym artykuł</Button>
								</Link>
								.
							</p>
						),
					},
					{
						name: 'Rozwój w kierunku full-stack',
						description:
							'Intensywnie rozwijałem umiejętności backendowe i bazodanowe, co pozwoliło mi na samodzielne prowadzenie kompleksowych projektów.',
					},
				],
				technologies: ['TypeScript', 'Next.js', 'MySQL', 'Node.js'],
			},
			{
				title: 'Junior Frontend Developer',
				startDate: new Date('2020-12-01'),
				endDate: new Date('2021-10-01'),
				description:
					'Początkowo do zespołu dołączyłem jako freelancer, ale szybko dostałem propozycję pracy na pełen etat współtworząc aplikację. To był okres intensywnej nauki - stawiałem pierwsze kroki w React.js, backendzie z Node.js i bazach danych MySQL.',
				projects: [
					{
						name: 'Pierwszy projekt w React.js',
						description:
							'Pod okiem doświadczonego developera współtworzyłem pierwszą aplikację, która dała mi solidne podstawy do dalszego rozwoju.',
					},
					{
						name: 'Migracja strony z Pug do Wordpress',
						description:
							'Samodzielnie wdrożyłem nową stronę, co było moim pierwszym większym projektem w firmie.',
					},
				],
				technologies: ['React.js', 'Wordpress', 'Node.js', 'Express', 'MySQL'],
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
				description:
					'Od kilku lat prowadzę własną działalność, gdzie tworzę strony i aplikacje. Samodzielnie pozyskuję klientów i zarządzam zespołem podwykonawców. Zrealizowałem kilkadziesiąt projektów - od prostych stron po zaawansowane aplikacje z użyciem baz danych.',
				projects: [
					{
						name: 'Kompleksowa obsługa klientów',
						description:
							'Zajmuję się całym procesem - od pierwszego kontaktu, przez projekt, po wdrożenie i wsparcie techniczne.',
					},
					{
						name: 'Zarządzanie zespołem',
						description:
							'Koordynuję pracę podwykonawców, dbając o terminową realizację projektów.',
					},
				],
				technologies: ['Wordpress', 'Next.js', 'TypeScript', 'TailwindCSS'],
			},
		],
	},
	{
		logo: <Dcc />,
		type: 'part-time',
		positions: [
			{
				title: 'Founder & Frontend Developer',
				startDate: new Date('2022-07-01'),
				endDate: new Date('2024-06-01'),
				description:
					'Przez prawie dwa lata współtworzyłem jedną z największych społeczności marketingowych w Polsce. Moim głównym wyzwaniem było stworzenie od podstaw zaawansowanej platformy e-learningowej, która musiała sprawnie obsługiwać płatności i zarządzać treściami kursowymi.',
				projects: [
					{
						name: 'Kompleksowa platforma edukacyjna',
						description:
							'Zaprojektowałem i wdrożyłem system, który nie tylko zarządzał treściami kursowymi, ale też sprawnie obsługiwał płatności poprzez integrację ze Stripe. Wykorzystałem nowoczesny stack technologiczny, łącząc PayloadCMS do zarządzania treścią z Next.js po stronie frontendu.',
					},
				],
				technologies: [
					'TypeScript',
					'Next.js',
					'MongoDB',
					'Stripe',
					'PayloadCMS',
				],
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
					'Przy tym projekcie miałem okazję przeprowadzić kompleksową migrację aplikacji z AngularJS do Angulara z TypeScript. Zadanie wykraczało poza samą zmianę technologii - objęło również aktualizację interfejsu i design systemu.',
				projects: [
					{
						name: 'Migracja technologii',
						description: 'Przepisanie całej aplikacji do nowego frameworka.',
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
					'Moją karierę rozpocząłem od pracy przy stronie WordPress, gdzie szybko rozwinąłem nie tylko umiejętności techniczne, ale też zdobyłem pierwsze doświadczenie w zarządzaniu zespołem. Oprócz kodowania, często samodzielnie projektowałem interfejsy, co pozwoliło mi lepiej zrozumieć aspekty UI/UX.',
				projects: [
					{
						name: 'Pierwsze kroki w zarządzaniu',
						description:
							'Przez 6 miesięcy kierowałem małym zespołem, ucząc się planowania pracy, pilnowania terminów i raportowania postępów.',
					},
					{
						name: 'Rozwój w projektowaniu UI',
						description: 'Z czasem przejąłem odpowiedzialność za projektowanie interfejsów, co znacząco poszerzyło moje kompetencje poza czysty development.',
					},
				],
				technologies: ['WordPress', 'SCSS', 'PHP', 'HTML'],
			},
		],
	},
];

export function Experience() {
	return (
		<section
			className="mt-16"
			id="doswiadczenie"
		>
			<Container>
				<h2 className="text-base">Doświadczenie</h2>

				<div className="mt-5 space-y-3">
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
