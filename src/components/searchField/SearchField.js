import { StyledSearchFieldContainer, StyledInputContainer, StyledInputField, StyledButton } from './SearchField.styles';
import SearchIcon from '../icons/SearchIcon';


export const SearchField = ({handleSearchClick, query, setQuery}) => {

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handleSearchClick(query);
        }
    };

    return (
        <StyledSearchFieldContainer>
            <StyledInputContainer>
                <StyledInputField 
                    type= 'text' 
                    value= {query} 
                    onChange= { (e) => setQuery(e.target.value) } 
                    onKeyDown= { handleKeyDown }
                    autoFocus= 'autofocus'   
                />
            </StyledInputContainer>
            <StyledButton onClick = {() => handleSearchClick(query)}>
                <SearchIcon />
            </StyledButton>
        </StyledSearchFieldContainer>
    );
};

