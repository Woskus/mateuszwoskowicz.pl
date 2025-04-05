import {Dcc, Instreamly, Pkobp, Samsung} from '@/components/logotypes';

export interface Project {
	id: string;
	company: string;
	img: string;
	imgHero: string;
	logo: React.ReactNode;
	href: string;
	date: Date;
}

export const samsung: Project = {
	id: 'samsung',
	company: 'Samsung',
	img: 'https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/projects/samsung.jpg',
	imgHero:
		'https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/projects/samsung-hero.jpg',
	logo: <Samsung />,
	href: '/case-study/mobilne-rozgrywki-galaxy',
	date: new Date('2021-12-08'),
};

export const pkobp: Project = {
	id: 'pko',
	company: 'PKO Bank Polski',
	img: 'https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/projects/pkobp.jpg',
	imgHero:
		'https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/projects/pkobp-hero.jpg',
	logo: <Pkobp />,
	href: '/case-study/pko-bank-polski-landing-page',
	date: new Date('2024-10-01'),
};

export const instreamly: Project = {
	id: 'instreamlyWordpress',
	company: 'inStreamly',
	img: 'https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/projects/instreamly.jpg',
	imgHero:
		'https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/projects/instreamly-hero.jpg',
	logo: <Instreamly />,
	href: '/case-study/instreamly-wordpress',
	date: new Date('2022-06-01'),
};

export const dcc: Project = {
	id: 'digitalCreatorsCommunity',
	company: 'Digital Creators Community',
	img: 'https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/projects/dcc.jpg',
	imgHero:
		'https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/projects/dcc-hero.jpg',
	logo: <Dcc />,
	href: '/case-study/digital-creators-community',
	date: new Date('2023-10-01'),
};

export const projects: Project[] = [samsung, pkobp, instreamly, dcc];
