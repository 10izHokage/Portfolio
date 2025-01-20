import styled from "styled-components";

export const ThemeToggleButton = styled.button`
    background: none;
    background-color: #9e9e9e;
    border: 2px solid ${(props) => props.theme.color};
    color: ${(props) => props.theme.color};
    padding: 5px 10px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: ${(props) => props.theme.color};
        color: ${(props) => props.theme.background};
    }
`;
