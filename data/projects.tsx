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
	img: '/img/projects/samsung.jpg',
	imgHero: '/img/projects/samsung-hero.jpg',
	logo: <Samsung />,
	href: '/case-study/mobilne-rozgrywki-galaxy',
	date: new Date('2021-12-08'),
};

export const pkobp = {
	id: 'pkobp-fortnite',
	title: 'Strona PKO BP Fortnite',
	company: 'PKO BP',
	img: '/img/projects/pkobp.jpg',
	imgHero: '/img/projects/pkobp-hero.jpg',
	logo: <Pkobp />,
	href: '/case-study/pkobp-fortnite',
	date: new Date('2024-10-01'),
};

export const instreamly = {
	id: 'instreamly-website-migration',
	title: 'Migracja strony z Wordpress do Next.js',
	company: 'inStreamly',
	img: '/img/projects/instreamly.jpg',
	imgHero: '/img/projects/instreamly-hero.jpg',
	logo: <Instreamly />,
	href: '/case-study/instreamly-website-migration',
	date: new Date('2022-06-01'),
};

export const dcc = {
	id: 'dcc-course-platform',
	title: 'Platforma kursowa DCC',
	company: 'Digital Creators Community',
	img: '/img/projects/dcc.jpg',
	imgHero: '/img/projects/dcc-hero.jpg',
	logo: <Dcc />,
	href: '/case-study/platforma-kursowa-dcc',
	date: new Date('2023-10-01'),
};

export const projects: Project[] = [samsung, pkobp, instreamly, dcc];
