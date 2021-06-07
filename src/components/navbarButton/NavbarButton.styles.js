import styled from 'styled-components';

export const StyledButtonContainer = styled.div`
    margin-right: 0.6rem ;
`;

export const StyledButton = styled.button`
    padding: 7px 15px 3px;
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
    color: white;
    font-size: 0.9375rem;
    font-weight: 600;

    :hover{
        background-image: linear-gradient(to bottom right, #B75CFF,#8F00FF);
    }
`;

export const StyledBottomBorder = styled.div`
    border: none;
    height: 3px;
    background-image: linear-gradient(to bottom right, #B75CFF,#8F00FF);
`;





