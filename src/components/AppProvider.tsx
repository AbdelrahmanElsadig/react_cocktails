import React, { createContext, useContext, useState } from 'react'
import useFetch from '../hooks/useFetch';
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = createContext<{
    drinks: drink[],
    loading: boolean,
    query: string,
    setQuery: (url: string) => any
}>({ drinks: [], loading: true, query: '', setQuery: () => { }, })
const AppProvider = ({ children }: any) => {
    const [query, setQuery] = useState<string>('');
    const [data, setData] = useState<{ drinks: drink[] }>({ drinks: [] });
    const [loading, setLoading] = useState<boolean>(true);
    useFetch(URL + query, setData, setLoading);
    return (
        <AppContext.Provider value={{ ...data, loading, query, setQuery }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext }
