import {NorthenLights} from '@/components/northen-lights';
import {Hero} from '@/components/hero';
import {Projects} from '@/components/projects';
import {Experience} from '@/components/experience';

export default function Home() {
	return (
		<>
			<NorthenLights />

			<Hero />

			<Projects />

			<Experience />
		</>
	);
}
