import {Hero} from '@/components/hero';
import {Projects} from '@/components/projects';
import {Experience} from '@/components/experience';
import {About} from '@/components/about';
import {Testimonials} from '@/components/testimonials';
import {Cta} from '@/components/cta';

export default function Home() {
	return (
		<>
			<Hero />

			<Projects />

			<Experience />

			<About />

			<Testimonials />

			<Cta />
		</>
	);
}
