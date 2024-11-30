import styled from "styled-components";

const ProjectLink = styled.a`
    text-decoration: none; 
    color: #f8023a; 
    font-weight: bold; 
    padding: 5px 10px; 
    border-radius: 20px; 
    background-color: #f0f0f0; 
    transition: background-color 0.3s; 

    &:hover {
        background-color: #f198b7; 
    }
`;
export default ProjectLink;