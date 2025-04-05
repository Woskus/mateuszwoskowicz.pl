import Link from 'next/link';
import {
	Callpage,
	Dcc,
	Instreamly,
	Manaboo,
	Mwebs,
	Pkobp,
	Salesmanago,
	Samsung,
} from '@/components/logotypes';
import {Button} from '@/components/ui/button';
import type {routing} from '@/lib/i18n/routing';

export interface Experience {
	id: string;
	logo: React.ReactNode;
	type: 'fullTime' | 'business' | 'freelance';
	positions: {
		startDate: Date;
		endDate?: Date;
		technologies: string[];
		locale: Record<
			(typeof routing.locales)[number],
			{
				title: string;
				description: React.ReactNode;
				projects: {
					name: string;
					description: React.ReactNode;
				}[];
			}
		>;
	}[];
	open?: boolean;
}

export const experiences: Experience[] = [
	{
		id: 'manaboo',
		logo: <Manaboo />,
		type: 'business',
		positions: [
			{
				startDate: new Date('2024-10-15'),
				technologies: [
					'TypeScript',
					'Next.js',
					'OpenAI',
					'Pinecone',
					'AWS Bedrock',
					'TailwindCSS',
				],
				locale: {
					en: {
						title: 'Co-Founder & AI Fullstack Developer',
						description:
							'A platform that uses AI to recommend games on Roblox and allows users to earn money in-game. I am co-creating the project, among others, with the founders of my current full-time job.',
						projects: [
							{
								name: 'AI Recommendation System',
								description:
									'I developed a proprietary recommendation system based on AI, RAG, and vector databases. The system uses the "Collaborative Filtering" method to find the best games for users based on their demographics, game history, and other users.',
							},
							{
								name: 'Internal Dashboard',
								description:
									'I created an internal dashboard that enables editing and managing campaigns, user management, payment handling, and generating reports for clients.',
							},
						],
					},
					pl: {
						title: 'Co-Founder & AI Fullstack Developer',
						description:
							'Platforma, która wykorzystuje AI do rekomendacji gier w Roblox oraz pozwala użytkownikom zarabiać w grze. Projekt współtworzę między innymi z Founderami mojej obecnej pracy etatowej.',
						projects: [
							{
								name: 'System rekomendacji AI',
								description:
									'Stworzyłem autorski system rekomendacji oparty o AI, RAG, bazy wektorowe. System wykorzystuje metodę "Collaborative Filtering" do wyszukiwania najlepszych gier dla użytkownika bazując na jego danych demograficznych, historii gier oraz innych użytkownikach.',
							},
							{
								name: 'Wewnętrzny dashboard',
								description:
									'Stworzyłem wewnętrzny dashboard, który pozwala na edycje i zarządzanie kampaniami, zarządzanie użytkownikami oraz obsługę płatności, a także tworzenie raportów dla klientów.',
							},
						],
					},
				},
			},
		],
		open: true,
	},{
		id: 'pkobp',
		logo: <Pkobp />,
		type: 'freelance',
		positions: [
			{
				startDate: new Date('2024-10-01'),
				endDate: new Date('2025-03-10'),
				technologies: [
					'TypeScript',
					'Next.js',
					'Sanity.io',
					'TailwindCSS',
					'AWS',
				],
				locale: {
					en: {
						title: 'Contest Landing Page for PKO Bank Polski',
						description:
							'In this project, I combined the roles of Frontend Developer and Project Manager. I was responsible for both the development of the website and overseeing the project process and subcontractors.',
						projects: [
							{
								name: 'Security',
								description:
									'Ensuring a high level of application security, which is essential for a project carried out for a bank.',
							},
							{
								name: 'CMS Integration',
								description:
									'One of the client’s requirements was integration with a CMS that allowed for content management and the ability to immediately shut down the page.',
							},
							{
								name: 'Team Management',
								description:
									'Oversight of the project process and team management.',
							},
						],
					},
					pl: {
						title: 'Konkursowy Landing Page dla PKO Banku Polskiego',
						description:
							'Przy tym projekcie połączyłem role Frontend Developera i Project Managera. Odpowiadałem zarówno za development strony, jak i za nadzór nad procesem projektowym oraz podwykonawcami.',
						projects: [
							{
								name: 'Security',
								description:
									'Dbanie o wysoki poziom bezpieczeństwa aplikacji konieczny przy realizacji projektu dla banku.',
							},
							{
								name: 'Integracja CMS',
								description:
									'Jednym z wymagań klienta była integracja z CMS, który pozwalał na zarządzanie treścią i możliwość natychmiastowego zamknięcia strony.',
							},
							{
								name: 'Zarządzanie zespołem',
								description:
									'Nadzór nad procesem projektowym oraz zarządzaniem zespołem.',
							},
						],
					},
				},
			},
		],
		open: true,
	},
	{
		id: 'samsung',
		logo: <Samsung />,
		type: 'freelance',
		positions: [
			{
				startDate: new Date('2021-12-08'),
				endDate: new Date('2022-01-31'),
				technologies: ['Node.js', 'Express.js', 'Pug', 'SCSS'],
				locale: {
					en: {
						title: 'Website – Galaxy Mobile Tournaments',
						description: (
							<>
								I completed this project as a subcontractor. My task was
								to implement the website using Node.js, Express.js, and
								Pug. I was responsible for implementing the design from
								Figma and integrating the frontend with the backend.{' '}
								<Button
									variant="link"
									asChild
								>
									<Link href="/case-study/mobilne-rozgrywki-galaxy">
										My case study
									</Link>
								</Button>
								.
							</>
						),
						projects: [],
					},
					pl: {
						title: 'Strona internetowa - Mobilne Rozgrywki Galaxy',
						description: (
							<>
								Projekt zrealizowałem jako podwykonawca, a moim zadaniem
								było wdrożenie strony internetowej wykorzystując Node.js,
								Express.js i Pug. Odpowiadałem za implementację projektu z
								Figmy oraz integrację frontendu z backendem.{' '}
								<Button
									variant="link"
									asChild
								>
									<Link href="/case-study/mobilne-rozgrywki-galaxy">
										Moje case study
									</Link>
								</Button>
								.
							</>
						),
						projects: [],
					},
				},
			},
		],
		open: true,
	},
	{
		id: 'instreamly',
		logo: <Instreamly />,
		type: 'fullTime',
		positions: [
			{
				startDate: new Date('2024-06-01'),
				technologies: [
					'TypeScript',
					'Next.js',
					'React.js',
					'MySQL',
					'Node.js',
					'Cypress',
					'Jest',
					'AWS',
					'Docker',
					'TailwindCSS',
				],
				locale: {
					en: {
						title: 'Senior Frontend Developer',
						description:
							'As a Senior Frontend Developer, I create and maintain applications using Next.js, Node.js, and AWS. I’m increasingly involved in designing application architecture and actively participate in product development planning. I focus particularly on innovative solutions using AI and on projects that have a business growth impact.',
						projects: [
							{
								name: 'Custom Sponsorship Mechanisms – Netflix, PlayStation, Pepsi and others',
								description:
									'Implementation of tailored solutions for displaying sponsorships during live broadcasts on Twitch, YouTube or Kick.',
							},
							{
								name: 'Implementing AI Solutions',
								description:
									'I bring my passion for AI into my daily work by implementing both internal and external solutions, such as AI Agents, chatbots and applications.',
							},
						],
					},
					pl: {
						title: 'Senior Frontend Developer',
						description:
							'Jako Senior Frontend Developer tworzę i utrzymuje aplikacje przy użyciu Next.js, Node.js i AWS. Coraz więcej czasu poświęcam na projektowanie architektury aplikacji i aktywnie uczestniczę w planowaniu rozwoju produktu. Szczególnie koncentruję się na innowacyjnych rozwiązaniach z wykorzystaniem AI oraz na projektach, który mają wpływ na rozwój biznesowy.',
						projects: [
							{
								name: 'Dedykowane mechanizmy sponsoringów - Netflix, Play Station, Pepsi i inni',
								description:
									'Wdrożenie dedykowanych rozwiązań przy wyświetlaniu sponsoringów na transmisjach na żywo na Twitch, YouTube lub Kick.',
							},
							{
								name: 'Wdrażanie rozwiązań AI',
								description:
									'Moje zainteresowanie AI przekładam do codziennej pracy, wdrażam rozwiązania, zarówno wewnętrzne jak i zewnętrzne w postaci Agentów AI, Chatbotów oraz aplikacji.',
							},
						],
					},
				},
			},
			{
				startDate: new Date('2021-10-01'),
				endDate: new Date('2024-06-01'),
				technologies: [
					'TypeScript',
					'Next.js',
					'React.js',
					'MySQL',
					'Node.js',
					'Cypress',
					'Jest',
					'AWS',
					'Docker',
					'TailwindCSS',
				],
				locale: {
					en: {
						title: 'Frontend Developer',
						description:
							'As a Frontend Developer, I significantly expanded my skill set by taking on increasingly large projects. I focused on developing towards Fullstack. I learned new technologies such as TypeScript and Next.js, and began working independently on the backend using Node.js and MySQL databases.',
						projects: [
							{
								name: 'AI Voice Recognition Mechanism – Monte Snack',
								description: (
									<>
										I created a mechanism for automatically displaying
										sponsorships during Twitch, YouTube and Kick
										streams based on words spoken by streamers. The
										platform NowyMarketing{' '}
										<Button
											variant="link"
											asChild
										>
											<Link
												href="https://nowymarketing.pl/przerwa-na-monte-snack-dzieki-technologii-voice-recognition-na-147-streamach-na-twitchu/"
												target="_blank"
											>
												published an article about it
											</Link>
										</Button>
										.
									</>
								),
							},
							{
								name: 'Fullstack Development Growth',
								description:
									'I developed backend and database skills, which enabled me to independently lead end-to-end projects.',
							},
						],
					},
					pl: {
						title: 'Frontend Developer',
						description:
							'Będąc Frontend Developerem znacząco poszerzyłem swoje kompetencje, biorąc odpowiedzialność za coraz większe projekty. Skupiłem się na rozwoju w kierunku Fullstack. Nauczyłem się nowych technologii, takich jak TypeScript, Next.js oraz zacząłem samodzielnie pracować na backendzie korzystając z Node.js oraz przy bazach danych MySQL.',
						projects: [
							{
								name: 'AI Voice Recognition Mechanism - Monte Snack',
								description: (
									<>
										Stworzyłem mechanizm do automatycznego
										wyświetlania sponsoringu podczas streamów na
										Twitch, YouTube i Kick na podstawie
										wypowiedzianych przez streamerów słów.
										NowyMarketing{' '}
										<Button
											variant="link"
											asChild
										>
											<Link
												href="https://nowymarketing.pl/przerwa-na-monte-snack-dzieki-technologii-voice-recognition-na-147-streamach-na-twitchu/"
												target="_blank"
											>
												napisał o tym artykuł
											</Link>
										</Button>
										.
									</>
								),
							},
							{
								name: 'Rozwój w kierunku Fullstack',
								description:
									'Rozwijałem umiejętności backendowe i bazodanowe, co pozwoliło mi na samodzielne prowadzenie kompleksowych projektów.',
							},
						],
					},
				},
			},
			{
				startDate: new Date('2020-12-01'),
				endDate: new Date('2021-10-01'),
				technologies: [
					'React.js',
					'Wordpress',
					'Node.js',
					'Express.js',
					'MySQL',
					'SCSS',
				],
				locale: {
					en: {
						title: 'Junior Frontend Developer',
						description:
							'I initially joined the team as a freelancer, but quickly received a full-time offer to co-develop the application. It was a time of intensive learning – I took my first steps with React.js, backend development using Node.js, and MySQL databases.',
						projects: [
							{
								name: 'Website Migration from Pug to WordPress',
								description:
									'I independently implemented the new website, which was my first major project at the company.',
							},
						],
					},
					pl: {
						title: 'Junior Frontend Developer',
						description:
							'Początkowo do zespołu dołączyłem jako freelancer, ale szybko dostałem propozycję pracy na pełen etat współtworząc aplikację. To był okres intensywnej nauki - stawiałem pierwsze kroki w React.js, backendzie z Node.js i bazach danych MySQL.',
						projects: [
							{
								name: 'Migracja strony z Pug do Wordpress',
								description:
									'Samodzielnie wdrożyłem nową stronę, co było moim pierwszym większym projektem w firmie.',
							},
						],
					},
				},
			},
		],
		open: true,
	},
	{
		id: 'mwebs',
		logo: <Mwebs />,
		type: 'business',
		positions: [
			{
				startDate: new Date('2021-08-07'),
				technologies: [
					'Wordpress',
					'Next.js',
					'TypeScript',
					'AWS',
					'PHP',
					'SCSS',
					'TailwindCSS',
				],
				locale: {
					en: {
						title: 'Founder & Senior Frontend Developer',
						description: (
							<>
								For several years, I’ve been running my own business where
								I create websites and applications. I independently
								acquire clients and manage a team of subcontractors. I’ve
								completed dozens of projects — from simple websites to
								advanced applications using databases.{' '}
								<Button
									variant="link"
									asChild
								>
									<Link
										href="https://mwebs.pl/"
										target="_blank"
									>
										Project website
									</Link>
								</Button>
								.
							</>
						),
						projects: [
							{
								name: 'Comprehensive Client Support',
								description:
									'I handle the entire process — from first contact, through design, to implementation and technical support.',
							},
							{
								name: 'Team Management',
								description:
									'I coordinate the work of subcontractors, ensuring timely project delivery.',
							},
						],
					},
					pl: {
						title: 'Founder & Senior Frontend Developer',
						description: (
							<>
								Od kilku lat prowadzę własną działalność, gdzie tworzę
								strony i aplikacje. Samodzielnie pozyskuję klientów i
								zarządzam zespołem podwykonawców. Zrealizowałem
								kilkadziesiąt projektów - od prostych stron po
								zaawansowane aplikacje z użyciem baz danych.{' '}
								<Button
									variant="link"
									asChild
								>
									<Link
										href="https://mwebs.pl/"
										target="_blank"
									>
										Strona projektu
									</Link>
								</Button>
								.
							</>
						),
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
					},
				},
			},
		],
		open: true,
	},
	{
		id: 'dcc',
		logo: <Dcc />,
		type: 'business',
		positions: [
			{
				startDate: new Date('2022-07-01'),
				endDate: new Date('2024-06-01'),
				technologies: [
					'TypeScript',
					'Next.js',
					'MongoDB',
					'Stripe',
					'PayloadCMS',
					'AWS',
				],
				locale: {
					en: {
						title: 'Founder & Frontend Developer',
						description:
							'For nearly two years, I co-created one of the largest marketing communities in Poland. My main challenge was to build an e-learning platform that integrated payments with Stripe.',
						projects: [
							{
								name: 'E-learning Platform',
								description:
									'I designed and implemented an e-learning platform that, through Stripe integration, fully automated payments and course assignments for users.',
							},
						],
					},
					pl: {
						title: 'Founder & Frontend Developer',
						description:
							'Przez prawie dwa lata współtworzyłem jedną z największych społeczności marketingowych w Polsce. Moim głównym wyzwaniem było stworzenie platformy e-learningowej, która integrowała płatności ze Stripe.',
						projects: [
							{
								name: 'Platforma e-learningowej',
								description:
									'Zaprojektowałem i wdrożyłem platformę e-learningową, która poprzez integrację ze Stripe w pełni zautomatyzowała płatności i przypisywanie kursów użytkownikom.',
							},
						],
					},
				},
			},
		],
	},
	{
		id: 'callpage',
		logo: <Callpage />,
		type: 'freelance',
		positions: [
			{
				startDate: new Date('2020-11-01'),
				endDate: new Date('2021-01-01'),
				technologies: ['Angular', 'TypeScript', 'AngularJS', 'SCSS'],
				locale: {
					en: {
						title: 'Frontend Developer',
						description:
							'In this project, I had the opportunity to migrate an application from AngularJS to Angular 2+ with TypeScript. In addition to the technology upgrade, my task was also to update the UI and the design system.',
						projects: [
							{
								name: 'Technology Migration',
								description:
									'Rewrote the entire application in a new framework and updated the UI and design system.',
							},
						],
					},
					pl: {
						title: 'Frontend Developer',
						description:
							'Przy tym projekcie miałem okazję przeprowadzić migrację aplikacji z AngularJS do Angulara 2+ z TypeScript. Poza samą zmianę technologii moim zadaniem była również aktualizacja UI i design systemu.',
						projects: [
							{
								name: 'Migracja technologii',
								description:
									'Przepisanie całej aplikacji do nowego frameworka oraz aktualizacja UI i design systemu.',
							},
						],
					},
				},
			},
		],
	},
	{
		id: 'salesmanago',
		logo: <Salesmanago />,
		type: 'fullTime',
		positions: [
			{
				startDate: new Date('2019-08-01'),
				endDate: new Date('2020-12-01'),
				technologies: ['WordPress', 'SCSS', 'PHP', 'HTML'],
				locale: {
					en: {
						title: 'Junior Frontend Developer',
						description:
							'I began my career working on a WordPress site, where I quickly developed not only my technical skills but also gained my first experience in team management. In addition to coding, I often independently designed UI, which helped me better understand UI/UX principles.',
						projects: [
							{
								name: 'First Steps in Team Management',
								description:
									'For six months, I led a small team, learning how to plan work, keep track of deadlines, and report progress.',
							},
							{
								name: 'UI Design Development',
								description:
									'Over time, I took on responsibility for UI design, significantly expanding my competencies beyond pure development.',
							},
						],
					},
					pl: {
						title: 'Junior Frontend Developer',
						description:
							'Moją karierę rozpocząłem od pracy przy stronie WordPress, gdzie szybko rozwinąłem nie tylko umiejętności techniczne, ale też zdobyłem pierwsze doświadczenie w zarządzaniu zespołem. Oprócz kodowania, często samodzielnie projektowałem UI, co pozwoliło mi lepiej zrozumieć UI/UX.',
						projects: [
							{
								name: 'Pierwsze kroki w zarządzaniu',
								description:
									'Przez pół roku kierowałem małym zespołem, ucząc się planowania pracy, pilnowania terminów i raportowania postępów.',
							},
							{
								name: 'Rozwój w projektowaniu UI',
								description:
									'Z czasem przejąłem odpowiedzialność za projektowanie UI, co znacząco poszerzyło moje kompetencje poza czysty development.',
							},
						],
					},
				},
			},
		],
	},
];
