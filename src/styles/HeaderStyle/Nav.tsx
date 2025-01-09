import styled from "styled-components";
import { media } from "@ styles/media";

export const Nav = styled.nav`
    display: flex;
    gap: 7rem;
    width: 80%; 
    margin: 0 auto;
    
    @media ${media.mobile} {
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }
`;