'use client';

import {useRef} from 'react';
import Link from 'next/link';
import {Swiper, SwiperSlide, SwiperRef} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import {SwiperNavigation} from '@/components/swiper-navigation';
import {Container} from '@/components/container';
import 'swiper/css';

interface Project {
	title: string;
	company: string;
	img: string;
	href: string;
}

const PROJECTS: Project[] = [
	{
		title: 'Strona "Mobilne Rozgrywki Galaxy"',
		company: 'Samsung',
		img: '/img/projects/samsung.jpg',
		href: '/project/mobilne-rozgrywki-galaxy',
	},
	{
		title: 'Strona dla PKO BP Fortnite',
		company: 'PKO BP',
		img: '/img/projects/pkobp.jpg',
		href: '/project/pkobp-fortnite',
	},
	{
		title: 'Wordpress to Next.js Migration',
		company: 'inStreamly',
		img: '/img/projects/instreamly.jpg',
		href: '/project/instreamly-website-migration',
	},
];

export function Projects() {
	const sliderRef = useRef<SwiperRef>(null);

	return (
		<section
			className="mt-8"
			id="projekty"
		>
			<Container>
				<div className="mb-5 flex items-center justify-between gap-5 border-b pb-1">
					<h2 className="border-0 text-base">Wyróżnione projekty</h2>

					<div className="block md:hidden">
						<SwiperNavigation sliderRef={sliderRef} />
					</div>
				</div>

				<Swiper
					ref={sliderRef}
					modules={[Navigation]}
					navigation
					spaceBetween={8}
					breakpoints={{
						1024: {
							slidesPerView: 3,
						},
						768: {
							slidesPerView: 2,
						},
						0: {
							slidesPerView: 1,
						},
					}}
					loop
				>
					{PROJECTS.map(({title, company, img, href}) => (
						<SwiperSlide
							key={title}
							className="group relative cursor-pointer overflow-hidden rounded-lg"
						>
							<Link href={href}>
								<img
									src={img}
									alt={title}
									className="w-full transition-transform duration-300 group-hover:scale-105"
								/>

								<div className="absolute bottom-0 left-0 h-[150px] w-full bg-transparent bg-gradient-to-t from-black/80 to-black/0" />

								<div className="absolute bottom-5 left-5">
									<h3 className="text-lg">{title}</h3>
									<p className="text-sm text-muted-foreground">
										{company}
									</p>
								</div>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</section>
	);
}
