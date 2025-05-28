import type {StateCreator} from 'zustand';
import {getCategories, getRecipeById, getRecipes} from "../services/recipeService.ts";
import type {Categories, Recipe, Recipes, SearchFilter} from "../types";


export interface RecipeSlice {
  categories: Categories
  recipes: Recipes
  selectedRecipe: Recipe | null
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
  selectedRecipe: {} as Recipe,
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
    set({selectedRecipe})
  }
})