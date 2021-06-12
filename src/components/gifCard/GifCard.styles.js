import styled from 'styled-components';

export const StyledGifCardContainer = styled.div`
    cursor: pointer;
    max-width: 400px;
    height: auto;
    border-radius: 5px;
    margin-bottom: 10px;
    break-inside: avoid-column;
    overflow: hidden;
   
`;

export const StyledGifCardFigure = styled.figure`
  border: 1px #cccccc solid;
  padding: 4px;
  margin: auto;
`;

export const StyledGifCardImage = styled.img`
    border-radius: 5px;
    width: 100%;
`;

export const StyledGifCardFigCaption = styled.figcaption`
  background-color: black;
  color: white;
  font-style: italic;
  padding: 2px;
  text-align: center;
`;




