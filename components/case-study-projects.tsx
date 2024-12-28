import {Project, projects} from '@/data/projects';
import {Projects} from '@/components/projects';

interface CaseStudyProjectsProps {
	projectId: Project['id'];
}

export function CaseStudyProjects({projectId}: CaseStudyProjectsProps) {
	const otherProjects = projects.filter((project) => project.id !== projectId);

	return (
		<Projects
			projects={otherProjects}
			title="Inne projekty"
		/>
	);
}
