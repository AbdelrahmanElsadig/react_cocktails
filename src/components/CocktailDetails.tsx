import { Spinner } from '@chakra-ui/spinner';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { AppContext } from './AppProvider';

const CocktailDetails = () => {
    const { id } = useParams();
    const data = useContext(AppContext);
    const cocktail: drink = data.drinks.filter(drink => drink.idDrink == id)[0];
    if (data.loading) {
        return (
            <div className="container mx-auto flex justify-center items-center">
                <Spinner className='w-20 h-20' />
            </div>
        )
    }
    return (
        <>
            <Link className='flex mx-auto mb-4' to={'/'}>
                <span className="text-white mx-auto tracking-widest p-2 rounded-md bg-lime-700 transition ease-in-out
         hover:bg-lime-200 hover:text-lime-700">Back Home</span>
            </Link>
            <div className='container lg:flex-row w-[90%] lg:w-[80%] max-w-[lg] mx-auto mb-16 flex flex-col gap-4'>
                <img src={cocktail.strDrinkThumb} alt="" className="w-[80%] lg:max-w-[300px] lg:h-auto mx-auto h-auto rounded-lg" />
                <div className="flex flex-col gap-4 items-start">
                    <div className="flex justify-start items-center gap-4">

                        <p className="font-bold"><span className="py-1 px-2 rounded-sm font-bold text-lime-700 bg-lime-200">Drink:</span>&nbsp;&nbsp;{cocktail.strDrink}</p>
                    </div>
                    <div className="flex justify-start items-center gap-4">
                        <p className="font-bold"><span className="py-1 px-2 rounded-sm font-bold text-lime-700 bg-lime-200">Category:</span>&nbsp;&nbsp;{cocktail.strCategory}</p>
                    </div>
                    <div className="flex justify-start items-center gap-4">

                        <p className="font-bold"><span className="py-1 px-2 rounded-sm font-bold text-lime-700 bg-lime-200">Alcoholic:</span>&nbsp;&nbsp;{cocktail.strAlcoholic}</p>
                    </div>
                    <div className="flex justify-start items-center gap-4">

                        <p className="font-bold"><span className="py-1 px-2 rounded-sm font-bold text-lime-700 bg-lime-200">Instructions:</span>&nbsp;&nbsp;{cocktail.strInstructions}</p>
                    </div>
                    <div className="flex justify-start items-center gap-4">

                        <p className="font-bold"><span className="py-1 px-2 rounded-sm font-bold text-lime-700 bg-lime-200">Glass:</span>&nbsp;&nbsp;{cocktail.strGlass}</p>
                    </div>
                    <div className="flex justify-start items-center gap-4">

                        <p className="font-bold"><span className="py-1 px-2 rounded-sm font-bold text-lime-700 bg-lime-200">Ingredients:</span>&nbsp;&nbsp;{cocktail.strIngredient1},
                            {cocktail.strIngredient2}, {cocktail.strIngredient3}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CocktailDetails
