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
        <ul>
          {recipes.drinks.map(recipe => (
            <DrinkCard drink={recipe} key={recipe.idDrink}/>
          ))}
        </ul>
      )}
      {!hasRecipes && (
        <p className={'my-10 text-center text-2xl'}>No hay recetas aún, usa el formulario para buscar recetas.</p>
      )}
    </>
  )
}
export default IndexPage
