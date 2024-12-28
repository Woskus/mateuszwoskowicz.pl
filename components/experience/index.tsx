import {Container} from '@/components/container';
import {experiences} from '@/data/experience';
import {ExperienceItem} from './experience-item';

export function Experience() {
	return (
		<section
			className="mt-16"
			id="doswiadczenie"
		>
			<Container>
				<h2 className="text-base">Doświadczenie</h2>

				<div className="mt-5 space-y-8">
					{experiences.map((experience, index) => (
						<ExperienceItem
							key={index}
							experience={experience}
						/>
					))}
				</div>
			</Container>
		</section>
	);
}
