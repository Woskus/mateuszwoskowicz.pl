interface Project {
	title: string;
	company: string;
	img: string;
	imgHero: string;
	href: string;
}

export const samsung = {
	title: 'Mobilne Rozgrywki Galaxy',
	company: 'Samsung',
	img: '/img/projects/samsung.jpg',
	imgHero: '/img/projects/samsung-hero.jpg',
	href: '/project/mobilne-rozgrywki-galaxy',
};

export const pkobp = {
	title: 'PKO BP Fortnite',
	company: 'PKO BP',
	img: '/img/projects/pkobp.jpg',
	imgHero: '/img/projects/pkobp-hero.jpg',
	href: '/project/pkobp-fortnite',
};

export const instreamly = {
	title: 'Wordpress to Next.js Migration',
	company: 'inStreamly',
	img: '/img/projects/instreamly.jpg',
	imgHero: '/img/projects/instreamly-hero.jpg',
	href: '/project/instreamly-website-migration',
};

export const projects: Project[] = [samsung, pkobp, instreamly];
