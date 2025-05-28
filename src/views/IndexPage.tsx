import {useAppStore} from "../stores/useAppStore.ts";
import {useMemo} from "react";
import DrinkCard from "../components/DrinkCard.tsx";

const IndexPage = () => {

  const recipes = useAppStore(state => state.recipes)

  const hasRecipes = useMemo(()=> recipes.drinks.length > 0 , [recipes])

  console.log(hasRecipes)


  return (
    <>
      <h1 className={'text-6xl font-extrabold'}>Recetas</h1>
      {hasRecipes && (
        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-10'}>
          {recipes.drinks.map(recipe => (
            <DrinkCard drink={recipe} key={recipe.idDrink}/>
          ))}
        </div>
      )}
      {!hasRecipes && (
        <p className={'my-10 text-center text-2xl'}>No hay recetas aún, usa el formulario para buscar recetas.</p>
      )}
    </>
  )
}
export default IndexPage
