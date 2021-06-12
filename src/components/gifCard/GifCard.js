import { StyledGifCardContainer, StyledGifCardFigure, StyledGifCardImage, StyledGifCardFigCaption } from './GifCard.styles';

export const GifCard = ({ gif }) => {

    return (
        <StyledGifCardContainer key={gif?.id + gif?.title}>
            <StyledGifCardFigure>
                <StyledGifCardImage src={gif?.images?.fixed_width?.url} alt={gif?.title} />
                <StyledGifCardFigCaption style={{ color: 'white' }}>{gif?.title}</StyledGifCardFigCaption>
            </StyledGifCardFigure>
        </StyledGifCardContainer>
    );
};



