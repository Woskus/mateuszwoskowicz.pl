import {Instreamly, Pkobp, Samsung} from '@/components/logotypes';

interface Project {
	title: string;
	company: string;
	img: string;
	imgHero: string;
	logo: React.ReactNode;
	href: string;
}

export const samsung = {
	title: 'Strona "Mobilne Rozgrywki Galaxy"',
	company: 'Samsung',
	img: '/img/projects/samsung.jpg',
	imgHero: '/img/projects/samsung-hero.jpg',
	logo: <Samsung />,
	href: '/case-study/mobilne-rozgrywki-galaxy',
};

export const pkobp = {
	title: 'Strona PKO BP Fortnite',
	company: 'PKO BP',
	img: '/img/projects/pkobp.jpg',
	imgHero: '/img/projects/pkobp-hero.jpg',
	logo: <Pkobp />,
	href: '/case-study/pkobp-fortnite',
};

export const instreamly = {
	title: 'Migracja strony z Wordpress do Next.js',
	company: 'inStreamly',
	img: '/img/projects/instreamly.jpg',
	imgHero: '/img/projects/instreamly-hero.jpg',
	logo: <Instreamly />,
	href: '/case-study/instreamly-website-migration',
};

export const projects: Project[] = [samsung, pkobp, instreamly];
