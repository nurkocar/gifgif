import React from 'react';
import Giphygif from '../../components/icons/Giphygif';
import GiphyLogo from '../../components/icons/GiphyLogo';
import { StyledNavbarContainer, StyledButtonContainer, StyledLogoContainer, StyledUploadCreateButtonsContainer, StyledUploadCreateButtons } from './Navbar.styles';
import { NavbarButton } from '../navbarButton/NavbarButton';

export const Navbar = () => {
    const buttonNames = ['Reactions', 'Entertainment', 'Sports', 'Stickers', 'Artists']

    return (
        <StyledNavbarContainer>
            <StyledLogoContainer>
                <Giphygif />
                <GiphyLogo />
            </StyledLogoContainer>
        </StyledNavbarContainer>
    );
};