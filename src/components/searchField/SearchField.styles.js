import styled from 'styled-components';


export const StyledSearchFieldContainer = styled.div`
    margin-top: 0.5rem;
    /* width: 100%; */
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const StyledInputContainer = styled.div`
    margin: 0.75rem;
`;
export const StyledInputField = styled.input`
    border: none;
    outline: none;
`;

export const StyledButton = styled.button`
    padding: 0.625rem;
    background-color: white;
    border: none;
    cursor: pointer;
    background-image: linear-gradient(to left, pink,yellow,orange);

    :hover{
        background-image: linear-gradient(to left, orange,yellow,pink);
    }
`;