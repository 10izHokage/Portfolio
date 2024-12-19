import React, { useEffect } from 'react';
import { useProjectStore } from '@/store/useProjectStore';
import {RefreshButton} from '@/styles/GithabProjectsStyles/RefreshButton.tsx';
import {Error_Loading} from '@/styles/GithabProjectsStyles/Error_Loading.tsx';
import {ProjectLanguage} from '@/styles/GithabProjectsStyles/ProjectLanguage.tsx';
import {ProjectDescription} from '@/styles/GithabProjectsStyles/ProjectDescription.tsx';
import {ProjectTitle} from '@/styles/GithabProjectsStyles/ProjectTitle.tsx';
import {ProjectCard} from '@/styles/GithabProjectsStyles/ProjectCard.tsx';
import {ProjectList} from '@/styles/GithabProjectsStyles/ProjectList.tsx';
import {Container} from '@/styles/GithabProjectsStyles/Container.tsx';
import {ProjectLink} from '@/styles/GithabProjectsStyles/ProjectLink.tsx';

export const GithabProjects: React.FC = () => {
    const { remoteProjects, status, error, fetchRemoteProjects } = useProjectStore();
    const username = '10izHokage';

    useEffect(() => {
        fetchRemoteProjects(username);
    }, [fetchRemoteProjects, username]);

    const handleRefresh = () => {
        fetchRemoteProjects(username);
    };

    return (
        <Container>
            {status === 'loading' && <Error_Loading>Loading...</Error_Loading>}
            {status === 'failed' && <Error_Loading>Error: {error}</Error_Loading>}
            {status === 'succeeded' && (
                <>
                    <RefreshButton onClick={handleRefresh}>Обновить</RefreshButton>
                    <ProjectList>
                        {remoteProjects.map((project) => (
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
                                    Технологии: {project.language || 'Нет данных'}
                                </ProjectLanguage>
                            </ProjectCard>
                        ))}
                    </ProjectList>
                </>
            )}
        </Container>
    );
};
