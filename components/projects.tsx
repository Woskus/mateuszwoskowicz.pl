'use client';

import dayjs from 'dayjs';
import pl from 'dayjs/locale/pl';
import {useRef} from 'react';
import Link from 'next/link';
import {Swiper, SwiperSlide, SwiperRef} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import {SwiperNavigation} from '@/components/swiper-navigation';
import {Container} from '@/components/container';
import {OptimizedImage} from '@/components/optimized-image';
import type {Project} from '@/data/projects';
import 'swiper/css';

dayjs.locale(pl);

interface ProjectsProps {
	projects: Project[];
	title?: string;
}

export function Projects({projects, title = 'Wyróżnione projekty'}: ProjectsProps) {
	const sliderRef = useRef<SwiperRef>(null);

	return (
		<section
			className="mt-8"
			id="projekty"
		>
			<div className="mb-5 flex items-center justify-between gap-5 border-b pb-1">
				<h2 className="border-0 text-base">{title}</h2>

				<SwiperNavigation sliderRef={sliderRef} />
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
				{projects.map(({title, img, href, logo, date}) => (
					<SwiperSlide
						key={title}
						className="relative cursor-pointer overflow-hidden rounded-lg"
					>
						<Link
							href={href}
							className="group"
						>
							<OptimizedImage
								src={img}
								alt={title}
								width={392}
								height={392}
								className="w-full max-w-[400px] brightness-75 transition-all duration-300 group-hover:scale-105 group-hover:brightness-100 group-focus:scale-105 group-focus:brightness-100"
							/>

							<div className="absolute bottom-0 left-0 h-[150px] w-full bg-transparent bg-gradient-to-t from-black/80 to-black/0" />

							<div className="absolute bottom-8 left-5 text-white">
								{logo}

								<h3 className="text-lg mt-3">{title}</h3>

								<p className="dark:text-muted-foreground text-secondary text-sm">{dayjs(date).format('MMMM YYYY')}</p>
							</div>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
