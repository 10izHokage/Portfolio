import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";


const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
    border-radius: 5px 5px 0 0;
  background-color: #322f2f;
  
  color: #afafaf;
`;

const Nav = styled.nav`
    display: flex;
    gap: 8rem;
    width: 80%; 
    margin: 0 auto;
    
`;

const StyledLink = styled(Link)`
  color: #afafaf;
  font-family: DejaVu Sans Mono, monospace;
  font-weight: bold;
  transition: color 0.7s;
  text-decoration: none;
  font-size: 1.5rem;

  &:hover {
    color: #373333;
  }
`;

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Nav>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/about">About</StyledLink>
                <StyledLink to="/skills">Skills</StyledLink>
                <StyledLink to="/projects">Projects</StyledLink>
                <StyledLink to="/contact">Contact</StyledLink>
                <StyledLink to="/github-projects">GIthabProjects</StyledLink>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;