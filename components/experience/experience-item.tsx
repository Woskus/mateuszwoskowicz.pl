import dayjs from 'dayjs';
import {ArrowRight, Calendar} from 'lucide-react';
import {Card, CardContent, CardHeader} from '@/components/ui/card';
import {Badge, BadgeProps} from '@/components/ui/badge';
import type {Experience} from './index';

const experiencesColorsMap: Record<Experience['type'], BadgeProps['variant']> = {
	'full-time': 'success',
	'part-time': 'info',
	freelance: 'warning',
};

interface ExperienceItemProps {
	experience: Experience;
}

export function ExperienceItem({experience}: ExperienceItemProps) {
	return (
		<Card className="w-full">
			<CardHeader className="flex flex-row items-center gap-3">
				{experience.logo}

				<Badge variant={experiencesColorsMap[experience.type]}>
					{experience.type}
				</Badge>
			</CardHeader>

			<CardContent className="space-y-6">
				{experience.positions.map((position, posIndex) => (
					<div
						key={posIndex}
						className="border-t pt-4 first:border-t-0 first:pt-0"
					>
						<h3 className="flex items-center gap-2 text-lg font-semibold">
							{position.title}
						</h3>

						<div className="mt-1 flex items-center text-sm text-muted-foreground">
							<Calendar className="mr-2 h-3.5 w-3.5" />

							<p className="mr-2">
								{dayjs(position.startDate).format('DD.MM.YYYY')} -{' '}

                {position.endDate
									? dayjs(position.endDate).format('DD.MM.YYYY')
									: 'Present'}
							</p>
						</div>

						<p className="mt-2 text-sm text-muted-foreground">{position.description}</p>

						{position.projects.length > 0 && (
							<div className="mt-4">
								<h4 className="mb-2 text-sm font-semibold">
									Featured projects:
								</h4>
								<ul className="space-y-2">
									{position.projects.map((project, projIndex) => (
										<li
											key={projIndex}
											className="flex items-start gap-2 text-muted-foreground"
										>
											<ArrowRight className="mt-1 h-4 w-4 flex-shrink-0" />
											<div className="text-sm">
												<span className="font-medium">
													{project.name}:{' '}
												</span>
												{project.description}
											</div>
										</li>
									))}
								</ul>
							</div>
						)}

						{position.technologies.length > 0 && (
							<div className="mt-4">
								<h4 className="mb-1 text-sm font-semibold">
									Technologia:
								</h4>
								<p className="text-muted-foreground text-sm">
									{position.technologies.join(', ')}
								</p>
							</div>
						)}
					</div>
				))}
			</CardContent>
		</Card>
	);
}
