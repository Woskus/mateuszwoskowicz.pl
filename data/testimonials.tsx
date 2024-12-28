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
		img: '/img/testimonials/wiktoria-wojcik.jpg',
		text: (
			<>
				<p>
					Mateusz współpracuje z nami już od prawie dwóch lat i widzę ogromny
					progres jaki dokonał w tym czasie. Od Juniora do osoby która nie tylko
					samodzielnie stawia skomplikowany projekt (nowa strona Internetowa z
					bajerami) ale także zarządza procesem i pilnuje jej jakości.
				</p>

				<p>
					Mateusz nie "klepie kodu" tylko kompleksowo realizuje zadania i zawsze
					można na nim polegać :) A przy okazji oznacza się wielkimi pokładami
					cierpliwości co jest bardzo cenne w skomplikowanych wdrożeniach i
					nieco chaotycznym życiu w startupie.
				</p>
			</>
		),
	},
	{
		name: 'Robert Szewczyk',
		position: 'Freelance marketer & copywriter',
		img: '/img/testimonials/robert-szewczyk.jpg',
		text: (
      <>
        <p>Współpraca z Mateuszem to była dla mnie czysta przyjemność.</p>

        <p>Co wyróżnia Mateusza na tle osób, z którymi miałem okazję współpracować?</p>

        <p>Zdecydowanie niesamowita komunikatywność - od samego początku do końca czułem się bardzo zadbany, byłem informowany o wszystkim na bieżąco, a nasza współpraca przebiegała bez zarzutów.</p>

        <p>Kawał świetnej roboty i ogromny profesjonalizm, dziękuję 👏🏼</p>
      </>
    ),
	},
	{
		name: 'Wojciech Kluk',
		position: 'CEO & Founder, IT Recruitment Expert & Headhunter',
    img: '/img/testimonials/wojciech-kluk.jpg',
		text: (
      <>
        <p>Mateusz to prawdziwy profesjonalista. Super kontakt i proaktywna postawa.</p>

        <p>Zawsze służy pomocą, nawet po ukończeniu projektu.</p>

        <p>Serdecznie polecam Mateusza.</p>
      </>
    ),
	},
];
