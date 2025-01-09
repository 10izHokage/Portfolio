import React from "react";
import {HeaderContainer} from '@ styles/HeaderStyle/HeaderContainer.tsx';
import {Nav} from '@ styles/HeaderStyle/Nav.tsx';
import {StyledLink} from '@ styles/HeaderStyle/StyledLink.tsx';

export const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Nav>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/about">About</StyledLink>
                <StyledLink to="/skills">Skills</StyledLink>
                <StyledLink to="/projects">Projects</StyledLink>
                <StyledLink to="/contact">Contact</StyledLink>
                <StyledLink to="/github-projects">GithabProjects</StyledLink>
            </Nav>
        </HeaderContainer>
    );
};
