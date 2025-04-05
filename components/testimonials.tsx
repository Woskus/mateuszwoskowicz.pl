'use client';

import {useRef} from 'react';
import {useTranslations, useLocale} from 'next-intl';
import {Swiper, SwiperSlide, type SwiperRef} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import {Container} from '@/components/container';
import {Card, CardContent, CardFooter} from '@/components/ui/card';
import {SwiperNavigation} from '@/components/swiper-navigation';
import {OptimizedImage} from '@/components/optimized-image';
import {testimonials} from '@/data/testimonials';
import 'swiper/css';

export function Testimonials() {
	const t = useTranslations('HomePage');
	const locale = useLocale();
	const sliderRef = useRef<SwiperRef>(null);

	const localizedTestimonials = testimonials[locale];

	return (
		<section
			className="mt-16"
			id="testimonials"
		>
			<Container>
				<div className="mb-5 flex items-center justify-between gap-5 border-b pb-1">
					<h2 className="border-0 text-base">{t('testimonials')}</h2>

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
					{localizedTestimonials.map(({name, position, img, text}) => (
						<SwiperSlide
							key={name}
							className="group relative cursor-pointer overflow-hidden rounded-lg"
						>
							<Card>
								<CardContent className="pt-6 space-y-2 text-muted-foreground [&_span]:text-primary">
									{text}
								</CardContent>

								<CardFooter className="gap-2">
									<OptimizedImage
										src={img}
										alt={name}
										width={64}
										height={64}
										className="h-10 w-10 rounded-full"
										loading="lazy"
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
