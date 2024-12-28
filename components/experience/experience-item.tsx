import dayjs from 'dayjs';
import pl from 'dayjs/locale/pl';
import {ArrowRight, Calendar} from 'lucide-react';
import {Card, CardContent} from '@/components/ui/card';
import {Badge, BadgeProps} from '@/components/ui/badge';
import {Ping} from '@/components/ping';
import {ExperienceCollapsible} from './experience-collapsible';
import type {Experience} from '@/data/experience';

dayjs.locale(pl);

const experiencesMap: Record<
	Experience['type'],
	{
		variant: BadgeProps['variant'];
		label: string;
	}
> = {
	'full-time': {
		variant: 'success',
		label: 'Pełen etat',
	},
	'part-time': {
		variant: 'info',
		label: 'Side project',
	},
	freelance: {
		variant: 'warning',
		label: 'Freelance',
	},
};

interface ExperienceItemProps {
	experience: Experience;
	open?: boolean;
}

function ExperienceHeader({experience}: {experience: Experience}) {
	const {variant, label} = experiencesMap[experience.type];

	return (
		<div className="flex items-center gap-3">
			{experience.logo}
			<Badge variant={variant}>{label}</Badge>
		</div>
	);
}

function ExperienceContent({experience}: {experience: Experience}) {
	return (
		<CardContent className="space-y-6">
			{experience.positions.map((position) => (
				<div
					key={position.title}
					className="border-t pt-4 first:border-t-0 first:pt-0"
				>
					<h3 className="text-lg font-semibold">{position.title}</h3>

					<div className="mt-1 flex items-center text-sm text-muted-foreground">
						<Calendar className="mr-2 h-3.5 w-3.5" />

						<div className="flex items-center gap-2">
							<span>{dayjs(position.startDate).format('MMMM YYYY')}</span>

							<span>-</span>

							<span className="flex items-center gap-1">
								{position.endDate ? (
									dayjs(position.endDate).format('MMMM YYYY')
								) : (
									<>
										<Ping />
										Obecnie
									</>
								)}
							</span>
						</div>
					</div>

					<p className="mt-2 text-sm text-muted-foreground">
						{position.description}
					</p>

					{position.projects.length > 0 && (
						<div className="mt-6">
							<h4 className="mb-2 text-sm font-semibold">
								Wyróżnione projekty:
							</h4>

							<ul className="space-y-2">
								{position.projects.map((project) => (
									<li
										key={project.name}
										className="flex items-start gap-1 text-muted-foreground"
									>
										<ArrowRight className="h-4 w-4 flex-shrink-0 text-primary" />
										<div className="text-sm">
											<p className="font-medium text-primary">
												{project.name}:{' '}
											</p>
											<span>{project.description}</span>
										</div>
									</li>
								))}
							</ul>
						</div>
					)}

					{position.technologies.length > 0 && (
						<div className="mt-6">
							<h4 className="mb-1 text-sm font-semibold">Technologia:</h4>
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
