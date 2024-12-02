import { v4 as uuidv4 } from 'uuid';
import { Projects } from '../Types/Projects';
import project_1 from '../assets/project_1.jpg';
import project_2 from '../assets/project_2.jpg';
import project_3 from '../assets/project_3.jpg';

const initialProjectsData = [
    {
        title: 'web-1',
        description: 'Project involving Python and socket programming.',
        technologies: ['Python', 'Socket', 'PIL'],
        link: 'https://github.com/10izHokage/web-1.git',
        imageUrl: project_1,
    },
    {
        title: 'web-5',
        description: 'A project built with Django and JavaScript.',
        technologies: ['Html', 'Django', 'JavaScript'],
        link: 'https://github.com/10izHokage/web5.git',
        imageUrl: project_2,
    },
    {
        title: 'ComplexNumbers',
        description: 'A C++ project for handling complex numbers.',
        technologies: ['C++'],
        link: 'https://github.com/10izHokage/ComplexNumbers.git',
        imageUrl: project_3,
    },
];

export const projects: Projects[] = initialProjectsData.map((p) => ({
    ...p,
    id: uuidv4(),
}));
