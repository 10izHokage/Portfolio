import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Project } from '@/Types/Project';
import { projects as initialProjects } from '@/Data/projects';

interface LocalProjectState {
    projects: Project[];
    addProject: (project: Project) => void;
    removeProject: (id: string) => void;
}

export const useLocalProjectStore = create(
    persist<LocalProjectState>(
        (set) => ({
            projects: initialProjects,
            addProject: (project: Project) =>
                set((state) => ({ projects: [...state.projects, project] })),
            removeProject: (id: string) =>
                set((state) => ({
                    projects: state.projects.filter((project) => project.id !== id),
                })),
        }),
        {
            name: 'local-project-store',
        }
    )
);
