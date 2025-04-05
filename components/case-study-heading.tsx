import {useTranslations} from 'next-intl';
import {OptimizedImage} from '@/components/optimized-image';
import {LocalizedDate} from '@/components/localized-date';
import type {Project} from '@/data/projects';

interface CaseStudyHeadingProps {
	id: Project['id'];
	company: Project['company'];
	img: Project['img'];
	date: Date;
}

export function CaseStudyHeading({id, company, img, date}: CaseStudyHeadingProps) {
	const t = useTranslations('CaseStudies');

	return (
		<div className="pb-8 pt-[72px]">
			<div className="relative">
				<OptimizedImage
					src={img}
					alt={id}
					width={1192}
					height={250}
					className="h-[250px] w-full rounded-lg object-cover md:h-[400px]"
				/>

				<div className="absolute bottom-0 left-0 h-[250px] w-full bg-transparent bg-gradient-to-t from-background to-black/0 md:h-[400px]" />

				<div className="absolute bottom-8 left-2 md:left-5 md:space-y-2">
					{/* @ts-expect-error -- We use dynamic id that's why we need to ignore this error. */}
					<h1>{t(`${id}.title`)}</h1>

					<p className="text-muted-foreground md:text-lg">
						{company}
						{' • '}
						<LocalizedDate date={date} />
					</p>
				</div>
			</div>
		</div>
	);
}
