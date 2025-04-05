import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {projects} from '@/data/projects';

export async function generateMetadata({params}: {params: Promise<{slug: string}>}) {
	const t = await getTranslations();
	const {slug} = await params;

	const project = projects.find(({href}) => href === `/case-study/${slug}`);

	return {
		// @ts-expect-error -- We use dynamic id that's why we need to ignore this error.
		title: t(`CaseStudies.${project?.id}.title`) ?? 'Case study',
		description: '',
	}
}

export default async function Page({
	params,
}: {
	params: Promise<{slug: string; locale: string}>;
}) {
	const {slug, locale} = await params;

	try {
		const Content = (await import(`../${slug}/${locale}.mdx`)).default;
		return <Content />;
	} catch (error) {
		notFound();
	}
}
