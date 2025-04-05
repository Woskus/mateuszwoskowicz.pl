import type {routing} from '@/lib/i18n/routing';

interface Testimonial {
	name: string;
	position: string;
	img: string;
	text: React.ReactNode;
}

export const testimonials: Record<(typeof routing.locales)[number], Testimonial[]> = {
	en: [
		{
			name: 'Wiktoria Wójcik',
			position: 'Co-founder - inStreamly',
			img: 'https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/testimonials/wiktoria-wojcik.jpg',
			text: (
				<>
					<p>
						Mateusz has been working with us for almost five years now, and
						I’ve seen enormous progress during that time. From a junior to
						someone who not only independently delivers complex projects (like
						a new website with cool features) but also{' '}
						<span>manages the process and ensures its quality</span>.
					</p>

					<p>
						Mateusz doesn’t just “write code” – he{' '}
						<span>
							approaches tasks comprehensively and is always reliable
						</span>{' '}
						:) And on top of that, he shows great patience, which is very
						valuable during complex implementations and the somewhat chaotic
						life of a startup.
					</p>
				</>
			),
		},
		{
			name: 'Norbert Uselis',
			position: 'Business Strategist',
			img: 'https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/testimonials/norbert-uselis.jpg',
			text: (
				<>
					<p>
						I’ve worked (and still work) with Mateusz on many projects and
						have never had a single bad thing to say about his work. Always on
						time. Always with a focus{' '}
						<span>on quality</span>, and perhaps most importantly: always with
						a focus{' '}
						<span>on effective communication</span>.
					</p>

					<p>
						I recommend him 100% for everything related to{' '}
						<span>websites, applications, AI, and technology</span>.
					</p>
				</>
			),
		},
		{
			name: 'Robert Szewczyk',
			position: 'Freelance marketer & copywriter',
			img: 'https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/testimonials/robert-szewczyk.jpg',
			text: (
				<>
					<p>
						I collaborated with Mateusz over the past 3 years on building an
						e-learning platform and a marketing agency.
					</p>

					<p>
						Mateusz is definitely a <span>trustworthy and responsible</span>{' '}
						person, which he proved to me time and again throughout our work
						together.
					</p>

					<p>
						I also really appreciate that he often managed to surprise me
						positively and{' '}
						<span>went above and beyond what I expected</span>.
					</p>

					<p>
						He would often <span>take initiative</span> and advise me on how I
						could do things better.
					</p>
				</>
			),
		},
	],
	pl: [
		{
			name: 'Wiktoria Wójcik',
			position: 'Co-founder - inStreamly',
			img: 'https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/testimonials/wiktoria-wojcik.jpg',
			text: (
				<>
					<p>
						Mateusz współpracuje z nami już od prawie pięciu lat i widzę
						ogromny progres jaki dokonał w tym czasie. Od Juniora do osoby
						która nie tylko samodzielnie stawia skomplikowany projekt (nowa
						strona Internetowa z bajerami) ale także{' '}
						<span>zarządza procesem i pilnuje jej jakości</span>.
					</p>

					<p>
						Mateusz nie “klepie kodu“ tylko{' '}
						<span>
							kompleksowo realizuje zadania i zawsze można na nim polegać
						</span>{' '}
						:) A przy okazji oznacza się wielkimi pokładami cierpliwości co
						jest bardzo cenne w skomplikowanych wdrożeniach i nieco
						chaotycznym życiu w startupie.
					</p>
				</>
			),
		},
		{
			name: 'Norbert Uselis',
			position: 'Strateg Biznesowy',
			img: 'https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/testimonials/norbert-uselis.jpg',
			text: (
				<>
					<p>
						Z Mateuszem pracowałem (i nadal pracuje) przy wielu projektach i
						nigdy nie mogłem powiedzieć złego słowa o jego pracy. Zawsze na
						czas. Zawsze z naciskiem <span>na jakość</span> i co chyba
						najważniejsze: zawsze z naciskiem{' '}
						<span>na sprawną komunikację</span>.
					</p>

					<p>
						Polecam w 100% do wszystkich tematów związanych ze{' '}
						<span>stronami, aplikacjami, AI oraz technologią</span>.
					</p>
				</>
			),
		},
		{
			name: 'Robert Szewczyk',
			position: 'Freelance marketer & copywriter',
			img: 'https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/testimonials/robert-szewczyk.jpg',
			text: (
				<>
					<p>
						Współpracowałem z Mateuszem przez ostatnie 3 lata przy tworzeniu
						platformy e-learningowej oraz agencji marketingowej.
					</p>

					<p>
						Mateusz zdecydowanie jest osobą{' '}
						<span>godną zaufania i odpowiedzialną</span>, co udowodnił mi
						niejednokrotnie podczas naszej współpracy.
					</p>

					<p>
						Doceniam również fakt, że wielokrotnie potrafił mnie pozytywnie
						zaskoczyć i{' '}
						<span>dawał od siebie więcej, niż tego oczekiwałem</span>.
					</p>

					<p>
						Często <span>wychodził z własną inicjatywą</span> i doradzał mi,
						co mogę zrobić lepiej.
					</p>
				</>
			),
		},
	],
};
