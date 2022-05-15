import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from '../pages/Home'
import { AppProvider } from './AppProvider'
import CocktailDetails from './CocktailDetails'
import CocktailList from './CocktailList'
import Navbar from './Navbar'

const Project = () => {
    return (
        <>
            <AppProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/cocktail/:id' element={(
                            <CocktailDetails />)} />
                        <Route path='/about' element={(
                            <div className='container w-[80%] mx-auto space-y-8'>
                                <h1 className="text-5xl font-bold text-center">About Us</h1>
                                <p className="text-center font-bold text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex quasi, dicta facilis eius maxime rerum doloribus voluptatum, atque eos doloremque accusantium vitae illum neque? Laborum esse ipsam inventore beatae nam recusandae dolorem sed eos enim eaque numquam maxime expedita officia eligendi impedit unde earum illo totam vero, suscipit id!</p>
                            </div>
                        )} />
                        <Route path='*' element={(
                            <>
                                <h1 className="text-5xl font-bold text-center">
                                    Page Does Not Exist
                                </h1>
                            </>
                        )} />
                    </Routes>
                </BrowserRouter>
            </AppProvider>
        </>
    )
}

export { Project }
