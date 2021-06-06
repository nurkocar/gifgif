import React from 'react';
import { GifCard } from '../gifCard/GifCard';
import {StyledGifListContainer} from './GifCardList.styles';

export const GifCardList = ({ gifList, setGifList }) => {
    return (
        <StyledGifListContainer>
            {gifList?.map((item) => (
                <GifCard gif = {item} key = { item?.id } />
            ))}
        </StyledGifListContainer>
    );
};