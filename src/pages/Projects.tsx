import TechnologiesList from "../styles/ProjectStyle/TechnologiesList.tsx";
import ProjectCard from "../styles/ProjectStyle/ProjectCard.tsx";
import ProjectImage from "../styles/ProjectStyle/ProjectImage.tsx";
import ProjectTitle from "../styles/ProjectStyle/ProjectTitle.tsx";
import ProjectDescription from "../styles/ProjectStyle/ProjectDescription.tsx";
import TechnologyItem from "../styles/ProjectStyle/TechnologyItem.tsx";
import TechFilter from "../styles/ProjectStyle/TechFilter.tsx";
import ProjectLink  from "../styles/ProjectStyle/ProjectLink.tsx";
import { useState } from 'react';
import { projects } from '../Data/projects'

const Projects: React.FC = () => {
    const [selectedTech, setSelectedTech] = useState<string>('All');

    const filteredProjects = projects.filter((project) =>
        selectedTech === 'All' ? true : project.technologies.includes(selectedTech)
    );

    return (
        <div>
            <TechFilter value={selectedTech} onChange={(e) => setSelectedTech(e.target.value)}>
                <option value="All">Все технологии</option>
                {Array.from(new Set(projects.flatMap((project) => project.technologies))).map((tech) => (
                    <option key={tech} value={tech}>
                        {tech}
                    </option>
                ))}
            </TechFilter>
            {filteredProjects.map((project) => (
                <ProjectCard key={project.id}>
                    <ProjectImage src={project.imageUrl} alt={project.title} />
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <TechnologiesList>
                        {project.technologies.map((tech) => (
                            <TechnologyItem key={tech}>{tech}</TechnologyItem>
                        ))}
                    </TechnologiesList>
                    <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                        Ссылка на проект
                    </ProjectLink>
                </ProjectCard>
            ))}
        </div>
    );
};
export default Projects;