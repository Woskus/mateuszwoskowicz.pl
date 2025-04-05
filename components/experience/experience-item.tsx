import {useTranslations, useLocale} from 'next-intl';
import {ArrowRight, Calendar} from 'lucide-react';
import {Card, CardContent} from '@/components/ui/card';
import {Badge, type BadgeProps} from '@/components/ui/badge';
import {Ping} from '@/components/ping';
import {LocalizedDate} from '@/components/localized-date';
import {LocalizedRelativeTime} from '@/components/localized-relative-time';
import type {Experience} from '@/data/experience';
import {ExperienceCollapsible} from './experience-collapsible';

const experiencesMap: Record<
	Experience['type'],
	{
		variant: BadgeProps['variant'];
	}
> = {
	fullTime: {
		variant: 'success',
	},
	business: {
		variant: 'info',
	},
	freelance: {
		variant: 'warning',
	},
};

interface ExperienceItemProps {
	experience: Experience;
	open?: boolean;
}

function ExperienceHeader({experience}: {experience: Experience}) {
	const t = useTranslations('HomePage.experience');

	const {variant} = experiencesMap[experience.type];

	return (
		<div className="flex items-center gap-3">
			{experience.logo}
			<Badge variant={variant}>{t(experience.type)}</Badge>
		</div>
	);
}

function ExperienceContent({experience}: {experience: Experience}) {
	const t = useTranslations('HomePage.experience');
	const locale = useLocale();

	return (
		<CardContent className="space-y-6">
			{experience.positions.map((position) => (
				<div
					key={position.locale[locale].title}
					className="border-t pt-6 first:border-t-0 first:pt-0"
				>
					<h3 className="text-lg font-semibold">
						{position.locale[locale].title}
					</h3>

					<div className="mt-1 flex items-center text-sm text-muted-foreground">
						<Calendar className="mr-2 h-3.5 w-3.5" />

						<div className="flex flex-wrap items-center gap-2">
							<span>
								<LocalizedDate date={position.startDate} />
							</span>

							<span>-</span>

							<span className="flex items-center gap-1">
								{position.endDate ? (
									<LocalizedDate date={position.endDate} />
								) : (
									<>
										<Ping />
										{t('present')}
									</>
								)}
							</span>

							<span className="flex items-center gap-1">
								<span>-</span>
								<span className="text-sm text-muted-foreground">
									<LocalizedRelativeTime
										startDate={position.startDate}
										endDate={position?.endDate}
									/>
								</span>
							</span>
						</div>
					</div>

					<p className="mt-2 text-sm text-muted-foreground">
						{position.locale[locale].description}
					</p>

					{position.locale[locale].projects.length > 0 && (
						<div className="mt-6">
							<h4 className="mb-2 text-sm font-semibold">
								{t('featured')}:
							</h4>

							<ul className="space-y-2">
								{position.locale[locale].projects.map((project) => (
									<li
										key={project.name}
										className="flex items-start gap-1 text-muted-foreground"
									>
										<ArrowRight className="mt-[1px] h-4 w-4 flex-shrink-0 text-primary" />
										<div className="text-sm">
											<p className="font-medium text-primary">
												{project.name}:{' '}
											</p>
											<span className="[&>a]:h-auto [&>a]:p-0">
												{project.description}
											</span>
										</div>
									</li>
								))}
							</ul>
						</div>
					)}

					{position.technologies.length > 0 && (
						<div className="mt-6">
							<h4 className="mb-1 text-sm font-semibold">
								{t('technologies')}:
							</h4>
							<p className="text-sm text-muted-foreground">
								{position.technologies.join(', ')}
							</p>
						</div>
					)}
				</div>
			))}
		</CardContent>
	);
}

export function ExperienceItem({experience}: ExperienceItemProps) {
	return (
		<Card id={experience.id}>
			<ExperienceCollapsible
				header={<ExperienceHeader experience={experience} />}
				initialOpen={Boolean(experience?.open)}
			>
				<ExperienceContent experience={experience} />
			</ExperienceCollapsible>
		</Card>
	);
}
