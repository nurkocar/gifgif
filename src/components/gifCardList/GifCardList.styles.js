import styled from "styled-components";

export const StyledGifListContainer = styled.div`

    
    column-count: 5;

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 450px) {
        column-count: 1;
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 450px) {
        column-count: 2;
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        column-count: 3;
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        column-count: 4;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        column-count: 5;
    }
`;
