import Link from 'next/link';
import {Container} from '@/components/container';

interface Project {
	title: string;
	company: string;
	img: string;
}

const PROJECTS: Project[] = [
	{
		title: 'Strona "Mobilne Rozgrywki Galaxy"',
		company: 'Samsung',
		img: '/img/projects/samsung.png',
	},
	{
		title: 'Strona dla PKO BP Fortnite',
		company: 'PKO BP',
		img: '/img/projects/pkobp.png',
	},
	{
		title: 'Wordpress to Next.js Migration',
		company: 'inStreamly',
		img: '/img/projects/instreamly.png',
	},
];

export function Projects() {
	return (
		<section className="mt-8">
			<Container>
				<h2 className="text-base">Wyróżnione projekty</h2>

				<div className="mt-5 grid md:grid-cols-3 grid-cols-1 gap-2">
					{PROJECTS.map(({title, company, img}) => (
						<Link
							href="#"
							key={title}
							className="group relative cursor-pointer overflow-hidden rounded-lg"
						>
							<img
								src={img}
								alt={title}
								className="w-full transition-transform duration-300 group-hover:scale-105"
							/>

							<div className="absolute bottom-0 left-0 h-[150px] w-full bg-transparent bg-gradient-to-t from-black/80 to-black/0" />

							<div className="absolute bottom-5 left-5">
								<h3 className="text-lg">{title}</h3>
								<p className="text-sm text-muted-foreground">{company}</p>
							</div>
						</Link>
					))}
				</div>
			</Container>
		</section>
	);
}
