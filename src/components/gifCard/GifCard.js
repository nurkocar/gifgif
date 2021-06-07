import React from 'react';
import { StyledGifCardImage, StyledGifCardContainer } from './GifCard.styles';

export const GifCard = ({ gif }) => {
    console.log({ gif });
    return (
            <StyledGifCardContainer key={gif?.id}>
                <StyledGifCardImage src={gif?.images?.fixed_width?.url} />
            </StyledGifCardContainer>
    );
};



