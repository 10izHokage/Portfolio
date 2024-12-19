import React, { useEffect } from 'react';
import { useGitHubProjectStore } from '@/store/githubProjectStore';
import { RefreshButton } from '@/styles/GithabProjectsStyles/RefreshButton.tsx';
import { Error_Loading } from '@/styles/GithabProjectsStyles/Error_Loading.tsx';
import { ProjectLanguage } from '@/styles/GithabProjectsStyles/ProjectLanguage.tsx';
import { ProjectDescription } from '@/styles/GithabProjectsStyles/ProjectDescription.tsx';
import { ProjectTitle } from '@/styles/GithabProjectsStyles/ProjectTitle.tsx';
import { ProjectCard } from '@/styles/GithabProjectsStyles/ProjectCard.tsx';
import { ProjectList } from '@/styles/GithabProjectsStyles/ProjectList.tsx';
import { Container } from '@/styles/GithabProjectsStyles/Container.tsx';
import { ProjectLink } from '@/styles/GithabProjectsStyles/ProjectLink.tsx';

export const GitHubProjects: React.FC = () => {
    const { projects: gitProjects, status, error, fetchProjects } = useGitHubProjectStore();
    const username = '10izHokage';

    useEffect(() => {
        fetchProjects(username);
    }, [fetchProjects, username]);

    const handleRefresh = () => {
        fetchProjects(username);
    };

    return (
        <Container>
            {status === 'loading' && <Error_Loading>Loading...</Error_Loading>}
            {status === 'failed' && <Error_Loading>Error: {error}</Error_Loading>}
            {status === 'succeeded' && (
                <>
                    <RefreshButton onClick={handleRefresh}>Обновить</RefreshButton>
                    <ProjectList>
                        {gitProjects.map((project) => (
                            <ProjectCard key={project.id}>
                                <ProjectTitle href={project.html_url} target="_blank">
                                    {project.name}
                                </ProjectTitle>
                                <ProjectDescription>
                                    {project.description || 'Описание недоступно'}
                                </ProjectDescription>
                                <ProjectLink href={project.html_url} target="_blank" rel="noopener noreferrer">
                                    Ссылка на репозиторий
                                </ProjectLink>
                                <ProjectLanguage>
                                    {/* Проверка на null для language */}
                                    Технологии: {project.language ? project.language : 'Нет данных'}
                                </ProjectLanguage>
                            </ProjectCard>
                        ))}
                    </ProjectList>
                </>
            )}
        </Container>
    );
};


