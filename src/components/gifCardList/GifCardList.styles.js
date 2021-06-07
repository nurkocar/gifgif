import styled from "styled-components";

const small = 400;
const medium = 768;
const large = 1023;


export const StyledGifListContainer = styled.div`

    column-count: 4;

    @media (max-width: ${ large }px) { 
        column-count: 3;
    }
    @media (max-width: ${ medium }px) { 
        column-count: 2;
    }
    @media (max-width: ${ small }px) { 
        column-count: 1;
    }
`;
