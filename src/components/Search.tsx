import React, { useContext } from 'react'
import { AppContext } from './AppProvider'

const Search = () => {
    const { query, setQuery } = useContext(AppContext);
    return (
        <div className='container mb-16 w-fit mx-auto items-center p-4 shadow-lg flex flex-col gap-4'>
            <h1 className="text-lime-700 font-bold text-2xl">Search Your Favorite Cocktail</h1>
            <input value={query} type="text" onChange={(e) => setQuery(e.target.value)}
                className="rounded-md w-full bg-neutral-100
             p-2 text-lg placeholder:text-lg focus:outline-none" />
        </div>
    )
}

export { Search }
