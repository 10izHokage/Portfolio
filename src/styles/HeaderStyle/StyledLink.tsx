import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledLink = styled(Link)`
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