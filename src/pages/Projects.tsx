import React, { useState, useMemo } from 'react';
import { useLocalProjectStore } from '@/store/LocalProjectStore.ts';
import { Project } from '@/Types/Project.ts';
import { TechnologiesList } from '@ styles/ProjectStyle/TechnologiesList.tsx';
import { ProjectCard } from '@ styles/ProjectStyle/ProjectCard.tsx';
import { ProjectImage } from '@ styles/ProjectStyle/ProjectImage.tsx';
import { ProjectTitle } from '@ styles/ProjectStyle/ProjectTitle.tsx';
import { ProjectDescription } from '@ styles/ProjectStyle/ProjectDescription.tsx';
import { TechnologyItem } from '@ styles/ProjectStyle/TechnologyItem.tsx';
import { TechFilter } from '@ styles/ProjectStyle/TechFilter.tsx';
import { Filter } from '@ styles/ProjectStyle/Filter.tsx';
import { DeleteButton } from '@ styles/ProjectStyle/DeleteButton.tsx';
import { ProjectLink } from '@ styles/ProjectStyle/ProjectLink.tsx';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';

export const ProjectsPage: React.FC = () => {
    const [selectedTech, setSelectedTech] = useState<string>('All');
    const [notification, setNotification] = useState<string | null>(null);
    const { projects, addProject, removeProject } = useLocalProjectStore();

    const uniqueTechnologies = useMemo(() => {
        return Array.from(new Set(projects.flatMap((project) => project.technologies)));
    }, [projects]);

    const handleNotification = (message: string, timeout = 3000) => {
        setNotification(message);
        setTimeout(() => setNotification(null), timeout);
    };

    const filteredProjects = useMemo(() => {
        return projects.filter((project) =>
            selectedTech === 'All' ? true : project.technologies.includes(selectedTech)
        );
    }, [projects, selectedTech]);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 3}}
        >
            {notification && <div className="notification">{notification}</div>}

            <TechFilter value={selectedTech} onChange={(e) => setSelectedTech(e.target.value)}>
                <option value="All">Все технологии</option>
                {uniqueTechnologies.map((tech) => (
                    <option key={tech} value={tech}>
                        {tech}
                    </option>
                ))}
            </TechFilter>

            <AddProjectForm
                onAddProject={(newProject) => {
                    addProject(newProject);
                    handleNotification('Проект успешно добавлен!');
                }}
            />

            <ProjectList
                projects={filteredProjects}
                onDeleteProject={(projectId) => {
                    removeProject(projectId);
                    handleNotification('Проект успешно удален!');
                }}
            />
        </motion.div>
    );
};

const AddProjectForm: React.FC<{ onAddProject: (project: Project) => void }> = ({onAddProject}) => {
    const [newProject, setNewProject] = useState<Project>({
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

    const validateUrl = (url: string): boolean => {
        const pattern = new RegExp(
            '^(https?:\\/\\/)' +
            '((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|' +
            '((\\d{1,3}\\.){3}\\d{1,3}))' +
            '(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*' +
            '(\\?[;&a-zA-Z\\d%_.~+=-]*)?' +
            '(\\#[-a-zA-Z\\d_]*)?$',
            'i'
        );
        return pattern.test(url);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newProject.title || !newProject.link) {
            alert('Название и ссылка обязательны.');
            return;
        }
        if (!validateUrl(newProject.link)) {
            alert('Некорректный URL.');
            return;
        }
        const newProjectToAdd: Project = { ...newProject, id: uuidv4() };
        onAddProject(newProjectToAdd);
        setNewProject({ id: '', title: '', description: '', technologies: [], link: '', imageUrl: '' });
    };

    return (
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
    );
};

const ProjectList: React.FC<{
    projects: Project[];
    onDeleteProject: (id: string) => void;
}> = ({ projects, onDeleteProject }) => {
    return (
        <>
            {projects.map((project) => (
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
                    <DeleteButton onClick={() => onDeleteProject(project.id)}>Удалить проект</DeleteButton>
                </ProjectCard>
            ))}
        </>
    );
};




