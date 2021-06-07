import React from 'react';
import {StyledButton, StyledButtonContainer, StyledBottomBorder} from './NavbarButton.styles';

export const NavbarButton = ({name}) => {
    return (
        <StyledButtonContainer>
            <StyledButton>{name}</StyledButton>
            <StyledBottomBorder></StyledBottomBorder>           
        </StyledButtonContainer>
    );
};