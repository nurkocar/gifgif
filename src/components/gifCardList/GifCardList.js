import { GifCard } from '../gifCard/GifCard';
import { StyledGifListContainer } from './GifCardList.styles';

export const GifCardList = ({ gifList }) => {
    return (
        <StyledGifListContainer>
            {gifList?.map((item) => (
                    <GifCard gif={item} key={item?.id} />
            ))}
        </StyledGifListContainer>
    );
};