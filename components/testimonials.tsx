'use client';

import {useRef} from 'react';
import {Swiper, SwiperSlide, SwiperRef} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';
import {Container} from '@/components/container';
import {Card, CardContent, CardFooter} from '@/components/ui/card';
import {SwiperNavigation} from '@/components/swiper-navigation';
import 'swiper/css';

interface Testimonial {
	name: string;
	position: string;
	img: string;
	text: string;
}

const TESTIMONIALS: Testimonial[] = [
	{
		name: 'Mateusz Woskowicz 1',
		position: 'Google',
		img: '/img/mateusz-woskowicz.jpg',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae viverra nisl, non accumsan lectus. Etiam molestie mauris augue, et aliquam erat porta eget.',
	},
	{
		name: 'Mateusz Woskowicz 2',
		position: 'Google',
		img: '/img/mateusz-woskowicz.jpg',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae viverra nisl, non accumsan lectus. Etiam molestie mauris augue, et aliquam erat porta eget.',
	},
	{
		name: 'Mateusz Woskowicz 3',
		position: 'Apple',
		img: '/img/mateusz-woskowicz.jpg',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae viverra nisl, non accumsan lectus. Etiam molestie mauris augue, et aliquam erat porta eget.',
	},
	{
		name: 'Mateusz Woskowicz 4',
		position: 'Apple',
		img: '/img/mateusz-woskowicz.jpg',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae viverra nisl, non accumsan lectus. Etiam molestie mauris augue, et aliquam erat porta eget.',
	},
];

export function Testimonials() {
	const sliderRef = useRef<SwiperRef>(null);

	return (
		<section
			className="mt-16"
			id="opinie"
		>
			<Container>
				<div className="mb-5 flex items-center justify-between gap-5 border-b pb-1">
					<h2 className="border-0 text-base">Opinie</h2>

					<SwiperNavigation sliderRef={sliderRef} />
				</div>

				<Swiper
					ref={sliderRef}
					modules={[Autoplay, Navigation]}
					navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
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
					{TESTIMONIALS.map(({name, position, img, text}) => (
						<SwiperSlide
							key={name}
							className="group relative cursor-pointer overflow-hidden rounded-lg"
						>
							<Card>
								<CardContent className="pt-6 text-muted-foreground">
									{text}
								</CardContent>

								<CardFooter className="gap-2">
									<img
										src={img}
										alt={name}
										className="h-10 w-10 rounded-full"
									/>

									<div className="flex-col items-start">
										<div>{name}</div>
										<div className="text-sm text-muted-foreground">
											{position}
										</div>
									</div>
								</CardFooter>
							</Card>
						</SwiperSlide>
					))}
				</Swiper>
			</Container>
		</section>
	);
}
