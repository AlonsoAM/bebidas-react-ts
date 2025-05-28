import type {Recipes} from "../types";
import {useAppStore} from "../stores/useAppStore.ts";

type DrinkCardProps = {
  drink: Recipes['drinks'][0]
}

const DrinkCard = ({drink}: DrinkCardProps) => {

  const selectRecipe = useAppStore(state => state.selectRecipe)

  return (
    <div className={'bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col'}>
      <div className={'relative'}>
        <img 
          src={drink.strDrinkThumb} 
          alt={drink.strDrink} 
          className={'w-full h-60 object-cover'}
        />
        <div className={'absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300'}></div>
      </div>
      <div className={'p-5 flex-grow flex flex-col justify-between gap-4'}>
        <h2 className={'text-2xl truncate font-black text-gray-800'}>{drink.strDrink}</h2>
        <button type={'button'}
                className={'bg-orange-500 w-full text-white uppercase font-extrabold text-lg rounded-md py-3 px-4 cursor-pointer hover:bg-orange-600 transition-all duration-300 ease-in-out transform hover:scale-105 mt-auto'}
                onClick={() => selectRecipe(drink.idDrink)}
        >Ver Receta</button>
      </div>
    </div>
  )
}
export default DrinkCard
