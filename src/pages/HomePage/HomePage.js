import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import { Navbar } from '../../components/navBar/Navbar';
import { GifCardList } from '../../components/gifCardList/GifCardList';
import { SearchField } from '../../components/searchField/SearchField';
import { StyledHomePageContainer, StyledTitle, StyledLoadMoreButton, StyledLoadingMessage } from './HomePage.styles';


export const HomePage = () => {

    const { REACT_APP_API_KEY, REACT_APP_BASE_URL } = process.env;

    const [gifList, setGifList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [query, setQuery] = useState('');
    const [offset, setOffset] = useState(0);


    const fetchGifList = async () => {

        const url = `${REACT_APP_BASE_URL}trending?api_key=${REACT_APP_API_KEY}&limit=25&offset=${offset * 25}&rating=g`

        try {
            await setLoading(true);
            await setError(false);
            const response = await axios.get(url);
            await setGifList((prev) => [
                ...new Set([...prev, ...response?.data?.data])
            ]);
            setLoading(false);
        } catch (err) {
            setError(err);
        }
    };

    const handleSearchClick = async () => {

        const url = `${REACT_APP_BASE_URL}search?api_key=${REACT_APP_API_KEY}&q=${query}&limit=25&offset=${offset * 25}&rating=g&lang=en`
        
        try {
            await setLoading(true);
            await setError(false);
            await setGifList([]);
            const response = await axios.get(url);
            // await setGifList(response?.data?.data);
            await setGifList((prev) => [
                ...new Set([...prev, ...response?.data?.data])
            ]);
            setLoading(false);
        } catch (err) {
            setError(err);
        }
    };


    useEffect(() => {
        console.log({ query })
        if (query === '') {
            console.log('Burdayiz');
            fetchGifList();
        }else{
            handleSearchClick();
        }
    }, [query, offset]);


    return (
        <StyledHomePageContainer>

            <Navbar />
            <SearchField query={query} setQuery={setQuery} handleSearchClick={handleSearchClick} />
            <StyledTitle>Trending GIFs</StyledTitle>
            <GifCardList gifList={gifList} setGifList={setGifList} />

            {loading && <StyledLoadingMessage>Loading...</StyledLoadingMessage>}

            <StyledLoadMoreButton onClick={() => (setOffset(offset + 1))}>Load more..</StyledLoadMoreButton>

            {error && <p>Error!</p>}

        </StyledHomePageContainer>
    );
};
