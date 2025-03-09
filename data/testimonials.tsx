interface Testimonial {
	name: string;
	position: string;
	img: string;
	text: React.ReactNode;
}

export const testimonials: Testimonial[] = [
	{
		name: 'Wiktoria Wójcik',
		position: 'Co-founder - inStreamly',
		img: 'https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/testimonials/wiktoria-wojcik.jpg',
		text: (
			<>
				<p>
					Mateusz współpracuje z nami już od prawie dwóch lat i widzę ogromny
					progres jaki dokonał w tym czasie. Od Juniora do osoby która nie tylko
					samodzielnie stawia skomplikowany projekt (nowa strona Internetowa z
					bajerami) ale także{' '}
					<span>zarządza procesem i pilnuje jej jakości</span>.
				</p>

				<p>
					Mateusz nie "klepie kodu" tylko{' '}
					<span>
						kompleksowo realizuje zadania i zawsze można na nim polegać
					</span>{' '}
					:) A przy okazji oznacza się wielkimi pokładami cierpliwości co jest
					bardzo cenne w skomplikowanych wdrożeniach i nieco chaotycznym życiu w
					startupie.
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
					Z Mateuszem pracowałem (i nadal pracuje) przy wielu projektach i nigdy nie mogłem powiedzieć złego słowa o jego pracy. Zawsze na czas. Zawsze z naciskiem <span>na jakość</span> i co chyba najważniejsze: zawsze z naciskiem <span>na sprawną komunikację</span>.
				</p>

				<p>Polecam w 100% do wszystkich tematów związanych ze <span>stronami, aplikacjami, AI oraz technologią</span>.</p>
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
					zaskoczyć i <span>dawał od siebie więcej, niż tego oczekiwałem</span>.
				</p>

				<p>
					Często <span>wychodził z własną inicjatywą</span> i doradzał mi, co
					mogę zrobić lepiej.
				</p>
			</>
		),
	},
];
