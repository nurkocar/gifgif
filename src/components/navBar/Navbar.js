import React from 'react';
import Giphygif from '../../components/icons/Giphygif';
import Giphy from '../../components/icons/Giphy';
import { StyledNavbarContainer, StyledButtonContainer, StyledLogoContainer } from './Navbar.styles';
import { NavbarButton } from '../navbarButton/NavbarButton';

export const Navbar = () => {
    const buttonNames = ['Reactions', 'Entertainment', 'Sports', 'Stickers', 'Artists']

    return (
        <StyledNavbarContainer>
            <StyledLogoContainer>
                <Giphygif />
                <Giphy />
            </StyledLogoContainer>
            <StyledButtonContainer>
                {buttonNames.map((name) => <NavbarButton name={name}/>)}
            </StyledButtonContainer>
        </StyledNavbarContainer>
    );
};