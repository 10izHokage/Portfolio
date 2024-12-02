import styled from 'styled-components';

export const Filter = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center; 
    width: 95%;
    height: 80px;
    margin-bottom: 20px; 
    padding: 20px;
    border: 1px solid #f40d0d;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #ff81a1;
   

    input[type="number"],
    input[type="text"],
    textarea {
        margin-right: 10px; 
        padding: 10px;
        border: 1px solid #f40d0d;
        border-radius: 5px;
        flex-grow: 1; 
        box-sizing: border-box;
        font-family: Courier New, monospace;
        color: #151515;
        font-size: 1rem;
        font-weight: bold;
    }

    button[type="submit"] {
        background-color: #f8023a;
        border: none;
        color: white;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 5px;
    }

    button[type="submit"]:hover {
        background-color: #eaafbb;
    }
`;