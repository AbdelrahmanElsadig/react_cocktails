import React from 'react'
import CocktailList from '../components/CocktailList'
import { Search } from '../components/Search'

const Home = () => {
    return (
        <>
            <Search />
            <CocktailList />
        </>
    )
}

export default Home
