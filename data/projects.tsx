import {Dcc, Instreamly, Pkobp, Samsung} from '@/components/logotypes';

export interface Project {
	id: string;
	title: string;
	company: string;
	img: string;
	imgHero: string;
	logo: React.ReactNode;
	href: string;
	date: Date;
}

export const samsung = {
	id: 'samsung-mobilne-rozgrywki-galaxy',
	title: 'Strona "Mobilne Rozgrywki Galaxy"',
	company: 'Samsung',
	img: 'https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/projects/samsung.jpg',
	imgHero: 'https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/projects/samsung-hero.jpg',
	logo: <Samsung />,
	href: '/case-study/mobilne-rozgrywki-galaxy',
	date: new Date('2021-12-08'),
};

export const pkobp = {
	id: 'pko-bank-polski-fortnite',
	title: 'Konkursowy Landing Page dla PKO Bank Polski',
	company: 'PKO Bank Polski',
	img: 'https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/projects/pkobp.jpg',
	imgHero: 'https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/projects/pkobp-hero.jpg',
	logo: <Pkobp />,
	href: '/case-study/konkursowy-landing-page-dla-pko-bank-polski',
	date: new Date('2024-10-01'),
};

export const instreamly = {
	id: 'instreamly-website-migration',
	title: 'Migracja strony z Wordpress do Next.js',
	company: 'inStreamly',
	img: 'https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/projects/instreamly.jpg',
	imgHero: 'https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/projects/instreamly-hero.jpg',
	logo: <Instreamly />,
	href: '/case-study/instreamly-website-migration',
	date: new Date('2022-06-01'),
};

export const dcc = {
	id: 'dcc-elearning-platform',
	title: 'Platforma e-learningowa DCC',
	company: 'Digital Creators Community',
	img: 'https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/projects/dcc.jpg',
	imgHero: 'https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/projects/dcc-hero.jpg',
	logo: <Dcc />,
	href: '/case-study/platforma-elearningowa-dcc',
	date: new Date('2023-10-01'),
};

export const projects: Project[] = [samsung, pkobp, instreamly, dcc];
