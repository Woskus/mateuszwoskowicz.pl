'use client';

import {useCallback} from 'react';
import {SwiperRef} from 'swiper/react';
import {Button} from '@/components/ui/button';
import {ArrowLeft, ArrowRight} from 'lucide-react';

interface SwiperNavigationProps {
  sliderRef: React.RefObject<SwiperRef | null>;
}

export function SwiperNavigation({sliderRef}: SwiperNavigationProps) {
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div>
      <Button
        onClick={handlePrev}
        variant="ghost"
        size="icon"
      >
        <ArrowLeft className="h-4 w-4" />
      </Button>

      <Button
        onClick={handleNext}
        variant="ghost"
        size="icon"
      >
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
