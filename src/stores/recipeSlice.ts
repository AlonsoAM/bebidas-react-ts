import type {StateCreator} from 'zustand';
import {getCategories} from "../services/recipeService.ts";
import type {Categories, SearchFilter} from "../types";


export interface RecipeSlice {
  categories: Categories
  fetchCategories: () => Promise<void>
  searchRecipes: (searchFilter: SearchFilter) => Promise<void>
}

export const createRecipesSlice: StateCreator<RecipeSlice> = (set) => ({
  categories: {
    drinks: []
  },
  fetchCategories: async () => {
    const categories = await getCategories()
    set({categories})
  },
  searchRecipes: async (searchFilters) => {
    console.log({searchFilters})
  }
})