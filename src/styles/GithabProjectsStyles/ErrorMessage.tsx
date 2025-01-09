import React from 'react';
import styled from 'styled-components';

const ErrorWrapper = styled.div`
    text-align: center;
    font-size: 20px;
    font-family: Courier New, monospace;
    color: red;
`;

interface ErrorMessageProps {
    message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return <ErrorWrapper>{message}</ErrorWrapper>;
};
