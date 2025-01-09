import styled from "styled-components";

export const ProjectDescription = styled.p`
    margin-bottom: 10px;
    overflow: hidden; /* Обрезаем длинные описания */
    text-overflow: ellipsis; /* Многоточие в конце */
    display: -webkit-box; /* Для обрезки */
    -webkit-line-clamp: 3; /* Количество строк */
    -webkit-box-orient: vertical; /* Для обрезки */
    font-size: 1rem;
    text-align: match-parent;
    margin-top: 5px;
    font-family: Courier New, monospace;
    color: #151515;
`;
