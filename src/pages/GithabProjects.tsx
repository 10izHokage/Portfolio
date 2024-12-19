import React, { useEffect } from 'react';
import { useGitHubProjectStore } from '@/store/githubProjectStore';
import { RefreshButton } from '@/styles/GithabProjectsStyles/RefreshButton.tsx';
import { LoadingIndicator } from '@/styles/GithabProjectsStyles/LoadingIndicator.tsx';
import { ErrorMessage } from '@/styles/GithabProjectsStyles/ErrorMessage.tsx';
import { ProjectLanguage } from '@/styles/GithabProjectsStyles/ProjectLanguage.tsx';
import { ProjectDescription } from '@/styles/GithabProjectsStyles/ProjectDescription.tsx';
import { ProjectTitle } from '@/styles/GithabProjectsStyles/ProjectTitle.tsx';
import { ProjectCard } from '@/styles/GithabProjectsStyles/ProjectCard.tsx';
import { ProjectList } from '@/styles/GithabProjectsStyles/ProjectList.tsx';
import { Container } from '@/styles/GithabProjectsStyles/Container.tsx';
import { ProjectLink } from '@/styles/GithabProjectsStyles/ProjectLink.tsx';

interface GitHubProjectsProps {
    username: string;
}

export const GitHubProjects: React.FC<GitHubProjectsProps> = ({ username }) => {
    const { projects: gitProjects, status, error, fetchProjects } = useGitHubProjectStore();

    useEffect(() => {
        fetchProjects(username);
    }, [fetchProjects, username]);

    const handleRefresh = () => {
        fetchProjects(username);
    };

    return (
        <Container>
            {status === 'loading' && <LoadingIndicator />}

            {status === 'failed' && <ErrorMessage message={error || 'Произошла ошибка'} />}

            {status === 'succeeded' && (
                <>
                    <RefreshButton onClick={handleRefresh}>Обновить</RefreshButton>
                    {gitProjects.length === 0 ? (
                        <ErrorMessage message="Проекты не найдены" />
                    ) : (
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
                                        {}
                                        Технологии: {project.language ?? 'Нет данных'}
                                    </ProjectLanguage>
                                </ProjectCard>
                            ))}
                        </ProjectList>
                    )}
                </>
            )}
        </Container>
    );
};




