import styled from "styled-components";
import { media } from "@ styles/media";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #322f2f;
    color: #afafaf;

    @media ${media.mobile} {
        flex-direction: column;
        padding: 10px;
    }
`;
