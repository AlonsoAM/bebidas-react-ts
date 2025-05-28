import type {StateCreator} from 'zustand';
import {getCategories} from "../services/recipeService.ts";

type Category = {}

export interface RecipeSlice {
  categories: Category[]
  fetchCategories: () => Promise<void>
}

export const createRecipesSlice: StateCreator<RecipeSlice> = () => ({
  categories: [],
  fetchCategories: async() => {
    await getCategories()
  },
})