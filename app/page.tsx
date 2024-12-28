import {Metadata} from 'next';
import {Hero} from '@/components/hero';
import {Projects} from '@/components/projects';
import {Experience} from '@/components/experience';
import {About} from '@/components/about';
import {Testimonials} from '@/components/testimonials';
import {Cta} from '@/components/cta';
import {NorthenLights} from '@/components/northen-lights';
import {Container} from '@/components/container';
import {projects} from '@/data/projects';

export const metadata: Metadata = {
	title: 'Mateusz Woskowicz - Senior Frontend Developer',
	description:
		'Senior Frontend Developer z 5-letnim doświadczeniem, specjalizujący się w React.js, Next.js, TypeScript i rozwiązaniach AI. Obecnie pracuję w inStreamly oraz prowadzący agencję mwebs.',
};

export default function Home() {
	return (
		<>
			<NorthenLights />

			<Hero />

			<Container>
				<Projects projects={projects} />
			</Container>

			<Experience />

			<About />

			<Testimonials />

			<Cta />
		</>
	);
}
