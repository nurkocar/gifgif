import React from 'react';
import { StyledGifCardImage, StyledIframeContainer } from './GifCard.styles';

export const GifCard = ({ gif }) => {
    console.log({ gif });
    return (
            <StyledIframeContainer key={gif?.id}>
                <StyledGifCardImage src={gif?.images?.fixed_width?.url} />
            </StyledIframeContainer>
    );
};



