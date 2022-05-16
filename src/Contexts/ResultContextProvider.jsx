import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseURL = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseURL}${type}`, {
            method: 'GET',
            headers: {
                'x-user-agent': 'desktop',
                'x-proxy-location': 'EU',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
            },
        });

        const data = await response.json();

        if (type.includes('/image')) {
            setResults(data.image_results);
        } else if (type.includes('/news')) {
            setResults(data.entries);
        } else {
            setResults(data.results);
        }

        console.log(data);

        setIsLoading(false);
    };

    return (
        <ResultContext.Provider
            value={{
                results,
                isLoading,
                getResults,
                searchTerm,
                setSearchTerm,
            }}
        >
            {children}
        </ResultContext.Provider>
    );
};

export const useResultContext = () => useContext(ResultContext);
