import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Projects } from '../Types/Projects';
import { projects as initialProjects } from '../Data/projects';

interface ProjectState {
    projects: Projects[];
    addProject: (project: Projects) => void;
    removeProject: (id: string) => void;
}

export const useProjectStore = create(
    persist<ProjectState>(
        (set) => ({
            projects: initialProjects,
            addProject: (project) =>
                set((state) => ({ projects: [...state.projects, project] })),
            removeProject: (id) =>
                set((state) => ({
                    projects: state.projects.filter((project) => project.id !== id),
                })),
        }),
        {
            name: 'project-store',
        }
    )
);