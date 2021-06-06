import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';

import { GifCardList } from '../../components/gifCardList/GifCardList';
import { SearchField } from '../../components/searchField/SearchField';
import { StyledTitle, StyledLoadMoreButton } from './HomePage.styles';

export const HomePage = () => {

    const { REACT_APP_API_KEY, REACT_APP_BASE_URL } = process.env;

    const [gifList, setGifList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [query, setQuery] = useState("");
    const [offset, setOffset] = useState(0);


    const loader = useRef(null);


    const fetchGifList = useCallback(async () => {

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
    }, [offset]);

    const handleSearchClick = useCallback(async () => {

        const url = `${REACT_APP_BASE_URL}search?api_key=${REACT_APP_API_KEY}&q=${query}&limit=25&offset=${offset * 25}&rating=g&lang=en`

        try {
            await setLoading(true);
            await setError(false);
            const response = await axios.get(url);
            await setGifList(response?.data?.data)
            setLoading(false);
        } catch (err) {
            setError(err);
        }
    }, [query, offset]);

    
    const handleLoadMoreClick = () => {
        setOffset(offset + 1);
    }

    useEffect(() => {
        fetchGifList();
    }, [offset]);

    return (
        <div>
            <SearchField query={query} setQuery={setQuery} handleSearchClick={handleSearchClick} />
            <StyledTitle>Trending GIFs</StyledTitle>
            <GifCardList gifList={gifList} setGifList={setGifList} />
            <StyledLoadMoreButton onClick = {handleLoadMoreClick}>Load more..</StyledLoadMoreButton>

            {loading && <p>Loading...</p>}
            {error && <p>Error!</p>}

        </div>
    );
};
