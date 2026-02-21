import type {Metadata} from 'next';
import {useTranslations} from 'next-intl';
import {Container} from '@/components/container';
import {Hero} from '@/components/hero';
import {Projects} from '@/components/projects';
import {Experience} from '@/components/experience';
import {About} from '@/components/about';
import {Testimonials} from '@/components/testimonials';
import {Cta} from '@/components/cta';
import {NorthenLights} from '@/components/northen-lights';
import {Certificates} from '@/components/certificates';
import {projects} from '@/data/projects';

export const metadata: Metadata = {
	title: 'Mateusz Woskowicz - Senior Frontend Developer',
	description:
		'Senior Frontend Developer specjalizujący się we wdrożeniach AI, systemach multiagentowych, automatyzacjach n8n oraz integracjach z ekosystemami OpenAI, Notion, Airtable i Google.',
	openGraph: {
		images: [
			{
				url: 'https://s3.eu-central-1.amazonaws.com/mateuszwoskowicz.pl/og-image.jpg',
				width: 1200,
				height: 628,
				alt: 'Mateusz Woskowicz - Senior Frontend Developer',
			},
		],
	},
};

export default function Home() {
	const t = useTranslations('HomePage');

	return (
		<>
			<NorthenLights />

			<Hero />

			<Container>
				<Projects
					title={t('featuredProjects')}
					projects={projects}
				/>
			</Container>

			<Experience />

			<About />

			<Certificates />

			<Testimonials />

			<Cta />
		</>
	);
}
