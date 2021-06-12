import Giphygif from '../../components/icons/Giphygif';
import GiphyLogo from '../../components/icons/GiphyLogo';
import { StyledNavbarContainer, StyledLogoContainer } from './Navbar.styles';

export const Navbar = () => {

    return (
        <StyledNavbarContainer>
            <StyledLogoContainer>
                <Giphygif />
                <GiphyLogo />
            </StyledLogoContainer>
        </StyledNavbarContainer>
    );
};