import React from 'react';
import { StyledGifCardImage, StyledGifCardContainer } from './GifCard.styles';

export const GifCard = ({ gif }) => {

    return (
            <StyledGifCardContainer key={ gif?.id + gif?.title }>
                <StyledGifCardImage src={ gif?.images?.fixed_width?.url } alt={gif?.title}/>
            </StyledGifCardContainer>
    );
};



