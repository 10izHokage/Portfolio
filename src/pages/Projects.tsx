import React, { useState } from 'react';
import {TechnologiesList} from '@ styles/ProjectStyle/TechnologiesList';
import {ProjectCard} from '@ styles/ProjectStyle/ProjectCard';
import {ProjectImage} from '@ styles/ProjectStyle/ProjectImage';
import {ProjectTitle} from '@ styles/ProjectStyle/ProjectTitle';
import {ProjectDescription} from '@ styles/ProjectStyle/ProjectDescription';
import {TechnologyItem} from '@ styles/ProjectStyle/TechnologyItem';
import {TechFilter} from '@ styles/ProjectStyle/TechFilter';
import {ProjectLink} from '@ styles/ProjectStyle/ProjectLink';
import { Filter } from '@ styles/ProjectStyle/Filter';
import {DeleteButton} from '@ styles/ProjectStyle/DeleteButton';
import { useProjectStore } from '@/store/useProjectStore';
import { Projects } from '@/Types/Projects';
import { v4 as uuidv4 } from 'uuid';

export const ProjectsComponent: React.FC = () => {
    const [selectedTech, setSelectedTech] = useState<string>('All');
    const { projects, addProject, removeProject } = useProjectStore();

    const [newProject, setNewProject] = useState<Projects>({
        id: '',
        title: '',
        description: '',
        technologies: [],
        link: '',
        imageUrl: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewProject((prevProject) => ({
            ...prevProject,
            [name]: name === 'technologies' ? value.split(',').map((tech) => tech.trim()) : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newProject.title || !newProject.link) {
            alert('Title and Link are required.');
            return;
        }
        const newProjectToAdd: Projects = {
            ...newProject,
            id: uuidv4(),
        };
        addProject(newProjectToAdd);
        setNewProject({ id: '', title: '', description: '', technologies: [], link: '', imageUrl: '' });
    };

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
            <form onSubmit={handleSubmit}>
                <Filter>
                    <input
                        type="text"
                        name="title"
                        value={newProject.title}
                        onChange={handleInputChange}
                        placeholder="Название проекта"
                    />
                    <textarea
                        name="description"
                        value={newProject.description}
                        onChange={handleInputChange}
                        placeholder="Описание проекта"
                    />
                    <input
                        type="text"
                        name="link"
                        value={newProject.link}
                        onChange={handleInputChange}
                        placeholder="Ссылка на проект"
                    />
                    <input
                        type="text"
                        name="technologies"
                        value={newProject.technologies.join(',')}
                        onChange={handleInputChange}
                        placeholder="Технологии"
                    />
                    <button type="submit">Добавить проект</button>
                </Filter>
            </form>
            {filteredProjects.map((project) => (
                <ProjectCard key={project.id}>
                    <ProjectImage src={project.imageUrl || '/placeholder.jpg'} alt={project.title} />
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
                    <DeleteButton onClick={() => removeProject(project.id)}>Удалить проект</DeleteButton>
                </ProjectCard>
            ))}
        </div>
    );
};


