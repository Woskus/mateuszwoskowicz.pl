'use client';

import {useRef} from 'react';
import {Swiper, SwiperSlide, SwiperRef} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import {Container} from '@/components/container';
import {Card, CardContent, CardFooter} from '@/components/ui/card';
import {SwiperNavigation} from '@/components/swiper-navigation';
import {testimonials} from '@/data/testimonials';
import 'swiper/css';

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
					modules={[Navigation]}
					navigation
					spaceBetween={8}
					breakpoints={{
						768: {
							slidesPerView: 2,
						},
						0: {
							slidesPerView: 1,
						},
					}}
					loop
				>
					{testimonials.map(({name, position, img, text}) => (
						<SwiperSlide
							key={name}
							className="group relative cursor-pointer overflow-hidden rounded-lg"
						>
							<Card>
								<CardContent className="pt-6 space-y-2">
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
