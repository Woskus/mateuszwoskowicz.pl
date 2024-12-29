import dayjs from 'dayjs';
import pl from 'dayjs/locale/pl';
import {OptimizedImage} from '@/components/optimized-image';

dayjs.locale(pl);

interface CaseStudyHeadingProps {
	title: string;
	company: string;
	img: string;
	date: Date;
}

export function CaseStudyHeading({title, company, img, date}: CaseStudyHeadingProps) {
	return (
		<div className="pb-8 pt-[72px]">
			<div className="relative">
				<OptimizedImage
					src={img}
					alt={title}
					width={1192}
					height={250}
					className="h-[250px] w-full rounded-lg object-cover md:h-[400px]"
				/>

				<div className="absolute bottom-0 left-0 md:h-[400px] h-[250px] w-full bg-transparent bg-gradient-to-t from-background to-black/0" />

				<div className="absolute bottom-8 md:left-5 left-2 md:space-y-2">
					<h1>{title}</h1>

					<p className="md:text-lg text-muted-foreground">
						{company}
						{' • '}
						{dayjs(date).format('MMMM YYYY')}
					</p>
				</div>
			</div>
		</div>
	);
}
