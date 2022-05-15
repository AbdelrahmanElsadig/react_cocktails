import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from './AppProvider';
import { Spinner } from '@chakra-ui/spinner';

const CocktailList = () => {
    const data = useContext(AppContext);
    if (data.loading) {
        return (
            <div className="container mx-auto flex justify-center items-center">
                <Spinner className='w-20 h-20' />
            </div>

        )
    }
    if (!data.drinks) return (
        <h1 className="text-5xl text-center font-bold">
            No cocktails matched your search criteria
        </h1>
    )
    return (
        <div className='container w-[90%] mb-16 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
         justify-around gap-8'>
            {data.drinks.map(drink => {
                return (
                    <CocktailListItem key={drink.idDrink} idDrink={drink.idDrink} strDrink={drink.strDrink}
                        strDrinkThumb={drink.strDrinkThumb}
                        strAlcoholic={drink.strAlcoholic} strGlass={drink.strGlass} />
                )
            })}

        </div>
    )
}

function CocktailListItem({ idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass }: ListItem) {
    return (
        <div className="flex rounded-lg shadow-lg flex-col gap-0 justify-start 
        transition-all duration-300 ease-in-out hover:-translate-y-4 hover:shadow-xl">
            <img src={strDrinkThumb} className="w-full h-auto rounded-t-lg" />
            <div className="flex px-8 py-5 flex-col gap-4 justify-start">
                <h1 className="text-3xl tracking-widest capitalize font-bold">{strDrink}</h1>
                <span className="text-xl tracking-widest capitalize font-bold">{strGlass}</span>
                <span className="text-sm text-neutral-600 font-bold capitalize">{strAlcoholic}</span>
                <Link to={`/cocktail/${idDrink}`}><GreenButton text='Details' /></Link>
            </div>
        </div>
    )
}

function GreenButton({ text }: { text: string }) {
    return (
        <span className="text-white tracking-widest p-2 rounded-md bg-lime-700 transition ease-in-out
         hover:bg-lime-200 hover:text-lime-700">{text}</span>
    )
}

export default CocktailList
export { GreenButton }
