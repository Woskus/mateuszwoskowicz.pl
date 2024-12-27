import {NorthenLights} from '@/components/northen-lights';
import {Hero} from '@/components/hero';
import {Projects} from '@/components/projects';
import {Experience} from '@/components/experience';
import {About} from '@/components/about';
import {Testimonials} from '@/components/testimonials';

export default function Home() {
	return (
		<>
			<NorthenLights />

			<Hero />

			<Projects />

			<Experience />

			<About />

			<Testimonials />
		</>
	);
}
