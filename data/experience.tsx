import Link from 'next/link';
import {
	AiHero,
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
	type: 'fullTime' | 'partTime' | 'business' | 'freelance';
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
		id: 'instreamly',
		logo: <Instreamly />,
		type: 'fullTime',
		positions: [
			{
				startDate: new Date('2026-08-01'),
				technologies: [
					'TypeScript',
					'Python',
					'Next.js',
					'Node.js',
					'n8n',
					'AWS',
					'Claude',
					'Claude Code',
					'OpenAI',
				],
				locale: {
					en: {
						title: 'AI Engineering & Innovation Lead',
						description:
							'I work on transforming inStreamly into an AI-first organization and rebuilding the company’s processes around AI, from talking to departments and setting priorities, through building agents and automations, to measuring the results. One of the projects is an AI-first sales engine, where I am the technical lead. I also support people who build AI solutions in their own teams, advise on the choice of AI models and tools, and keep an eye on their costs.',
						projects: [
							{
								name: 'AI-First Sales Engine',
								description:
									'I am building a system that supports sales: a shared database of companies, contacts, offers and correspondence, agents that clean and complete it every night, and tests of detecting sales signals in emails and calls. The agents only save information they are certain of, and contact with clients stays with people.',
							},
							{
								name: 'AI Discovery and Priorities Across the Company',
								description:
									'I talked through AI needs with every department and turned those conversations into a backlog of implementations. I set priorities directly with a co-founder and report on progress regularly.',
							},
							{
								name: 'AI-First Moderation Dashboard',
								description:
									'I am co-creating a new moderation dashboard built from scratch around the target process. AI handles the analysis and repetitive work, moderators assess the cases it selects, and every automation reports its own results from day one.',
							},
						],
					},
					pl: {
						title: 'AI Engineering & Innovation Lead',
						description:
							'Pracuję nad transformacją inStreamly w organizację AI-first i przebudową procesów firmy pod AI - od rozmów z działami i ustalania priorytetów, przez budowę agentów i automatyzacji, po mierzenie efektów. Jednym z projektów jest silnik sprzedaży AI-first, w którym jestem liderem technicznym. Wspieram też osoby budujące rozwiązania AI w swoich zespołach, doradzam w wyborze modeli i narzędzi oraz pilnuję ich kosztów.',
						projects: [
							{
								name: 'Silnik sprzedaży AI-first',
								description:
									'Buduję system wspierający sprzedaż - wspólną bazę danych o firmach, kontaktach, ofertach i korespondencji, agentów, którzy co noc ją porządkują i uzupełniają, oraz testy wykrywania sygnałów sprzedażowych z maili i rozmów. Agenci zapisują tylko pewne informacje, a kontakt z klientem zostaje po stronie ludzi.',
							},
							{
								name: 'Discovery i priorytety AI w całej firmie',
								description:
									'Przegadałem potrzeby AI z każdym działem i zamieniłem te rozmowy w backlog wdrożeń. Priorytety ustalam bezpośrednio z co-founderem, a postępy regularnie raportuję.',
							},
							{
								name: 'Dashboard moderacyjny AI-first',
								description:
									'Współtworzę od zera nowy dashboard moderacyjny, projektowany pod docelowy proces. AI wykonuje analizy i powtarzalne czynności, moderatorzy oceniają wybrane przez nie przypadki, a każda automatyzacja od pierwszego dnia raportuje swoje wyniki.',
							},
						],
					},
				},
			},
			{
				startDate: new Date('2024-06-01'),
				endDate: new Date('2026-08-01'),
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
							'I built and maintained applications, designed their architecture and took part in product planning. Over time, more and more of my work moved towards AI. In this role I built the first AI features in the product, which later led to creating my current position.',
						projects: [
							{
								name: 'AI Support Agent',
								description:
									'I built and develop an agent that handles tickets from streamers based on their account data, and passes cases that need a decision to a person. In Q2 2026, AI correctly handled 95.8% of 932 tickets, with 138% more requests than a year earlier. By our estimate, the work dropped from about 15 hours a week to about 1.5.',
							},
							{
								name: 'AI in Clip Moderation',
								description:
									'AI analyzes transcripts of campaign clips and flags material that may be risky for a client, taking the context of the game into account. A flagged clip goes to a moderator, who makes the decision.',
							},
							{
								name: 'Custom Sponsorship Mechanisms - Netflix, PlayStation, Pepsi and others',
								description:
									'Implementation of tailored solutions for displaying sponsorships during live broadcasts on Twitch, YouTube or Kick.',
							},
						],
					},
					pl: {
						title: 'Senior Frontend Developer',
						description:
							'Tworzyłem i utrzymywałem aplikacje, projektowałem ich architekturę i uczestniczyłem w planowaniu rozwoju produktu. Z czasem coraz większa część mojej pracy przesuwała się w stronę AI. W tej roli zbudowałem pierwsze funkcje AI w produkcie, co doprowadziło później do powstania mojego obecnego stanowiska.',
						projects: [
							{
								name: 'Agent supportowy AI',
								description:
									'Zbudowałem i rozwijam agenta, który obsługuje tickety od streamerów na podstawie danych ich kont, a sprawy wymagające decyzji przekazuje człowiekowi. W II kwartale 2026 AI poprawnie obsłużyło 95,8% z 932 ticketów, a zgłoszeń było o 138% więcej niż rok wcześniej. Według estymacji praca spadła z około 15 godzin tygodniowo do około 1,5 godziny.',
							},
							{
								name: 'AI w moderacji klipów',
								description:
									'AI analizuje transkrypcje klipów z kampanii i oznacza materiały potencjalnie ryzykowne dla klienta, uwzględniając kontekst gry. Klip z tagiem trafia do moderatora, który podejmuje decyzję.',
							},
							{
								name: 'Dedykowane mechanizmy sponsoringów - Netflix, Play Station, Pepsi i inni',
								description:
									'Wdrożenie dedykowanych rozwiązań przy wyświetlaniu sponsoringów na transmisjach na żywo na Twitch, YouTube lub Kick.',
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
								name: 'AI Voice Recognition Mechanism - Monte Snack',
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
							'I initially joined the team as a freelancer, but quickly received a full-time offer to co-develop the application. It was a time of intensive learning - I took my first steps with React.js, backend development using Node.js, and MySQL databases.',
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
		id: 'aihero',
		logo: <AiHero />,
		type: 'partTime',
		positions: [
			{
				startDate: new Date('2025-07-11'),
				technologies: [
					'TypeScript',
					'Next.js',
					'Vercel AI SDK',
					'Azure OpenAI',
					'Claude Code',
					'Microsoft Graph',
					'Copilot Studio',
					'Power Automate',
					'n8n',
					'Airtable',
					'MySQL',
					'AWS',
				],
				locale: {
					en: {
						title: 'AI Engineering Projects Owner',
						description:
							'I work part-time at AI Hero, a company that implements AI in large organizations. In the Development department I own the internal and product areas: the AI platform for the company’s clients, internal tools and the company-wide Claude Code environment. Before that, I led the catalog of ready-made AI solutions and their rollouts for enterprise clients.',
						projects: [
							{
								name: 'AI Platform for Clients',
								description:
									'I built the application where the company’s business clients use an AI chat, four specialized agents and a prompt library. It also covers company email sign-in, onboarding, per-plan message limits, organizations and security documentation for corporate reviews.',
							},
							{
								name: 'Trainer Allocation App',
								description:
									'I built an internal tool that combines project management data and Outlook calendars into a view of the trainer team’s workload and availability. Sales, PMs and the education team can see in one place who can be offered to a client.',
							},
							{
								name: 'Prompt Hero and Agent Hero',
								description:
									'Public AI tools that turn a simple request into a structured prompt, or a one-line idea into a complete agent system prompt, based on the company’s frameworks.',
							},
							{
								name: 'AI Solution Catalog and Client Rollouts',
								description:
									'I developed the Quick Start catalog and the process from briefing, through implementation and testing, to maintenance. I was responsible for the first rollouts of agents and automations for clients in Microsoft and Google environments, coordinating the developers’ work.',
							},
						],
					},
					pl: {
						title: 'AI Engineering Projects Owner',
						description:
							'W AI Hero, firmie wdrażającej AI w dużych organizacjach, pracuję na część etatu. W dziale Development odpowiadam za obszary wewnętrzne i produktowe - platformę AI dla klientów firmy, narzędzia wewnętrzne i firmowe środowisko pracy z Claude Code. Wcześniej prowadziłem katalog gotowych rozwiązań AI i ich wdrożenia u klientów enterprise.',
						projects: [
							{
								name: 'Platforma AI dla klientów',
								description:
									'Zbudowałem aplikację, w której klienci biznesowi firmy korzystają z czatu AI, czterech wyspecjalizowanych agentów i bazy promptów. Obejmuje też logowanie mailem firmowym, onboarding, limity wiadomości w planach, organizacje i dokumentację bezpieczeństwa pod korporacyjne audyty.',
							},
							{
								name: 'Aplikacja do alokacji trenerów',
								description:
									'Zbudowałem narzędzie wewnętrzne, które z danych projektowych i kalendarzy Outlook składa obraz obłożenia i dostępności zespołu trenerów. Sprzedaż, PM-owie i dział edukacji widzą w jednym miejscu, kogo można zaproponować klientowi.',
							},
							{
								name: 'Prompt Hero i Agent Hero',
								description:
									'Publiczne narzędzia AI, które na bazie firmowych frameworków zamieniają prostą prośbę w ustrukturyzowany prompt, a jednozdaniowy pomysł w kompletny prompt systemowy agenta.',
							},
							{
								name: 'Katalog rozwiązań AI i wdrożenia dla klientów',
								description:
									'Rozwijałem katalog Szybki Start i proces od briefu, przez wdrożenie i testy, po utrzymanie. Odpowiadałem za pierwsze wdrożenia agentów i automatyzacji u klientów w środowisku Microsoft i Google, koordynując pracę developerów.',
							},
						],
					},
				},
			},
		],
		open: true,
	},
	{
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
						title: 'Website - Galaxy Mobile Tournaments',
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
	},
	{
		id: 'mwebs',
		logo: <Mwebs />,
		type: 'business',
		positions: [
			{
				startDate: new Date('2021-08-07'),
				endDate: new Date('2025-08-07'),
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
								For several years, I ran my own business where I created
								websites and applications. I independently acquired clients
								and managed a team of subcontractors. I completed dozens of
								projects - from simple websites to advanced applications
								using databases.{' '}
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
									'I handled the entire process - from first contact, through design, to implementation and technical support.',
							},
							{
								name: 'Team Management',
								description:
									'I coordinated the work of subcontractors, ensuring timely project delivery.',
							},
						],
					},
					pl: {
						title: 'Founder & Senior Frontend Developer',
						description: (
							<>
								Przez kilka lat prowadziłem własną działalność, w ramach
								której tworzyłem strony i aplikacje. Samodzielnie
								pozyskiwałem klientów i zarządzałem zespołem podwykonawców.
								Zrealizowałem kilkadziesiąt projektów - od prostych stron po
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
									'Zajmowałem się całym procesem - od pierwszego kontaktu, przez projekt, po wdrożenie i wsparcie techniczne.',
							},
							{
								name: 'Zarządzanie zespołem',
								description:
									'Koordynowałem pracę podwykonawców, dbając o terminową realizację projektów.',
							},
						],
					},
				},
			},
		],
		open: false,
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
