'use client';

import {useCallback} from 'react';
import {type SwiperRef} from 'swiper/react';
import {ArrowLeft, ArrowRight} from 'lucide-react';
import {Button} from '@/components/ui/button';

interface SwiperNavigationProps {
	sliderRef: React.RefObject<SwiperRef | null>;
}

export function SwiperNavigation({sliderRef}: SwiperNavigationProps) {
	const handlePrev = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slidePrev();
	}, [sliderRef]);

	const handleNext = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slideNext();
	}, [sliderRef]);

	return (
		<div>
			<Button
				onClick={handlePrev}
				variant="ghost"
				size="icon"
				aria-label="Poprzedni"
			>
				<ArrowLeft className="h-4 w-4" />
			</Button>

			<Button
				onClick={handleNext}
				variant="ghost"
				size="icon"
				aria-label="Następny"
			>
				<ArrowRight className="h-4 w-4" />
			</Button>
		</div>
	);
}
