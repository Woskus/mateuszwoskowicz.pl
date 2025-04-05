import {useTranslations} from 'next-intl';
import {type Project, projects} from '@/data/projects';
import {Projects} from '@/components/projects';

interface CaseStudyProjectsProps {
	projectId: Project['id'];
}

export function CaseStudyProjects({projectId}: CaseStudyProjectsProps) {
	const t = useTranslations('CaseStudies');
	const otherProjects = projects.filter((project) => project.id !== projectId);

	return (
		<Projects
			projects={otherProjects}
			title={t('otherProjects')}
		/>
	);
}
