import type {StateCreator} from 'zustand';
import {getCategories, getRecipeById, getRecipes} from "../services/recipeService.ts";
import type {Categories, Recipes, SearchFilter} from "../types";


export interface RecipeSlice {
  categories: Categories
  recipes: Recipes
  fetchCategories: () => Promise<void>
  searchRecipes: (searchFilter: SearchFilter) => Promise<void>
  selectRecipe: (id: Recipes['drinks'][0]['idDrink']) => Promise<void>
}

export const createRecipesSlice: StateCreator<RecipeSlice> = (set) => ({
  categories: {
    drinks: []
  },
  recipes: {
    drinks: []
  },
  fetchCategories: async () => {
    const categories = await getCategories()
    set({categories})
  },
  searchRecipes: async (searchFilters) => {
    const recipes = await getRecipes(searchFilters)
    set({recipes})
  },
  selectRecipe: async (id: Recipes['drinks'][0]['idDrink']) => {
    const selectedRecipe = await getRecipeById(id)
    console.log(selectedRecipe)

  }
})