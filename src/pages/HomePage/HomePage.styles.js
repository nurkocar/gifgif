import styled from 'styled-components';

export const StyledHomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledTitle = styled.p`
    color: white;
    text-align: left;
    font-weight: 700;
    font-size: 1.0625rem ;
`;

export const StyledLoadMoreButton = styled.button`
    font-size: 1.075rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: white;
    margin: 2rem 8rem;
    padding: 0.6rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    outline: none;
    border: none;
    background-image: linear-gradient(to right, violet,blue,green,yellow,red);

    :hover{
        background-image: linear-gradient(to right, red,yellow,green,blue,violet);
    }
`;

export const StyledLoadingMessage = styled.p`
    color: white;
    font-weight: 600;
    margin-bottom: 4rem;
`;

