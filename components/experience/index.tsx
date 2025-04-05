import {useTranslations} from 'next-intl';
import {Container} from '@/components/container';
import {experiences} from '@/data/experience';
import {ExperienceItem} from './experience-item';

export function Experience() {
	const t = useTranslations('HomePage.experience');

	return (
		<section
			className="mt-16"
			id="experience"
		>
			<Container>
				<h2 className="text-base">{t('title')}</h2>

				<div className="mt-5 space-y-8">
					{experiences.map((experience) => (
						<ExperienceItem
							key={experience.id}
							experience={experience}
						/>
					))}
				</div>
			</Container>
		</section>
	);
}
