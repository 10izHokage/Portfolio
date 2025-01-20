import React from "react";
import { HeaderContainer } from "@ styles/HeaderStyle/HeaderContainer";
import { Nav } from "@ styles/HeaderStyle/Nav";
import { StyledLink } from "@ styles/HeaderStyle/StyledLink";
import { ThemeToggleButton } from "@ styles/HeaderStyle/ThemeToggleButton";
import { useTheme } from "@/context/ThemeContext";

export const Header: React.FC = () => {
    const { toggleTheme, theme } = useTheme();

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
            <ThemeToggleButton onClick={toggleTheme}>
                {theme === "light" ? "Switch to Dark" : "Switch to Light"}
            </ThemeToggleButton>
        </HeaderContainer>
    );
};


