import React from 'react';
import {StyledButton, StyledButtonContainer} from './NavbarButton.styles';

export const NavbarButton = ({name}) => {
    return (
        <StyledButtonContainer>
            <StyledButton>{name}</StyledButton>           
        </StyledButtonContainer>
    );
};