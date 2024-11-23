import styled from "styled-components";

const ProjectCard = styled.div`
    border: 1px solid #ccc;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 25px;
    box-shadow: 2px 2px 5px rgb(248, 39, 87);
    transition: transform 0.5s, box-shadow 0.5s;
    cursor: pointer;
    background-color: #fbaec2;

    &:hover {
        transform: scale(1.02);
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    }
`;
export default ProjectCard;