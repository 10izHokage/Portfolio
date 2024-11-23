import {Projects} from "../Types/Projects";
import project_1 from '../assets/project_1.jpg';
import project_2 from '../assets/project_2.jpg';
import project_3 from '../assets/project_3.jpg';

export const projects: Projects[] = [
    {   id: 1,
        title: 'web-1',
        description: ' Server.py и Client.py - два оконных приложения, запускающихся на разных компьютерах.' +
            ' При запуске первого приложения появляется картинка, а при запуске второго три кнопки, при нажатии которых меняется картинка в первом приложении.',
        technologies: ['Python', 'Socket', 'PIL '],
        link: 'https://github.com/10izHokage/web-1.git',
        imageUrl: project_1 },
    {   id: 2,
        title: 'web-5',
        description: 'Приложение Quiz. Данное приложение - это  викторина, которая содержит 7 вопросов на знание аниме Наруто. ',
        technologies: ['Html', 'Django','JavaScript'],
        link: 'https://github.com/10izHokage/web5.git',
        imageUrl: project_2, },
    {   id: 3,
        title: 'ComplexNumbers',
        description: 'Реализация класса коплексных чисел, арифметические операции с ними.',
        technologies: ['С++'],
        link: 'https://github.com/10izHokage/ComplexNumbers.git',
        imageUrl: project_3, },
];